const Course = require("../models/Course");

class MeController {
  // [GET] /me/stored/courses
  storedCourses(req, res, next) {
    Course.find({ deletedAt: null })
      .lean()
      .then((course) => {
        res.render("me/stored-courses", { course });
      })
      .catch(next);
  }
}

module.exports = new MeController();
