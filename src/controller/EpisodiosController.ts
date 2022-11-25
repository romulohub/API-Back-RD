import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Episodios } from "../entity/Episodios"
import { getRepository } from "typeorm"

export class EpisodiosController {

    private EpisodiosRepository = AppDataSource.getRepository(Episodios)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.EpisodiosRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.EpisodiosRepository.findOneBy({ id: request.params.id })
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.EpisodiosRepository.save(request.body)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let EpisodiosToRemove = await this.EpisodiosRepository.findOneBy({ id: request.params.id })
        await this.EpisodiosRepository.remove(EpisodiosToRemove)
    }

}