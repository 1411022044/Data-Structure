var ary2d=[
    [1,1,0,1,1], //index 0
    [1,0,1,1,0], //index 1
    [1,0,1,0,0], //index 2
    [1,0,1,1,0], //index 3
    [1,0,1,0,0]   //index 4
];

var row=ary2d.length;
var col=ary2d[0].length;

//draw map
var canvas = document.getElementById("map").getContext("2d");   
//var size=canvas.width/row
for(var _row=0;_row<row;_row++){ //row 在這裡是指 ary2d[_row]，Row在這是Y軸
    for(var _col=0;_col<col;_col++){ //col 在這裡是指 ary2d[_row][_col]，Col在這是X軸
        //ar2d[_row][_col]=>0,1
        if(ary2d[_row][_col]==1){   //1=>blue, 0=>red
            canvas.fillStyle="#0000ff"  //blue
        }else{
            canvas.fillStyle="#ff0000"  //red
        }
        //600/5=>120  coordinate, width, heigth
        canvas.fillRect(_col*120,_row*120,120,120); //x,y,width,height
        canvas.strokeRect(_col*120,_row*120,120,120);  //x,y,width,height
    }
}