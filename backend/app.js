const express = require('express');
const lib = require("./api/mysql");


const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

app.get("/status", (request, response) => {
    const status = {
        "Status": "Running"
    };

    response.send(status);
});

app.get("/data", async (request, response) => {
    const temp = await lib.getData();
    
    const status = {
        "ok": true,
        "data": temp.rows
    };

    response.send(status);
});