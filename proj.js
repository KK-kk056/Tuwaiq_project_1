$("#SignUp").click(function(){
    window.location.href="sing.html";
});


$("#login").click(function(){
    window.location.href="log.html"
});

$("#login").click(function(){
    let userName =$("#yourName").val();
    let Password =$("#Password").val();

    if (userName ==="kkhh" && Password==="123456"){
        open("log.html");
    }else{
        alert("wrong Data !!!")
    }
  

});