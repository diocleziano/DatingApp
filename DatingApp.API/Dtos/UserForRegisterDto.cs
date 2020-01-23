using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(15, MinimumLength = 8, ErrorMessage = "Devi utilizzare una password tra 8 e 15 caratteri")]
        public string Password { get; set; }

    }
}