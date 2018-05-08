import React, { Component } from "react"; 
import { render } from "react-dom"; 

    class App extends Component {
        constructor(props){
            super(props)
        this.state = {
            key:"valor state actua"
        }
        }

       
      /*
      mifuncion(){
            this.setState({
                key:"valor del state despues del click"
            })
        }
      */ 
        mifuncion = () => {
            this.setState({
                key: "valor del state despues del click22"
            })
        };
       
        render(){
            return(
                //<h1 onClick={this.mifuncion.bind(this)}>{this.state.key}</h1>
                <h1 onClick={this.mifuncion}>{this.state.key}</h1>
            )
        }
    }

    render(
        <App/>
        ,document.getElementById("app")
    );