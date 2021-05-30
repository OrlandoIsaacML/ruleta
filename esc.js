function tercias(){
    var m="---Ninguna igualdad---"
    var n=document.getElementById("n").value;
    var x1= Math.trunc(Math.random()*10)+1;
    var x2= Math.trunc(Math.random()*10)+1;
    var x3= Math.trunc(Math.random()*10)+1;

    switch (x1){
        case 1:
            document.getElementById("box1").innerHTML="<img src='1angel.png'>";
            break;
        case 2:
            document.getElementById("box1").innerHTML="<img src='1cristian.png'>";
            break; 
        case 3:
            document.getElementById("box1").innerHTML="<img src='1daniel.png'>";
            break;
        case 4:
            document.getElementById("box1").innerHTML="<img src='1fernando.png'>";
            break;
        case 5:
            document.getElementById("box1").innerHTML="<img src='1joel.png'>";
            break;
        case 6:
            document.getElementById("box1").innerHTML="<img src='1jose.png'>";
            break;
        case 7:
            document.getElementById("box1").innerHTML="<img src='2ruben.png'>";
            break;
        case 8:
            document.getElementById("box1").innerHTML="<img src='1xavier.png'>";
            break;
        case 9:
            document.getElementById("box1").innerHTML="<img src='1foto.png'>";
            break;
        case 10:
            document.getElementById("box1").innerHTML="<img src='1cesar.png'>";
            break;
        }
    switch (x2){
        case 1:
            document.getElementById("box2").innerHTML="<img src='1angel.png'>";
            break;
        case 2:
            document.getElementById("box2").innerHTML="<img src='1cristian.png'>";
            break; 
        case 3:
            document.getElementById("box2").innerHTML="<img src='1daniel.png'>";
            break;
        case 4:
            document.getElementById("box2").innerHTML="<img src='1fernando.png'>";
            break;
        case 5:
            document.getElementById("box2").innerHTML="<img src='1joel.png'>";
            break;
        case 6:
            document.getElementById("box2").innerHTML="<img src='1jose.png'>";
            break;
        case 7:
            document.getElementById("box2").innerHTML="<img src='2ruben.png'>";
            break;
        case 8:
            document.getElementById("box2").innerHTML="<img src='1xavier.png'>";
            break;
        case 9:
            document.getElementById("box2").innerHTML="<img src='1foto.png'>";
            break;
        case 10:
            document.getElementById("box2").innerHTML="<img src='1cesar.png'>";
            break;
        }
    switch (x3){
        case 1:
            document.getElementById("box3").innerHTML="<img src='1angel.png'>";
            break;
        case 2:
            document.getElementById("box3").innerHTML="<img src='1cristian.png'>";
            break; 
        case 3:
            document.getElementById("box3").innerHTML="<img src='1daniel.png'>";
            break;
        case 4:
            document.getElementById("box3").innerHTML="<img src='1fernando.png'>";
            break;
        case 5:
            document.getElementById("box3").innerHTML="<img src='1joel.png'>";
            break;
        case 6:
            document.getElementById("box3").innerHTML="<img src='1jose.png'>";
            break;
        case 7:
            document.getElementById("box3").innerHTML="<img src='2ruben.png'>";
            break;
        case 8:
            document.getElementById("box3").innerHTML="<img src='1xavier.png'>";
            break;
        case 9:
            document.getElementById("box3").innerHTML="<img src='1foto.png'>";
            break;
        case 10:
            document.getElementById("box3").innerHTML="<img src='1cesar.png'>";
            break;
        }
    if((x1==x2)&&(x1==x3))
        m="T E R C I A S";
    else if ((x1==x2)||(x1==x3))
        m="P A R E S";
        else if(x2==x3)
         m="P A R E S";
    else
        m="N I N G U N A";
    
    document.getElementById("sal1").innerHTML=n+" su RESULTADO OBTENIDO es=";
    document.getElementById("r").innerHTML=m;
}