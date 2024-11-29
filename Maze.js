class Point {
  constructor(_row, _col) {
    this.row = _row;
    this.col = _col;
  }

  isEnd() {
    return this.row == end.row && this.col == end.col;
  }
}

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
]; 

var start = new Point(1, 1); // 起點 {row: 1, col: 1}
var end = new Point(8, 10); // 终點 {row: 8, col: 10}
var Stack = [];
var step = start;

var dir = [{ x: -1, y: 0 }, { x: 1, y: 0 }, { x: 0, y: -1 }, { x: 0, y: 1 }];
dir.sort((a, b) => { return b.x - a.x });
dir.sort((a, b) => { return Math.random() - 0.5 });

function go() {
  Stack.push(step);  // 將起點壓入棧
  maze[step.row][step.col] = 2;  // 標記起點為已訪問

  while (!step.isEnd()) {
    drawBoard();
    let moved = false;
    // 檢查四个方向（上、下、左、右）
    if (maze[step.row + dir[0].x][step.col + dir[0].y] == 0) {  // 向上
      step = new Point(step.row + dir[0].x, step.col + dir[0].y);
      moved = true;
    } else if (maze[step.row + dir[1].x][step.col + dir[1].y] == 0) {  // 向下
      step = new Point(step.row + dir[1].x, step.col + dir[1].y);
      moved = true;
    } else if (maze[step.row + dir[2].x][step.col + dir[2].y] == 0) {  // 向左
      step = new Point(step.row + dir[2].x, step.col + dir[2].y);
      moved = true;
    } else if (maze[step.row + dir[3].x][step.col + dir[3].y] == 0) {  // 向右
      step = new Point(step.row + dir[3].x, step.col + dir[3].y);
      moved = true;
    } else {
      // 如果四個方向都不能走，回溯
      if (!moved) {
        Stack.pop();  // 将当前位置出栈
        step = Stack[Stack.length - 1];  // 回退到上一个位置
      }
    }

    if(moved) {
    // 标记新位置为已访问
    maze[step.row][step.col] = 2;
    Stack.push(step);  // 将新位置压入栈
    }
  }

  if (Stack.length > 0) {
    console.log("找到路径!");
    drawPath(Stack);
  } else {
    console.log("没有路径!");
  }
}

function drawPath(_stack) {
  _stack.forEach(item => {
      var canvas = document.getElementById("map").getContext("2d");
      var size = Math.min(canvas.canvas.height / maze.length, canvas.canvas.width / maze[0].length);
      canvas.fillStyle = "#ff0000";
      canvas.fillRect(item.col * size, item.row * size, size, size);
      canvas.strokeRect(item.col * size, item.row * size, size, size);
  })

}

function drawBoard() {
  var canvas = document.getElementById("map").getContext("2d");
  var size = Math.min(canvas.canvas.height / maze.length, canvas.canvas.width / maze[0].length);
  for (var _row = 0; _row < maze.length; _row++) {
      for (var _col = 0; _col < maze[0].length; _col++) {
          //ar2d[_row][_col]=>0,1
          if (maze[_row][_col] == 1) {
              canvas.fillStyle = "#000000"
          } else if (maze[_row][_col] == 0) {
              canvas.fillStyle = "#ffffff"
          } else if (maze[_row][_col] == 2) {
              canvas.fillStyle = "#ffff00"
          }
          //600/5=>120  coordinate x,y , width, heigth
          canvas.fillRect(_col * size, _row * size, size, size);
          canvas.strokeRect(_col * size, _row * size, size, size);
      }
  }
}

//go();