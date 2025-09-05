let heartNumber = parseInt(document.getElementById('heart-number').innerText);
const hearts = document.querySelectorAll(".heart-icon");
for (const heart of hearts) {
    heart.addEventListener('click', function () {
        heartNumber += 1;
        document.getElementById('heart-number').innerText = heartNumber;
    })

}

function callFunction(number) {

    let coinNumber = parseInt(document.getElementById('coin-number').innerText);
    newCoinNumber = coinNumber - 20;
    document.getElementById('coin-number').innerText = newCoinNumber;
}

function addCallRecord(serviceName, serviceNumber) {
    const callList = document.getElementById("call-list");

    const recordDiv = document.createElement("div");
    recordDiv.classList.add("call-record", "border-b", "py-2");

    const namePara = document.createElement("p");
    namePara.innerText = serviceName;

    const numberPara = document.createElement("p");
    numberPara.innerText = serviceNumber;

    const timePara = document.createElement("p");
    const now = new Date();
    timePara.innerText = now.toLocaleTimeString();

    recordDiv.appendChild(namePara);
    recordDiv.appendChild(numberPara);
    recordDiv.appendChild(timePara);

    callList.appendChild(recordDiv);
}

/* emergency call-1st */
document.getElementById("emergency-call").addEventListener("click", function () {
    totalCoin = parseInt(document.getElementById('coin-number').innerText);
    if (totalCoin < 20) {
        alert(" Not Enough Coin Available");
        return;
    }
    const number = document.getElementById("emergency-number").innerText
    alert("Calling National Emergency Service" + number);
    addCallRecord("National Emergency Service", number);
    callFunction(number);
})

/* police-2nd */
document.getElementById("police-call").addEventListener("click", function () {
    totalCoin = parseInt(document.getElementById('coin-number').innerText);
    if (totalCoin < 20) {
        alert(" Not Enough Coin Available");
        return;
    }
    const number = document.getElementById("police-number").innerText
    alert("Calling Police Service" + number);
    addCallRecord("Police Service", number);
    callFunction(number);
})
/* fire-3rd */
document.getElementById("fire-call").addEventListener("click", function () {
    totalCoin = parseInt(document.getElementById('coin-number').innerText);
    if (totalCoin < 20) {
        alert(" Not Enough Coin Available");
        return;
    }
    const number = document.getElementById("fire-number").innerText
    alert("Calling Fire Service" + number);
    addCallRecord("Fire Service", number);
    callFunction(number);
})

/* 4th */
document.getElementById("ambulance-call").addEventListener("click", function () {
    totalCoin = parseInt(document.getElementById('coin-number').innerText);
    if (totalCoin < 20) {
        alert(" Not Enough Coin Available");
        return;
    }
    const number = document.getElementById("ambulance-number").innerText
    alert("Calling Ambulance Service" + number);
    addCallRecord("Ambulance Service", number);
    callFunction(number);
})
/* 5th */
document.getElementById("women-call").addEventListener("click", function () {
    totalCoin = parseInt(document.getElementById('coin-number').innerText);
    if (totalCoin < 20) {
        alert(" Not Enough Coin Available");
        return;
    }
    const number = document.getElementById("women-number").innerText
    alert("Calling Women and Child Helpline" + number);
    addCallRecord("Women and Child Helpline", number);
    callFunction(number);
})

/* 6th */
document.getElementById("anti-call").addEventListener("click", function () {
    totalCoin = parseInt(document.getElementById('coin-number').innerText);
    if (totalCoin < 20) {
        alert(" Not Enough Coin Available");
        return;
    }
    const number = document.getElementById("anti-number").innerText
    alert("Calling Anti-Corruption Helpline" + number);
    addCallRecord("Anti-Corruption Helpline", number);
    callFunction(number);
})
/* 7th */
document.getElementById("electricity-call").addEventListener("click", function () {
    totalCoin = parseInt(document.getElementById('coin-number').innerText);
    if (totalCoin < 20) {
        alert(" Not Enough Coin Available");
        return;
    }
    const number = document.getElementById("electricity-number").innerText
    alert("Calling Electricity Helpline" + number);
    addCallRecord("Electricity Helpline", number);
    callFunction(number);
})
/* 8th */
document.getElementById("brac-call").addEventListener("click", function () {
    totalCoin = parseInt(document.getElementById('coin-number').innerText);
    if (totalCoin < 20) {
        alert(" Not Enough Coin Available");
        return;
    }
    const number = document.getElementById("brac-number").innerText
    alert("Calling Brac Helpline" + number);
    addCallRecord("Brac Helpline", number);
    callFunction(number);
})
/* 9th */
document.getElementById("railway-call").addEventListener("click", function () {
    totalCoin = parseInt(document.getElementById('coin-number').innerText);
    if (totalCoin < 20) {
        alert(" Not Enough Coin Available");
        return;
    }
    const number = document.getElementById("railway-number").innerText
    alert("Calling Railway Helpline" + number);
    addCallRecord("Railway Helpline", number);
    callFunction(number);
})
/* clear */
document.getElementById("clear-button").addEventListener("click", function () {
    document.getElementById("call-list").innerHTML = "";
});

