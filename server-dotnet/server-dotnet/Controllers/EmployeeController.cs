using Microsoft.AspNetCore.Mvc;
using server_dotnet.Models;
using Microsoft.EntityFrameworkCore;

namespace server_dotnet.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class EmployeeController : Controller
    {
        private readonly HrDotnetDbContext _context;
        public EmployeeController(HrDotnetDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Employee>>> GetAllEmployees()
        {
            return Ok(await _context.Employees.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<Employee>>> CreateEmployee(Employee employee)
        {
            _context.Employees.Add(employee);
            await _context.SaveChangesAsync();

            return Ok(await _context.Employees.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Employee>>> UpdateEmployee(Employee request, int id)
        {
            var employee = await _context.Employees.FindAsync(id);

            if (employee == null)
                return BadRequest("Job title not found");

            employee.Name = request.Name;
            employee.Nik = request.Nik;
            employee.Address = request.Address;
            employee.Jobpositionid = request.Jobpositionid;


            await _context.SaveChangesAsync();

            return Ok(employee);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Employee>> GetEmployee(int id)
        {
            var employee = await _context.Employees.FindAsync(id);
            if (employee == null)
                return BadRequest("Job title not found");
            return Ok(employee);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Employee>> DeleteEmployee(int id)
        {
            var employee = await _context.Employees.FindAsync(id);
            if (employee == null)
                return BadRequest("Job title not found");

            _context.Employees.Remove(employee);
            await _context.SaveChangesAsync();

            return Ok(await _context.Employees.ToListAsync());
        }
    }
}
