const express = require('express');

const app = express();

app.use('/', express.static('client/public'))

app.post("/contact-email", (req , res ) => {
    console.log(req);
    res.json({
        "body":"body"
    });
})

app.listen(8080, ()=> {
    return console.log("Gronic Started http://localhost:8080");
})
