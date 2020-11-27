const mongoose= require('mongoose');

const URI= 'mongodb+srv://ammar123:9000@shopping.y2z1m.mongodb.net/shoppingproducts?retryWrites=true&w=majority';

const connectDB=async()=>{
    await mongoose.connect(URI,{useNewUrlParser:true, useUnifiedTopology: true });
    console.log('Db connected....');
}

module.exports= connectDB;