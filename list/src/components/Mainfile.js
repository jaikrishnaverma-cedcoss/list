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
                {
                    this.fruits.map((x)=><p>{x}</p>)
                }
             </>);
    }
}
 
export default Mainfle;