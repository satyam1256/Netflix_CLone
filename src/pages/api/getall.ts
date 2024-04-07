import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '../../../Lib/prismadb';
export default async function handler(req: NextApiRequest , res: NextApiResponse){
   try{
    const allUsers=await prismadb.user.findMany({});
    return res.status(200).json(allUsers);
   }
   catch(e){
    return res.status(400).end();
   }
}