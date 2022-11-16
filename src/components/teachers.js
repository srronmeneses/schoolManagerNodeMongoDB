const {
  mongo: { teachersModel },
} = require("../../databases")

module.exports = {
  getAll: (req, res) => {
    res.send("Working")
  },
  createOne: async (req, res) => {
    const { firstName, lastName, age } = req.body
    const newTeacher = new teachersModel({
      firstName,
      lastName,
      age,
    })
    await newTeacher.save()
    res.send(`${firstName} ${lastName} saved successfully! `)
  },
  updateOne: (req, res) => {
    res.send("Working")
  },
  deleteOne: (req, res) => {
    res.send("Working")
  },
}
