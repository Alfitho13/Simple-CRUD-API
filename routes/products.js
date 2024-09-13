var express = require('express');
var router = express.Router();

const Validator = require("fastest-validator");
const {Product} = require('../models');
const product = require('../models/product');
const { route } = require('./products');

const v = new Validator();


router.get('/', async(req,res) =>{
    const product = await Product.findAll();
    return res.json(product)
})


router.get('/:id', async(req,res) =>{
    const id = req.params.id;
    const product = await Product.findByPk(id);

    // if(!product){
    //     return res.json({message : 'Product tidak ditemukan'})
    // }
    res.json(product || {message:"Product tidak ada"});
})

/* GET products listing. */
router.post('/', async(req, res) => {
    const schema = {
        brandName: "string",
        notesParfume: "string", 
        descriptionParfume: "string|optional"
    }

    const validate = v.validate(req.body, schema);

    if(validate.length){
      return res.json(validate)  
    }

    const product = await Product.create(req.body);
    
    res.json(product);
  });

router.put('/:id', async(req, res)=>{
    const id = req.params.id;
    
    let product = await Product.findByPk(id);
    
    if(!product){
        return res.json({message : 'Product tidak ada'})
    }

    const schema = {
        brandName: "string|optional",
        notesParfume: "string|optional", 
        descriptionParfume: "string|optional"
    }

    const validate = v.validate(req.body, schema);

    if(validate.length){
      return res.json(validate)  
    }
    
    product = await product.update(req.body) 
    res.json(product);   
  })
  
router.delete('/:id', async(req,res) =>{
    const id = req.params.id;
    const product = await Product.findByPk(id);
    
    if(!product){
        res.json({message : "Produk yang ingin dihapus tidak ada!"})
    }

    await product.destroy();
    res.json({message : "Produk dengan id" + "" + id + "" + "berhasil dihapus"})
})

module.exports = router;