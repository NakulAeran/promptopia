import mongoose from 'mongoose';

let uri = 'mongodb+srv://nakul:-978u_V2mZzXTiH@cluster0.ud3ycxn.mongodb.net/?retryWrites=true&w=majority'

let isConnected = false; // track the connection

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if(isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONOGDB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    isConnected = true;

    console.log('MongoDB connected')
  } catch (error) {
    console.log(`Hello ${error}`);
  }
}