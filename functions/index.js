//index.js

const functions = require('firebase-functions');
const app = require('express')();
const auth = require('./util/auth');

const {
    getAllVolunteers,
    postOneVolunteer
} = require('./APIs/volunteers')
app.get('/volunteers', getAllVolunteers); //select all
app.post('/vol', postOneVolunteer); //creating a new to do

//app.delete('/todo/:todoId', deleteTodo);
//app.put('/todo/:todoId', editTodo);

//sign in

const {
    loginUser,
    signUpUser,
    getAllUsers,
    uploadProfilePhoto,
    getUserDetail,
    updateUserDetails
} = require('./APIs/users')

// Users

app.post('/login', loginUser);
app.post('/signup', signUpUser);
app.get('/users', getAllUsers); 
app.post('/user/image', auth, uploadProfilePhoto);
app.get('/user', auth, getUserDetail);

//app.post('/user', auth, updateUserDetails);


exports.api = functions.https.onRequest(app);