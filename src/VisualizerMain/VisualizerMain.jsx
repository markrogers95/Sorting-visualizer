import React from 'react';
import "./VisualizerMain.css";

export default class VisualizerMain extends React.Component {

    constructor(props){
        
        super(props);

        this.state = { array: [], };

    }

    componentDidMount() {

        this.resetArray();
    }

    resetArray() {

        const array = [];

        for (var i = 0; i < 200; i++){

            array.push(randInt(25, window.innerHeight - 100));

        }

        this.setState({array});
    }

    render() {

        const {array} = this.state;

        return (
            
            <div className="wrap">
                {array.map((value, idx) => (
                    <div className="array" key={idx} style={{height: `${value}px`}}></div>
            ))}
            </div> 
        );
    }
}

function randInt(min, max) {

    return Math.floor(Math.random() * (max - min + 1) - min);

}