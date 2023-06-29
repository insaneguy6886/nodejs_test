class InputGroupController {
  //[GET] /inputgroup
  index(req, res) {
    res.render("inputgroup");
  }
}
module.exports = new InputGroupController();
