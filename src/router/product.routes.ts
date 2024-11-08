import { Request, Response, Router } from "express";
import { products } from "../data/product";

const router = Router()
router
    .get("/products", (req: Request, res: Response) => {
        res.status(200).json(products)
    })
    .get("/products/category/:category",(req: Request, res: Response) => {
        const {category}= req.params
        console.log(category)
        res.status(200).json()
    }
    )
export { router }