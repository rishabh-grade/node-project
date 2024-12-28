const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userFirstName: {
        type: String
    },
    userLastName: {
        type: String
    },
    userMobileNumber: {
        type: Number
    },
    userPassword: {
        type: String
    }
},
    {
        timestamps: true
    });

module.exports = mongoose.model("User", UserSchema)