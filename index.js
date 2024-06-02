// HINTS:
// 1. Import express and axios
import express from "express"
import axios from"axios"

const app = express();
const port = 3000
const API_URL = "https://secrets-api.appbrewery.com"

app.use(express.static("public"))
app.use(express.urlencoded({extended: true}));


app.get("/", async (req, res) =>{
    const response = await axios.get(API_URL + "/random");
    const result = response.data;
    console.log(result)
    res.render("index.ejs", {secret: result.secret, user: result.username});
})

app.listen(port, () =>{
    console.log(`Listening on ${port}`)
})

// 2. Create an express app and set the port number.

// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
