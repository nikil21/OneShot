import mongodb from "mongodb"
const ObjectId = mongodb.ObjectID
let colleges
let similarcolleges
let students

export default class CollegesDAO {
  static async injectDB(conn) {
    if (colleges) {
      return
    }
    try {
      colleges = await conn.db(process.env.COLLEGES_NS).collection("colleges")
      students = await conn.db(process.env.COLLEGES_NS).collection("students")
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in collegesDAO: ${e}`,
      )
    }
  }

  static async getColleges({
    filters = null,
    page = 0,
    collegesPerPage = 100,
  } = {}) {
    let query
    if (filters) {
      if ("name" in filters) {
        query = { $text: { $search: filters["name"] } }
      } else if ("ID" in filters) {
        query = { "ID": { $eq: filters["ID"] } }
      } else if ("Courses" in filters) {
        query = { "Courses": { $eq: filters["Courses"] } }
    }
    }

    let cursor
    
    try {
      cursor = await colleges
        .find(query)
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`)
      return { collegesList: [], totalNumColleges: 0 }
    }

    const displayCursor = cursor.limit(collegesPerPage).skip(collegesPerPage * page)

    try {
      const collegesList = await displayCursor.toArray()
      const totalNumcolleges = await colleges.countDocuments(query)

      return { collegesList, totalNumcolleges }
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`,
      )
      return { collegesList: [], totalNumcolleges: 0 }
    }
  }
  static async getCollegeByID(id) {
    try {
      const pipeline = [
        {
            $match: {
              _id: new ObjectId(id),
            },
        },    
                {
                  $lookup: {
                      from: "students",
                      let: {
                          id: "$ID",
                      },
                      pipeline: [
                          {
                              $match: {
                                  $expr: {
                                      $eq: ["$College_id", "$$id"],
                                  },
                              },
                          },
                          {
                              $sort: {
                                  date: -1,
                              },
                          },
                      ],
                      as: "students",
                  },
              },
              {
                  $addFields: {
                      students: "$students",
                  },
              },

              {
                  $lookup: {
                      from: "colleges",
                      let: {
                          state: "$State",
                      },
                      pipeline: [
                          {
                              $match: {
                                  $expr: {
                                      $eq: ["$State", "$$state"],
                                  },
                              },
                          },
                          {
                              $sort: {
                                  date: -1,
                              },
                          },
                      ],
                      as: "SimilarColleges",
                  },
              },
              {
                  $addFields: {
                      SimilarColleges: "$SimilarColleges",
                  },
              },
          ]

          return await colleges.aggregate(pipeline).next()

          

    } catch (e) {
      console.error(`Something went wrong in getCollegeByID: ${e}`)
      throw e
    }

    
  }


  static async getCourses() {
    let courses = []
    try {
      courses = ['Computer Science',
      'Electrical',
      'Electronics and Communication',
      'Mechanical',
      'Physics',
      'Design',
      'Humanities',
      'Ocean and Naval',
      'Chemical',
      'Civil',
      'IT']
      return courses
    } catch (e) {
      console.error(`Unable to get courses, ${e}`)
      return courses
    }
  }
}