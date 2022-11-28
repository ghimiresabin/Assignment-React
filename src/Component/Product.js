import React, { Component } from "react";
import ADD_CART, { actFetchProductsRequest } from "../actions/index";
import { connect } from "react-redux";
import TermsAndCondtion from "./TermsAndCondtion";
import "./First.css";
class Product extends Component {
    
    componentDidMount() {
        this.props.actFetchProductsRequest();
    }

    render() {
        const { _products } = this.props._products;
        if (_products.length > 0) {
            return (
                <div className="container">
                   
                    <div className="row mt-5">
                        {_products.map((el, i) => {
                            return (
                                <div className="col-md-3" key={i}>
                                    <div className="outer-div">
                                        <img
                                            src={el.image}
                                            alt=""
                                            className="img-thumbnail"
                                        />
                                    </div>
                                    <div className="inner-div text-center">
                                        <h6>
                                            {el.title
                                                .split(" ")
                                                .slice(0, 3)
                                                .join(" ")}
                                        </h6>
                                        <h5 className="text-info text-center">
                                            Rs.{el.price}
                                        </h5>
                                        <div className="desc text-center">
                                            <p>
                                                {el.description
                                                    .split(" ")
                                                    .slice(0, 7)
                                                    .join(" ")}
                                            </p>
                                        </div>

                                        <div className="prod-btn" style={{}}>
                                            <div className="d-flex">
                                                <button
                                                    className="btn bg-info text-light fw-bold "
                                                    onClick={() =>
                                                        this.props.AddCart(el)
                                                    }
                                                >
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <TermsAndCondtion />
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        _products: state._todoProduct,
    };
};
function mapDispatchToProps(dispatch) {
    return {
        actFetchProductsRequest: () => dispatch(actFetchProductsRequest()),
        AddCart: (item) => dispatch(ADD_CART(item)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);
