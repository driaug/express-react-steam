const express = require("express");
const steam = require("steam-login");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: true,
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
app.use(
  require("express-session")({
    resave: false,
    saveUninitialized: false,
    secret: "a secret",
  })
);
app.use(
  steam.middleware({
    realm: "http://localhost:2000/",
    verify: "http://localhost:2000/verify",
    apiKey: "" // Place your API key here,
  })
);

app.get("/", (req, res) => {
  if (req.user) {
    return res.status(200).json({ success: true, user: req.user });
  }

  return res.status(200).json({ success: false });
});

app.get("/authenticate", steam.authenticate());

app.get("/verify", steam.verify(), (req, res) => {
  return res.redirect("http://localhost:3000/");
});

app.get("/logout", steam.enforceLogin("/"), function (req, res) {
  req.logout();
  return res.redirect("http://localhost:3000/");
});

app.listen(2000, () => {
  console.log("Listening!");
});
