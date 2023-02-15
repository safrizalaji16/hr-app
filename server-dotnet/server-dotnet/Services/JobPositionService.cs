using server_dotnet.Models;

namespace server_dotnet.Services
{
    public class JobPositionService
    {
        private readonly IDbService _dbService;
        public JobPositionService(IDbService dbService)
        {
            _dbService = dbService;
        }

        public async Task<bool> CreateJobPosition(JobPosition jobPosition)
        {
            var result =
                await _dbService.EditData(
                    "INSERT INTO public.jobPosition (id, code, name, jobTitleId) VALUES (@Id, @Code, @Name, @JobTitleId)",
                    jobPosition);
            return true;
        }

        public async Task<List<JobPosition>> GetJobPositionList()
        {
            var jobPositionList = await _dbService.GetAll<JobPosition>("SELECT * FROM public.jobPosition", new { });
            return jobPositionList;
        }

        public async Task<JobPosition> GetJobPosition(int id)
        {
            var jobPositionList = await _dbService.GetAsync<JobPosition>("SELECT * FROM public.jobPosition where id=@id", new { id });
            return jobPositionList;
        }
        public async Task<JobPosition> UpdateJobPosition(JobPosition jobPosition)
        {
            var updateJobPosition =
                await _dbService.EditData(
                    "Update public.jobPosition SET code=@Code, name=@Name, jobTitleId=@JobTitleId WHERE id=@Id",
                jobPosition);
            return jobPosition;
        }
        public async Task<bool> DeleteJobPosition(int id)
        {
            var deleteJobPosition = await _dbService.EditData("DELETE FROM public.jobPosition WHERE id=@Id", new { id });
            return true;
        }
    }
}
