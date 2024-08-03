const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 7000;
const Product = require('./models/productModel')
const Category = require('./models/category');
const cors = require('cors');
const CartItem = require('./models/cart')

const authRoutes = require('../src/routes/authRoutes')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
require('dotenv').config();



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
        const {category}= req.params;
        // console.log(category)
        const products = await Product.find({category:category});
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

app.get("/api/search/:query", async (req, res) => {
    const { query } = req.params;
    
    if (!query) return res.status(400).send('Query is required');
  
    try {
      // MongoDB text search
      const results = await Product.find({
        $text: { $search: query }
      }).exec();
  
      res.json(results);
    } catch (error) {
      res.status(500).send('Error performing search');
    }
  });

// --------categoryApi----------
app.post('/api/categories', async (req, res) => {
    try {
        const category = await Category.create(req.body);
        return res.status(201).json({
            data: category,
            message: "successfully added a new category",
            err: {},
            success: true
        })
    } catch (error) {
        return res.status(400).json({
            data: {},
            message: "unable to insert new category",
            err: error,
            success: false
        })
    }
})

app.get('/api/get-categories', async (req, res) => {
    try {
        const category = await Category.find();
        return res.status(200).json({
            data: category,
            message: "successfully fetched all categories",
            err: {},
            success: true
        })
    } catch (error) {
        return res.status(400).json({
            data: {},
            message: "unable to fetch categories    ",
            err: error,
            success: false
        })
    }
})

//------------addtocart api-----------------------
app.post('/api/addToCart',  async (req, res) => {
    try {
      const { userId, productId, name, price } = req.body;
      const existingItem = await CartItem.findOne({ userId, productId });
  
      if (existingItem) {
        existingItem.quantity += 1;
        await existingItem.save();
      } else {
        const newItem = new CartItem({ userId, productId, name, price });
        await newItem.save();
      }
  
      res.status(200).json({ message: 'Item added to cart' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post('/api/removeFromCart',  async (req, res) => {
    try {
        const { userId, productId } = req.body;
        await CartItem.deleteOne({ userId, productId });
        res.status(200).json({ message: 'Item removed from cart' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  });

  app.get('/api/getCartItems',  async (req, res) => {
    try {
        const { userId } = req.params;
        const cartItems = await CartItem.find({ userId });
        res.status(200).json(cartItems);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  });


  //-------authentication api--------
  app.use('/api/auth', authRoutes);

  

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