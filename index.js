import express from "express";
import mongoose from "mongoose";

import { userController } from "./controllers/index.js";
import { registerValidator, loginValidator } from "./validations.js";
import { validationErrors, checkAuth } from "./utils/index.js";

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://testestest:123qwe456@cluster3.poofvsm.mongodb.net/?retryWrites=true&w=majority').then(console.log('DB connected')).catch((err) => {console.log('DB error', err);})

const app = express();
app.use(express.json());



//user information
app.post('/auth/register', registerValidator, validationErrors, userController.register);
app.post('/auth/login', loginValidator, validationErrors, userController.login);
app.get('/users/me', checkAuth, userController.getMe);
app.patch('/users/update', checkAuth, userController.update);
app.delete('/users/delete', checkAuth, userController.deleteUser);



app.listen(4000, (err) => {
    if(err) {
        return console.log(err);
    }

    console.log('Server is working');
})