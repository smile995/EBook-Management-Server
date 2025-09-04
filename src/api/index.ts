import type { Application } from "express"
import { authRoutes } from "../app/routes/auth.routes"
import { EBookRoutes } from "../app/routes/ebook.routes"
import { LibraryRoutes } from "../app/routes/library.models"

const moduleRoutes = [
  {
    path: "/api/auth",
    route: authRoutes,
  },
  {
    path: "/api/ebooks",
    route: EBookRoutes,
  },
  {
    path: "/api/libraries",
    route: LibraryRoutes,
  },
  

]

export const initialRoute = (app: Application) => {
  moduleRoutes.forEach((route) => app.use(route.path, route.route))
}