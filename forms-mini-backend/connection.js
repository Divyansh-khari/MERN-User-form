const mongoose = require("mongoose")

const connectDb = async () => {
    const connection = await mongoose.connect("mongodb+srv://dannykhari:CAbjJG7UhsYL7EWK@cluster0.rsegxce.mongodb.net/")
    if (connection) {
        console.log("Connection Established ✔")
    }
}

module.exports = { connectDb }