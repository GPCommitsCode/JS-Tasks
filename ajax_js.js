var url =  'http://dummy.restapiexample.com/api/v1/employees';
$.ajax({
    type        : 'GET',
    url         :  url,
    dataType    : 'json',
    success: function(data){
        alert('successful');
    }
})