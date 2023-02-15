namespace server_dotnet.Models
{
    public class JobPosition
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public int JobTitleId { get; set; }
    }
}
