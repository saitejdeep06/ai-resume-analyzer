const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const resumeRoutes = require("./routes/resumeRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/resume", resumeRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/resumeDB")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log(err));

app.listen(5000, () => console.log("🚀 Server running on port 5000"));const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const resumeRoutes = require("./routes/resumeRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/resume", resumeRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/resumeDB")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log(err));

app.listen(5000, () => console.log("🚀 Server running on port 5000"));const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const resumeRoutes = require("./routes/resumeRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/resume", resumeRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/resumeDB")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log(err));

app.listen(5000, () => console.log("🚀 Server running on port 5000"));