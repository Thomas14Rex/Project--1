let M= document.getElementById("Weight of Milk");
let Fm=document.getElementById("Fat in Milk");
let Fs=document.getElementById("Fat in Skim Milk");
let Fc=document.getElementById("Fat in Cream");
let C= M*((Fm-Fs)/(Fc-Fs));

console.log(C);
console.log("Hello");