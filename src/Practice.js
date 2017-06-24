import React, {Component} from 'react';
import './App.css';
import logo from './logo.svg';


 class Practice extends Component{

   constructor(props){
     super(props);
     this.doSomething=this.doSomething.bind(this);
   }

   doSomething(){
     alert('on click'+ this.props.user);
   }

   render(){
     return(
       <div>
          <p> <a onClick={this.doSomething} href="#"> Practice Tab</a> </p>
          <h3>{this.props.user}</h3>
          <h2>{this.props.children}</h2>
       </div>
     );
   }
 }



 export default Practice;
