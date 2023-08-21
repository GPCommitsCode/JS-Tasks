

         var minUserLen = 5, maxUserLen = 30;
         var minPassLen = 8, maxPassLen = 4096;
         var usernameMsg = "Username must be between " + minUserLen + " and " +
                           maxUserLen + " characters.";
         var passwordMsg = "Password must be between " + minPassLen + " and " +
                           maxPassLen + " characters.";
         jQuery.validator.setDefaults({
            debug: true,      
            success: "valid",
            submitHandler: function() {
               alert("Success! The form was submitted!");
            }
         });
      $(document).ready(function() {

         $("#signupForm").validate({
            rules: {
               username: {
                  required: true,
                  minlength: minUserLen,
                  maxlength: maxUserLen
 
               },
               password: {
                  required: true,
                  minlength: minPassLen,
                  maxlength: maxPassLen
 
               },
            },
            messages: {
               username: {
                  required: "Username required",
                  minlength: usernameMsg,
                  maxlength: usernameMsg
               },
               password: {
                  required: "Password required",
                  minlength: passwordMsg,
                  maxlength: passwordMsg
               }
            }
         });
      });
