using Domain.Interfaces.Repositories;
using Domain.Models;
using MvcGameResult.Data;
using System.Linq;

namespace DataBase.Repositories

{
    public class PlayerResultRepository : BaseRepository<ThePlayerResult>, IPlayerResultRepository
    {
        protected DataContext Db = new DataContext();

        public ThePlayerResult getByPlayerId(long id)
        {

            ThePlayerResult player;
            return player = Db.playerResult.FirstOrDefault(x => x.PlayerID == id);

        }
    }
}
