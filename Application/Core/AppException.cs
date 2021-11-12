namespace Application.Core
{
    public class AppException
    {
    public AppException(int statusCode, string message, string details = null)
    {
      StatusCode = statusCode;
      Message = message;
      this.details = details;
    }

    public int StatusCode { get; set; }
        public string Message { get; set; } 
        public string details { get; set; }
    }
}