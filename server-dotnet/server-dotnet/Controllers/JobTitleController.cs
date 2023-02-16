using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace server_dotnet.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class JobTitleController : ControllerBase
    {
        private static List<JobTitle> jobTitles = new List<JobTitle>
        {
            new JobTitle {
                Id = 1,
                Code = "Manag",
                Name = "Managerial"
            },
            new JobTitle {
                Id = 2,
                Code = "Eng",
                Name = "Engineer"
            }
        };
        [HttpGet]
        public async Task<ActionResult<List<JobTitle>>> Get()
        {
            return Ok(jobTitles);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<JobTitle>> Get(int id)
        {
            var jobTitle = jobTitles.Find(j => j.Id == id);
            if (jobTitle == null)
                return BadRequest("Job title not found");
            return Ok(jobTitle);
        }
        [HttpPost]
        public async Task<ActionResult<List<JobTitle>>> AddJobTitle(JobTitle jobTitle)
        {
            jobTitles.Add(jobTitle);
            return Ok(jobTitles);
        }
        [HttpPut]
        public async Task<ActionResult<List<JobTitle>>> UpdateJobTitle(JobTitle request)
        {
            var jobTitle = jobTitles.Find(j => j.Id == request.Id);
            if (jobTitle == null)
                return BadRequest("Job title not found");
            jobTitle.Code = request.Code;
            jobTitle.Name = request.Name;
            return Ok(jobTitles);
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<JobTitle>> Delete(int id)
        {
            var jobTitle = jobTitles.Find(j => j.Id == id);
            if (jobTitle == null)
                return BadRequest("Job title not found");
            jobTitles.Remove(jobTitle);
            return Ok(jobTitles);
        }
    }
}
