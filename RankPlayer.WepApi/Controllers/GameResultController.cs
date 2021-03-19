using System.Collections.Generic;
using Domain.Interfaces.Services;
using Domain.Models;
using Microsoft.AspNetCore.Mvc;


namespace GameResult.Controllers
{
    [ApiController]
    [Route("v1/GameResults")]

    public class GameResultController : ControllerBase
    {
        private IGameResultService gameService;
        private IPlayerResultService playerService;

        public GameResultController(IGameResultService gameService, IPlayerResultService playerService) 
        {
            this.gameService = gameService;
            this.playerService = playerService;
        }

        [HttpGet]

        public IEnumerable<TheGameResult>Get()
        {
            var results = gameService.GetAll();
            return results;
        }

        [HttpPost]

        public IActionResult Post(
            [FromBody] TheGameResult model)
        {
            var player = new ThePlayerResult();
            player.PlayerID = model.PlayerID;
            player.TotalWin = model.Win;

            gameService.Add(model);
            playerService.validaInserir(player);
            return StatusCode(201);
        }
    }
}