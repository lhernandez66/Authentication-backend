// Setup – similar to default tags in HTML
const express = require("express")
// We have to use cors in order to host front end and backend on the same site
var cors = require("cors")

// Activate or tell this app variable to be an express server
const app = express()
app.use(cors())
const router = express.Router()

// making an api using routes
// routes are used to handle browser requests. They look like urls.
router.get("/songs", function (req, res) {
    const songs = [
        {
            title: "We Found Love",
            artist: "Rihanna",
            popularity: 10,
            releaseDate: new Date(2011, 9, 22),
            genre: ["electro house"]
        },
        {
            title: "Happy",
            artist: "Pharrell Williams",
            popularity: 10,
            releaseDate: new Date(2013, 11, 21),
            genre: ["soul", "new soul"]
        }
    ]
    res.json(songs)
})

// All requests that usually use api start with /api... so the url would be localhost:3000/api/songs
app.use("/api", router)
app.listen(3000)