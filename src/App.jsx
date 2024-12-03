import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Cars from './comp/Cars';
import AddCar from './comp/AddNewCar';

import db from '../firebase/firebasecars';
import { collection, onSnapshot, query } from 'firebase/firestore';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const q = query(collection(db, 'cars'));
    onSnapshot(q, (qSnapshot) => {
      const cars = qSnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
          status: 'UNCHANGED',
        };
      });
      dispatch({ type: 'LOAD', payload: cars });
    });
  }, []);

  return (
    <>
      <h1>Cars Website</h1>
      <div style={{ float: 'left', width: '50%' }}>
        <Cars />
      </div>
      <div style={{ float: 'right', width: '50%' }}>
        <AddCar />
      </div>
    </>
  );
};

export default App;
