//index.js

const functions = require('firebase-functions');
const app = require('express')();
const auth = require('./util/auth');


const {
    loginUser,
    signUpUser,
    getUserDetail,
    getAllUsers,
    uploadProfilePhoto,
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