import { NextApiRequest, NextApiResponse } from "next";
const {MongoClient} = require('mongodb');

async function post(collectionName: string, req: NextApiRequest, res: NextApiResponse){
    const client = await MongoClient.connect("mongodb+srv://bobbob12322:Hnrdnr123@cluster0.x0lan.mongodb.net/test");
    const db = client.db()
    const collection = db.collection(collectionName)
    const result = await collection.insertOne(req.body)
    console.log(result);
    
    res.status(201).json({mesage:"Bean successfully added"})    // !!! Probably want to bubble this up to whether ot not the request incvluding purchase + roast bean counts
}

export {post}