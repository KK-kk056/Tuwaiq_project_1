

$('#bmw').click(()=>{
    sessionStorage.setItem('name','bmw')
    window.location.href="det.html";
});

$('#audi23').click(()=>{
    sessionStorage.setItem('name','audi')
    window.location.href="det.html";
});

$('#Mercedes').click(()=>{
    sessionStorage.setItem('name','Mercedes')
    window.location.href="det.html";
});

$('#Porsche').click(()=>{
    sessionStorage.setItem('name','Porsche')
    window.location.href="det.html";
});





$("#SignUp").click(function(){
    window.location.href="sing.html";
});


$("#login").click(function(){
    window.location.href="log.html"
});

// function store(){
//     let name = document.getElementById('name');
//     let pw = document.getElementById('pw');
//     let lowerCaseLetters = /[a-z]/g;
//     let upperCaseLetters = /[A-Z]/g;
//     let numbers = /[0-9]/g;
//     if(name.value.length == 0){
//         alert('Please fill in email');
//     }else if(pw.value.length == 0){
//         alert('Please fill in password');
//     }else if(name.value.length == 0 && pw.value.length == 0){
//         alert('Please fill in email and password');
//     }else if(!pw.value.match(numbers)){
//         alert('please add 1 number');
//     }else if(!pw.value.match(upperCaseLetters)){
//         alert('please add 1 uppercase letter');
//     }else if(!pw.value.match(lowerCaseLetters)){
//         alert('please add 1 lovercase letter');
//     }else{
//         localStorage.setItem('name', name.value);
//         localStorage.setItem('pw', pw.value);
//         alert('Your account has been created');
//     }
// }
// //checking
// function check(){
//     let storedName = localStorage.getItem('name');
//     let storedPw = localStorage.getItem('pw');
//     let userName = document.getElementById('userName');
//     let userPw = document.getElementById('userPw');
//     if(userName.value == storedName && userPw.value == storedPw){
//         console.log("passed");
//         window.location.href="proj.html";
//     }else{
//         alert('Error on login');
//     }
// }