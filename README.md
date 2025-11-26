# Tick Tac Toe!
App for playing Tick Tac Toe with two difficulties.  
You can try out the game [HERE](https://ollewarne.github.io/tick-tac-toe/)!

## How it works

### Easy difficulty
The easy difficulty works by randomly picking one square that does not have any marker placed on it.  
Then it returns the index for that square in the array and we place the marker on it.

### Hard difficulty
The Hard difficulty is done with the help of the [Minimax algorithm](https://en.wikipedia.org/wiki/Minimax).  
We use the algorithm to look through the array and compare to find the absolute best move.  
You can not win against this. The best you can hope for is a draw.

### Classes
As this was a project I used to learn, I tried to use classes as much as possible. I'm trying to get into the habit of thinking more object oriented.  


## Planned improvements
- Better styling for the page
- End of game screen
- Better reset function so you don't have to click twice
- Allow for switching who goes first
