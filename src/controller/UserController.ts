import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { LoginInputDTO, UserInputDTO } from "../model/User";

export class UserController {
    /**
     * signup
     */
    public async signup(req: Request, res: Response ) {
        try {
            const input: UserInputDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                nickname: req.body.nickname
            }

            const userBusiness = new UserBusiness();
            const token = await userBusiness.signup(input);

            res.status(200).send({ token });
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }
    /**
     * login
     */
    public async login(req: Request, res: Response) {
        try {
            const loginData: LoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            };

            const userBusiness = new UserBusiness();
            const token = await userBusiness.login(loginData);

            res.status(200).send({ token });
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }
}

export const userController: UserController = new UserController();