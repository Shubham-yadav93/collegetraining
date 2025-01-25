const express = require("express");
const port = 4400;
const app = express();
const cors = require("cors");

app.use(cors());

app.weather_data=[
    {
        id:1,
        city:"Mumbai",
        temperature:"27",
        pressure:"1012mb",
        wind:"5kmph",
        city_img:"https://t3.ftcdn.net/jpg/03/55/64/04/360_F_355640480_FKKv2BQwqY6sMa6jmEGVPnEndX1GPtJU.jpg",
        logo:"https://uxwing.com/wp-content/themes/uxwing/download/weather/weather-icon.png"
    },

    {
        id:2,
        city:"Hyderabad",
        temperature:"23",
        pressure:"1019mb",
        wind:"6kmph",
        city_img:"https://s7ap1.scene7.com/is/image/incredibleindia/charminar-mosque-hyderabad-telangana-3-attr-about?qlt=82&ts=1726652899615",
        logo:"https://uxwing.com/wp-content/themes/uxwing/download/weather/weather-icon.png"
    },

    {
        id:3,
        city:"Chennai",
        temperature:"25",
        pressure:"1017mb",
        wind:"4kmph",
        city_img:"https://e1.pxfuel.com/desktop-wallpaper/292/438/desktop-wallpaper-chennai-central-station-chennai-city.jpg",
        logo:"https://uxwing.com/wp-content/themes/uxwing/download/weather/weather-icon.png"
    }
]

app.get("/", (req, res) => {
    res.json(app.weather_data);
});

app.listen(port, () => {
    console.log(`Server is Running at http://localhost:${port}`);
});