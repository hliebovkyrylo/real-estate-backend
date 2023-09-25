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
    bathrooms: {
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
    projectsName: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},
{
    timestamps: true
},
);

export default mongoose.model('Project', projectSchema);