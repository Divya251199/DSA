/**
Calculate the avg of elements of an array using recursive code.
*/

function findMean(A, N)
    {
        if (N == 1)
            return A[N - 1];
        else
            return ((findMean(A, N - 1) * (N - 1) + A[N - 1]) / N);
    }
let arr=[1,3,4,5234,342,1]
   console.log(findMean([1,3,4,5234,342,1],arr.length) )