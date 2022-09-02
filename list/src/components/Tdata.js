import React, { Component } from 'react';
class Tdata extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <>
            {
                this.props.arr.map((x)=> <tr><td>{x.id}</td><td>{x.name}</td><td>{x.price}</td></tr>)
            }
            </>
         );
    }
}
 
export default Tdata;