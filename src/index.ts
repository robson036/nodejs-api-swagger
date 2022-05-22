import express, { Application } from "express"
import Router from "./routes"
import swaggerUi from "swagger-ui-express"

const PORT = process.env.PORT || 3000

const app: Application = express()

app.use(Router)

app.use(express.json())
app.use(express.static("public"))

app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
        swaggerOptions: {
            url: "/swagger.json",
        },
    })
)

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
