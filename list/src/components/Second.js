import React, { Component } from 'react';
import Tdata from './Tdata.js'
class Second extends Component {
    constructor(props) {
        super(props);
        this.state={data:[],tmpid:"",tmpname:"",tmpprice:""}
    }
    Tmpid=(event)=>{
        this.setState({tmpid:event.target.value})

    }

    Tmpname=(event)=>{
        this.setState({tmpname:event.target.value})
    }

    Tmpprice=(event)=>{
        this.setState({tmpprice:event.target.value})
    }
    Submited=(event)=>{
        this.state.data.push({id:this.state.tmpid,name:this.state.tmpname,price:this.state.tmpprice})
        this.setState({data:this.state.data},()=>{
           this.setState({tmpid:"",tmpname:"",tmpprice:""})
        })

    }
    render() { 
        return ( 
            <>
            <div className="containerfree" >
                    <div className="row flexAIC">
                        <p>Product Id</p>
                        <input type="text" value={this.state.tmpid} onChange={this.Tmpid}/>
                    </div>
                    <div className="row flexAIC">
                        <p>Product Name</p>
                        <input type="text" value={this.state.tmpname} onChange={this.Tmpname}/>
                    </div>
                    <div className="row flexAIC">
                        <p>Product Price</p>
                        <input type="text" value={this.state.tmpprice} onChange={this.Tmpprice}/>
                    </div>

            <button className="btn" style={{float:"left",marginLeft:"50px"}} onClick={this.Submited}>ADD PRODUCT</button>
 

            <table style={{marginTop:"50px"}}>
                <tbody>
                    <tr>
                        <th>Product Id</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                    </tr>
                   <Tdata arr={this.state.data}/>
                    </tbody>
                </table>
            </div>

            </>
         );
    }
}
 
export default Second;