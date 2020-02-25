const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-linksmobile");
const links =document.querySelectorAll(".nav-linksmobile li ");

hamburger.addEventListener("click",()=>{
    navLinks.classList.toggle("open");
});

window.onscroll =function(){myFunction()};
const navbar =document.getElementById("earlp-logo");
const sticky = navbar.offsetTop;
function myFunction(){
    if (window.pageYOffset >= sticky){
        navbar.classList.add("sticky")
    } else{
        navbar.classList.remove("sticky");
    }
}


function getHistory(){
    return document.getElementById("history-value").innerHTML;
}
function printHistory(num){
    return document.getElementById("history-value").innerHTML=num;
}
function getOutput(){
    return document.getElementById("output-value").innerHTML;
}
function printOutput(num){
    if(num==""){
        document.getElementById("output-value").innerHTML=num;
    }
    else if(num>9999999999999999){
        document.getElementById("output-value").innerHTML="Made by israel oduguwa"
    }
    else{
        document.getElementById("output-value").innerHTML= getFormatedNumber(num);
    }}
    function getFormatedNumber(num){
        var n = Number(num);
        var value = n.toLocaleString("en");
        return value;
    }
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}
const operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
    operator[i].addEventListener("click",function(){
        if(this.id=="clean"){
            printHistory("");
            printOutput("");
        }
      else if(this.id=="backspace"){
            var output=reverseNumberFormat(getOutput()).toString();
            if(output){
                output=output.substr(0,output.length-1);
                printOutput(output);
            }

        }
        else{
            var output =getOutput();
            var history = getHistory();
            if (output !="" || history!=""){
                output= output==""?output:reverseNumberFormat(output);
                history=history+output;
                if(this.id=="equal"||  this.id=="ans"){
                    var result=eval(history);
                    printOutput(result);
                    printHistory('');
                }
                else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
            }
        }
        
    });
}
const number = document.getElementsByClassName('number');
for( var i= 0;i<number.length;i++){
    number[i].addEventListener("click", function(){
     var output=reverseNumberFormat(getOutput());
     if (output!=NaN){
         output=output+this.id
         printOutput(output);
     }
    }
    )
}


const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const color3= document.querySelector("#color3");
const space = document.querySelector(".keyboard");
const opener =document.querySelector(".switch");
const colorChanger = document.querySelector(".colorChanger");
const toggleButton = document.getElementById("toggle-button");
function Switch(){
colorChanger.classList.toggle("Color");
}
toggleButton.addEventListener("click",Switch,false);
color1.addEventListener("click",()=>{
    space.classList.toggle("dark");}
    )
color2.addEventListener("click",()=>{
    space.classList.toggle("red");}
    )
color3.addEventListener("click",()=>{
    space.classList.toggle("yellow");}
    )
