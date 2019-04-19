const Rebase = require('re-base')
const firebase = require('firebase')

const FirebaseConfig = {
    apiKey: "AIzaSyCqMwblbUjBaEITJpKVF-MKkaIHgXLcu0A",
    authDomain: "xumes-portfolio-647ea.firebaseapp.com",
    databaseURL: "https://xumes-portfolio-647ea.firebaseio.com",
    projectId: "xumes-portfolio-647ea",
    storageBucket: "xumes-portfolio-647ea.appspot.com",
    messagingSenderId: "749340782060"
};

const app = firebase.initializeApp(FirebaseConfig);
const config = Rebase.createClass(app.database())

export const storage = app.storage()

export const auth = app.auth()

export default config