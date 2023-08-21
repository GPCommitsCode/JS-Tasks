var url =  'http://dummy.restapiexample.com/api/v1/employees';
$(document).ready(

$.ajax(
{
    type        : 'GET',
    url         :  url,
    dataType    : 'json',
    success: function(data){
        alert('successful');
        display(data);

    }
}

)

);



$('#tbody').on('click','#target', function(){

var url="http://dummy.restapiexample.com/api/v1/employee/"+$(this).text();

$.ajax(
{
    type        : 'GET',
    url         :  url,
    dataType    : 'json',
    success: function(data){
        alert('successful with 2 api got'+$(this).text()+'details');
        $('#curr').append("ID:"+data.id+" employee_name:"+data.employee_name+" employee_salary:"+data.employee_salary+" employee_age:"+data.employee_age+"<br>");

    }
}




	)

}

);





function display(data){

	    var tab_data=data.slice(0,10);
	    var table = document.getElementById("tbody");


	$.map(tab_data, function(obj) {
  var html_table="<tr><td id='target'>"+obj.id+"</td>";
html_table=html_table+"<td>"+obj.employee_name+"</td>";
html_table=html_table+"<td>"+obj.employee_salary+"</td>";
html_table=html_table+"<td>"+obj.employee_age+"</td></tr>";
$("#tbody").append(html_table);
});


}

/*
 function display(data)
 {
    var tab_data=data.slice(0,10);
    var table = document.getElementById("tbody");


    	for(i=0;i<10;i++)
    	{


    		var row = table.insertRow(-1);

                var cell0 = row.insertCell(0);
                var cell1 = row.insertCell(1);
                var cell2 = row.insertCell(2);
                var cell3 = row.insertCell(3);


                 cell0.innerHTML =data[i].id;  

                  cell1.innerHTML = data[i].employee_name;
                  cell2.innerHTML = data[i].employee_salary;
                  cell3.innerHTML = data[i].employee_age;
                 
    	}     
 }


*/


