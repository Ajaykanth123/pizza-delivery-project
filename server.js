const express = require("express");
const Pizza = require('./models/pizzaModel');
const app = express();
const db = require("./db");
app.use(express.json());

const pizzasRoute =require('./routes/pizzasRoute')

app.use('/api/pizzas/',pizzasRoute)
 
app.get("/", (req, res) => {
    res.send("Server working " + port);
});
 
/*app.get("/getpizzas", async (req, res) => {
    try {
        const pizzas = await Pizza.find({});
        res.send(pizzas); 
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});*/
 
const port = process.env.PORT || 5000;
 
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

