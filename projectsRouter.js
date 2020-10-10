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
router.delete("/projects/:id", (req, res) => {
    projects.remove(req.params.id)
        .then((count) => {
            if (count > 0) {
                res.status(200).json({message: "The project has been deleted."})
            }
            else {
                res.status(404).json({
                    message: "The project could not be found"
                })
            }
        })
        .catch((error) => {
            res.status(500).json({message: "Error deleting project"})
        })
})

module.exports = router;