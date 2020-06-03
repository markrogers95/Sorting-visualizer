import React from 'react';
import "./Toolbar.css";

export default class Toolbar extends React.Component {

    constructor(props){

        super(props);

    }

    render(){

        return (
            <div className="toolbar-wrap">
                <div className="item">
                    Generate Array!
                </div>
                <div className="item">
                    Array size:
                </div>
                <input type="range" min="0" max="100"/>
                <div className="item">
                    Algorithm
                </div>
            </div>
        );
    }
}