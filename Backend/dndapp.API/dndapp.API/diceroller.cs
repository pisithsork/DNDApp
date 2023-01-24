namespace dndapp.API
{
    public class diceroller
    {

        Random random = new Random();
        public diceroller()
        {

        }

        public int[] rolld4(int numofdice)
        {
            int sumtotal = 0;
            int[] eachvalue = new int[numofdice];
            for (int i = 0; i < numofdice; i++)
            {
                int result = this.random.Next(1, (4 + 1));
                eachvalue[i] = result;
                sumtotal += result;



            }
            return eachvalue;
        }





        public int[] rolld6(int numofdice)
        {
            int sumtotal = 0;
            int[] eachvalue = new int[numofdice];
            for (int i = 0; i < numofdice; i++)
            {
                int result = this.random.Next(1, (6 + 1));
                eachvalue[i] = result;
                sumtotal += result;



            }
            return eachvalue;
        }





        public int[] rolld8(int numofdice)
        {
            int sumtotal = 0;
            int[] eachvalue = new int[numofdice];
            for (int i = 0; i < numofdice; i++)
            {
                int result = this.random.Next(1, (8 + 1));
                eachvalue[i] = result;
                sumtotal += result;



            }
            return eachvalue;
        }





        public int[] rolld10(int numofdice)
        {
            int sumtotal = 0;
            int[] eachvalue = new int[numofdice];
            for (int i = 0; i < numofdice; i++)
            {
                int result = this.random.Next(1, (10 + 1));
                eachvalue[i] = result;
                sumtotal += result;



            }
            return eachvalue;
        }





        public int[] rolld12(int numofdice)
        {
            int sumtotal = 0;
            int[] eachvalue = new int[numofdice];
            for (int i = 0; i < numofdice; i++)
            {
                int result = this.random.Next(1, (12 + 1));
                eachvalue[i] = result;
                sumtotal += result;



            }
            return eachvalue;
        }





        public int[] rolld20(int numofdice)
        {
            int sumtotal = 0;
            int[] eachvalue = new int[numofdice];
            for (int i = 0; i < numofdice; i++)
            {
                int result = this.random.Next(1, (20 + 1));
                eachvalue[i] = result;
                sumtotal += result;



            }
            return eachvalue;
        }





        public int[] rolld100(int numofdice)
        {
            int sumtotal = 0;
            int[] eachvalue = new int[numofdice];
            for (int i = 0; i < numofdice; i++)
            {
                int result = this.random.Next(1, (100 + 1));
                eachvalue[i] = result;
                sumtotal += result;



            }
            return eachvalue;
        }

    }
}
