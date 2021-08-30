const mongoose = require("mongoose")
const PatientModel = require('../model/patient')


const AddPatient = (req, res, next) => 
{
  
         let Add_Patient = new PatientModel({
         
            patient: req.body.patient,
            contact: req.body.contact,
            appointment: req.body.appointment,
            wanted: req.body.wanted
        })
       
        console.log(Add_Patient);
        Add_Patient.save()
            .then(response => {
                res.json({
                    status:true,
                    message: 'Patient Saved Successfully',
                    statuscode:200
                })
            })
            .catch(error => {
                res.json({
                    status:false,
                    message: 'AN ERROR OCCURED',
                    
                })
            })
        
   }



    module.exports = {AddPatient}