 /*$(document).ready(function(){
    $("#form").validate({
          rulse:{
              fullname:"requeired",

          },messages:{

          }

    })
})*/
   
$('#form-submision').validate({
    rules :{
        fullname:"required",
        place: "required",
        email: "required",
      number:{
          number :" true",
          minlength:10,
          maxlength:10
      },
       gender:"required",
       emStatus:"required",
       education:"required",
       schoolName:"required",
       passOutYear:"required",
       self: "required",
       conform: "required",
       motive: "required" 


    },messages:{
        name:"please enter your name",
       
    },
    submitHandler:function(form){


   
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbwzaBAhb2YWRkx3I8Nl0by-oPpbDDcakQHtgYN8Z7UshdVwQad8uSak3rlTl763c1XZ/exec",
            data:$("#form-submision").serialize(),
            method:"post",
            success:function (response){
                alert("Form submitted successfully")
                window.location.reload()
                //window.location.href="https://google.com"
            },
            error:function (err){
                alert("Something Error")
    
            }
        })
    
    
}
    


})


    