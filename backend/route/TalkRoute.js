import Thread from '../models/ThreadModel.js'
import express from 'express'
const router = express.Router(); 

export const talkRouter = router.post('/talk',  async (req, res) => {
   var {userName, link, title, body, likes, isLiked, dislikes} = req.body; 
    try {
        const newThread = new Thread({userName, link, title, body, likes, isLiked, dislikes}); 
        newThread.save(); 
        res.json("Saved"); 
    }
    catch(error) {
        res.status(409).json({message: error.message});
    } 
}); 
