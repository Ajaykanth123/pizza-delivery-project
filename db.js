const mongoose=require("mongoose")

var mongoURL='mongodb+srv://ajaykanth8897:Ajaykanth@cluster0.ehuw3nx.mongodb.net/mern-pizza'

mongoose.connect(mongoURL ,{useUnifiedTopology:true ,useNewUrlParser:true})

var db =mongoose.connection

db.on('connected' ,()=>{
    console.log('Mongodb connection sucessfully database')
})

db.on('error' ,()=>{
    console.log('mongoDB Connection failed')
})
 
module.exports = mongoose 