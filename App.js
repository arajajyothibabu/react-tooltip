/**
 * Created by jyothi on 8/1/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTooltip from './ReactTooltip';

class App extends React.Component{

    render(){
        return(
            <div style={{textAlign: 'center', width: '100%', padding: '50px auto'}}>
                <p>Top
                    <ReactTooltip show={true}>
                        Top Tooltip
                    </ReactTooltip>
                </p>
                <br/>
                <p>Right
                    <ReactTooltip show={true}>
                        Top Tooltip
                    </ReactTooltip>
                </p>
                <br/>
                <p>Bottom</p>
                <br/>
                <p>Left</p>
            </div>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('app'));