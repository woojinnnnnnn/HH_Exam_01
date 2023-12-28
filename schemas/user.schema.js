import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String,  },
    email: { type: String },
    pw: { type: String }
})

export default mongoose.model('User', userSchema)