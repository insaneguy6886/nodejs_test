const newsRouter = require("./news");
const meRouter = require("./me");
const coursesRouter = require("./courses");
const siteRouter = require("./site");
const inputGroupRouter = require("./inputgroup");

function route(app) {
  app.use("/inputgroup", inputGroupRouter);
  app.use("/news", newsRouter);
  app.use("/me", meRouter);
  app.use("/courses", coursesRouter);
  app.use("/", siteRouter);

  app.post("/search", (req, res) => {
    console.log(req.body);
    res.send("");
  });
}

module.exports = route;
