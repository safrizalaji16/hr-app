using Microsoft.AspNetCore.Mvc;
using server_dotnet.Services;

namespace server_dotnet.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class JobTitleController : Controller
    {
        private readonly IJobTitleService _jobTitleService;
        public JobTitlesController(IJobTitleService jobTitleService)
        {
            _jobTitleService = jobTitleService;
        }
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var result = await _jobTitleService.GetJobTitleList();
            return Ok(result);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetJobTitle(int id)
        {
            var result = await _jobTitleService.GetJobTitle(id);
            return Ok(result);
        }
        [HttpPost]
        public async Task<IActionResult> AddJobTitle([FromBody]JobTitle jobTitle)
        {
            var result = await _jobTitleService.CreateJobTitle(jobTitle);
            return Ok(result);
        }
        [HttpPut]
        public async Task<IActionResult> UpdateJobTitle([FromBody]JobTitle jobTitle)
        {
            var result = await _jobTitleService.UpdateJobTitle(jobTitle);
            return Ok(result);
        }
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteJobTitle(int id)
        {
            var result = await _jobTitleService.DeleteJobTitle(id);
            return Ok(result);
        }
    }
}
