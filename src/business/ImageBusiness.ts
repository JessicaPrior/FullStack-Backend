import { ImageDatabase } from "../data/ImageDataBase";
import { CustomError } from "../error/CustomError";
import { ImageInputDTO } from "../model/Image";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class ImageBusiness {
    public async createImage(image: ImageInputDTO, user: any) {
        try {
            const date = new Date();

            const authenticator = new Authenticator();

            const verifyToken = authenticator.getData(user.token)

            if (!image.subtitle || !image.file || !image.collection) {
                throw new CustomError("Missing input", 422);
            }

            if (!verifyToken) {
                throw new CustomError("Not authorized", 401);
            }

            const idGenerator = new IdGenerator();
            const id = idGenerator.generate();

            const imageDatabase = new ImageDatabase();
            const result = await imageDatabase.createImage(

                id, image.subtitle, verifyToken.id,
                date, image.file, image.tags,
                image.collection
            );

            return result;
        } catch (error) {
            throw new CustomError(error.message, error.statusCode)
        }
    }

    public async getAllImages(user: any) {
        try {
            const authenticator = new Authenticator();

            const verifyToken = authenticator.getData(user)

            if (!verifyToken) {
                throw new CustomError("Not authorized", 401);
            }

            const imageDatabase = new ImageDatabase();
            const image = await imageDatabase.getAllImages();

            return image

        } catch (error) {
            throw new CustomError(error.message, error.statusCode)
        }
    }

    public async getImageById(input: any) {
        try {

            const imageDatabase = new ImageDatabase();
            const image = await imageDatabase.getImageById(input.id);

            if (!input.id) {
                throw new CustomError("invalid-id", 401)
            }

            return {
                id: image.getId(),
                subtitle: image.getSubtitle(),
                author: image.getAuthor(),
                date: image.getDate(),
                file: image.getFile(),
                tags: image.getTags(),
                collection: image.getCollection()
            }

        } catch (error) {
            throw new CustomError(error.message, error.statusCode)
        }
    }
}