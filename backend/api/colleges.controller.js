import CollegesDAO from "../dao/collegesDAO.js"

export default class CollegesController {
  static async apiGetColleges(req, res, next) {
    const collegesPerPage = req.query.collegesPerPage ? parseInt(req.query.collegesPerPage, 10) : 100
    const page = req.query.page ? parseInt(req.query.page, 10) : 0

    let filters = {}
    if (req.query.Courses) {
      filters.Courses = req.query.Courses
    } else if (req.query.ID) {
      filters.ID = req.query.ID
    } else if (req.query.name) {
      filters.name = req.query.name
    }

    const { collegesList, totalNumcolleges } = await CollegesDAO.getColleges({
      filters,
      page,
      collegesPerPage,
    })

    let response = {
      colleges: collegesList,
      page: page,
      filters: filters,
      entries_per_page: collegesPerPage,
      total_results: totalNumcolleges,
    }
    res.json(response)
  }
  static async apiGetCollegeById(req, res, next) {
    try {
      let id = req.params.id || {}
      let college = await CollegesDAO.getCollegeByID(id)
      if (!college) {
        res.status(404).json({ error: "Not found" })
        return
      }
      res.json(college)
    } catch (e) {
      console.log(`api, ${e}`)
      res.status(500).json({ error: e })
    }
  }

  static async apiGetCollegeCourses(req, res, next) {
    try {
      let courses = await CollegesDAO.getCourses()
      res.json(courses)
    } catch (e) {
      console.log(`api, ${e}`)
      res.status(500).json({ error: e })
    }
  }
}