import { useSelector } from 'react-redux';

import Car from './Car';

import db from '../../firebase/firebasecars';
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';

const Cars = () => {
  const cars = useSelector((state) => state.cars);

  const saveChanges = () => {
    cars.forEach((car) => {
      switch (car.status) {
        case 'NEW': {
          const newCar = { model: car.model, year: car.year, color: car.color };
          addDoc(collection(db, 'cars'), newCar);
          break;
        }

        case 'DELETED': {
          deleteDoc(doc(db, 'cars', car.id));
          break;
        }
      }
    });
  };

  return (
    <>
      {cars
        .filter((car) => car.status !== 'DELETED')
        .map((car) => {
          return <Car key={car.id} car={car} />;
        })}

      <button onClick={saveChanges}>Save Changes</button>
    </>
  );
};

export default Cars;
