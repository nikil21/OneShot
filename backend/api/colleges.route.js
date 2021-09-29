import express from "express"
import CollegesCtrl from "./colleges.controller.js"

const router = express.Router()

router.route("/").get(CollegesCtrl.apiGetColleges);

router.route("/id/:id").get(CollegesCtrl.apiGetCollegeById)

router.route("/Courses").get(CollegesCtrl.apiGetCollegeCourses)


export default router