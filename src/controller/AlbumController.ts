import { AlbumInputDTO } from "../model/Album";
import { Request, Response } from "express";
import { AlbumBusiness } from "../business/AlbumBusiness";

export class AlbumController {
    async createAlbum(req: Request, res: Response) {
        try {

            const album: AlbumInputDTO = {
                title: req.body.title,
                subtitle: req.body.subtitle,
                image: req.body.image
            }

            const user: any = {
                token: req.headers.authorization as string
            }

            const albumBusiness = new AlbumBusiness();
            await albumBusiness.createAlbum(album, user);

            res.status(200).send({ message: "Album published succefully" });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }

    public async getAllAlbuns(req: Request, res: Response) {
        try {

            const { authorization }: any = req.headers

            const albumBusiness = new AlbumBusiness();
            const result = await albumBusiness.getAllAlbuns(authorization)

            res.status(200).send(result);

        } catch (error) {
            res.status(400).send({ error: error.message })
        }
    }

    public async getAlbumById(req: Request, res: Response) {
        try {

            const input = {
                id: req.params.id
            }

            const albumBusiness = new AlbumBusiness();
            const result = await albumBusiness.getAlbumById(input.id)

            res.status(200).send(result);

        } catch (error) {
            res.status(400).send({ error: error.message })
        }
    }

    public async addItem(req: Request, res: Response) {
        try {

            const input = {
                image_id: req.body.image_id,
                album_id: req.body.album_id
            }

            const albumBusiness = new AlbumBusiness();
            await albumBusiness.addItem(input)

            res.status(200).send({ message: "Image added successfully" });

        } catch (error) {
            res.status(400).send({ error: error.message })
        }
    }
}