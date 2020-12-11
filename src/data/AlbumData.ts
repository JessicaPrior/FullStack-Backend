import { Album } from '../model/Album';
import BaseDataBase from './BaseDatabase';


export class AlbumDataBase extends BaseDataBase {
    private static TABLE_NAME = "Album_Table";

    public async createAlbum(
        id: string,
        title: string,
        subtitle: string,
        image: string

    ): Promise<any> {
        try {

            await BaseDataBase.connection
                .insert({
                    id,
                    title,
                    subtitle,
                    image
                })
                .into(AlbumDataBase.TABLE_NAME)

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async getAllAlbuns(): Promise<Album> {
        try {
            const result = await BaseDataBase.connection.raw(`
          SELECT * from ${AlbumDataBase.TABLE_NAME} 
       `);
            return (result[0]);
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getAlbumById(id: string): Promise<Album> {
        try {
            const result = await BaseDataBase.connection.raw(`
          SELECT * from ${AlbumDataBase.TABLE_NAME} WHERE id = '${id}'
       `);
            return Album.toAlbumModel(result[0][0]);
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async addItem(id: string): Promise<Album> {
        try {
            const result = await BaseDataBase.connection.raw(`
          INSERT * from ${AlbumDataBase.TABLE_NAME} WHERE id = '${id}'
       `);
            return Album.toAlbumModel(result[0][0]);
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}