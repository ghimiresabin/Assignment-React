import { combineReducers } from "redux";
import {
    ADD_CART,
    DECREASE_QUANTITY,
    GET_ALL_PRODUCT,
    GET_NUMBER_CART,
    INCREASE_QUANTITY,
} from "../actions/index";

const initialState = {
    numberCart: 0,
    Carts: [],
    _products: [],
};

function todoProduct(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_PRODUCT:
            return {
                ...state,
                _products: action.payload,
            };
        case GET_NUMBER_CART:
            return {
                ...state,
            };
        case ADD_CART:
            if (state.numberCart === 0) {
                let cart = {
                    id: action.payload.id,
                    quantity: 1,
                    title: action.payload.title,
                    description: action.payload.description,
                    image: action.payload.image,
                    price: action.payload.price,
                };
                console.log(cart);
                state.Carts.push(cart);
            } else {
                let check = false;
                state.Carts.map((item, key) => {
                    if (item.id === action.payload.id) {
                        state.Carts[key].quantity++;
                        check = true;
                    }
                });
                if (!check) {
                    let _cart = {
                        id: action.payload.id,
                        quantity: 1,
                        title: action.payload.title,
                        description: action.payload.description,
                        image: action.payload.image,
                        price: action.payload.price,
                    };
                    state.Carts.push(_cart);
                }
            }
            return {
                ...state,
                numberCart: state.numberCart + 1,
            };
        case INCREASE_QUANTITY:
            state.numberCart++;
            state.Carts[action.payload].quantity++;

            return {
                ...state,
            };
        case DECREASE_QUANTITY:
            let quantity = state.Carts[action.payload].quantity;
            if (quantity > 1) {
                state.numberCart--;
                state.Carts[action.payload].quantity--;
            }

            return {
                ...state,
            };

        default:
            return state;
    }
}

const ShopApp = combineReducers({
    _todoProduct: todoProduct,
});
export default ShopApp;

