import { User } from "../model/User";
import BaseDataBase from "./BaseDatabase";

export class UserData extends BaseDataBase{
    /**
     * signup
     */
    private static TableName = "USER";

    public async signup(
        id: string,
        name: string,
        email: string,
        nickname: string,
        password: string
    ): Promise<void> {
        try {
            await BaseDataBase.connection
                .insert({
                    id,
                    name,
                    email,  
                    password,
                    nickname
                })
                .into(UserData.TableName)
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    /**
     * login
     */

    public async login(email: string): Promise<any>{
        try {
            const result = await BaseDataBase.connection
                .select("*")
                .from(UserData.TableName)
                .where({ email });

                return User.toUserModel(result[0]);
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async userById(id: string): Promise<any>{
        try {
            const result = await BaseDataBase.connection
                .select("*")
                .from(UserData.TableName)
                .where({ id });

                return User.toUserModel(result[0]);
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

}

export const userData: UserData = new UserData();