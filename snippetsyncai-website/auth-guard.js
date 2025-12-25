import { auth, onAuthStateChanged } from './firebase-config.js';

onAuthStateChanged(auth, (user) => {
  if (!user) {
    // If no user is logged in, redirect to the login page.
    // The current page is stored in sessionStorage to redirect back after login.
    sessionStorage.setItem('redirectAfterLogin', window.location.href);
    window.location.href = 'login.html';
  }
});
