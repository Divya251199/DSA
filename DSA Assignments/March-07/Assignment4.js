/**
Predict the output of this program, with call stack behavior.
        import java.io.*
        class GFG {
            static int fp = 15;
            static int fun ( int n)
            {
                int t, f;
            
                if ( n <= 2 )
                {
                    fp = 1;
                    return 1;
                }
                t = fun ( n - 1);
                f = t + fp;
                fp = t;
                return f;
            }
            public static void main (String[] args)
            {
                System.out.println(fun(5));
            }
        }
*/

/**
OutPut of this Code:-5
The program calculates n-th Fibonacci Number.
*/