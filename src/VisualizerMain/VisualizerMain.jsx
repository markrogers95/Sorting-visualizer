import React from 'react';
import { connect } from "react-redux";
import "./VisualizerMain.css";

class VisualizerMain extends React.Component {

    constructor(props){
        
        super(props);

    }

    render() {

        const {array} = this.props;

        const width = Math.floor(((0.8 * window.innerWidth) - 200 - array.length) / (array.length) ) - 1;
        const arrWidth = `${width}px`


        return (
            
            <div className="wrap" id="wrap">
                {array.map((value, idx) => (
                    <div    className="array" 
                            key={idx} 
                            style={{height: `${value}px`, width: arrWidth}}></div>
            ))}
            </div> 
        );
    }
}

const mapStateToProps = ({
    array
}) =>
({array});

const mapDispatchToProps = () => dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(VisualizerMain);