import React, { Component } from "react"
import Headline from "./components/Headline"
import "./styles.less"

import {getItem} from "./services/api"

export default class App extends Component {
  async componentDidMount (){
    let item = {};

    try {
      const id = "tt3896198"; //aqui que vai fazer o request no api.js
      item = await getItem(id);
      
    } catch (e) { 
      console.error(e);
    }
    console.log(item);
  }

  render() { 
    return (
      <div className="App">
        <Headline>Hello human!</Headline>
      </div>
    )
  }
}
