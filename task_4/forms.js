 var pop_up="";
 var p_error="";
 var error;
 var flag=0;
function check_empty(x,y,z)
{
    if(x=="")
    {   
        error=z+" must be filled out";
        pop_up=pop_up+error+ "<br>";
        p_error=p_error+error+" \n";
        //alert(z+" must be filled out");
        y.style.backgroundColor = "#ff5050";
        flag=1;

        return flag;
    }
  return 0;

}



function check_lenght(x,y)
{

    var sln = x.length;
    if(sln<3){
            error=y+" must be atleast of size 3";
            pop_up=pop_up+error+"<br>";
            p_error=p_error+error+" \n";
          //  alert(y+" must be atleast of size 3");
          flag=1;

          return flag;
         
        }

        return 0;
}


function check_email(x,y)
{
    var e=/^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i;
    var val=e.test(x);
    if(val==false)
    {
        pop_up=pop_up+" email not in coorect format<br>";
        p_error=p_error+" email not in coorect format\n";
       //alert(" email not in coorect format");
        y.style.backgroundColor = "yellow";
        flag=1;
    }
     
}



function validateForm() {

   event.preventDefault();

    var x = document.getElementById("usr").value;
    var y=document.getElementById("usr");
    
    if( check_empty(x,y,"name") )
        ;
     else   
    check_lenght(x,"name");



    x = document.getElementById("DOB1").value;
    y=document.getElementById("DOB1");

     if( check_empty(x,y,"DOB") ) 
        ;
     else    
    check_lenght(x,"DOB");

    x=document.getElementById("email").value;
    y=document.getElementById("email");

  
    if( check_empty(x,y,"email") )
        ;
    else
    check_email(x,y);
    
    x=document.getElementById("age").value;
    check_empty(x,y,"age");
   
    x=document.getElementById("address").value;
    y=document.getElementById("address");
  
   if (check_empty(x,y,"address") )
    ;
    else
    check_lenght(x,"address");
   
    if(flag==1)
      alert(p_error);


    /*
    event.preventDefault();

    var x = document.getElementById("usr").value;
    var y=document.getElementById("usr");
    
    if (x == "") {
        alert(x);
        alert("Name must be filled out");
        y.style.backgroundColor = "red";

    }
    else{
          alert(x);
    	
    	


    }
     
     

    
    var L = document.getElementById("DOB1").value;
    var K=document.getElementById("DOB1");
    
    if (L == "") {
        alert(L);
        alert("DOB must be filled out");
        K.style.backgroundColor = "red";

    }
   
    
    var L = document.getElementById("DOB1").value;
    var K=document.getElementById("DOB1");
    
    if (L == "") {
        alert(L);
        alert("Age must be filled out");
        K.style.backgroundColor = "red";

    }
   

    */

    if(flag==0)
    {
    document.getElementById("demo").innerHTML="Access granted";
    }
    else
    {
    document.getElementById("demo").innerHTML=pop_up;
    }

    }
     











