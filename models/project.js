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
        required: true
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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
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
        required: true
    },
    size: {
        type: String,
        required: true
    },
    bedrooms: {
        type: String,
        required: true
    },
    rathrooms: {
        type: String,
        required: true
    },
    yearBuilt: {
        type: String,
        required: true
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