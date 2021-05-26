 var contador=[0,0,0,0,0];
  
function projetos(){

	contador[0]++; 

	var x = document.getElementsByClassName('pj1'); 

	
	
	x[0].style.display="block";
	x[1].style.display="block";
	x[2].style.display="block";
	x[3].style.display="block";
	x[4].style.display="block";
	x[5].style.display="block";


   

	if (contador[0]==2) {

	x[0].style.display=""; 
	x[1].style.display="none";
	x[2].style.display="none";
	x[3].style.display="none";
	x[4].style.display="none";
	x[5].style.display="none";

	}
	if(contador[0]>=2){
	contador[0]=0;
	}


 return 0;
};

function escola(){

	contador[1]++; 

	var x = document.getElementsByClassName("pj2"); 

	x[0].style.display="block";
	x[1].style.display="block";
	x[2].style.display="block";
	x[3].style.display="block";
	x[4].style.display="block";
	x[5].style.display="block";


   

	if (contador[1]==2) {

	x[0].style.display=""; 
	x[1].style.display="none";
	x[2].style.display="none";
	x[3].style.display="none";
	x[4].style.display="none";
	x[5].style.display="none";
 }
	if(contador[1]>=2){
	contador[1]=0;
	}




 return 0;
};

function programas(){
	contador[2]++; 

	var x = document.getElementsByClassName("pj3"); 

 x[0].style.display="block";
	x[1].style.display="block";
	x[2].style.display="block";
	x[3].style.display="block";
	x[4].style.display="block";
	x[5].style.display="block";


   

	if (contador[2]==2) {

	x[0].style.display=""; 
	x[1].style.display="none";
	x[2].style.display="none";
	x[3].style.display="none";
	x[4].style.display="none";
	x[5].style.display="none";
   }
	if(contador[2]>=2){
	contador[2]=0;
	}




 return 0;
};

function jogos(){

	contador[3]++; 

	var x = document.getElementsByClassName("pj4"); 

	x[0].style.display="block";
	x[1].style.display="block";
	x[2].style.display="block";
	x[3].style.display="block";
	x[4].style.display="block";
	x[5].style.display="block";


   

	if (contador[3]==2) {

	x[0].style.display=""; 
	x[1].style.display="none";
	x[2].style.display="none";
	x[3].style.display="none";
	x[4].style.display="none";
	x[5].style.display="none";
	}
	if(contador[3]>=2){
	contador[3]=0;
	}




 return 0;
};

function tutoriais(){

	contador[4]++; 

	var x = document.getElementsByClassName("pj5"); 

	x[0].style.display="block";
	x[1].style.display="block";
	x[2].style.display="block";
	x[3].style.display="block";
	x[4].style.display="block";
	x[5].style.display="block";


   

	if (contador[4]==2) {

	x[0].style.display=""; 
	x[1].style.display="none";
	x[2].style.display="none";
	x[3].style.display="none";
	x[4].style.display="none";
	x[5].style.display="none";
		}
	if(contador[4]>=2){
	contador[4]=0;
	}




 return 0;
};

