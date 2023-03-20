import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    neighbourhood: {
        type: String,
        required: true,
    },
    propertyType: {
        type: String,
    },
    poster: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber: {
        type: String,
        unique: true,
    },
    avatarUrl: {
        type: String,
    },
    acceptedCurrencies: {
        type: String,
    },
    size: {
        type: String,
    },
    bedrooms: {
        type: String,
    },
    rathrooms: {
        type: String,
    },
    yearBuilt: {
        type: String,
    },
    floors: {
        type: String,
    },
    description: {
        type: String,
        required: true,
    },
    videoLink: {
        type: String,
    },
});

export default mongoose.model('Project', projectSchema);