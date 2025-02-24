import express from 'express';
import {User} from "../other_services/models/seqModels.js"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import logger from '../other_services/winstonLogger.js';
dotenv.config

const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const {name, lastname, email, password} = req.body;
        const token = await signup_user(name, lastname, email, password);
        res.status(200).send({"User created: ": token});
    }catch(error){
        console.log("Error in signup route", error)
    }
});

export async function signup_user(name, lastname, email, password){
    try{
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            Name: name,
            Lastname: lastname,
            Email: email,
            Password: hashedPassword
   
        });

        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET);

        if(!token){
            logger.error("Error in creating token for user", user.id)
            console.log("Error in creating token for user", user.id)
            return res.status(400).send("Error in token")
        }else if(Name === null || Lastname === null || Email === null){
            logger.error("Error with name, lastname, email", user.id)
            console.log("Error in creating user", user.id)
            return res.status(401).send("Error in name, lastname or email")
        }else if(name < 3 || lastname < 3 || password < 3){
            logger.error("Too short name, lastname or password")
            console.log("Too short name, lastname or password")
            return res.status(402).send("Too short name, lastname or password")
        }else if(hashedPassword === null){
            logger.error("Error in hashing password", user.id)
            console.log("Error in hashing password", user.id)
        }
        return token;
    }catch(error){
        console.log("Error in signup_user function ", error)
        logger.error("Error in signup_user function ", error)
        return res.status(500).send("Error in signup_user function")
    }
}


export default router;