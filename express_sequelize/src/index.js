const express = require('express')
const cors=require('cors')
const bodyParser = require('body-parser')
const app = express()
const db = require('./query')
const port = 3030

app.use(cors());
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
)
app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});
app.get('/donadores', db.getDonadores)
app.post('/donadores/create', db.postDonadores)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})