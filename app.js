const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req,res) => {
    res.send("Okay")
})

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log("Connected")
        })
    } catch (error) {
        console.log(error)
    }
}
start();