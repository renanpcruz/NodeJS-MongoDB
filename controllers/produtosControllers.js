const Product = require('../models/produtosModel');

exports.newProduct = async (req,res,next) => {
   const {
      name,
      price,
      quant,        
      un,
      category,  
  } = req.body;

  const product = await Product.create({
    name,
    price,
    quant,        
    un,
    category
})

res.status(200).json({
   success: true,
   product
})

}

exports.listProduct = async (req, res, next) => {
   const list_Product = await Product.find()

   res.status(200).json({
       success: true,
       list_Product
   })
}

exports.updateProduct = async (req,res,next) => {
   const product = await Product.findById(req.params.id)

   product.name = req.body.name,
   product.price = req.body.price,
   product.quant = req.body.quant,        
   product.un = req.body.un,
   product.category = req.body.category

   const productSave = await Product.findByIdAndUpdate(req.params.id, req.body)

   res.status(200).json({
      success: true      
  })
}

exports.delProduct = async (req,res,next) => {
   const delete_product = await Product.deleteOne()
   res.status(200).json({
       success: true        
   })
}