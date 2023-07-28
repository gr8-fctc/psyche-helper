import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    username: {
        required: true,
        unique: true,
        type: String,
    },

    email: {
        required: false,
        unique: false,
        type: String,
    },

    token: {
        type: String,
        required: false,
        unique: false,
        default: "",
    },

    password: {
        type: String,
        required: true,
        unique: false,
    },

    cwi: {
        type: Array,
        value: [new mongoose.Schema({cwi: Number})],
        required: false,
    },

    swi: {
        type: Array,
        value: [new mongoose.Schema({cwi: Number})],
        required: false,
    },

    ewi: {
        type: Array,
        value: [new mongoose.Schema({cwi: Number})],
        required: false,
    },

    pwi: {
        type: Array,
        value: [new mongoose.Schema({cwi: Number})],
        required: false,
    },

    cwi_last_week: {
        type: Number,
        //default: 69
    },

    swi_last_week: {
        type: Number,
        //default: 96,
    },
    ewi_last_week: {
        type: Number,
    },

    pwi_last_week: {
        type: Number,
    }
});

//let UModel = mongoose.model("User", UserSchema);

let UModel = mongoose.models.User ?? mongoose.model('User', UserSchema);

export default UModel;