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
    }
});

//Grab a single song in the database
router.get("/songs/:id", async (req,res) =>{
    try{
       const song = await Song.findById(req.params.id)
       res.json(song)
    }
    catch (err){
        res.status(400).send(err)

    }
})

///update is to update and existing record/resource/database entry...it uses a put request
router.put("/songs/:id", async(req,res) =>{
    //first we need to find and update the song the front end wants us to update.
    // to do this we need to request the id of the song from the request and then find it in the database to update it
    try{
        const song = req.body
        await Song.updateOne({_id : req.params.id})
        console.log(song)
        res.sendStatus(204)
    }
    catch(err){
        if(err){
            res.status(400).send(err)
        }
    }
})


// All requests that usually use api start with /api... so the url would be localhost:3000/api/songs
app.use("/api", router)
app.listen(3000)