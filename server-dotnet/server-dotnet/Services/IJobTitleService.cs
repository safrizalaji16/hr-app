using server_dotnet.Models;

namespace server_dotnet.Services
{
    public interface IJobTitleService
    {
        Task<bool> CreateJobTitle(JobTitle jobTitle);
        Task<List<JobTitle>> GetJobTitleList();
        Task<JobTitle> UpdateJobTitle(JobTitle jobTitle);
        Task<bool> DeleteJobTitle(int key);
    }
}
