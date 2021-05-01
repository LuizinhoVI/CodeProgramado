 var i=0;
   
function novo(){

	i++; 

	var x = document.getElementsByTagName("li"); 
	var y = document.getElementsByTagName("a");

	x[0].style.display="block"; 
	x[1].style.display="block";
	x[2].style.display="block";
	x[3].style.display="block";

	y[0].style.display="block";
	y[1].style.display="block";
	y[2].style.display="block";
	y[3].style.display="block";

	console.log(i);

	if (i==2) {

	x[0].style.display="block"; 
	x[1].style.display="none";
	x[2].style.display="none";
	x[3].style.display="none";

	y[0].style.display="block";
	y[1].style.display="none";
	y[2].style.display="none";
	y[3].style.display="none";
	}
	if(i>=2){
	i=0;
	}




 return 0;
}

