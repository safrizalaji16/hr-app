using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server_dotnet.Models;

namespace server_dotnet.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class JobTitleController : Controller
    {
        private readonly HrDotnetDbContext _context;
        public JobTitleController(HrDotnetDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<JobTitle>>> GetAllJobTitles()
        {
            return Ok(await _context.JobTitles.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<JobTitle>>> CreateJobTitle(JobTitle jobTitle)
        {
            _context.JobTitles.Add(jobTitle);
            await _context.SaveChangesAsync();

            return Ok(await _context.JobTitles.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<JobTitle>>> UpdateJobTitle(JobTitle request, int id)
        {
            var jobTitle = await _context.JobTitles.FindAsync(id);

            if (jobTitle == null)
                return BadRequest("Job title not found");

            jobTitle.Code = request.Code;
            jobTitle.Name = request.Name;

            await _context.SaveChangesAsync();

            return Ok(jobTitle);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<JobTitle>> GetJobTitle(int id)
        {
            var jobTitle = await _context.JobTitles.FindAsync(id);
            if (jobTitle == null)
                return BadRequest("Job title not found");
            return Ok(jobTitle);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<JobTitle>> DeleteJobTitle(int id)
        {
            var jobTitle = await _context.JobTitles.FindAsync(id);
            if (jobTitle == null)
                return BadRequest("Job title not found");

            _context.JobTitles.Remove(jobTitle);
            await _context.SaveChangesAsync();

            return Ok(await _context.JobTitles.ToListAsync());
        }
    }
}
