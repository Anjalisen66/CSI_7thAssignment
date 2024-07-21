const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 5000;
const Product = require('./models/productModel')

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.post('/api/add-product', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        return res.status(201).json({
            data: product,
            message: "successfully added a new product",
            err: {},
            success: true
        })
    } catch (error) {
        return res.status(400).json({
            data: {},
            message: "unable to add a new product",
            err: error,
            success: false
        })
    }
})

app.get('/api/get-products', async (req, res) => {
    try {
        const products = await Product.find();
        return res.status(200).json({
            data: products,
            message: "successfully fetched all products",
            err: {},
            success: true
        })
    } catch (error) {
        return res.status(400).json({
            data: {},
            message: "unable to fetch product",
            err: error,
            success: false
        })
    }
})

app.get("/api/get-products/:category",async(req,res)=>{

    try {
        const CategorisedProduct= req.params.category;

        const products = await Product.find({category:CategorisedProduct});
        res.status(200).json({
            data: products,
            message: "successfully fetched all products for the category",
            err: {},
            success: true
        })
    } catch (error) {
        res.status(400).json({
            data: {},
            message: "unable to fetch product",
            err: error,
            success: false
        })
    }

})

app.patch("/api/update-products/:id", async(req,res)=>{
    try {
        const {id}= req.params;
        console.log(id)
        const products = await Product.findByIdAndUpdate(id, req.body);
        res.status(200).json({
            data: products,
            message: "successfully updated product",
            err: {},
            success: true
        })
    } catch (error) {
        res.status(400).json({
            data: {},
            message: "unable to update product",
            err: error,
            success: false
        })
    }
})

app.delete('/api/delete-products/:id',async(req,res)=>{
    try {
        const {id}= req.params;
        console.log(id)
        const products = await Product.findByIdAndDelete(id, req.body);
        res.status(200).json({
            data: products,
            message: "successfully deleted product",
            err: {},
            success: true
        })
    } catch (error) {
        res.status(400).json({
            data: {},
            message: "unable to delete product",
            err: error,
            success: false
        })
    }
})

app.get("/api/get-products-name/:name", async (req, res) => {
    const {name} = req.params;
    console.log(name)
    try {
        const products = await Product.find({name: name}); // Case-insensitive search
      
        res.status(200).json({ 
            data:products,
            message:"searched products" ,
             err:{},
             success:true
        });
    } catch (error) {
        res.status(500).json({  data: {},
            message: "unable to search product",
            err: error,
            success: false });
    }
});

const connectToDb = async () => {
    mongoose.connect("mongodb://0.0.0.0:27017/EcommerceDB");
    console.log("connected to Db");
}
const setupAndStartServer = async () => {
    app.listen(PORT, async () => {
        console.log(`Server listening at PORT: ${PORT}`);
        await connectToDb();
    })
}

setupAndStartServer();