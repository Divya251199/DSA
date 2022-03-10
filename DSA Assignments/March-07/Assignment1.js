/**
"1.Reverse a number using a recursive program.
2. Calculate the avg of elements of an array using recursive code.        
3.Write a recursive binary search.
4. Predict the output of this program, with call stack behavior.
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
        "
*/
function reverseNum(n, str = String(n)) {
    const thisDigit = str[str.length - 1];
    const recursiveResult = str.length === 1 ? '' : reverseNum(str.slice(0, str.length - 1));
    return Number(thisDigit + recursiveResult);
  }

console.log(  reverseNum(5567443413))
