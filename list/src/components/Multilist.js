import React, { Component } from 'react';
class Multilist extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = {  }
    render() { 
        return ( 
            <>
             {this.props.arr.map((x)=> <option value={x} onClick={this.props.fromArr}>{x}</option>)}
            </>
         );
    }
}
 
export default Multilist;