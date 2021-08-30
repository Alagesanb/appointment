var express = require('express');

var router = express.Router();

const patientControl = require('../controller/patient_control')


router.post('/addpatient',patientControl.AddPatient)
module.exports = router