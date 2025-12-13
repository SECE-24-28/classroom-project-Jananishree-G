const User=require('../models/user');
const bcrypt=require('bcryptjs');

//Register User
exports.registerUser=async (req,res)=>{
    try{
        const {name,email,password}=req.body;
        const userExit=await User.findOne({email});
        if(userExist){
            return res.status(400).json({message:"User already Exist"})
        }
        const hashedPassword= await bcrypt.hash(password,10)//10 to 208(solid value ,till that it will show the length)
        const nweUser=await User.create({
            name,
            email,
            password:hashedPassword,
        });

        res.status(201).json({
            message:"User registered successfully",
            user:nweUser,
        });
    }catch(err){
        res.status(500).json({error:err.message});
    }
};

//Login user
exports.loginUser=async(req,res)=>{
    try{
        const{email,password}=req.body;
        const user=await User.findOne({email});
        if (!user) return res.status(404).json({message:"User Exist"})

        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch)
            return res.status(400).json({message:"Invaild credition"})
        res.json({message:"Login successfully",user});    
        }catch(err){
            res.status(500).json({error:err.message})
        }
}

//Single User
exports.getUserDetails = async (req, res) => {
    try {
        const userId = req.params.id;  

        const user = await User.findById(userId).select("-password"); 
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({ user });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};

