const newsRouter = require("./news");
const siteRouter = require("./site");
const inputGroupRouter = require("./inputgroup");

function route(app) {
  app.use("/inputgroup", inputGroupRouter);
  app.use("/news", newsRouter);
  app.use("/", siteRouter);

  app.post("/search", (req, res) => {
    console.log(req.body);
    res.send("");
  });
}

module.exports = route;
