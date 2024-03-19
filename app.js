import { log } from "console";
import  express  from "express";
import https from "https";


const app = express();

app.get("/", function(req, res){

    const url = "https://api.openweathermap.org/data/2.5/weather?q=Sri%20Lanka&appid=f4fd710ce21e2656424a1b79a61501e4&units=metric";

    https.get(url, function(response){
        console.log(response);
        console.log("\nThe respone code is: " + response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const condition = weatherData.weather[0].description;
            const wind = weatherData.wind.speed;
            res.write("<h1>The temperature in Sri Lanka is: ===> " + temp + " <=== degrees celsius</h1>");
            res.write("<h1>The condition in Sri Lanka is: ===> " + condition + " <===</h1>");
            res.write("<h1>The wind speed in Sri Lanka is: ===> " + wind + " <===</h1>");


            //res.send();
        })
    })

})

app.listen(3000, function(){
    console.log("Server is running on port 3000");
})