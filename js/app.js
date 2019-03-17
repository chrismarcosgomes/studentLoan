document.querySelector("#loan-form").addEventListener("submit",function(e){
//hide results
    document.querySelector("#results").style.display="none";

/// show loader
    document.querySelector("#loading").style.display="block";
    
    setTimeout(claculateResults,2000)

    e.preventDefault()
});

// calc results
function claculateResults(){
    console.log("working");
// ui var
    const amount= document.querySelector("#amount");
    const interest= document.querySelector("#interest");
    const years= document.querySelector("#years");
    const monthlyPayment= document.querySelector("#monthly-payment");
    const totalpayment= document.querySelector("#total-payment");
    const totalInterest= document.querySelector("#total-interest");

    const principal= parseFloat(amount.value);
    const calcInterest=parseFloat(interest.value)/100/12;
    const calcPayment= parseFloat(years.value)*12;

// monthly payemt
    const x= Math.pow(1+ calcInterest,calcPayment);
    const monthly= (principal*x*calcInterest)/(x-1);

    if (isFinite(monthly)){
        monthlyPayment.value=monthly.toFixed(2);
        totalpayment.value=(monthly*calcPayment).toFixed(2)
        totalInterest.value=(monthly * calcPayment).toFixed(2)
        totalInterest.value=((monthly*calcPayment)-principal.toFixed(2));
// show results
        document.querySelector("#results").style.display="block";

// hide load
        document.querySelector("#loading").style.display="none";

    }else{
showError("Check them numbers")

    };
}
function showError(error){

    document.querySelector("#results").style.display="";

// hide load
    document.querySelector("#loading").style.display="none";


// create a div
    const errorDiv= document.createElement("div");

// get element
    const card=document.querySelector(".card");
    const heading=document.querySelector(".heading1");

// add class
    errorDiv.className= "alert alert-danger";

// create text node and append to div

    errorDiv.appendChild(document.createTextNode(error));

// insert error above

    card.insertBefore(errorDiv,heading);
// clear error after 3sec

    setTimeout(clearError,3000)
}

// clear error 

function clearError(){
    document.querySelector(".alert").remove();
}