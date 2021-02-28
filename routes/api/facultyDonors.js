const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

//const Faculty = require('../../models/Faculty');
const Faculty = require('../../models/Faculty');
const Donors = require('../../models/Donor');
const Colleges = require('../../models/College');


///////////////////////////////////////////////////
// Faculty API
//////////////////////////////////////////////////

router.get('/faculty', (req, res) => {
    Faculty.find({}).then(data => {
        console.log(data);
        res.json(data);
    }).catch(err => console.log(err));
})

router.post('/faculty', (req, res) => {
    Faculty.create(req.body)
        .then(res => {
            console.log(res);
        }).catch(err => console.log(err));
})

router.put('/faculty/:id', (req, res) => {
    Faculty.findByIdAndUpdate( req.params.id, req.body, function (err) {
        if(err) console.log(err);
        console.log("Successful update!");
      });
})

router.delete('/faculty/:id', (req, res) => {
    Faculty.deleteOne({ _id: ObjectId(req.params.id) }, function (err) {
        if(err) console.log(err);
        console.log("Successful deletion");
      });
    })

router.get('/faculty/:id', (req, res) => {
    Faculty.findById(req.params.id).then(data => {
        console.log(data);
        res.json(data);
    }).catch(err => console.log(err));
})

//////////////////////////////////////////////
// Donors API
//////////////////////////////////////////////

router.get('/donors', (req, res) => {
    Donors.find({}).then(data => {
        console.log(data);
        res.json(data);
    }).catch(err => console.log(err));
})

router.post('/donors', (req, res) => {
    Donors.create(req.body)
        .then(res => {
            console.log(res);
        }).catch(err => console.log(err));
    })

router.get('/donors/:id', (req, res) => {
    Donors.findById(req.params.id).then(data => {
        console.log(data);
        res.json(data);
    }).catch(err => console.log(err));
})

router.put('/donors/:id', (req, res) => {
    Donors.findByIdAndUpdate( req.params.id, req.body, function (err) {
        if(err) console.log(err);
        console.log("Successful update!");
      });
})

router.delete('/donors/:id', (req, res) => {
    Donors.deleteOne({ _id: ObjectId(req.params.id) }, function (err) {
        if(err) console.log(err);
        console.log("Successful deletion");
      });
    })
    
/////////////////////////////////////////////////////
// Colleges API
////////////////////////////////////////////////////

router.get('/colleges', (req, res) => {
        Colleges.find({}).then(data => {
            console.log(data);
            res.json(data);
        }).catch(err => console.log(err));
    })

router.post('/colleges', (req, res) => {
    Faculty.create(req.body)
        .then(res => {
            console.log(res);
        }).catch(err => console.log(err));
})

router.put('/colleges/:id', (req, res) => {
    Faculty.findByIdAndUpdate( req.params.id, req.body, function (err) {
        if(err) console.log(err);
        console.log("Successful update!");
        });
})

router.delete('/colleges/:id', (req, res) => {
    Faculty.deleteOne({ _id: ObjectId(req.params.id) }, function (err) {
        if(err) console.log(err);
        console.log("Successful deletion");
        });
    })

router.get('/colleges/:id', (req, res) => {
    Faculty.findById(req.params.id).then(data => {
        console.log(data);
        res.json(data);
    }).catch(err => console.log(err));
})

module.exports = router;