import React, { Component } from 'react';
import Multilist from './Multilist';
class Third extends Component {
    constructor(props) {
        super(props);
        this.state={arr1:["Virat kohali","Hardik pandya","Jadeja","Chahel","Dhavan"],arr2:["Sachin","Dhoni","Rahul dravin","Yuvraj"]}
        this.textInput = React.createRef();
    }
temp=[]
temp2=[]
fromArr1=event=>{
    this.tmp2=[]
    

    if(this.temp.indexOf(event.target.value)===-1)
    {
this.temp.push(event.target.value)
    }
    else{
        this.temp.splice(this.temp.indexOf((event.target.value)),1)
    }


}

fromArr2=event=>{
    this.temp=[]
    if(this.temp2.indexOf((event.target.value))===-1)
    {
this.temp2.push((event.target.value))
    }
    else{
        this.temp2.splice(this.temp2.indexOf(parseInt(event.target.value)),1)
    }
 }

ToRight=event=>{
this.temp.map((x)=>{
    this.state.arr2.push(x)
        this.state.arr1.splice(this.state.arr1.indexOf(x),1)

})
this.setter()
}

ToLeft=event=>{
    this.temp2.map((x)=>{
        this.state.arr1.push(x)
            this.state.arr2.splice(this.state.arr2.indexOf(x),1)
    })
    this.setter()
}


setter()
{
    this.setState({arr1:this.state.arr1})
    this.setState({arr2:this.state.arr2})
    this.temp=[]
    this.temp2=[]
}
    render() { 
        return ( 
            <>
            <div className='row'>
            <select name="cars" id="cars"  onClick={this.fromArr} multiple>
                            {/* {this.state.arr1.map((x,i)=> <option value={x} onClick={this.fromArr1}>{x}</option>)} */}
                            <Multilist arr={this.state.arr1} fromArr={this.fromArr1}/>
            </select>
            <div className='col'>
                <button onClick={this.ToRight}>&gt;&gt;</button>
                <button onClick={this.ToLeft}>&lt;&lt;</button>
            </div>
            <select name="cars" id="cars" multiple>
            <Multilist arr={this.state.arr2} fromArr={this.fromArr2}/>
            </select>
            </div>
            </>
         );
    }
}
 
export default Third;