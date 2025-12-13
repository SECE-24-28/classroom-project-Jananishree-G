const express=require("express");
const router=express.Router();
const{
    registerUser,
    loginUser,
    getUsers,
    getUserById,
}=require("../controllers/usercontroller");

router.post("/register",registerUser);
router.get('/login',loginUser);
router.post("/users",getUsers);
router.get('/users/:id',getUserById);

module.exports=router;