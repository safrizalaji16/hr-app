using server_dotnet.Models;

namespace server_dotnet.Services
{
    public class JobTitleService : IJobTitleService
    {
        private readonly IDbService _dbService;
        public JobTitleService(IDbService dbService)
        {
            _dbService = dbService;
        }

        public async Task<bool> CreateJobTitle(JobTitle jobTitle)
        {
            var result =
                await _dbService.EditData(
                    "INSERT INTO public.jobTitle (id, code, name) VALUES (@Id, @Code, @Name)",
                    jobTitle);
            return true;
        }

        public async Task<List<JobTitle>> GetJobTitleList()
        {
            var jobTitleList = await _dbService.GetAll<JobTitle>("SELECT * FROM public.jobTitle", new { });
            return jobTitleList;
        }

        public async Task<JobTitle> GetJobTitle(int id)
        {
            var jobTitleList = await _dbService.GetAsync<JobTitle>("SELECT * FROM public.jobTitle where id=@id", new { id });
            return jobTitleList;
        }
        public async Task<JobTitle> UpdateJobTitle(JobTitle jobTitle)
        {
            var updateJobTitle = 
                await _dbService.EditData(
                    "Update public.jobTitle SET code=@Code, name=@Name WHERE id=@Id",
                jobTitle);
            return jobTitle;
        }
        public async Task<bool> DeleteJobTitle(int id)
        {
            var deleteJobTitle = await _dbService.EditData("DELETE FROM public.jobTitle WHERE id=@Id", new { id });
            return true;
        }
    }
}
