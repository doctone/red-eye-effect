import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello Joel!" });
});

app.listen(port, () => {
  console.log(`Red-Eye-Effect 🦞 listening on port ${port}`);
});

export default app;
