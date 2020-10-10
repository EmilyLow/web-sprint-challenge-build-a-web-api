const express = require('express');

const actions = require("./data/helpers/actionModel");
const projects = require("./data/helpers/projectModel")
const router = express.Router();

//actions get all
router.get("/projects/actions", (req, res) => {
    actions.get()
        .then((actionsList) => {
            res.status(200).json(actionsList);
        })
        .catch((error) => {
            res.status(500).json({message: "Error retrieving actions"})
        })
})

//actions post
router.post("/projects/:id/actions", validateUserId, (req, res) => {

   actions.insert(req.body)
         .then((action) => {
               console.log("Inside action then");
               res.status(201).json(action);
            })
        .catch((error) => {
                console.log(error);
                res.status(500).json("Error adding action");
             })
   
})

//actions put
router.put("/projects/:id/actions/:id", (req, res) => {
    
    actions.update(req.params.id, req.body)
    .then((action) => {
        res.status(201).json(action);
    })
    .catch((error) => {
        res.status(500).json("Error adding action");
    })
})

//action delete
router.delete("/projects/:id/actions/:id", (req, res) => {
    //!! Check to make sure id is real
    actions.remove(req.params.id)
    .then((count) => {
        if (count > 0) {
            res.status(200).json({message: "The action has been deleted."})
        }
        else {
            res.status(404).json({
                message: "The action could not be found"
            })
        }
    })
    .catch((error) => {
        res.status(500).json("Error adding action");
    })
})

function validateUserId(req, res, next) {
    projects.get(req.params.id) 
    .then((project) => {
        console.log("Get by ID", project)
        if(project === null) {
            console.log("Inside if");
            res.status(404).json({message: "Project not found"})
        }
        else{
            next();

        }
    })
    .catch((error) => {
        res.status(500).json({message: "Error finding project"})
    })

}

module.exports = router;