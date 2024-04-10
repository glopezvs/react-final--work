const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// JSON data
const homepageData = {
  name: "Gabriela",
  surname: "Lopez",
  age: 24,
  about: "I'm a front-end developer based in Aveiro, Portugal.",
  image: "logo.png",
  credential: "Education",
  more: "More about me",
  projects: "Projects",
  showcase: "Showcase",
  profiles: "Social",
  stay: "stay with me",
  specialization: "specialization",
  services: "Services Offering",
  let: "Let's",
  work: "work",
  together: "together"
};

// Endpoint to get the data
app.get("/api/data", (req, res) => {
  res.json(homepageData);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
