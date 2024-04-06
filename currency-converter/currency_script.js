//...

let hasQueryBeenSent = false

document.addEventListener("submit", async function () {
    if (hasQueryBeenSent) {
        console.log(`Please refresh the page to submit a new conversion.`)
        return
    }

    console.log("Conversion Sent!")
    const srcMoney = document.getElementsByName("srcMoney")[0]
    const endMoney = document.getElementsByName("endMoney")[0]
    const amount = document.getElementsByName("amount")[0]
    console.log(endMoney.value)
    console.log(srcMoney.value)
    console.log(`Amount: ${amount.value}`)

    const form = document.getElementsByTagName("form")[0]
    const pElement = document.createElement("p")

    try {
        const url = "https://v6.exchangerate-api.com/v6/"
        const apiKey = "951ea7462005c7b86dabe6f2"
        const body = await fetch(`${url}${apiKey}/latest/${srcMoney.value}`).then((response) => response.json())
        const rate = body["conversion_rates"][`${endMoney.value}`]
        console.log(`Rate: ${rate}`)
        
        let result = rate * parseFloat(amount.value)
        console.log(`Result: ${result}`)

        pElement.innerHTML = `<br>At an exchange rate of $${rate}:<br>
                              ${amount.value} ${srcMoney.value} is ${result} ${endMoney.value}`
        form.insertAdjacentElement("afterend", pElement)
        hasQueryBeenSent = true
    } catch (err) {
        console.error("Error fetching data from source", err)
    }
})
