import BaseDataBase from "./BaseDatabase";
import { Image } from '../model/Image';

export class ImageDatabase extends BaseDataBase {
    private static TABLE_NAME = "Image_Table";

    private static Table_Hashtag = "Hashtag_Table;"

    public async createImage(
        id: string,
        subtitle: string,
        author: string,
        date: Date,
        file: string,
        tags: string[],
        collection: string
    ): Promise<void> {
        try {
            const result = await BaseDataBase.connection(ImageDatabase.Table_Hashtag)
                .select("hashtag")
                .where(tags)

            if (!result[0][0]) {
                await BaseDataBase.connection(ImageDatabase.Table_Hashtag)
                    .insert(id, tags)
            }

            await BaseDataBase.connection
                .insert({
                    id,
                    subtitle,
                    author,
                    date,
                    file,
                    tags,
                    collection
                })
                .into(ImageDatabase.TABLE_NAME);
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async getAllImages(): Promise<Image> {
        try {
            const result = await BaseDataBase.connection.raw(`
          SELECT * from ${ImageDatabase.TABLE_NAME} 
       `);
            return (result[0][0]);
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getImageById(id: string): Promise<Image> {
        try {
            const result = await BaseDataBase.connection.raw(`
          SELECT * from ${ImageDatabase.TABLE_NAME} WHERE id = '${id}'
       `);
            return (result[0][0]);
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}