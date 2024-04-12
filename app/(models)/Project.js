import mongoose, { Schema } from "mongoose";

// mongoose.connect(process.env.MONGODB_URI).then(()=> {
//     console.log("Connected");
// }).catch((error)=> {
//     console.log("Erorr connecting", error)
// })
// mongoose.Promise = global.Promise

const projectSchema = new Schema(
  {
    projectTitle: String,
    shortDescription: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
    logo: String,
    x_social_link: String,
  },
  {
    timestamps: true,
  }
);

const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);
export default Project;
