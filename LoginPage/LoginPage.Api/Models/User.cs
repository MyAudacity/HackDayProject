using System.ComponentModel.DataAnnotations;

namespace LoginPage.Api.Models;

public class User
{
    public int Id { get; set; }
    public required string Username { get; set; }
    public required string Password { get; set; }
    [Display(Name = "Email")]
    [EmailAddress(ErrorMessage = "Invalid email address")]
    public string? Email { get; set; }
}
