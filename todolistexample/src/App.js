import React from 'react';
import './App.css';


class App extends React.Component{
constructor(){
  super()
  this.state={
    data:'',
    datas:[],
    
  }
}
onHandleChange=(e)=>{
     let data= this.state.data
    data=e.target.value
    console.log(data)
    this.setState({
     data,
     })
}


onHandleDelete=(e)=>{
  let id = e.target.id;
  let datas=this.state.datas
  datas.splice(id,1)
  this.setState({
    datas
  })
}

onHandlePress=(e)=>{
  let data=this.state.data
  let datas=this.state.datas
  //let regex2 = new RegExp('\\w+')
  data=data.trim()
  //if(!(datas.includes(data)))
  //{
    if(e.key==='Enter'){
    datas.push(data)
    this.setState({
      datas
    })
    e.target.value=""
  }
}
//}

render(){
  let datas=this.state.datas;
  
  return(
    <div className='App'>
    
      <h1>Welcome to Shashi's To do list</h1>
      <br />
      <input type='text' placeholder="Add"     onChange={this.onHandleChange} onKeyPress={this.onHandlePress}></input>

      <hr />
      <ol>
      {datas.map((el,index)=><li> {el} <button onClick={this.onHandleDelete} id={index}>x</button></li>)}
      </ol>
    
    
    
    </div>
  )
}



}

export default App;
