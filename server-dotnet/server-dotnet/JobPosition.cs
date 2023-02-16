namespace server_dotnet
{
    public class JobPosition
    {
        public int Id { get; set; }
        public string Code { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public int JobTitleId { get; set; }
    }
}
