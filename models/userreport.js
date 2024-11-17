import mongoose from "mongoose";


const userReportSchema = new mongoose.Schema({
    title: { type: String, required: true },
    dateReported: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    location: { type: String, required: true },
    map: { type: String, required: true }
},
{ timestamps: true }
);

const  userReport = mongoose.model("Report", userReportSchema);

export default   userReport;
