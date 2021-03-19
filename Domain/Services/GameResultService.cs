using Domain.Interfaces.Repositories;
using Domain.Interfaces.Services;
using Domain.Models;

namespace Domain.Services
{
    public class GameResultService : BaseService<TheGameResult>, IGameResultService
    {
        public GameResultService(IGameResultRepository gamerepository) : base(gamerepository)
        {
                
        }

    }
}
