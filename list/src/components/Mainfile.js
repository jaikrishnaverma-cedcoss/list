import React, { Component } from 'react';
class Mainfle extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    fruits=["apple","mango","banana","pinapple","orange"]
    render() { 
        return (
             <> 
             <h3>List of fruits</h3>
             <ul>
                {
                    this.fruits.map((x)=><li>{x}</li>)
                }
                </ul>
             </>);
    }
}
 
export default Mainfle;