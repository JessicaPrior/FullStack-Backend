import { ImageInputDTO } from "../model/Image";
import { Request, Response } from "express";
import { ImageBusiness } from "../business/ImageBusiness";

export class ImageController {
    async createImage(req: Request, res: Response) {
        try {

            const image: ImageInputDTO = {
                subtitle: req.body.subtitle,
                file: req.body.file,
                tags: req.body.tags,
                collection: req.body.collection
            }

            const user: any = {
                token: req.headers.authorization as string
            }

            const imageBusiness = new ImageBusiness();
            await imageBusiness.createImage(image, user);

            res.status(200).send({ message: "Image published succefully" });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }

    public async getAllImages(req: Request, res: Response) {
        try {

            const { authorization }: any = req.headers

            const imageBusiness = new ImageBusiness();
            const result = await imageBusiness.getAllImages(authorization)

            res.status(200).send(result);

        } catch (error) {
            res.status(400).send({error: error.message})
        }
    }

    public async getImageById(req: Request, res: Response) {
        try {

            const input = {
                id: req.params.id
            }

            const imageBusiness = new ImageBusiness();
            const result = await imageBusiness.getImageById(input)

            res.status(200).send(result);

        } catch (error) {
            res.status(400).send({error: error.message})
        }
    }
}

