import mongodb from "mongodb"
const ObjectId = mongodb.ObjectID

let students

export default class StudentsDAO {
  static async injectDB(conn) {
    if (students) {
      return
    }
    try {
      students = await conn.db(process.env.STUDENTS_NS).collection("students")
    } catch (e) {
      console.error(`Unable to establish collection handles in userDAO: ${e}`)
    }
  }
}