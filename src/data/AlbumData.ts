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
            select im.file from Album_Table at 
            left join Inserction_Table it on it.album_id = at.id 
            join Image_Table im on it.image_id = im.id 
            where album_id = '${id}'
       `);
            return (result[0]);
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async addItem(id: string, image_id: string, album_id: string): Promise<any> {
        try {
            const search = await BaseDataBase.connection.raw(`
                select * from Inserction_Table where image_id = '${image_id}'
            `)

            if (search[0].length > 0) {
                throw new Error("Image already exists");
            }
            const result = await BaseDataBase.connection
                .insert({
                    id,
                    image_id,
                    album_id
                })
                .into("Inserction_Table")
            return (result);
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}