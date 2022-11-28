import React from "react";
import { connect } from "react-redux";
import { IncreaseQuantity, DecreaseQuantity } from "../actions/index";
import "./Cart.css";

function Cart({ items, IncreaseQuantity, DecreaseQuantity }) {
    let ListCart = [];
    let TotalCart = 0;
    Object.keys(items.Carts).forEach(function (item) {
        TotalCart += items.Carts[item].quantity * items.Carts[item].price;
        ListCart.push(items.Carts[item]);
    });
   
    console.log(ListCart);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h3 className="fw-bold">My Carts</h3>
                </div>
                {ListCart.map((el, i) => {
                    return (
                        <div className="col-md-3" key={i}>
                            <div className="outer-div">
                                <img
                                    src={el.image}
                                    alt=""
                                    className="img-thumbnail"
                                />
                            </div>
                            <div className="inner-div">
                                <h6>
                                    {el.title.split(" ").slice(0, 3).join(" ")}
                                </h6>
                                <h5 className="text-info">Rs. {el.price}</h5>
                                <p className="desc">
                                    {" "}
                                    <p>
                                        {el.description
                                            .split(" ")
                                            .slice(0, 7)
                                            .join(" ")}
                                    </p>
                                </p>
                                <div>
                                    <span
                                        className="btn btn-primary"
                                        style={{ margin: "2px" }}
                                        onClick={() => DecreaseQuantity(i)}
                                    >
                                        -
                                    </span>
                                    <span className="btn btn-info">
                                        {el.quantity}
                                    </span>
                                    <span
                                        className="btn btn-primary"
                                        style={{ margin: "2px" }}
                                        onClick={() => IncreaseQuantity(i)}
                                    >
                                        +
                                    </span>
                                </div>
                            </div>

                            {/* <span>Rs.{TotalPrice(el.price, el.quantity)}</span> */}
                            {/* <span colSpan="5">Total Carts</span> */}
                            {/* <span>
                                {Number(TotalCart).toLocaleString("en-US")}
                            </span> */}
                        </div>
                    );
                })}
                <div className="checkout">
                    <button className="btn-checkout">checkout</button>
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        items: state._todoProduct,
    };
};
export default connect(mapStateToProps, { IncreaseQuantity, DecreaseQuantity })(
    Cart
);
