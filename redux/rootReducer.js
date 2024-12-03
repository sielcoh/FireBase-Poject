import { v4 as uuidv4 } from 'uuid';

const initialState = {
    cars: []
};

// state - current state
// action - { type: "WHAT_TO_DO", [payload: value] }
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD': {
            return { ...state, cars: action.payload };
        }

        case 'ADD': {
            return { ...state, cars: [...state.cars, { id: uuidv4(), ...action.payload }] };
        }

        case 'DELETE': {
            const cars = [...state.cars];
            const index = cars.findIndex((car) => car.id === action.payload);

            if (index !== -1) {
                if (cars[index].status === 'UNCHANGED') {
                    cars[index].status = 'DELETED';
                } else { // cars[index].status === 'NEW'
                    cars.splice(index, 1);
                }
            }

            return { ...state, cars };
        }

        default:
            return state;
    }
};

export default counterReducer;