const User = require("../../models/user")
const userSchema = require("../../schemas/userSchema")

const ADD_USER = async (req , res) =>{
    try {
        
        const userInfo = await userSchema.validateAsync(req.body)
        const {userName} = req.body
        const checkSameUser = await User.findOne({where:{userName}})
        if(checkSameUser){
            
            return res.status(400).send({
                message:"User Already Exist"
            })
        }
        const createUser = await User.create(userInfo)
        if(!createUser){
            return res.status(400).send({
                message:"Failed to Create User"
            })
        }
        res.status(200).send({
            message:"Successfully Created User"
        })
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

const SEARCH_USER_BY_NAME = async (req , res) =>{
    try {
        
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

const UPDATE_USER = async (req, res) =>{
    try {
        
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

const DELETE_USER = async (req, res) =>{
    try {
        
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

module.exports = {
    ADD_USER,
    SEARCH_USER_BY_NAME,
    UPDATE_USER
}