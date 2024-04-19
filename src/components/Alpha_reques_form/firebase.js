import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAwq2W444H9MTPbeljccR1cO0AtBuDH5Pk",
    authDomain: "terabhai-beycon.firebaseapp.com",
    projectId: "terabhai-beycon",
    storageBucket: "terabhai-beycon.appspot.com",
    messagingSenderId: "435238017743",
    appId: "1:435238017743:web:90f5443b6f9a7ae91e35ba",
    measurementId: "G-SHE6S3JBG9",
    databaseURL: "http://terabhai-beycon.firebaseio.com"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };