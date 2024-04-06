//...

let hasQueryBeenSent = false

document.addEventListener("submit", async function () {
    if (hasQueryBeenSent) {
        console.log(`Please refresh the page to submit a new query.`)
        return
    }

    console.log("Query Sent!")
    const cityField = document.getElementsByName("name")[0]
    console.log(cityField.value)

    const form = document.getElementsByTagName("form")[0]
    const pElement = document.createElement("p")

    try {
        const url = "https://api.weatherapi.com/v1/"
        const apiKey = "7f766abfceb24c5e98044829242703"
        const cityField = document.getElementsByName("name")[0]
        const body = await fetch(`${url}forecast.json?key=${apiKey}&q=${cityField.value}&aqi=no&days=5`).then((response) => response.json())
        
        console.log(body.forecast.forecastday)
        console.log(body.forecast.forecastday.length)

        const dateTime = body["location"]["localtime"]
        const currTemp = body["current"]["temp_f"]
        const humidity = body["current"]["humidity"]
        const conditionText = body["current"]["condition"]["text"]
        const conditionPicURL = `https:${body["current"]["condition"]["icon"]}`
        const conditionPicElement = `<img src=${conditionPicURL} style="vertical-align: middle">`

        console.log(dateTime)
        console.log(currTemp)
        console.log(conditionText)

        let content = `You requested weather data for ${cityField.value}. Here you go:<br><br>
                              Current Local Date & Time: ${dateTime}<br>
                              Current Temp (F): ${currTemp}<br>
                              Current Humidity: ${humidity}%<br>
                              Current Conditions: ${conditionText}
                              ${conditionPicElement}<br><br>
                              5-Day Forecast (Including Today):<br>`
        
        for (let day of body["forecast"]["forecastday"]) {
            console.log(day)
            const dateTime  = day["date"]
            const highTemp  = day["day"]["maxtemp_f"]
            const lowTemp   = day["day"]["mintemp_f"]
            const humidity  = day["day"]["avghumidity"]
            const conditionText = day["day"]["condition"]["text"]
            const conditionPicURL = `https:${day["day"]["condition"]["icon"]}`
            const conditionPicElement = `<img src=${conditionPicURL} style="vertical-align: middle">`

            content += `Date: ${dateTime}<br>
                                   Max Temp (F): ${highTemp}<br>
                                   Min Temp (F): ${lowTemp}<br>
                                   Average Humidity: ${humidity}%<br>
                                   Conditions: ${conditionText}
                                   ${conditionPicElement}<br>`
        }

        pElement.innerHTML = content
        form.insertAdjacentElement("afterend", pElement)
        hasQueryBeenSent = true
    } catch (err) {
        console.error("Error fetching data from source", err)
    }
})
