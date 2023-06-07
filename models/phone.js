import { Schema, model, models } from "mongoose";

const PhoneSchema = new Schema({
    Name: {
        type: String,
        unique: true,
        require: true,
    },
    BrandName: {
        type: String,
        unique: false,
        require: true,
    },
    Pirce: {
        type: String,
        unique: false,
        require: true,
    },
    PictureUrl: {
        type: String,
        unique: false,
        require: true,
    },
    Screen: {
        type: String,
        require: false,
        unique: false,
    },
    OS: {
        type: String,
        unique: false,
        require: true,
    },
    BackCamera: {
        type: String,
        unique: false,
        require: true,
    },
    FontCamera: {
        type: String,
        unique: false,
        require: true,
    },
    CPU: {
        type: String,
        unique: false,
        require: true,
    },
    RAM: {
        type: String,
        unique: false,
        require: true,
    },
    ROM: {
        type: String,
        unique: false,
        require: true,
    },
    SIM: {
        type: String,
        unique: false,
        require: true,
    },
    Batery: {
        type: String,
        unique: false,
        require: true,
    },
    onSale: {
        type: Boolean,
        unique: false,
        require: true,
    }
});

const Phone = models.Phone || model("Phone", PhoneSchema);

export default Phone;