var obj_table = new Table();



function Table(){

	var table = document.getElementById("tbody");
	var index = 0;
    var name = [];
    var DOB = [];
    var email = [];
    var age = [];
    var address = [];
    var curr_offset=0;
    var max_offset=1;
    var limit=5;
    var display_limit;
    var pre_offset=0;


    function newPage()
    {
        document.getElementById("tbody").innerHTML="";
        

    }


    function display(offset)
    {
    	if(offset<0||offset>max_offset){
    		alert("page limit reached");
    		return;
    	}

    	newPage();

    	if(offset+limit<max_offset)
    		display_limit=offset+limit;
    	else
    		display_limit=max_offset;


    	for(i=offset;i<display_limit;i++)
    	{


    		var row = table.insertRow(-1);

                var cell0 = row.insertCell(0);
                var cell1 = row.insertCell(1);
                var cell2 = row.insertCell(2);
                var cell3 = row.insertCell(3);
                var cell4 = row.insertCell(4);
                var cell5 = row.insertCell(5);


                 cell0.innerHTML = i+1;  
              //  cell1.innerHTML = stock[i-5];

                   cell1.innerHTML = name[i];
               // cell2.innerHTML = stock[i-4];
                   cell2.innerHTML = DOB[i];
                //cell3.innerHTML = stock[i-3];
                  cell3.innerHTML = email[i];
                //cell4.innerHTML = stock[i-2];
                  cell4.innerHTML = age[i];

               // cell5.innerHTML = stock[i-1];  
                  cell5.innerHTML = address[i];

                 
    	}

    }

    
    this.prevPage=function()
    {
        pre_offset=pre_offset-5;
        display(pre_offset);
    }
    
    this.nextPage=function()
    {
    	pre_offset=pre_offset+5;
    	display(pre_offset);
    }

    this.add_row=function(a)
    {
    	name[index]=a.return_name();
    	DOB[index]=a.return_DOB();
    	email[index]=a.return_email();
    	age[index]=a.return_age();
    	address[index]=a.return_address();

    	
        

        if(index%5==0 && index!=0)
        {
        	curr_offset=curr_offset+5;
        	pre_offset=curr_offset;
        }
        
        display(curr_offset);
        max_offset++;
        index++;


    		// var row = table.insertRow(-1);

      //           var cell0 = row.insertCell(0);
      //           var cell1 = row.insertCell(1);
      //           var cell2 = row.insertCell(2);
      //           var cell3 = row.insertCell(3);
      //           var cell4 = row.insertCell(4);
      //           var cell5 = row.insertCell(5);


      //            cell0.innerHTML = index+1;  
      //         //  cell1.innerHTML = stock[i-5];

      //              cell1.innerHTML = name[index];
      //          // cell2.innerHTML = stock[i-4];
      //              cell2.innerHTML = DOB[index];
      //           //cell3.innerHTML = stock[i-3];
      //             cell3.innerHTML = email[index];
      //           //cell4.innerHTML = stock[i-2];
      //             cell4.innerHTML = age[index];

      //          // cell5.innerHTML = stock[i-1];  
      //             cell5.innerHTML = address[index];

                  


                  // newPage();
 

    }


    // this.display_row=function()
    // {
    // 	document.getElementById("table").innerHTML="";
    // 	for(var i=0;i<)

    // }


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
				return name;
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
/*

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





this.isvalid = function()
{

	

}


}

/*
this.isvalid = function() {
return true
}
*/





function myFunction()
{
	    event.preventDefault();
	    var c = new Student(document.forms[0]);
        c.getDetails();

       if(c.validate())
       {
            obj_table.add_row(c);
       }



		// if(c.isvalid()) {

		// } 


}