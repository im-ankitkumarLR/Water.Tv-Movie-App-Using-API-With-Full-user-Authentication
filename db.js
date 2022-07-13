 // to connect with mongo db server 

const mongoose = require('mongoose');

// put mongodb string here 
const mongURI="mongodb+srv://Ankitkumar:Mongodb%40420@test.hwwa3.mongodb.net/MovieData";
   
// agar kahi or deploye krna hoga to apko ye string change krni hogi upper waali  (This is called connection string)


// connect with Database

const connectToMongo =()=>{
    mongoose.connect(mongURI,()=>{
 
        console.log("Connected to mongo Successfully");
   
    })

}

module.exports =connectToMongo;

// yaha tak ka ye ek function hai jo DataBase se connect krta hai 
// _______________________________________________________________________







