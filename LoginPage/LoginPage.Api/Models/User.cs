using System.ComponentModel.DataAnnotations;

namespace LoginPage.Api.Models;

public class User
{
    public required string Username { get; set; }
    public required string Password { get; set; }
    [Display(Name = "Email")]
    [EmailAddress(ErrorMessage = "Invalid email address")]
    public required string Email { get; set; }
}
