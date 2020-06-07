import React from 'react';
import { connect } from "react-redux"

import { setArray } from "../reducers/array";
import { setMethod } from "../reducers/method";
import { setCurrentSorted } from "../reducers/sorted";

import bubblesort from "../bubblesort.js";

import "./Toolbar.css";

class Toolbar extends React.Component {

    constructor(props){

        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {

        const { generateArray } = this.props;
        generateArray(100);

        document.getElementById("slide").value = 100;
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
            generateArray,
            sortMethod } = this.props;

        return (
            <div className="toolbar-wrap">
                <div className = "array-left">
                <div className = "item">
                    <button className = "regularButton" 
                            onClick = {() => generateArray(array.length)}>
                                generate new array
                    </button>
                </div>
                <div className = "item">
                    <button className = "regularButton">
                        resize array:
                        <input 
                            id="slide"
                            type="range" 
                            min="9" 
                            max = "200"
                            onChange={this.handleChange}/>
                    </button>
                </div>
                { method ?
                    <div className = "item sort-array">
                        <button className = "regularButton"
                                onClick = {() => sortMethod(array, method)}>
                            sort array!
                        </button>
                    </div> : null}
                </div>
                <div className = "array-right">
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
                    <div className = "item">
                        <button
                            onClick = {() => this.handleClick("radixsort")}
                            className={this.props.method === "radixsort" ? "activeButton" : "regularButton" } >
                                radix-sort
                        </button>
                    </div>
                    <div className = "item">
                        <button
                            onClick = {() => this.handleClick("bubblesort")}
                            className={this.props.method === "bubblesort" ? "activeButton" : "regularButton" } >
                                bubblesort
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

    sortMethod: (array, method) => {
        
        let sortOption = method === "bubblesort" ? bubblesort : null;

        dispatch(setCurrentSorted([]));
        
        sortOption(array, dispatch);
    },

});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);