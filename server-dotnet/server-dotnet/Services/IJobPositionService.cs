using server_dotnet.Models;

namespace server_dotnet.Services
{
    public interface IJobPositionService
    {
        Task<bool> CreateJobPosition(JobPosition jobPosition);
        Task<List<JobPosition>> GetJobPositionList();
        Task<JobPosition> UpdateJobPosition(JobPosition jobPosition);
        Task<bool> DeleteJobPosition(int key);
    }
}
