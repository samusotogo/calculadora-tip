const billInput = document.querySelector(".bill-input");
const peopleInput =document.querySelector(".people-input");
const tipPeople = document.getElementById("tip-amount");
const totalPeople = document.getElementById("total-amount");
const tips =document.querySelectorAll(".tips")
const tipCustom =document.getElementById("tip-custom")
const resetBtn = document.querySelector(".reset")
const error = document.querySelector(".error")

billInput.addEventListener("input",billlInuputFun);
peopleInput.addEventListener("input",peopleInputFun);
tips.forEach(function(val){
    val.addEventListener('click',handleclick)
});
tipCustom.addEventListener("input",tipInputFun);
resetBtn.addEventListener ("click",reset)

billInput.value ="0.0";
peopleInput.value="1";
tipPeople.innerHTML= "$" + (0.0).toFixed(2);
totalPeople.innerHTML= "$" + (0.0).toFixed(2);

let billValue =0.0;
let peopleValue =1;
let tipValue = 0.15;


function billlInuputFun (){
    billValue =parseFloat(billInput.value)
    calculartip();
    
};

function peopleInputFun(){
    peopleValue =parseFloat(peopleInput.value);
    
    if(peopleValue <1){
        error.style.display ='flex'
        peopleInput.style.borde ='thick solid red' 
    } else{
        error.style.display ='none'
        peopleInput.style.borde ='none' 
        calculartip()
    }
};

function tipInputFun(){
    tipValue=parseFloat(tipCustom.value/100);

    tips.forEach(function(val) {
        val.classList.remove("active-tip")
    })
    calculartip();
}

function handleclick(event){
    tips.forEach(function(val){
        val.classList.remove("active-tip")
        if(event.target.innerHTML == val.innerHTML){
            val.classList.add("active-tip");
            tipValue = parseFloat(val.innerHTML) / 100;
        }
    })
    calculartip();
}

function calculartip(){
    if(peopleValue >=1){
        let tipAmount = (billValue * tipValue)/ peopleValue;
        let total = (billValue + tipAmount)/peopleValue;
        tipPeople.innerHTML= "$" + tipAmount.toFixed(2);
        totalPeople.innerHTML= "$" + total.toFixed(2);
    }
}
function reset(){
    billInput.value ="0.0";
    billlInuputFun()
    peopleInput.value="1";
    peopleInputFun()
    tipCustom.value ="";
}