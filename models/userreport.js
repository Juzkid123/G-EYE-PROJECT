import mongoose from "mongoose";


const userReportSchema = new mongoose.Schema({
    title: { type: String, required: true },
    dateReported: { type: String },
    description: { type: String, required: true },
    email: { type: String, required: false},
    image: { type: String, required: true },
    location: { type: String, required: true },
    map: { type: String }
},
{ timestamps: true }
);

const  userReport = mongoose.model("Report", userReportSchema);

export default   userReport;
