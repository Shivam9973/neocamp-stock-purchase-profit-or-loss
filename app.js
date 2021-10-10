var initialPrice = document.querySelector("#initial-price");
var stocksQuntity = document.querySelector("#stock-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");



submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuntity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
        console.log(loss)
            // console.log("Hey the loss is ${loss} and the percent is ${lossPercentage}%");
        var outputLoss = 'Hey the loss is ' + loss + 'and the percent is ' + lossPercentage

        showOutput(outputLoss);
    } else if (current > initial) {
        var profit = (current - initial) * quantity
        var profitPercentage = (profit / initial) * 100

        // console.log('Hey the profit is ${profit} and the percent is ${profitPercentage}%')

        var outputProfit = 'Hey the profit is ' + profit + '  and the percent is ' + profitPercentage
        showOutput(outputProfit);
    } else {
        showOutput("No pain no gain and no gain no pain")
    }
}

function showOutput(message) {
    outputBox.innerHTML = message
}