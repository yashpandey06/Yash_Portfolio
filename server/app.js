require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const axios = require("axios")
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE)

//  creating the client schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }

})
const User = new mongoose.model("Userdata", userSchema);


app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    axios.get('https://type.fit/api/quotes')
        .then(response => {
            console.log(response.data);
            res.json(
                response.data
            )
        }).catch(err => {
            console.log(err);
        })
})


app.post("/", (req, res) => {
    const fname = req.body.fname;
    const email = req.body.email;
    const message = req.body.message;
    console.log(fname);
    console.log(email);
    console.log(message);
    const new_user = new User({
        name: fname,
        email: email,
        message: message
    })
    new_user.save();


})
app.listen(3000, () => {
    console.log("port listening on 3000")
})
