const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const userRoutes = require("./router/userRouter");
const blogsRoutes = require("./router/blogsRouter");
const socialRoutes = require("./router/socialRouter");
const projectsRoutes = require("./router/projectRouter");
const techStackRoutes = require("./router/techStackRouter");
const educationRoutes = require("./router/educationRouter");
const expreinceRoutes = require("./router/experienceRouter");
const userInformationRoutes = require("./router/userInformationRouter");

connectDB();
dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json({ limit: "10mb" }));

app.use("/api/users", userRoutes);
app.use("/api/blogs", blogsRoutes);
app.use("/api/socials", socialRoutes);
app.use("/api/projects", projectsRoutes);
app.use("/api/education", educationRoutes);
app.use("/api/techStack", techStackRoutes);
app.use("/api/experience", expreinceRoutes);
app.use("/api/userInformation", userInformationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
