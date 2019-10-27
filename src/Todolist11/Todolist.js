import Todoinput from './Todoinput';
import Todoing from './Todoing';
import React, { Component } from 'react';
import './1.css';

export default class Todolist extends Component {
	constructor(){
        super();
        let todo0 =JSON.parse(localStorage.getItem('key'));
        if(todo0 == null){
          this.state = {
            todo:[]
		      }
        }
        else{
          this.state = {
            todo:todo0
		      }
        }
  }
//添加
  addItem=(data)=>{
    var data1 = {"key":data,"judged":false}
    this.setState({
      todo:[...this.state.todo,data1]
  })
  }
//点击确认完成时，judged值变成true
  changeItem=(idx)=>{
    this.state.todo[idx].judged=true;
    let todo1=this.state.todo;
    this.setState({todo:todo1})
  }
//再次点击时，judged值变回false
  changeItemAgain=(idx)=>{
    this.state.todo[idx].judged=false;
    let todo2=this.state.todo;
    this.setState({todo:todo2})
  }
//删除
	delItem = (idx)=>{
       this.setState((state,props)=>{
            console.log(state.todo);
            return {
                todo: state.todo.filter((item,index)=>idx!==index)
            }
    })
    
  }

  render() {
    let doing=0,done=0;
    this.state.todo.forEach((item)=>{
        if(item.judged == true){
            done++;
        }
        else{
            doing++;
        }
    })
    localStorage.setItem('key',JSON.stringify(this.state.todo));

    return (
      <div>
		    <Todoinput add={this.addItem}/>
        <Todoing del={this.delItem}
                todo={this.state.todo}
                changeItem={this.changeItem}
                changeItemAgain={this.changeItemAgain}
                doing={doing}
                done={done}
        />
      </div>
    );
  }
}
