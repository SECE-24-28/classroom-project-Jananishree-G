const Product=require('../models/product')

    exports.createproduct=async (req,res) =>{
            try{
            const product=await Product.create(req.body);
            res.json(product);

            }
            catch(error){
                res.status(500).json(error);
                
                
            }
    }
    exports.getproduct=async (req,res) =>{
        try{
            const product=await Product.find({});
            res.status(200);
            }
            catch(error){
                res.status(400).json({error:error.message});
                
                
            }
    }