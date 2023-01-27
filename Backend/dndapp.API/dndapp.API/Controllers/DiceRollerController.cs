
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

/*        [HttpGet("{numofdice}d4")]
        public int[] getd4(int numofdice)
        {
            return diceroller.rolld4(numofdice);
        }

        [HttpGet("{numofdice}d6")]
        public int[] getd6(int numofdice)
        {
            return diceroller.rolld6(numofdice);
        }

        [HttpGet("{numofdice}d8")]
        public int[] getd8(int numofdice)
        {
            return diceroller.rolld8(numofdice);
        }

        [HttpGet("{numofdice}d10")]
        public int[] getd10(int numofdice)
        {
            return diceroller.rolld10(numofdice);
        }

        [HttpGet("{numofdice}d12")]
        public int[] getd12(int numofdice)
        {
            return diceroller.rolld12(numofdice);
        }

        [HttpGet("{numofdice}d20")]
        public int[] getd20(int numofdice)
        {
            return diceroller.rolld20(numofdice);
        }

        [HttpGet("{numofdice}d100")]
        public int[] getd100(int numofdice)
        {
            return diceroller.rolld100(numofdice);
        }*/
    }
}
