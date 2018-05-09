import React, { Component } from "react"; 
import { render } from "react-dom"; 
import $ from 'jquery';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../public/css/css_index/index.css"

    class App extends Component {
        constructor(props){
            super(props)
            this.state = {
                key:"valor state actual"
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
                key: "valor del state despues del click"
            })
        };
        componentDidMount = () =>{
            $('button').click(function(){
                alert('click con jquery');
            });
        }
       
        render(){
            return(
                //<h1 onClick={this.mifuncion.bind(this)}>{this.state.key}</h1>
                <div>
                    <h1 onClick={this.mifuncion}>{this.state.key}</h1>
                    <button className="btn btn-success">click alert</button>
                </div>
            )
        }
    }

    render(
        <App/>
        ,document.getElementById("app")
    );