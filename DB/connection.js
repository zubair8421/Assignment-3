const mongoose= require('mongoose');

const URI= 'mongodb+srv://zubair:1234@cluster0.t5cvz.mongodb.net/assignment?retryWrites=true&w=majority';

const connectDB=async()=>{
    await mongoose.connect(URI,{useNewUrlParser:true, useUnifiedTopology: true });
    console.log('Db connected....');
}

module.exports= connectDB;