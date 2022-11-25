import * as express from "express"
import * as bodyParser from "body-parser"
import * as cors from 'cors';
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { Routes } from "./routes"
import { Episodios } from "./entity/Episodios"
import { UserRD } from "./entity/UserRD"


AppDataSource.initialize().then(async () => {

    const app = express()
    const cors=require('cors');

    app.use(bodyParser.json())
    app.use(cors());


    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next)
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined)

            } else if (result !== null && result !== undefined) {
                res.json(result)
            }
        })
    })

    // setup express app here
    // ...

    // start express server
    app.listen(3000)

    // insert new users for test
    await AppDataSource.manager.save(
        AppDataSource.manager.create(Episodios, {
            name: "Apresentando! Uzumaki Naruto",
            resumo: "Naruto uzumaki da o gás",
            capa: 1,
            personagem: "Naruto",
            duracao: 180
        })
    )
    await AppDataSource.manager.save(
        AppDataSource.manager.create(Episodios, {
            name: "Eu Sou o Konohamaru!",
            resumo: "Naruto se torna sensei do konohamaru",
            capa: 2,
            personagem: "Konohamaru",
            duracao: 210
        })
    )

    await AppDataSource.manager.save(
        AppDataSource.manager.create(UserRD, {
            firstName: "Rômulo",
            lastName: "Dorigan",
            age: 23,
        })
    )

    console.log("Express server has started on port 3000. Open http://localhost:3000/users or http://localhost:3000/episodios to see results")

}).catch(error => console.log(error))
