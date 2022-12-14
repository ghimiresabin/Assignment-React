import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { connect } from "react-redux";
import "./Header.css";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false,
        };
    }
    routeChange = () => {
        let navigate = useNavigate();
        navigate("/cart");
    };
    hideMenu() {
        this.setState({ menu: false });
    }

    render() {
        return (
            <div className="container">
                <div className="head">
                    <div className="logo" size="2em">
                        <Link to="/" style={{ textDecoration: "none" }}>
                            LOGO
                        </Link>
                    </div>
                    <div className="left">
                        <div className="basket">
                            <Link to="/cart">
                                <HiShoppingCart
                                    className="icon"
                                    size="2em"
                                    color="rgb(36, 206, 224)"
                                    onClick={() => this.routeChange()}
                                />
                            </Link>
                            {this.props.numberCart}
                        </div>
                        <div>
                            <CgProfile
                                className="icon"
                                size="2em"
                                color="rgb(36, 206, 224)"
                                onClick={() => this.setState({ menu: true })}
                            />
                        </div>
                    </div>
                </div>

                <h4>Product</h4>
                {this.state.menu && (
                    <div className="menu box">
                        <ul className="text-info ">
                            <li onClick={() => this.hideMenu()}>Profile</li>
                            <li onClick={() => this.hideMenu()}>Login</li>
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        numberCart: state._todoProduct.numberCart,
    };
};
export default connect(mapStateToProps, null)(Header);
