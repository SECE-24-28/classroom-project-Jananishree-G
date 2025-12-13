const express=require("express");
const router=express.Router();
const{
    registerAdmin,
    loginAdmin,
    getAdmin,
    getAdminById,
}=require("../controllers/usercontroller");

router.post("/register",registerAdmin);
router.post("/login",loginAdmin);
router.get("/users",getAdmin);
router.get("/users/:id",getAdminById);

module.exports=router;