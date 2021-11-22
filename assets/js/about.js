$(document).ready(function(){
   draw(90, '.pie-chart1', '#ffab8d');
  draw(65, '.pie-chart2', '#fe9e97');
  draw(85, '.pie-chart3','#f68ea0');
  draw(65, '.pie-chart4','#cd7da8');
  draw(85, '.pie-chart5','#716db0');
  draw(80, '.pie-chart6','#3e60b7');
  draw(95, '.pie-chart7','#2254bd');
  draw(75, '.pie-chart8','#0c4479');
});

function draw(max, classname, colorname){
   var i=1;
    var func1 = setInterval(function(){
      if(i<max){
          color1(i,classname,colorname);
          i++;
      } else{
        clearInterval(func1);
      }
    },10);
}
function color1(i, classname,colorname){
   $(classname).css({
        "background":"conic-gradient("+colorname+" 0% "+i+"%, #ffffff "+i+"% 100%)"
   });
}