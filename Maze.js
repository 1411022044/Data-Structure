var maze = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];//start:1,1  end:8,10

//object oriented
class Point{
  constructor(_row, _col){
    this.row = _row;
    this.col = _col;
  }
  isEnd = function(){
    return this.row==end.row && this.col==end.col
  }
}

var start= new Point(1,1);//{row:1,col:1}
var end = new Point(8,10);//[8,10]
var Stack=[];
var step = start;

function go(){
     Stack.push(step);
     maze[step.row][step.col]=2;
     while(! step.isEnd()){
        //up
        if(maze[step.row - 1][step.col] == 0)
        {
            step = new Point(step.row-1, step.col);
            maze[step.row][step.col]=2;
            Stack.push(step);
        }else if(maze[step.row + 1][step.col] == 0){ //down
            step = new Point(step.row+1, step.col);
            maze[step.row][step.col]=2;
            Stack.push(step);
        }else if(maze[step.row][step.col - 1] == 0){//left
            step = new Point(step.row, step.col-1);
            maze[step.row][step.col]=2;
            Stack.push(step);
        }else if(maze[step.row][step.col + 1] == 0){//right
            step = new Point(step.row, step.col+1);
            maze[step.row][step.col]=2;
            Stack.push(step);
        }else{
            if(Stack.length>0)
              step = Stack.pop();
        }
     }
     if(Stack.length>0)
        console.log("Done!");
     else 
        console.log("No solution!");
}

go();

//draw map
