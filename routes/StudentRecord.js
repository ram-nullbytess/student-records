const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')

const Admin = require('../models/teachers');
const authenticate = require('../middleware/authenticate');
const StudentRecord  = require('../models/StudentsRecords');
//const StudentsRecords = require('../models/StudentsRecords');






router.get('/api/public', (req, res) => {
	StudentRecord.find().then(data => res.json(data)).catch(err => {
		console.log(err);
		res
			.status(400)
			.json({
				message: "Failed to fetch Records of student"
			})
	})
})



router.post('/create', authenticate, (req, res, next) => {

    const newStudentRecord = new StudentRecord({
        _id: new mongoose.Types.ObjectId(),
        Name: req.body.Name,
        Register_Number : req.body.Register_Number,
        Subject1: req.body.Subject1,
        Subject2: req.body.Subject2,
        Subject3: req.body.Subject3,
        Total: req.body.Total,
        createdAt: new Date(),
        createdBy: req.body.createdBy
    });

    newStudentRecord.save()
    .then(doc => {
        res.status(201).json({
            message: doc
        });
    })
    .catch(er => {
        res.status(500).json({
            error: er
        })
    });

});

router.put('/update/:id', authenticate, (req, res, next) => {
    const changeStudentRecord = new StudentRecord({
      _id: req.params.id,
        Name: req.body.Name,
        Register_Number : req.body.Register_Number,
        Subject1: req.body.Subject1,
        Subject2: req.body.Subject2,
        Subject3: req.body.Subject3,
        Total: req.body.Total,
        createdBy: req.body.createdBy
        
    });
    StudentRecord.updateOne({_id: req.params.id}, changeStudentRecord).then(
      () => {
        res.status(201).json({
          message: 'Thing updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  });




  router.delete('/delete/:id', authenticate,(req, res, next) => {
    StudentRecord.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'student record Deleted!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  });





module.exports = router;
