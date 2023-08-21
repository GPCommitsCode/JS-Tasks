
var g = new login_form();
var h = new table_logged_in();

var obj_table = new Table();



function Table(){

	var table = document.getElementById("tbody");
	var offset = 0;
	var final_page_offset=0;
	var limit = 5;
    var cur_end;
	var Array_stud= [];
	var pre_offset;


     

    function newPage()
    {
        document.getElementById("tbody").innerHTML="";
    }




	function display_table(offset)
	{
       
       if(offset<0||offset>Array_stud.length){
    		alert("page limit reached");
    		return -1;
    	}

        newPage();

        if(offset+limit<Array_stud.length){
          cur_end=offset+limit;
        }
        else{
        	cur_end=Array_stud.length;
        }



    	for(i=offset;i<cur_end;i++)
    	{


    		var row = table.insertRow(-1);

                var cell0 = row.insertCell(0);
                var cell1 = row.insertCell(1);
                var cell2 = row.insertCell(2);
                var cell3 = row.insertCell(3);
                var cell4 = row.insertCell(4);
                var cell5 = row.insertCell(5);
                var cell6 = row.insertCell(6);


                 cell0.innerHTML = i+1;  

                  cell1.innerHTML = Array_stud[i].return_name();
                  cell2.innerHTML = Array_stud[i].return_DOB();
                  cell3.innerHTML = Array_stud[i].return_email();
                  cell4.innerHTML = Array_stud[i].return_age();
                  cell5.innerHTML = Array_stud[i].return_address();
                  cell6.innerHTML =  '<button type="button" class="btn btn-outline-primary" onclick="delete_r('+i+')">Delete</button>';

                 
    	}        

    	return 1;


	}



	this.add_row = function(c)
	{
           Array_stud.push(c);
           if(final_page_offset<0)final_page_offset=0;
           if( (Array_stud.length-1)%5==0 && (Array_stud.length-1)!=0)final_page_offset=final_page_offset+5;
           pre_offset=final_page_offset;
           display_table(final_page_offset);
	}



    this.prevPage=function()
    {
        pre_offset=pre_offset-5;
        var flag=display_table(pre_offset);
        if(flag==-1)pre_offset=pre_offset+5;
    }
    
    this.nextPage=function()
    {
    	pre_offset=pre_offset+5;
    	var flag=display_table(pre_offset);
    	if(flag==-1)pre_offset=pre_offset-5;
    }

    this.delete_row=function(l)
    {
    	Array_stud.splice(l,1);
        if( (Array_stud.length)%5==0 && (Array_stud.length-1)!=0)final_page_offset=final_page_offset-5;    	
    	var value=display_table(final_page_offset);
    	if(value==-1) newPage();
    }


    this.sort_name_attribute=function(){
    	Array_stud.sort(function(a, b) {
                   var nameA = a.return_name().toUpperCase(); // ignore upper and lowercase
                   var nameB = b.return_name().toUpperCase(); // ignore upper and lowercase
		    
		     if (nameA < nameB)  {
		       return -1;
		       }

				       
		     if (nameA > nameB) {
		    return 1;
		       }

      		return 0;  
       } );

    	display_table(final_page_offset);

    }


    this.sort_date_attribute=function(){
    	Array_stud.sort(function(a, b) {
                   var A = a.return_DOB() // ignore upper and lowercase
                   var B = b.return_DOB() // ignore upper and lowercase
		    
		     if (A < B)  {
		       return -1;
		       }

				       
		     if (A > B) {
		    return 1;
		       }

      		return 0;  
       } );

    	    	display_table(final_page_offset);


    }


    this.sort_age_attribute= function(){
    	Array_stud.sort( function(a,b){
    		    return a.return_age() - b.return_age() ;
    	} );

    	    	display_table(final_page_offset);


    }


}




function sort_age(){
	obj_table.sort_age_attribute();
}


function sort_date(){
	obj_table.sort_date_attribute();
}

function sort_name(){
	obj_table.sort_name_attribute();
}



function delete_r(delete_index){
	 	obj_table.delete_row(delete_index);
}











function Student(myForm) {

			var name = myForm['name1'].value;
			var DOB = myForm['DOB'].value;
			var email = myForm['email'].value;
			var age = myForm['age'].value;
			var address = myForm['address'].value;
			// var error ="";
			 

			 // var pop_up="";
			 // var p_error="";

			 // alert(helo);
			function check_empty(x)
			{
			    if(x=="")return 1;
			    return 0;
			}


			function check_lenght(x)
			{
			    var sln = x.length;
			    if(sln<3) return 1;
			    return 0;
			}


			function check_email(x)
			{
			        var e=/^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i;
			        var val=e.test(x);
			        if(val==false) return 1; 

			        return 0;
			}


			 function change_color_y(y)
			  {
			 	myForm[y].style.backgroundColor='yellow';
 
			  }

			            


			this.getDetails = function(){
			console.log(name, DOB, email, address);
			}


			this.validate = function(){
				var name_flag=( check_empty(name)&check_lenght(name) );
			    var DOB_flag= check_empty(DOB);
			    var email_flag= check_email(email);
			    var address_flag= ( check_empty(name)&check_lenght(name) );
			    var age_flag= (check_empty(age));

			    if(name_flag){
			    	//myForm['name1'].style.backgroundColor='yellow';
			    	change_color_y('name1');
			    } 

			    if(DOB_flag){
			    	// myForm['DOB'].style.backgroundColor='yellow';
			    	change_color_y('DOB');
			    }

			    if(email_flag){
			    	// myForm['email'].style.backgroundColor='yellow';
			    	change_color_y('email');
			    }

                
			    if(age_flag){
			    	// myForm['age'].style.backgroundColor='yellow';
			    	change_color_y('age');
			    }

			    if(address_flag){
			    	// myForm['address'].style.backgroundColor='yellow';
			    	change_color_y('address');
			    }

			    return !(name_flag|DOB_flag|email_flag|age_flag|address_flag);



			}

			this.return_name= function()
			{
				return name;
			}

			this.return_DOB =function()
			{
				return DOB;
			}
			    
			this.return_email =function()
			{
				return email;
			}
			      
            this.return_age =function()
			{
				return age;
			}

			this.return_address =function()
			{
				return address;
			}


}







function myFunction2()
{

	    event.preventDefault();
	    var c = new Student(document.forms[0]);
        c.getDetails();

       if(c.validate())
       {
            obj_table.add_row(c);
       }


}







function login_form(){
	
  this.visible_form = function(){
  	document.getElementById("form1").style.display="block";
  	document.getElementById("table1").style.display="none";

  }

}




function table_logged_in(){

	 this.visible_table = function(){
  	document.getElementById("form1").style.display="none";
  	document.getElementById("table1").style.display="block";

  }


}


function logined_form_visible(){
	g.visible_form();
}

function table_form_visible(){
	h.visible_table();
}


function Login(myForm) {

	var name = myForm['name'].value;
	var password = myForm['pswd'].value;


	this.check_password = function(){
		if(name == localStorage.username && password == localStorage.password){
			window.open("http://10.2.0.130/logined.html","_self");
			
		}
		else{
			alert("invalid credentials");
		}
	}

}




function myFunction(){
	 event.preventDefault();
	 var c = new Login(document.forms[0]);
	 c.check_password();

}