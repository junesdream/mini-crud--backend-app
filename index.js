const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api/products", productRoute);

//Get
app.get("/", (req, res) => {
	res.send("Hello World");
});

//Connection to database
mongoose
	.connect(
		"mongodb+srv://hanori:M4FnVIoIDGHxk2ak@backenddb.jcyiqjw.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
	)
	.then(() => {
		console.log("Connected to MongoDB");
		app.listen(3000, () => {
			console.log("Server is running on port 3000");
		});
	})
	.catch((err) => {
		console.error("Could not connect to MongoDB", err);
	});
