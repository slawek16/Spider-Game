var wartosc_klawisza;

steroje_poczatkiem = new Boolean(true);



var przycisk = document.createElement('button');
	przycisk.id='przycisk';
	przycisk.innerHTML = 'ROZPOCZNIJ GRE';
	przycisk.style.marginTop = '15px';
	przycisk.style.fontSize = '20px';
	przycisk.style.backgroundColor = '#2d2dec';
	przycisk.style.fontFamily = 'Abril Fatface, sans-serif';
	przycisk.style.border = 'none';
	przycisk.style.color = 'orange';
	przycisk.style.borderRadius = '20px';
	przycisk.addEventListener('click', boardAppears);
	


var menu_glowne = document.createElement('div');
	menu_glowne.id = 'menu_glowne';
	menu_glowne.style.width = '300px';
	menu_glowne.style.height = '200px';
	menu_glowne.style.backgroundColor = '#ec850a';
	menu_glowne.style.marginLeft = 'auto';
	menu_glowne.style.marginRight = 'auto';
	menu_glowne.style.marginTop = '100px';
	menu_glowne.style.textAlign = 'center';
	menu_glowne.style.borderRadius = '15px';
	
	menu_glowne.appendChild(przycisk);

	var instrukcja2 = document.createElement('div');
	instrukcja2.innerHTML = 'dotrzyj do pomaranczowego punktu';
	instrukcja2.style.textAlign = 'center';
	instrukcja2.style.fontSize = '20px'
	instrukcja2.style.color = '#ec850a';
	// instrukcja2.style.marginTop = '50px';
	instrukcja2.style.marginLeft = 'auto';
	instrukcja2.style.marginRight = 'auto';
	instrukcja2.style.backgroundColor = '#2d2dec';
	instrukcja2.style.width = '200px';
	instrukcja2.style.borderRadius = '15px';

	var instrukcja = document.createElement('div');
	instrukcja.style.width = '300px';
	instrukcja.style.height = '200px';
	instrukcja.style.top = '90px';
	instrukcja.style.left = '300px';
	instrukcja.style.backgroundColor ='#ec850a';
	instrukcja.style.position = 'absolute';
	instrukcja.style.textAlign = 'center';
	instrukcja.style.fontSize = '20px'
	instrukcja.style.color = '#2d2dec';
	instrukcja.style.borderRadius = '15px';
	instrukcja.appendChild(instrukcja2);
	

	
	
var board = document.createElement('div');
	board.id = 'board';
	board.style.width = '900px';
	board.style.height = '600px';
	board.style.backgroundColor = '#a7248c';
	board.style.position = 'relative';
	board.style.marginLeft = 'auto';
	board.style.marginRight = 'auto';
	board.style.border = '1px solid'
	board.style.borderColor = 'black';
	
	
var player = document.createElement('div');
	player.id = 'player';
	player.style.width = '50px';
	player.style.height = '50px';
	player.style.position = 'absolute';
	player.style.left = '0px';
	player.style.top = '0px';
	player.style.backgroundImage = 'url(gracz1.png)';
	
	
var przeszkoda = document.createElement('div');
	przeszkoda.classList.add("hehe");
	przeszkoda.style.height = '498px';
	przeszkoda.style.width = '98px';
	przeszkoda.style.top = '0px';
	przeszkoda.style.left = '100px';

var przeszkoda2 = document.createElement('div');
	przeszkoda2.classList.add("hehe");
	przeszkoda2.style.height = '498px';
	przeszkoda2.style.width = '98px';
	przeszkoda2.style.top = '100px';
	przeszkoda2.style.left = '300px';
	
var przeszkoda3 = document.createElement('div');
	przeszkoda3.classList.add("hehe");
	przeszkoda3.style.height = '498px';
	przeszkoda3.style.width = '98px';
	przeszkoda3.style.top = '0px';
	przeszkoda3.style.left = '500px';
	
var przeszkoda4 = document.createElement('div');
	przeszkoda4.classList.add("hehe");
	przeszkoda4.style.height = '498px';
	przeszkoda4.style.width = '98px';
	przeszkoda4.style.top = '100px';
	przeszkoda4.style.left = '700px';
	
var przeszkoda5 = document.createElement('div');
przeszkoda5.classList.add("hehe");
	przeszkoda5.style.height = '98px';
	przeszkoda5.style.width = '98px';
	przeszkoda5.style.top = '400px';
	przeszkoda5.style.left = '850px';
	przeszkoda5.style.position = 'absolute';

var przeszkoda6 = document.createElement('div');
	przeszkoda6.classList.add("hehe");
	przeszkoda6.style.height = '98px';
	przeszkoda6.style.width = '98px';
	przeszkoda6.style.top = '0px';
	przeszkoda6.style.left = '200px';
	przeszkoda6.style.position = 'absolute';	
	
var przeszkoda7 = document.createElement('div');
	przeszkoda7.classList.add("hehe");
	przeszkoda7.style.height = '98px';
	przeszkoda7.style.width = '98px';
	przeszkoda7.style.top = '400px';
	przeszkoda7.style.left = '800px';
	przeszkoda7.style.position = 'absolute';	
	przeszkoda7.textContent = "I'll catch you";
	przeszkoda7.style.textAlign = 'center';
	przeszkoda7.style.fontFamily = 'Abril Fatface, sans-serif';


var meta = document.createElement('div');
	meta.style.height = '50px';
	meta.style.width = '50px';
	meta.style.top = '550px';
	meta.style.left = '850px';
	meta.style.backgroundColor = 'orange';
	meta.style.position = 'absolute';
	

	
	
var tablicaMap = document.getElementsByClassName("hehe");





	
function menuAppears(){
	var body = document.getElementsByTagName('body')[0];
	body.style.backgroundColor = '#3964a2';
	body.appendChild(menu_glowne);
	
}
document.addEventListener("DOMContentLoaded", menuAppears);

function showKey(e){
	if (!e) {
		var e = window.event;
	}
	if (e.keyCode)  return(e.keyCode);
}

	
function boardAppears(){
	
	var body = document.getElementsByTagName('body')[0];
	menu_glowne.remove();
	body.appendChild(board);
	board.appendChild(przeszkoda);
	board.appendChild(przeszkoda2);
	board.appendChild(przeszkoda3);
	board.appendChild(przeszkoda4);
	board.appendChild(przeszkoda5);
	board.appendChild(przeszkoda6);
	board.appendChild(meta);
	board.appendChild(przeszkoda7);
	zegar();
	
	board.appendChild(player);
	instrukcjaf();	
	
}
document.addEventListener('keydown', function(e){
		wartosc_klawisza = showKey(e);
		sterowanie(wartosc_klawisza);
	});

function instrukcjaf(){
	
	if(steroje_poczatkiem){
	
		board.appendChild(instrukcja);
		id = setInterval(inst, 1000);
		id2 = setInterval(inst2, 2000);
		id3 = setInterval(inst3, 3000);
		id4 = setInterval(inst4, 4000);
		
		function inst(){
			instrukcja2.textContent = 'UŻYJ STRZAŁEK ABY STEROWAĆ';
			clearInterval(id);
		}
		
		function inst2(){
			instrukcja2.textContent = 'UNIKAJ NIEBIESKICH PRZESZKOD';
			clearInterval(id2);
		}
		
		function inst3(){
			instrukcja2.textContent = 'POWODZENIA';
			clearInterval(id3);
		}
		
		function inst4(){
			instrukcja.remove();
					ruch();
					ruch4();
					ruch3();
			clearInterval(id4);
		}
		steroje_poczatkiem = false;
	}
	else {ruch4(); ruch3(); ruch();}
	
}
	
function reset(){
		player.style.top='0';
		player.style.left='0';
		przeszkoda7.style.left = 800+'px';
		przeszkoda7.style.top = 400+'px';
		
		clearInterval(ruch4in);
		clearInterval(ruch3in);
		clearInterval(czasomierz);
		clearInterval(ruchid);
		clearInterval(ruchid2);
		board.remove();
		menuAppears(); 

}


 function sterowanie (sterownik){
	 
	 var tlo = player.style.backgroundImage;
	 if(tlo == 'url("gracz1.png")')player.style.backgroundImage='url("gracz2.png")';
	 else player.style.backgroundImage='url("gracz1.png")';
	 
	 x = parseInt(player.style.left);
	 y = parseInt(player.style.top);
	
	 var szybkosc = 25;

	 switch(sterownik){
		 case 38:
			y-=szybkosc;
			break;
		case 40:
			y+=szybkosc;
			break;
		case 37:
			x-=szybkosc;
			break;
		case 39:
			x+=szybkosc;
			break;
		default:
			break;
	 }
	 
	 var x2 = x+parseInt(player.style.width);
	 var y2 = y+parseInt(player.style.height);
	 player.style.left=x+'px';
	 player.style.top=y+'px';
	 

	if((x==850)&&(y==550))
	{
		board.remove();
		
		przycisk.innerHTML = 'ZAGRAJ PONOWNIE';
		reset();
	}
	
	
	sprawdz();			
 }
 
 function sprawdz()
 {
	 x = parseInt(player.style.left);
	 y = parseInt(player.style.top);
	 var x2 = x+parseInt(player.style.width);
	 var y2 = y+parseInt(player.style.height);
	 
	 
	 for ( i=0;i<tablicaMap.length; i++){
		
	 if(
	 ((x<0)||(x2>900)||(y<0)||(y2>600))||
	 (x2>parseInt(tablicaMap[i].style.left))&&
	 (x<(parseInt(tablicaMap[i].style.left)+parseInt(tablicaMap[i].style.width)))&&
	 (y2>parseInt(tablicaMap[i].style.top))&&
	 (y<(parseInt(tablicaMap[i].style.top)+parseInt(tablicaMap[i].style.height)))
	 )
	 {
		 reset();
		}		 
	}
 }
 var ruchid;
function ruch(){
	var pos = 0;
	ruchid = setInterval(frame, 2);
	function frame(){
		if (pos==650){
			clearInterval(ruchid);
			ruch2();
		}
		else{
			sprawdz();
			pos+=2;
			
			przeszkoda5.style.left = pos +'px';
		}
	}
}
var ruchid2;
function ruch2(){
	var pos = 650;
	ruchid2 = setInterval(frame2, 2);
	function frame2(){
		if (pos==0){
			clearInterval(ruchid2);
			ruch();
		}
		else{
			sprawdz();
			pos-=2;
			
			przeszkoda5.style.left = pos +'px';
		}
	}
}


var ruch3in;
function ruch3(){
	var pos = 200;
	ruch3in = setInterval(frame2, 40);
	function frame2(){
		if (pos==400){
			pos = 200;
			przeszkoda6.style.left = pos+'px';
		}
		else{
			pos+=1;
			przeszkoda6.style.left = pos +'px';
		}
	}
}
var czasomierz;
function zegar(){
	var czas = 0;
	czasomierz = setInterval(mierz, 1000);
	function mierz(){
		czas +=1;
		przeszkoda.innerHTML = czas;
	}
		
}
var ruch4in;
function ruch4(){
	var posx = 800;
	var posy = 400;
	ruch4in = setInterval(frame4, 100);
	function frame4(){
		if (posx>x){
			posx -= 2;
		}
		else{
			posx+=2;
		}
		if(posy>498)
		{
			posy-=2;
		}
		else if(posy>y){
			posy-=2;
		}
		else{
			posy+=2;
		}
		przeszkoda7.style.left = posx+'px';
		przeszkoda7.style.top = posy+'px';
	}
}
