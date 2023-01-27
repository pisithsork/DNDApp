
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


namespace dndapp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DiceRollController : ControllerBase
    {
        private diceroller diceroller = new diceroller();
        public DiceRollController()
        {

        }

        [HttpGet("{numofdice}d{dicetype}")]
        public int[] getresults(int numofdice, int dicetype)
        {
            return diceroller.rolldice(numofdice, dicetype);
        }
    }
}
