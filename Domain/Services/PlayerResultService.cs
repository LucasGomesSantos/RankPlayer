using Domain.Interfaces.Repositories;
using Domain.Interfaces.Services;
using Domain.Models;
using System;

namespace Domain.Services
{
    public class PlayerResultService : BaseService<ThePlayerResult>, IPlayerResultService
    {
        private IPlayerResultRepository playerRepository;
        public PlayerResultService(IPlayerResultRepository playerrepository) : base(playerrepository)
        {
            this.playerRepository = playerrepository;
        }

        public ThePlayerResult getByPlayerId(long id)
        {
            return playerRepository.getByPlayerId(id);
        }

        public void validaInserir(ThePlayerResult newPlayer)
        {
            var player = playerRepository.getByPlayerId(newPlayer.PlayerID); 

 
            if (player == null)
            {
                playerRepository.Add(newPlayer);
            }
            else
            {
                DateTime thisDay = DateTime.Now;
                newPlayer.Id = player.Id;
                newPlayer.Timestamp = thisDay;
                newPlayer.TotalWin = player.TotalWin + (newPlayer.TotalWin);

                playerRepository.Update(newPlayer);
            }
            
        }

    }
}
