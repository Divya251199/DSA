/**
According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."
The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):
Any live cell with fewer than two live neighbors dies as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.
                            when i=1 and j=1
[
 [0,1,0],  0,0  0,1  0,2     1-i,1-j 1-i,j   1-i,1+j
 [0,0,1],  1,0  1,1  1,2     i,1-j    1,1    i,1+j
 [1,1,1],  2,0  2,1  2,2     1+i,1-j 1+i,j   1+i,1+j
 [0,0,0]   3,0  3,1  3,2
]
*/

/**
 * 
 * 
   "1. Create and print elements in matrix
2. https://leetcode.com/problems/game-of-life/
3. Given a 2-d matrix of characters, write a function that takes this 2-d matrix
    and a string and returns whether the string can be formed using characters
    of this string. Note that one character from the matrix can be used only 
    once."  
 } matrix 
 */

 let gameOfLife=(board)=>{

    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            let liveNeigbors = 0
            if(board?.[i-1]?.[j-1] === 1 || board?.[i-1]?.[j-1] === -1) {
                liveNeigbors++
            }
            if(board?.[i-1]?.[j] === 1 || board?.[i-1]?.[j] === -1) {
                liveNeigbors++
            }
            if(board?.[i-1]?.[j+1] === 1 || board?.[i-1]?.[j+1] === -1) {
                liveNeigbors++
            }
            if(board?.[i]?.[j-1] === 1 || board?.[i]?.[j-1] === -1) {
                liveNeigbors++
            }
            if(board?.[i]?.[j+1] === 1 || board?.[i]?.[j+1] === -1) {
                liveNeigbors++
            }
            if(board?.[i+1]?.[j-1] === 1 || board?.[i+1]?.[j-1] === -1) {
                liveNeigbors++
            }
            if(board?.[i+1]?.[j] === 1 || board?.[i+1]?.[j] === -1) {
                liveNeigbors++
            }
            if(board?.[i+1]?.[j+1] === 1 || board?.[i+1]?.[j+1] === -1) {
                liveNeigbors++
            }
            
            
            if(board[i][j] === 1 && (liveNeigbors < 2 || liveNeigbors > 3)) {
                board[i][j] = -1
            }
            if(board[i][j] === 0 && liveNeigbors === 3) {
                board[i][j] = 2
            }
        }
    }
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++){
            if(board[i][j] === 2) {
                board[i][j] = 1
            }
            if(board[i][j] === -1) {
                board[i][j] = 0
            }
        }
    }

}
let matrix=[[0,1,0],[0,0,1],[1,1,1],[0,0,0]];
gameOfLife(matrix)
console.log(matrix)
