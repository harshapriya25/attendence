import { auth, provider } from "./firebase_config.js";
import { signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";


// page_script.js

document.addEventListener('DOMContentLoaded', () => {
    const signOutButton = document.getElementById('signOutB');
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    const usernameSpan = document.getElementById('username');

    const fetchDataFromDatabase = (searchTerm) => {
        // Your database fetching logic here
        console.log('Fetching data from the database for:', searchTerm);
    };

    signOutButton.addEventListener('click', () => {
        userSignOut();
    });

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim();
        fetchDataFromDatabase(searchTerm);
    });
// fetching user data
const userDataString = sessionStorage.getItem('userData');

// Check if user data exists
if (userDataString) {
    const userData = JSON.parse(userDataString);
    const uname = document.getElementById('username');
   
        if (username) {
            uname.textContent = 'Welcome, ' + userData.displayName + '! Email: ' + userData.email ;
        }
        
    // Now you can use userData.displayName, userData.email, etc. in this file
} else {
    // User data doesn't exist, handle accordingly
    console.log('User data not found. Redirecting to login page...');
        window.location.href = '404.html';
}


//sign-out Button
const signOutB = document.getElementById("signOutB");

const userSignOut = async () => {
    signOut(auth).then(() => {
        console.log("signed out!");
        window.location.href = './index.html';
    }).catch((error) => {

    });
};

signOutB.addEventListener('click', userSignOut);
});






