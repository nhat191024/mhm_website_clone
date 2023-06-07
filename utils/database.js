import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected) {
        console.log('Mongoose is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.DATABASE, {
            dbName: "mhm_database",
            useNewUrlParser: true,
            useUnifiedTogology: true,
        })

        isConnected = true;

        console.log('mongooseDB connected')
    } catch (err) {
        console.log(err);
    }
}