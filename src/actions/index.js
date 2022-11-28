import callApi from "./Api";

export default function AddCart(payload) {
    return {
        type: "ADD_CART",
        payload,
    };
}
export function IncreaseQuantity(payload) {
    return {
        type: "INCREASE_QUANTITY",
        payload,
    };
}
export function DecreaseQuantity(payload) {
    return {
        type: "DECREASE_QUANTITY",
        payload,
    };
}
export function GetAllProduct(payload) {
    return {
        type: "GET_ALL_PRODUCT",
        payload,
    };
}

export function GetNumberCart() {
    return {
        type: "GET_NUMBER_CART",
    };
}
export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi("/", "GET", null).then((res) => {
            dispatch(GetAllProduct(res.data));
        });
    };
};

export const ADD_CART = "ADD_CART";
export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const GET_ALL_PRODUCT = "GET_ALL_PRODUCT";
export const GET_NUMBER_CART = "GET_NUMBER_CART";
