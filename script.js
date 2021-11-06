 function compute(){
/* variable principal is created to access the element whose id is "principal" */
    var principal = document.getElementById("principal").value;
/*     condition to raise an alert if value of the principal is 0 or a negative number*/
    if (principal<=0){
    alert("Enter a positive number")
    document.getElementById("principal").focus();
    }
    /* variable rate is created to access the element whose id is "rate" */
    var rate = document.getElementById("rate").value;
    /* variable years is created to access the element whose id is "years" */
    var years = document.getElementById("years").value;
    /* variable interest is created and it's value is assigned to principal*years*rate/100*/
    var interest = principal * years * rate /100;
    /* logic to convert the 'No of Years' into the actual year in the future.*/
    var year = new Date().getFullYear()+parseInt(years);
    /* variable rate is created to access the element whose id is "rate" */
    var result = document.getElementById("result");
    result.innerHTML="If you deposit " + "<span class='highlight'>" + principal + "</span>." + ",<br/>" + "at an interest rate of" + "<span class='highlight'>" + rate + "</span>."  + ".<br/>" +"You will receive an amount of" + "<span class='highlight'>" + interest + "</span>" + ",<br/>" + "in the year" + "<span class='highlight'>" + year
}

/* function that reads the value of the range slider and displays it the */

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}