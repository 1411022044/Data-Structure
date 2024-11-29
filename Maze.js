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

var start = new Point(1, 1); // 起点 {row: 1, col: 1}
var end = new Point(8, 10); // 终点 {row: 8, col: 10}
var Stack = [];
var step = start;


function go() {
  Stack.push(step);  // 将起点压入栈
  maze[step.row][step.col] = 2;  // 标记起点为已访问

  while (!step.isEnd()) {
    let moved = false;
    // 检查四个方向（上、下、左、右）
    if (maze[step.row - 1] && maze[step.row - 1][step.col] == 0) {  // 向上
      step = new Point(step.row - 1, step.col);
      moved = true;
    } else if (maze[step.row + 1] && maze[step.row + 1][step.col] == 0) {  // 向下
      step = new Point(step.row + 1, step.col);
      moved = true;
    } else if (maze[step.row][step.col - 1] == 0) {  // 向左
      step = new Point(step.row, step.col - 1);
      moved = true;
    } else if (maze[step.row][step.col + 1] == 0) {  // 向右
      step = new Point(step.row, step.col + 1);
      moved = true;
    } else {
      // 如果四个方向都不能走，回溯
      if (!moved) {
        Stack.pop();  // 将当前位置出栈
        step = Stack[Stack.length - 1];  // 回退到上一个位置
        continue;
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
  } else {
    console.log("没有路径!");
  }
}

go();

//draw map
