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