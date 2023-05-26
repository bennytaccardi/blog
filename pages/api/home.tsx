'use server'

import IArticle from "@/models/article";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const testArticle: IArticle = {
        title: "test",
        description: "desctiption"
    }
    res.status(200).json([
        testArticle,
        testArticle,
        testArticle,
        testArticle
    ]);
}