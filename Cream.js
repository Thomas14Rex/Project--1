let M= document.getElementById("Weight of Milk");
let Fm=document.getElementById("Fat in Milk");
let Fs=document.getElementById("Fat in Skim Milk");
let Fc=document.getElementById("Fat in Cream");
let Submit=document.getElementById("Submit");
let C= M*((Fm-Fs)/(Fc-Fs));
let result= document.getElementById("result")
Submit.onclick=function(){
  result.innerHTML=(C);
}
