import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.matrix = [
                [0,1,2],
                [3,4,5,6,7],
                [8,9,10,11],
                ]
    this.padding = 21
    this.height = 110
    this.width = this.column_width()
    this.layout = null
  }

  insert(array, column_from, row_from, column_to, row_to){
    let value = array[column_from][row_from]
    array[column_from].splice(row_from, 1)
    array[column_to].splice(row_to, 0, value)
    calculate_possible_positions(array)
    return array
  }

  clamp(n, min, max){
    return Math.max(Math.min(n, max), min)
  }

  column_width(){
    return (window.innerwidth / this.matrix.length) - (this.padding / this.matrix.length)
  }

  calculate_possible_positions(neworder_array){
    this.width = this.column_width()
    this.layout = neworder_array.map(row, i){
      return _.range(row.length + 1).map((idx, column) => {
        return [this.width * i, this.height * column]
      })
    }
    }
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;