var cel=document.getElementById("cel")
var fah=document.getElementById("fah")
// here basically we are targeting the 2 input boxes ie celcius and fahrenheit
//for celcius to fahrenheit
cel.addEventListener('input',function(){
    let c=this.value;
    //this.value is cel.value and we will get the value whatever the user will give
    let f=(c*9/5)+32;

    fah.value=f;
})
//for fahrenheit to celcius
fah.addEventListener('input',function(){
    let f=this.value;
    //this.value is cel.value and we will get the value whatever the user will give
    let c=(f-32)*5/9;

    cel.value=c;
})
