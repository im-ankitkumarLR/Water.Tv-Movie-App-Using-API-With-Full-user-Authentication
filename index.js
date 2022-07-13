const connectToMongo = require('./db');
const express = require('express')
// var cors = require('cors')

connectToMongo();

const app = express()
const port = 8000

 
// app.use(cors())


 
app.use(express.json()); 


//  Available Routes 

app.use('/api/auth', require('./routes/auth'))
 


 
app.listen(port, () => {
  console.log(`Movie.Tv listening on port http://localhost:${port}`)
})