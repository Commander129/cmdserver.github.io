const express = require("express");
const { exec } = require("child_process");

const app = express();

app.use(express.static("./"));

app.get("/start", (req, res) => {
    exec("java -jar server/paper.jar nogui");
    res.send("Server Starting");
});

app.get("/stop", (req, res) => {
    exec("taskkill /IM java.exe /F");
    res.send("Server Stopped");
});

app.listen(3000, () => {
    console.log("Panel Started");
});
