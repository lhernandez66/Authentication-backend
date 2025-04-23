// Setup – similar to default tags in HTML
const express = require("express")
const Song = require("./models/songs")
var cors = require('cors')

const app = express()
app.use(cors())
// Middleware that parses HTTP requessts with JSON body
app.use(express.json())

const router = express.Router()

//grab all the songs on a database
router.get("/songs", async (req, res) => {
    try {
        const songs = await Song.find({});
        res.send(songs);
        console.log(songs);
    } catch (err) {
        console.log(err)
    }
});
router.post("/songs", async (req, res) => {
    try {
        const song = new Song(req.body);
        await song.save();
        res.status(201).json(song);
        console.log(song);
    } catch (err) {
        res.status(400).send(err);
        console.log(err);
    }
});


// All requests that usually use api start with /api... so the url would be localhost:3000/api/songs
app.use("/api", router)
app.listen(3000)