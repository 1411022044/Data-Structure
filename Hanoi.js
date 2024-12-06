function Hanoi(n,  p1, p2, p3)
{  
     if (n==1) //遞迴出口 
            console.log(n+"套環從 "+p1+" 移到 "+ p3);
     else
     {  
            Hanoi(n-1, p1, p3, p2);
            console.log(n+"套環從 "+p1+" 移到 "+ p3);
            Hanoi(n-1, p2, p1, p3);
      }
 }

 Hanoi(4,"P1", "P2","P3")
