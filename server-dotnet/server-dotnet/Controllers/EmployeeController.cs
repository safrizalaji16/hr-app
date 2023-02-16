using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace server_dotnet.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private static List<Employee> employees = new List<Employee>
        {
            new Employee {
                Id = 1,
                Name = "employee1",
                Nik = "123456789",
                Address = "Jakarta",
                JobPositionId = 1
            },
            new Employee {
                Id = 2,
                Name = "employee2",
                Nik = "987654321",
                Address = "Semarang",
                JobPositionId = 2
            }
        };
        [HttpGet]
        public async Task<ActionResult<List<Employee>>> Get()
        {
            return Ok(employees);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Employee>> Get(int id)
        {
            var employee = employees.Find(j => j.Id == id);
            if (employee == null)
                return BadRequest("Employee not found");
            return Ok(employee);
        }
        [HttpPost]
        public async Task<ActionResult<List<Employee>>> AddEmployee(Employee employee)
        {
            employees.Add(employee);
            return Ok(employees);
        }
        [HttpPut]
        public async Task<ActionResult<List<Employee>>> UpdateEmployee(Employee request)
        {
            var employee = employees.Find(j => j.Id == request.Id);
            if (employee == null)
                return BadRequest("Employee not found");
            employee.Name = request.Name;
            employee.Nik = request.Nik;
            employee.Address = request.Address;
            employee.JobPositionId = request.JobPositionId;
            return Ok(employees);
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<Employee>> Delete(int id)
        {
            var employee = employees.Find(j => j.Id == id);
            if (employee == null)
                return BadRequest("Employee not found");
            employees.Remove(employee);
            return Ok(employees);
        }
    }
}
