const cors = require("cors");
const path = require("path");
const express = require("express");
const DB = require("./dataBase").DB;

const app = express();
const root = path.join();
const portHttp = 4000;
const db = new DB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(root));

//TODO: get accountByData / By ID
app.get("/AccountByToken", async (req, res) => {
    console.log("Sending Account Object");
    let accountData;
    try {
        accountData = await db.getAccount(token);
    }
    catch (e) {
        console.log(e);
    }
});


app.listen(portHttp, async () => {
    console.log("Hosted: http://localhost:" + portHttp);
});


function removeInjections(object) {
    let tempObject = { ...object };
    for (const key in object) {
        string = object[key].toString();
        tempObject[key] = string.replace("'", '').replace('"', '').replace("{", '').replace("}", '').replace("/", '');
    }
    return tempObject;
}
