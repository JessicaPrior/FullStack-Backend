import BaseDataBase from "./BaseDatabase";
import { Image } from '../model/Image';

export class ImageDatabase extends BaseDataBase {
    private static TABLE_NAME = "Image_Table";

    private static Hashtag_Table = "Hashtag_Table"

    public async createImage(
        id: string,
        subtitle: string,
        author: string,
        date: Date,
        file: string,
        tags: string[],
        collection: string,
        author_name: string
    ): Promise<any> {
        try {

            await BaseDataBase.connection(ImageDatabase.TABLE_NAME)
                .insert({
                    id,
                    subtitle,
                    author,
                    date,
                    file,
                    tags,
                    collection,
                    author_name
                })
                
            const result = await BaseDataBase.connection(ImageDatabase.Hashtag_Table)
                .select("tags")
                .where({tags})

            if (result.length <= 0) {
                await BaseDataBase.connection(ImageDatabase.Hashtag_Table)
                    .insert({ id, tags })
            }
            return 
        } catch (error) {
            
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async getAllImages(): Promise<Image> {
        try {
            const result = await BaseDataBase.connection.raw(`
          SELECT * from ${ImageDatabase.TABLE_NAME} 
       `);
            return (result[0]);
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getImageById(id: string): Promise<Image> {
        try {
            const result = await BaseDataBase.connection.raw(`
          SELECT * from ${ImageDatabase.TABLE_NAME} WHERE id = '${id}'
       `);
            return Image.toImageModel(result[0][0]);
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}