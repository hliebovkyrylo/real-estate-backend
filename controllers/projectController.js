import projectModel from "../models/project.js";

export const create = async (req, res) => {
    try {
        const doc = new projectModel({
            address: req.body.address,
            price: req.body.price,
            neighbourhood: req.body.neighbourhood,
            propertyType: req.propertyType,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phoneNumber: req.body.email,
            avatarUrl: req.body.avatarUrl,
            acceptedCurrencies: req.body.acceptedCurrencies,
            size: req.body.size,
            bedrooms: req.body.bedrooms,
            rathrooms: req.body.rathrooms,
            yearBuilt: req.body.yearBuilt,
            floors: req.body.floors,
            description: req.body.description,
            videoLink: req.body.videoLink,
            poster: req.body.poster
        });

        const project = await doc.save();

        res.json(project);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Failed to create project"
        });
    }
};

export const updateProject = async (req, res) => {
    try {
        const projectId = req.params.id;

        await projectModel.updateOne(
            {
                _id: projectId,
            },
            {
                address: req.body.address,
                price: req.body.price,
                neighbourhood: req.body.neighbourhood,
                propertyType: req.propertyType,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                phoneNumber: req.body.email,
                avatarUrl: req.body.avatarUrl,
                acceptedCurrencies: req.body.acceptedCurrencies,
                size: req.body.size,
                bedrooms: req.body.bedrooms,
                rathrooms: req.body.rathrooms,
                yearBuilt: req.body.yearBuilt,
                floors: req.body.floors,
                description: req.body.description,
                videoLink: req.body.videoLink,
                poster: req.body.poster
            },
        );

        res.json({
            message: "Success true"
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Failed to update project"
        });
    }
};

export const getOneProject = async (req, res) => {
    try {
        const projectId = req.params.id;
        
        await projectModel.findOne(
            {
                _id: projectId
            },
        ).then(proj => {
            if (!proj) {
                return res.status(404).json({
                    message: "Project is not found"
                });
            }

            res.json(proj);
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Failed to get project"
        });
    }
};

export const getAllProjects = async (req, res) => {
    try {
        const projects = await projectModel.find().populate('email').exec();

        res.json(projects);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Failed to get projects"
        });
    }
};

export const deleteProject = async (req, res) => {
    try {
        const projectId = req.params.id;

        await projectModel.findOneAndDelete(
            {
                _id: projectId
            },
        ).then(proj => {
            if (!proj) {
                return res.status(404).json({
                    message: "Project is not found"
                });
            }
        });

        res.json({
            success: "true"
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Failed to delete project"
        });
    }
};