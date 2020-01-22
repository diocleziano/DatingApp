using System.Threading.Tasks;
using DatingApp.API.Models;

namespace DatingApp.API.Data
{
    public interface IAuthRepository
    {
        Task<User> Register(User user, string password);
        Task<User> Login(string username, string password);

        /// <summary>
        /// Controlla se un utente esiste già
        /// </summary>
        Task<bool> UserExists(string username);
    }
}