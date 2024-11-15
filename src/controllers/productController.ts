import { Request, Response, Router } from "express";
import { products } from "../data/product";

export const getAllProducts = (req: Request, res: Response) => {
    res.status(200).json(products)
};

export const getProductsByCategory = (req: Request, res: Response) => {
    // CATEGORY É O PARÂMETRO QUE O USUÁRIO ME ENVIA NA REQUISIÇÃO.
    const { category } = req.params;
    // MINHA NEW LIST É A LISTA DE ELEMENTOS BASEADO NA CATEGORIA QUE O USUÁRIO REQUISITOU.
    const newList = products.filter((product) => {
        return product.category === category;
    });
        res.status(200).json(newList);
};

export const createProduct = (req: Request, res: Response) => {
    //CORPO QUE RECEBO COM AS INFORMAÇÕES DO MEU PRODUTO DO CLIENT
    const { name, description, specifications, image, category } = req.body;
    //FORMA OLHANDO PARA A CHAVE DO OBJETO
    const hasInvalidKeys = !name || !description || !category;
    const hasEmptyKeys = name.trim() === "" || description.trim() === "" || category.trim() === "";

    if (hasInvalidKeys || hasEmptyKeys) {
        res.status(400).send('Chave name, descrição e categoria são obrigatórias.')
    }

    const newProduct = {
        id: Date.now(),
        name,
        description,
        category,
        specifications: specifications || {},
        image: image || "",
    };

    products.push(newProduct);

    res.status(201).json(newProduct);
};


export const deleteProductById = (req: Request, res: Response) => {
    const { id } = req.params;
    const deleteIndex = products.findIndex((product) => {
        // Maneiras de converter string numerica em Number
        // -> id: '1' => +id
        // parseInt(id)
        // Number(id)
        return product.id === Number(id)
    })
    //verefica de o index(posição) é igual a -1, que não existe, então por isso dá erro se tiver nenhum indice
    if (deleteIndex === -1) {
        res.status(401).json()
    }
    //aqui cria a const de deletar o produto, que vai ser tudo da array de products e com o splice ele pega o elemento e a posição que ele se encontra
    const deleteProduct = products.splice(deleteIndex, 1);

    res.sendStatus(204)
};