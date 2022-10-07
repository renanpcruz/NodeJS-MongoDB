const Cliente = require('../models/clientesModel');

exports.newClient = async (req,res,next) => {
   const {
      name,
      email,
      road,        
      number,
      code_postal,
      city,
      state,
      cell
  } = req.body;

  const cliente = await Cliente.create({
      name,
      email,
      road,        
      number,
      code_postal,
      city,
      state,
      cell
})

res.status(200).json({
   success: true,
   cliente
})

}

exports.listClients = async (req, res, next) => {
   const lists_Client = await Cliente.find()

   res.status(200).json({
       success: true,
       lists_Client
   })
}

exports.updateClients = async (req,res,next) => {
   const clients = await Cliente.findById(req.params.id)

   clients.name = req.body.name,
   clients.email = req.body.email,
   clients.road = req.body.road,        
   clients.number = req.body.number,
   clients.code_postal = req.body.code_postal,
   clients.city = req.body.city,
   clients.state = req.body.state,
   clients.cell = req.body.cell

   const clientSave = await Cliente.findByIdAndUpdate(req.params.id, req.body)

   res.status(200).json({
      success: true      
  })
}

exports.delClients = async (req,res,next) => {
   const delete_clients = await Cliente.deleteOne()
   res.status(200).json({
       success: true        
   })
}





