import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCgVFv5UYKDmzZ5duLDBUkhAAzs4cO04Mo",
    authDomain: "goal-coach-f16a1.firebaseapp.com",
    databaseURL: "https://goal-coach-f16a1.firebaseio.com",
    projectId: "goal-coach-f16a1",
    storageBucket: "goal-coach-f16a1.appspot.com",
    messagingSenderId: "334010472214"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
