import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC5Lf847xPyW5Q7qK-nscRCscQglNClAxA",
  authDomain: "dharkeai.firebaseapp.com",
  projectId: "dharkeai",
  storageBucket: "dharkeai.firebasestorage.app",
  messagingSenderId: "127639659226",
  appId: "1:127639659226:web:27665ac52cdef55d76bbe3",
  measurementId: "G-75CQNL7GJP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Initialize analytics only if supported (not in development)
export const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);