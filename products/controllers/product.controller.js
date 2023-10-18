const mongoose = require('mongoose'),
      Product = require("../models/product");

      
function getProduct(req, res){
    Product.find({})
    .select("title price _id")
    .then(products => {
        if(products.length> 0){
            res.json({
                method : 'GET',
                url : "http://localhost:3000/products",
                products : products,
                message: "Products Retrived Successfully"
            })
        }else{
            res.status(500).json({error : err.message})
        }
    })
}

function storeProduct(req, res){
    try{
    const product = new Product({
        title : req.body.title,
        price : req.body.price
    });
    product.save()
    .then(product => {
        console.log(product);
        console.log('Product saved:', product);
        res.status(200).json({
            method : 'POST',
            url : "http://localhost:3000/products",
            message : "Product Saved Successfully"
        })
    })
    .catch(err => {
        console.log('Error saving product:', err);
        res.status(500).json({error : err.message})
    })}
 catch (error) {
    console.log('Catch block error:', error);
    res.status(400).json({ error: error.message });
}
}

function showProduct(req, res){
    const id = req.params.id;
    Product.findById(id)
    .select('title price _id')
    .then(product => {
        if(product){
            res.status(200).json(product)
        }else{
            res.status(404).json({message: "Error 404 Product Not Found"})
        }
    })
    .catch(err=> {
        res.status(500).json({error: err.message})
    })
}

function updateProduct(req, res){
    const id = req.params.id;
    Product.findByIdAndUpdate(id, {$set: req.body})
    .then(result =>{
        if(result){
            res.status(200).json(result)
        }else{
            res.status(404).json({message: "Product Not Found"})
        }
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
}

function deleteProduct(req, res){
    const id= req.params.id;
    Product.deleteOne({_id: id})
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err=> {
        res.status(500).json({error: err.message})
    })
}


module.exports={
    getProduct,
    storeProduct,
    showProduct,
    updateProduct,
    deleteProduct
}
