using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server_dotnet.Models;
using System.Runtime.CompilerServices;

namespace server_dotnet.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class JobPositionController : Controller
    {
        private readonly HrDotnetDbContext _context;
        public JobPositionController(HrDotnetDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<JobPosition>>> GetAllJobPositions()
        {
            return Ok(await _context.JobPositions.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<JobPosition>>> CreateJobPosition(JobPosition jobPosition)
        {
            _context.JobPositions.Add(jobPosition);
            await _context.SaveChangesAsync();

            return Ok(await _context.JobPositions.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<JobPosition>>> UpdateJobPosition(JobPosition request, int id)
        {
            var jobPosition = await _context.JobPositions.FindAsync(id);

            if (jobPosition == null)
                return BadRequest("Job title not found");

            jobPosition.Code = request.Code;
            jobPosition.Name = request.Name;
            jobPosition.Jobtitleid = request.Jobtitleid;

            await _context.SaveChangesAsync();

            return Ok(jobPosition);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<JobPosition>> GetJobPosition(int id)
        {
            var jobPosition = await _context.JobPositions.FindAsync(id);
            if (jobPosition == null)
                return BadRequest("Job title not found");
            return Ok(jobPosition);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<JobPosition>> DeleteJobPosition(int id)
        {
            var jobPosition = await _context.JobPositions.FindAsync(id);
            if (jobPosition == null)
                return BadRequest("Job title not found");

            _context.JobPositions.Remove(jobPosition);
            await _context.SaveChangesAsync();

            return Ok(await _context.JobPositions.ToListAsync());
        }
    }
}
