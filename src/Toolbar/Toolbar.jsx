import React from 'react';
import { connect } from "react-redux"

import { setArray } from "../reducers/array";
import { setMethod } from "../reducers/method";

import "./Toolbar.css";

class Toolbar extends React.Component {

    constructor(props){

        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {

        const { generateArray } = this.props;
        generateArray(50);

        document.getElementById("slide").value = 50;
    }

    handleClick(method) {

        const{ updateMethod } = this.props;
        updateMethod(method);
        console.log(this.props.method);

    }

    handleChange(event) {
        
        const { generateArray } = this.props;
        generateArray(Math.floor((parseInt(event.target.value) + 4)));
      }

    render(){

        const {
            array,
            method,
            generateArray } = this.props;

        return (
            <div className="toolbar-wrap">
                <div className = "array-left">
                <div className = "item">
                    <button className = "regularButton" 
                            onClick = {() => generateArray(array.length)}>
                                generate new array!
                    </button>
                </div>
                <div className = "item">
                    <button className = "regularButton">
                        resize array:
                        <input 
                            id="slide"
                            type="range" 
                            min="9" 
                            max="110"
                            onChange={this.handleChange}/>
                    </button>
                </div>
                </div>
                <div className = "array-right">
                    { method ?
                    <div className = "item sort-array">
                        <button className = "regularButton">
                            sort array!
                        </button>
                    </div> : null}
                    <div className = "item">
                        <button
                            onClick = {() => this.handleClick("mergesort")}
                            className={this.props.method === "mergesort" ? "activeButton" : "regularButton" } >
                                mergesort
                        </button>
                    </div>
                    <div className = "item">
                        <button
                            onClick = {() => this.handleClick("quicksort")}
                            className={this.props.method === "quicksort" ? "activeButton" : "regularButton" } >
                                quicksort
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({
    array,
    method
    }) =>
    ({
    array,
    method});

const mapDispatchToProps = () => dispatch => ({
    generateArray: (length) => {
        let array = [];

        while (array.length < length){
            array.push(Math.floor(Math.random() * (0.95 * window.innerHeight - 120) + 120));
        }

        dispatch(setArray(array));
    },

    updateMethod: (method) => {

        dispatch( setMethod(method) );
    },

});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);