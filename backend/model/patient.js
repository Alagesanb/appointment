const mongoose = require("mongoose")

var schema = mongoose.Schema;

var patientSchema = new schema({

    patient:
    {
        type:String,
        required:true
    },
    contact:
    {
        type:String,
        required:true
    },appointment:
    {
        type:String,
        required:true
    },wanted:
    {
        type:String,
        required:true
    }


        
});
const model=mongoose.model('Tb_Patient', patientSchema);
 module.exports = model;
