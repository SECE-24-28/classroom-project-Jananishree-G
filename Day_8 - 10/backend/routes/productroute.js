const express=require("express");
const{createproduct, getproduct}=require("../controllers/productcontroller");
const router=express.Router();

router.post("/",createproduct);;
router.get('/',getproduct)
module.exports=router;