using Domain.Models;

namespace Domain.Interfaces.Repositories
{
    public interface IPlayerResultRepository : IBaseRepository<ThePlayerResult>
    {
        ThePlayerResult getByPlayerId(long id);

    }
}
