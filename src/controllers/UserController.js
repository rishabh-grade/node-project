const User = require("../models/UserModel")

const createUser = async(req, res)=>{
    try{
        const userData = new User({
            userFirstName :req.body.firstName,
            userLastName :req.body.lastName,
            userMobileNumber :req.body.phone
           })
           await userData.save()
           res.status(200).json({
            isSuccess: true,
            result: userData,
            message: 'User Created Successfully',
        });
           
    }
    catch(err){
        console.log(err)
    }
}

const getUser = async (req, res)=>{
    try{
        const userData = await User.find({})
        res.status(200).json({
            isSuccess:true,
            result:userData,
            message:"User Data Fetched Successfully"
        })
    }catch(err){
        console.log(err)
    }

}

module.exports ={
    createUser,
    getUser  
}