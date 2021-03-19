using Domain.Models;

namespace Domain.Interfaces.Services
{
    public interface IPlayerResultService : IBaseService<ThePlayerResult>
    {
        void validaInserir(ThePlayerResult obj);

        ThePlayerResult getByPlayerId(long id);
    }
}
