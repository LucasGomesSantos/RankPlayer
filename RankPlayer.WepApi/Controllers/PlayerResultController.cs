using Domain.Interfaces.Services;
using Domain.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace RankPlayer.WepApi.Controllers
{

    [ApiController]
    [Route("v1/PlayerResults")]

    public class PlayerResultController : ControllerBase
    {
        private IPlayerResultService playerService;
        public PlayerResultController(IPlayerResultService playerService)
        {
            this.playerService = playerService;
        }

        [HttpGet]

        public IEnumerable<ThePlayerResult> Get()
        {
            var results = playerService.GetAll().ToList().OrderByDescending(x => x.TotalWin).Take(100);
            return results;
        }

        [HttpPost]

        public IActionResult Post(
            [FromBody] ThePlayerResult model)
        {
            playerService.validaInserir(model);
            return StatusCode(201);
        }

    }
}