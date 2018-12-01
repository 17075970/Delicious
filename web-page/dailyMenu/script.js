var list = ["dsa", "asd", "foskvosk"];

function change(i, id){
  if(i){
    document.getElementById(id).style.animationName = "in";
    document.getElementById(id).style.animationDuration = "400ms";
    document.getElementById(id).style.backgroundColor = "blue";
    document.getElementById(id).style.color = "white";
  }
  else{
    document.getElementById(id).style.animationName = "out";
    document.getElementById(id).style.animationDuration = "400ms";
    document.getElementById(id).style.backgroundColor = "white";
    document.getElementById(id).style.color = "black";
  }
}

function upload(){
  for(var n = 0; n < list.length; n++){
    var index = "b" + n;

    var str = "<div class='btn' id='b" + n + "' onmousemove='change(true, " + '"' + index + '"' + ")' onmouseout='change(false, " + '"' + index + '"' + ")'>";
    str += list[n];
    str += "</div>";
    document.getElementById('container').innerHTML += str;
    console.log(str);
  }
}
