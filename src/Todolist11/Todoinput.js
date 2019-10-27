import React, { Component } from 'react'
export default class Todoinput extends Component {
    handleInput = (e)=>{
        if(e.keyCode === 13){
          this.props.add(e.target.value);
        }
    }
  render() {
    return (
        <div style={{textAlign:"center"}}>TODOLIST
            <input name="a" onKeyDown={this.handleInput} type="text"/>
        </div>
    );
  }
}
