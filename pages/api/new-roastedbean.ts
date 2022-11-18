import { NextApiRequest, NextApiResponse } from "next";
import { post } from "../../db_interfacing/crudMethod";
const {MongoClient} = require('mongodb');

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method == 'POST') {
        const collectionName = 'RoastedBean';
        await post(collectionName, req, res)
    }
}