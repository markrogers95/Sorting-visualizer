import React from 'react';
import { connect } from "react-redux"
import {setArray } from "../reducers/array";
import "./Toolbar.css";

class Toolbar extends React.Component {

    constructor(props){

        super(props);

        //this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {

        const { generateArray } = this.props;
        generateArray(50);

        document.getElementById("slide").value = 50;
    }

    handleChange(event) {
        const { generateArray } = this.props;
    
        generateArray(Math.floor((parseInt(event.target.value) + 4)));
      }

    render(){

        const {
            array,
            generateArray } = this.props;

        return (
            <div className="toolbar-wrap">
                <ul className="toolbar">
                    <li className="item">
                        <button 
                                onClick={() => generateArray(array.length)}>
                            generate new array!
                        </button>
                    </li>
                    <li className="item">
                        <button>
                            sort array!
                        </button>
                    </li>
                    <li className="item resize">
                        <button>
                            resize array:
                        </button>
                        <input 
                                id="slide"
                                type="range" 
                                min="9" 
                                max="110"
                                onChange={this.handleChange}/>
                    </li>
                    <li className="item">
                        <button>
                            mergesort
                        </button>
                    </li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = ({
    array,}) =>
    ({array});

const mapDispatchToProps = () => dispatch => ({
    generateArray: (length) => {
        let array = [];

        while (array.length < length){
            array.push(Math.floor(Math.random() * (0.9 * window.innerHeight - 75) + 75));
        }

        dispatch(setArray(array));
    }

});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);