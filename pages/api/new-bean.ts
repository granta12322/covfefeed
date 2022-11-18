import { NextApiRequest, NextApiResponse } from "next";
import {post} from '../../db_interfacing/crudMethod';
const {MongoClient} = require('mongodb');

async function handler(req:NextApiRequest,res:NextApiResponse) {
    //connect to client
    // find db and locate collection
    // use insertone
    // record result
    // close connection
    // modify response object
    // error handle
    if (req.method == 'POST') {
        const collectionName = 'bean'
        await post(collectionName,req,res);

    }
}