import React, { Component } from "react";
import "./Header.css";

class TermsAndCondtion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message:
                "Lorem ipsum dolor sit amet consectetur adipisicingr, cumque excepturi hic dolore nesciunt necessitatibus ullam, voluptatibus minus voluptate eveniet officia ipsum beatae? Quod perferendis tempore, voluptatem tempora error a repellendus beatae laboriosam. Similique consequatur labore, quidem aliquam nobis eum soluta aut voluptatum ducimus quod dolor illo at provident, magni quaerat, nisi voluptatem dolorem modi sapiente unde earum cupiditate ex cum consectetur. Velit soluta minima molestiae laudantium eum nostrum rerum perferendis vitae repellat veniam quo at deserunt placeat, ab ipsa saepe ipsum iure corporis, eveniet accusamus aut doloribus, sequi odio! Veniam.",
            toggle: true,
        };
    }
    cancelTerms() {
        this.setState({
            message: this.state.message,
            toggle: true,
        });
    }
    submitTerms() {
        this.setState({
            message: "",
            toggle: false,
        });
    }
    render() {
        return (
            this.state.toggle && (
                <div className="container">
                    <div className="termsandconditions ">
                        <div className="box">
                            <h1 className="p-3">Terms & Condition</h1>
                            <p className="p-3">{this.state.message}</p>
                            <div className="btnn">
                                <button
                                    className="button m-5"
                                    onClick={() => this.cancelTerms()}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="button m-5"
                                    onClick={() => this.submitTerms()}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        );
    }
}

export default TermsAndCondtion;
