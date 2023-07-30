import { NextApiRequest } from "next";
//import  UserModel from '@/misc/models/User';
import dbConnect from "@/lib/dbConnect";
import bcrypt from "bcrypt";
import UModel from "@/misc/models/User";
import jwt, { Secret, JwtPayload, SignOptions, sign } from "jsonwebtoken";
import * as fs from "fs";
import * as path from "path";

async function writeData(username: string, email: string, password: string) {
  await dbConnect();
}

let dbConnected = false;

export default async function handler(req: any, res: any) {
  console.log(req.body);
  const { username, email, password, gender, age } = req.body;

  const saltedPassword = await bcrypt.hash(password, 10);

  const payload = {
    username: username,
    password: password,
  };

  const signInOptions: SignOptions = {
    expiresIn: "24h",
  };

  const token = jwt.sign(payload, "privateKey", signInOptions);

  dbConnect();

  const user = await UModel.findOne({ email });

  if ((await user) && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign(payload, "privateKey", signInOptions);
    user.token = token;
    await user.save();

    res.status(200).json(user);
  }

  res.send("Wrong email or password");
}
