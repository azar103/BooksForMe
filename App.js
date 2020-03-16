import React from 'react';
import {View} from 'react-native';
import Navigation from './Navigation/Navigation';
import {Provider} from 'react-redux';
import Store from './Store/configureStore';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyDI-mubcDGeDCDJoJIujOIHl5Pyh2xpqx0',
  authDomain: 'book4me-55b91.firebaseapp.com',
  databaseURL: 'https://book4me-55b91.firebaseio.com',
  projectId: 'book4me-55b91',
  storageBucket: 'book4me-55b91.appspot.com',
  messagingSenderId: '207595842076',
  appId: '1:207595842076:web:34b0f353cd33818cef0dd9',
  measurementId: 'G-C9M0X435HC',
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
console.disableYellowBox = true;

export default function App() {
  let persistor = persistStore(Store);
  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
}
