const express = require('express');

const projects = require("./data/helpers/projectModel");
const router = express.Router();

//Project get request

router.get("/projects", (req, res) => {
    projects.get()
        .then((projectsList) => {
            res.status(200).json(projectsList);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json("500 post error");
        })
})

//Project put request
router.put("/projects/:id", (req, res) => {
    projects.update(req.params.id, req.body)
        .then((project) => {
            res.status(200).json(project);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json("Error updating project");
        })
})



//Project post request
router.post("/projects", (req, res) => {
    //!! Add checks
    projects.insert(req.body)
        .then((project) => {
            res.status(201).json(project);
        })
        .catch((error) => {
            res.status(500).json("Error adding project");
        })

})

//Project delete request

module.exports = router;