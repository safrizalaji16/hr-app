using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace server_dotnet.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class JobPositionController : ControllerBase
    {
        private static List<JobPosition> jobPositions = new List<JobPosition>
        {
            new JobPosition {
                Id = 1,
                Code = "CEO",
                Name = "Chief Executive Office",
                JobTitleId = 1
            },
            new JobPosition {
                Id = 2,
                Code = "SE",
                Name = "Software Engineer",
                JobTitleId = 2
            }
        };
        [HttpGet]
        public async Task<ActionResult<List<JobPosition>>> Get()
        {
            return Ok(jobPositions);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<JobPosition>> Get(int id)
        {
            var jobPosition = jobPositions.Find(j => j.Id == id);
            if (jobPosition == null)
                return BadRequest("Job position not found");
            return Ok(jobPosition);
        }
        [HttpPost]
        public async Task<ActionResult<List<JobPosition>>> AddJobPosition(JobPosition jobPosition)
        {
            jobPositions.Add(jobPosition);
            return Ok(jobPositions);
        }
        [HttpPut]
        public async Task<ActionResult<List<JobPosition>>> UpdateJobPosition(JobPosition request)
        {
            var jobPosition = jobPositions.Find(j => j.Id == request.Id);
            if (jobPosition == null)
                return BadRequest("Job position not found");
            jobPosition.Code = request.Code;
            jobPosition.Name = request.Name;
            jobPosition.JobTitleId = request.JobTitleId;
            return Ok(jobPositions);
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<JobPosition>> Delete(int id)
        {
            var jobPosition = jobPositions.Find(j => j.Id == id);
            if (jobPosition == null)
                return BadRequest("Job position not found");
            jobPositions.Remove(jobPosition);
            return Ok(jobPositions);
        }
    }
}
