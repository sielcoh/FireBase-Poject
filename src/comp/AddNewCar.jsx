import { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddCar = () => {
    const dispatch = useDispatch();

    const [car, setCar] = useState({
        model: '',
        year: 0,
        color: '',
        status: 'NEW',
    });

    return (
        <>
            <h3>Add a Car</h3>
            Model:{' '}
            <input
                type='text'
                onChange={(e) => setCar({ ...car, model: e.target.value })}
            />
            <br />
            Year:{' '}
            <input
                type='number'
                onChange={(e) => setCar({ ...car, year: +e.target.value })}
            />
            <br />
            Color:{' '}
            <input
                type='text'
                onChange={(e) => setCar({ ...car, color: e.target.value })}
            />
            <br />
            <button onClick={() => dispatch({ type: 'ADD', payload: car })}>
                Add
            </button>
        </>
    );
};

export default AddCar;
