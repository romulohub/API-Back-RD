import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { UserRD } from "../entity/UserRD"
import { getRepository } from "typeorm"


export class UserRDController {

    private UserRDRepository = AppDataSource.getRepository(UserRD)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.UserRDRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.UserRDRepository.findOneBy({ id: request.params.id })
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.UserRDRepository.save(request.body)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let UserRDToRemove = await this.UserRDRepository.findOneBy({ id: request.params.id })
        await this.UserRDRepository.remove(UserRDToRemove)
    }

}