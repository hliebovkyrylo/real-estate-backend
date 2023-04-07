import express from "express";
import mongoose from "mongoose";

import { userController, projectController } from "./controllers/index.js";
import { registerValidator, loginValidator, projectValidator } from "./validations.js";
import { validationErrors, checkAuth } from "./utils/index.js";

import cors from "cors";
import multer from "multer";

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://testestest:123qwe456@cluster3.poofvsm.mongodb.net/?retryWrites=true&w=majority').then(console.log('DB connected')).catch((err) => {console.log('DB error', err);})

const app = express();
app.use(express.json());
app.use(cors());



//user information
app.post('/auth/register', registerValidator, validationErrors, userController.register);
app.post('/auth/login', loginValidator, validationErrors, userController.login);
app.get('/users/me', checkAuth, userController.getMe);
app.patch('/users/update', checkAuth, userController.update);
app.delete('/users/delete', checkAuth, userController.deleteUser);
app.get('/qaqaqa', checkAuth, userController.getAllUserProjects);



//routers for project actions
app.post('/projects/create', checkAuth, projectValidator, validationErrors, projectController.create);
app.patch('/projects/:id', checkAuth, projectValidator, validationErrors, projectController.updateProject);
app.get('/projects/:id', projectController.getOneProject);
app.get('/home', projectController.getAllProjects);
app.delete('/projects/:id', checkAuth, projectController.deleteProject);

//upload image

app.use('/uploadImg', express.static('uploadImg'));

const storage = multer.diskStorage({
    destination: (_, __, callback) => {
        callback(null, 'uploadImg');
    },
    filename: (_, file, callback) => {
        callback(null, file.originalname);
    }
});

const upload = multer({ storage });

app.post('/uploadImage', checkAuth, upload.single('image'), (req, res) => {
    res.json({
        url: `/uploadImage/${req.file.originalname}`
    });
});



app.listen(4000, (err) => {
    if(err) {
        return console.log(err);
    }

    console.log('Server is working');
})