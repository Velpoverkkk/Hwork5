var watch = document.getElementById('watch');
var spisok = document.getElementById('spisok');
var watch2 = document.getElementById('watch2');
var watch3 = document.getElementById('watch3');
var number = document.getElementById('ff');
var c = document.getElementById('c');
let ms = 0;
let s = 0;
let m = 0;
let Ms = 0;
let S = 0;
let M = 0;
let Ms2 = 0;
let S2 = 0;
let M2 = 0;
let myVar;
let myVar2;
let myVar3;
let j=0;
let Info=1;


function Start(){
    myVar =  setInterval(myTimer,10); 
    show1();
}
function Pause(){
     show2();
     clearInterval(myVar);
}
function Clear(){
     ms = 0;
     s = 0;
     m = 0;
     watch.innerText = getTimer(ms, s, m);
     clearInterval(myVar);
     show2();
}

function Сircle(){
    if(Info==1){
        var newLi = document.createElement('li');
        spisok.appendChild(newLi).append(Info+" ",watch.innerText = getTimer(ms, s, m)+" ",watch.innerText = getTimer(ms, s, m));
        Info++;
        document.getElementById('watch2').style.display = 'block';
        number.style.display = 'block';
        c.style.display = 'flex';
        number.innerText = Info;
        myVar2 =  setInterval(myTimer2,10);
        Ms2=ms; S2=s; M2=m;
        document.getElementById('watch3').style.display = 'block';
        myVar3 =  setInterval(myTimer3,10);

    }
    else{
        clearInterval(myVar2);
        clearInterval(myVar3);
        var newLi = document.createElement('li');
        spisok.appendChild(newLi).append(Info+" ",watch.innerText = getTimer2(Ms, S, M)+" ",watch.innerText = getTimer(Ms2, S2, M2));
        Info++;
        number.innerText = Info;
        Ms=0;S=0;M=0;
        myVar2 =  setInterval(myTimer2,10);
        myVar3 =  setInterval(myTimer3,10);



    }
}
function getTimer(ms, s, m){
    return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);
}
function getTimer2(Ms, S, M){
    return (M < 10 ? "0" + M : M) + ":" + (S < 10 ? "0" + S : S) + ":" + (Ms < 10 ? "0" + Ms : Ms)+" "+" ";
}
function getTimer3(Ms2, S2, M2){
    return (M2 < 10 ? "0" + M2 : M2) + ":" + (S2 < 10 ? "0" + S2 : S2) + ":" + (Ms2 < 10 ? "0" + Ms2 : Ms2);
}

show1 = function(){
    document.getElementById('Start').style.display = 'none';
    document.getElementById('Pause').style.display = 'block';
    document.getElementById('Сircle').style.display = 'block';
}

show2 = function(){
    document.getElementById('Start').style.display = 'block';
    document.getElementById('Pause').style.display = 'none';
    document.getElementById('Сircle').style.display = 'none';
}

function myTimer(){
    watch.innerText = getTimer(ms, s, m);
    ms++;
    if(ms == 100){
        ms = 0;
        s++;
    }
    if(s == 60){
        s = 0;
        m++;
    }
  };

  function myTimer2(){
    watch2.innerText = getTimer2(Ms, S, M);
    Ms++;
    if(Ms == 100){
        Ms = 0;
        S++;
    }
    if(S == 60){
        S = 0;
        M++;
    }
  };
  function myTimer3(){
    watch3.innerText = getTimer3(Ms2, S2, M2);
    Ms2++;
    if(Ms2 == 100){
        Ms2 = 0;
        S2++;
    }
    if(S2 == 60){
        S2 = 0;
        M2++;
    }
  };





