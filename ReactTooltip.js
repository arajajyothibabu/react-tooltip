/**
 * Created by jyothi on 8/1/17.
 */
import React from 'react';

const styles = {
    container: {
        width: 'auto',
        height: 'auto',
        position: 'relative',
        display: 'inline-block',
        top: '-25px'
    },
    tooltip: {
        minWidth: '120px',
        backgroundColor: '#555',
        color: '#fff',
        textAlign: 'center',
        borderRadius: '6px',
        padding: '5px 0',
        position: 'absolute',
        zIndex: 1,
        bottom: '125%',
        left: '50%',
        marginLeft: '-60px',
        transition: 'opacity 1s',
    },
    triangle: {
        top: {
            content: "",
            position: 'absolute',
            top: '100%',
            left: '50%',
            marginLeft: '-5px',
            borderWidth: '5px',
            borderStyle: 'solid',
            borderColor: '#555 transparent transparent transparent'
        }
    }
};

export default class ReactTooltip extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return this.props.show &&
            <div style={styles.container}>
                <div style={styles.tooltip}>
                    {this.props.children}
                </div>
                <div style={styles.triangle.top}></div>
            </div>
    }

}