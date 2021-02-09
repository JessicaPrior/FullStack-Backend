import { AlbumDataBase } from "../data/AlbumData";
import { CustomError } from "../error/CustomError";
import { AlbumInputDTO } from "../model/Album";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";


export class AlbumBusiness {
    public async createAlbum(album: AlbumInputDTO, user: any) {
        try {

            const authenticator = new Authenticator();

            const verifyToken = authenticator.getData(user.token)

            if (!album.title || !album.subtitle || !album.image) {
                throw new CustomError("Missing input", 422);
            }

            if (!verifyToken) {
                throw new CustomError("Not authorized", 401);
            }

            const idGenerator = new IdGenerator();
            const id = idGenerator.generate();

            const albumDataBase = new AlbumDataBase();
            const result = await albumDataBase.createAlbum(

                id, album.title, album.subtitle, album.image

            );

            return result;
        } catch (error) {
            
            throw new CustomError(error.message, error.statusCode)
        }
    }

    public async getAllAlbuns(user: any) {
        try {
            const authenticator = new Authenticator();

            const verifyToken = authenticator.getData(user)

            if (!verifyToken) {
                throw new CustomError("Not authorized", 401);
            }

            const albumDataBase = new AlbumDataBase();
            const album = await albumDataBase.getAllAlbuns();

            return album

        } catch (error) {
            throw new CustomError(error.message, error.statusCode)
        }
    }

    public async getAlbumById(input: any) {
        try {

            const albumDataBase = new AlbumDataBase();
            const album = await albumDataBase.getAlbumById(input);

            if (!input) {
                throw new CustomError("invalid-id", 401)
            }

            return {
               album
            }
        } catch (error) {
            throw new CustomError(error.message, error.statusCode)
        }
    }

    public async addItem(input: any){
        try {

            const idGenerator = new IdGenerator();
            const id = idGenerator.generate();

            const albumDataBase = new AlbumDataBase();
            const item = await albumDataBase.addItem(id, input.image_id, input.album_id);

            return item;
            
        } catch (error) {
            throw new CustomError(error.message, error.statusCode)
        }
    }
}