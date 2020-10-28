const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, //
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)//log w/e error cause to not connect
    process.exit(1) //exit the server with failure 1?
  }
}

module.exports = connectDB