import { log } from "console";
import  express  from "express";
import https from "https";


const app = express();

app.get("/", function(req, res){

    const url = "https://api.weatherapi.com/v1/current.json?key=cb2ed386093e43ed8c5173555241803&q=Sri Lanka&aqi=no";

    https.get(url, function(response){
        console.log(response);
        console.log("\nThe respone code is: " + response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.current.temp_c;
            console.log(temp);
            const condition = weatherData.current.condition;
            console.log(condition);

            res.send(`<h1>The temperature in Sri Lanka is: ===> ${temp} <=== degrees celsius</h1>`);
        })
    })

})

app.listen(3000, function(){
    console.log("Server is running on port 3000");
})