namespace dndapp.API
{
    public class diceroller
    {

        Random random = new Random();
        public diceroller()
        {

        }

        public int[] rolldice(int numofdice, int dicetype)
        {
            int sumtotal = 0;
            int[] eachvalue = new int[numofdice];
            for (int i = 0; i < numofdice; i++)
            {
                int result = this.random.Next(1, (dicetype + 1));
                eachvalue[i] = result;
                sumtotal += result;



            }
            return eachvalue;
        }

