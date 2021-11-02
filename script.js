//Calculate Tip
function calculateTip() {
    var billAmt = document.getElementById("bill_amt").value;
    var tipPercent = document.getElementById("tip_percent").value;
    var numOfPeople = document.getElementById("tot_person").value;

    //validate input
    if (billAmt === "" || billAmt <= 0 || tipPercent < 0 || tipPercent>100) {
        alert("Please enter valid bill amount and/or tip percent");
        return;
    }
    //Check to see if number of people is empty or less than or equal to 1
    if (numOfPeople === "" || numOfPeople < 1) {
        alert("Number of People cannot be negative or zero");
    } else {
        //Calculate tip
        var tipEach = (billAmt * tipPercent/100) / numOfPeople;
        //round to two decimal places
        tipEach = Math.round(tipEach * 100) / 100;
        //next line allows us to always have two digits after decimal point
        tipEach = tipEach.toFixed(2);
        //Display the tip per person
        document.getElementById("tip_each").innerHTML = tipEach;

        //Calculate pay each person
        var tip = (billAmt * tipPercent/100);
        //Calculate total bill with tip
        var totalBill = Number(billAmt)+Number(tip);
        //Calculate bill per person
        var payEach = totalBill/numOfPeople;
        //round to two decimal places
        payEach = Math.round(payEach * 100) / 100;
        //next line allows us to always have two digits after decimal point
        payEach = payEach.toFixed(2);
        //Display the bil per person
        document.getElementById("per_person").innerHTML = payEach;
    }

}

//click to call function
document.getElementById("calculate").onclick = function () {
    calculateTip();
};

// increase decrease tip percentage value
function decreaseValueTip() {
    var value = parseInt(document.getElementById('tip_percent').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('tip_percent').value = value;
}
function increaseValueTip() {
    var value = parseInt(document.getElementById('tip_percent').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('tip_percent').value = value;
}

// increase decrease total person value
function decreaseValuePerson() {
    var value = parseInt(document.getElementById('tot_person').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('tot_person').value = value;
}
function increaseValuePerson() {
    var value = parseInt(document.getElementById('tot_person').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('tot_person').value = value;
}