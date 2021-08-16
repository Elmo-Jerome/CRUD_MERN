const express = require("express")
const cors = require("cors")

const PORT = 4000;

const app = express()

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
})