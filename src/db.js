import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyBH2eiLa0RkTZpLAk984fg-7qdUIT786OA',
  authDomain: 'cars-e.firebaseapp.com',
  projectId: 'cars-e',
  storageBucket: 'cars-e.appspot.com',
  messagingSenderId: '667263667390',
  appId: '1:667263667390:web:a93727c4f11ce9cb1b22ef',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export async function getCars() {
  let cars = []
  
  const carsDocs = await getDocs(collection(db, 'cars'))
  
  carsDocs.forEach((carDoc) => {
    cars.push(carDoc.data())
  })

  return cars
}