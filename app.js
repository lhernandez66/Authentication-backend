// Setup – similar to default tags in HTML
const express = require("express");
// We have to use cors in order to host front end and backend on the same site
var cors = require("cors");

// Activate Express app
const app = express();
app.use(cors());
const router = express.Router();

// Define a route to get songs
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
    ];
    res.json(songs);
});

// Mount API routes under /api
app.use("/api", router);

// Start server
app.listen(3000, () => {
    console.log("Server listening on http://localhost:3000");
});
