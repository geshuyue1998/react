import React, { Component } from 'react';
import store from './store';
console.log(store.getState());
//store是连接action和reducer的一个对象
//action是一个对象，描述state的变化
//Reducer定义了如何响应action描述的state的变化
class Counter extends Component {
    constructor(){
        super();
        this.state={
            num:store.getState().counter
        }
        store.subscribe(()=>{
            this.setState({
                num:store.getState().counter
            })
        })
    }
    handleAdd=()=>{
        let action={type:'ADD',value:10}
        store.dispatch(action);
    }
    render() {
        return (
            <div>
                <p>
                    Clicked: <span>{this.state.num}</span> times<br/>
                    <button onClick={this.handleAdd}>+</button><br/>
                    <button >-</button><br/>
                    {/* <button >Increment if odd</button>
                    <button>Increment async</button> */}
                </p>
            </div>
        );
    }
}

export default Counter;
