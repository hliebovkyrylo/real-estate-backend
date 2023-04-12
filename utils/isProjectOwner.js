import projectModel from '../models/project.js';

export default async (req, res, next) => {
    try {
        const projectId = req.params.id;
        const project = await projectModel.findById(projectId);
        if (project && project.user.equals(req.userId)) {
            next(); // The user is the owner of the project, allow access
        } else {
            res.status(401).send('Unauthorized'); // The user is not the owner of the project, deny access
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
};