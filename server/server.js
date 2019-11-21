const five = require('johnny-five');
const firebase = require('firebase');
const { FIREBASE_CONFIGS } = require('./configs');

const board = new five.Board();

// Initialize Firebase
firebase.initializeApp(FIREBASE_CONFIGS);

board.on('ready', function() {
  const led = new five.Led(13);
  const db = firebase.firestore();

  db.collection('lampada')
    .doc('k3PbloklzjBDL3gv07XG')
    .onSnapshot(snapshot => {
      const { status } = snapshot.data();

      status ? led.on() : led.off();
    });
});
