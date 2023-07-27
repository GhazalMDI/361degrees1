
var reg=document.querySelector('#register');
let log=document.querySelector('#loginm');
let btn=document.querySelector('.btn-bro');
let btn_reg=document.querySelector('#reg');
let btn_log=document.querySelector('#log')






btn_reg.addEventListener('click',(e)=>{
e.preventDefault();
log.style.left='450px';
btn.style.right='155px'
reg.style.right='0';
reg.style.left='30px'
})
btn_log.addEventListener('click',(e)=>{
    e.preventDefault() ;
    reg.style.left='-450px';
    reg.style.right='0'
    btn.style.right='80px';
    log.style.left='40px'
})


const btn_sub=document.querySelector('#btnsub');
const pass=document.querySelector('#pass')
const repass=document.querySelector('#repass');
const email=document.querySelector('#mail')
const fname=document.querySelector('#fname')
btn_sub.addEventListener('click',(e)=>{
    e.preventDefault()
    check()
})
function check(){
const passValue=pass.value.trim();
const emailValue=email.value.trim();
const repassValue=repass.value.trim();
const fnameValue=fname.value.trim();
if(fnameValue===''){
    setEroro('UserName is empty!')
}else{
    succse(fname)
  }


  if(emailValue===''){
    setEroroE('Email is empty!')
  }else if(!isemail(emailValue)){
    setErrorEC('email is not valid')
  }
  else{
  setsuc(email)
  }
  if(repassValue===''){
    setpasserorrp('Password is empty')
  }
  else{
    emsucp(email)
  }
  if(passValue===''){
    setpasserorr('Password is empty')
  }
  else{
    emsuc(email)
  }
  if(passValue !==repassValue){
    setcheck('Password is not the same as repeating it')
  }
}

const span=document.querySelector('#spf')
function setEroro(msg){
    span.innerHTML=msg;
    fname.style.borderColor='red'
}
function succse(){
    fname.style.borderColor='yellow';
     span.innerHTML=''
}

const span2=document.querySelector('#spE')
function  setEroroE(ms){
    span2.innerHTML=ms;
    email.style.borderColor='red'
}
function setErrorEC(msg1){
    span2.innerHTML=msg1;
    email.style.borderColor='red'
}
function setsuc(){
    email.style.borderColor='yellow';
     span2.innerHTML=''
}
const pattern=  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function isemail(email){
return pattern.test(email)
}

const pass1=document.querySelector('#pass1')
function setpasserorr(msg3){
pass.style.borderColor='red'
pass1.innerHTML=msg3;
}
function emsuc(){
    pass.style.borderColor='yellow';
     pass1.innerHTML=''
}



const pass2=document.querySelector('#pass2')
function setpasserorrp(msg2){
    repass.style.borderColor='red';
pass2.innerHTML=msg2;
}
function emsucp(){
    repass.style.borderColor='yellow';
    pass2.innerHTML='';
}
function setcheck(msg5){
    repass.style.borderColor='red';
    pass2.innerHTML=msg5
}
function checkone(){
    repass.style.borderColor='yellow';
    pass.style.borderColor='yellow';
    pass2.innerHTML=''
}