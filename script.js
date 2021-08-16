const form = document.querySelector("#form")
const price = document.querySelector("#price")
const quantity = document.querySelector("#quantity")
const current = document.querySelector("#current")


form.addEventListener('submit', function (e) {
    e.preventDefault()


    // inital inputs
    var pvalue = price.value;
    var qvalue = quantity.value;
    var cvalue = current.value;

    // multiplying and subtracting to know profit or loss
    var pqValue = pvalue * qvalue
    var cqValue = qvalue * cvalue

    var profit = (cqValue - pqValue).toFixed(2)
    var loss = (pqValue - cqValue).toFixed(2)
    // up to this clear

    var profitPCT = ((profit * 100) / pqValue).toFixed(2)
    var lossPCT = ((loss * 100) / pqValue).toFixed(2)

    // getting output on screen
    var x = document.getElementById("output")

    if (profit > 0) {

        c = ("You gained " + profitPCT + "%. " + "Your total profit is ₹" + profit)
        x.innerHTML = c
        output.style.backgroundColor = "#7faebb69"
        if (profitPCT > 50) {
            gif.style.display = "block"
            gif.style.backgroundImage = "URL('https://c.tenor.com/CYTaR9nq1fwAAAAM/stonks-rew-inside.gif')"
        }
    }
    if (loss > 0) {
        c = ("You lost " + lossPCT + "%. " + "Your total loss is ₹" + loss)
        x.innerHTML = c
        output.style.backgroundColor = "#b63f5975"
        if (lossPCT > 50) {
            gif.style.display = "block"
            gif.style.backgroundImage = "URL('https://c.tenor.com/Xm5q3IZIEd4AAAAC/not-stonks-profit-down.gif')"

        }
    }
    if (profit === loss) {
        c = ("You gained 0.00%. Your total profit is ₹0.00")
        x.innerHTML = c
        output.style.backgroundColor = "#0f0f0f61"
    }




})