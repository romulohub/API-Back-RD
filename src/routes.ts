import { EpisodiosController } from "./controller/EpisodiosController"
import { UserRDController } from "./controller/UserRDController"

export const Routes = [{
    method: "get",
    route: "/episodios",
    controller: EpisodiosController,
    action: "all"
}, {
    method: "get",
    route: "/episodios/:id",
    controller: EpisodiosController,
    action: "one"
}, {
    method: "post",
    route: "/episodios",
    controller: EpisodiosController,
    action: "save"
}, {
    method: "delete",
    route: "/episodios/:id",
    controller: EpisodiosController,
    action: "remove",
},
{
    method: "get",
    route: "/users",
    controller: UserRDController,
    action: "all"
},
{
    method: "get",
    route: "/users/:id",
    controller: UserRDController,
    action: "one"
},
{
    method: "post",
    route: "/users",
    controller: UserRDController,
    action: "save"
},
{
    method: "delete",
    route: "/users/:id",
    controller: UserRDController,
    action: "remove"

}]