import { useDispatch } from 'react-redux';

const Car = ({ car }) => {
    const dispatch = useDispatch();

    return (
        <div
            style={{
                border: '3px solid red',
                width: '200px',
                padding: '10px',
                marginBottom: '10px',
            }}
        >
            <strong>Model:</strong> {car.model} <br />
            <strong>Year:</strong> {car.year} <br />
            <strong>Color:</strong> {car.color} <br />
            <button onClick={() => dispatch({ type: 'DELETE', payload: car.id })}>
                Delete
            </button>
        </div>
    );
};

export default Car;
