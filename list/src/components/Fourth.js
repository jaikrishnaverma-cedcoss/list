import React, { Component } from 'react';
class Fourth extends Component {
    constructor(props) {
        super(props);
        this.state={val:"",arr:[]}
    }
    setVal=event=>{
        this.setState({val:event.target.value})
    }
    Add=event=>{
        if(this.state.val===""||this.state.val===" ")
        return false;
        this.state.arr.push(this.state.val)
   this.setState({arr:this.state.arr})
    }
    Del=(event)=>
    {
        this.state.arr.splice(parseInt(event.target.value),1)
        this.setState({arr:this.state.arr})
    }
    render() { 
        return ( 
            <>
            
 
          <div className='col' style={{backgroundColor:"white",marginBottom:"50px"}}>
          <div className='row' >
                <input type="text" value={this.state.val} onChange={this.setVal}/>
                <button onClick={this.Add}>ADD</button>
            </div>
           <div className='row yy'>
            <ul>
                {
                    this.state.arr.map((x,i)=>   <li><span value={i} onClick={this.Del}>x</span> {x}</li>)
                }
             
            </ul>
           </div>
          </div>            </>
         );
    }
}
 
export default Fourth;