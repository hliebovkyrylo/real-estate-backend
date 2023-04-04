import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  address: String,
  price: Number,
  neighbourhood: String,
  propertyType: String,
  poster: String,
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  avatarUrl: String,
  acceptedCurrencies: String,
  size: String,
  bedrooms: String,
  bathrooms: String,
  yearBuilt: Date,
  floors: String,
  description: String,
  videoLink: String,
});

export default mongoose.model('Project', projectSchema);