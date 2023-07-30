
	//to mamage navigation
    
    function  top_navigation(){
        var displayValue = document.getElementById('leftli').style.display;
        

        if(displayValue=="none"){
            //alert("i love you");
            document.getElementById("leftli").style.display="block";
        }
        else{
            document.getElementById("leftli").style.display="none";
        }
    }

 //to manage media width using java script 
const mediaQueryList = window.matchMedia("(max-width: 600px)");
function checkScreenSize(e) {
  if (e.matches) {
   // alert("less than 600");
  } else {
    //alert("greater than 600");
    document.getElementById("leftli").style.display="block";
  }
} mediaQueryList.addListener(checkScreenSize);

 