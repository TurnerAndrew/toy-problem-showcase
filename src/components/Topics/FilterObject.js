import React,{Component} from 'react'

class FilterObject extends Component {
    
    constructor(){
        super()

        this.state ={
            unfilteredArray: [
                {
                  name: 'Jimmy Joe',
                  title: 'Hack0r',
                  age: 12,
                },
                {
                  name: 'Jeremy Schrader',
                  age: 24,
                  hairColor: 'brown'
                },
                {
                  name: 'Carly Armstrong',
                  title: 'CEO',
                }
              ],
            userInput: '',
            filteredArray: [],
        }
    }
    
    handleChange(val) {
        this.setState({userInput: val})
    }

    problemSolver() {
        let newArray = this.unfilteredArray.filter(key => {
            return newArray.userInput
        })
        this.setState({filteredArray: newArray})
    }

    
    render(){
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>{this.unfilteredArray}</span>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className='confirmationButton' onClick={() => this.problemSolver(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterObjectRB'> Filtered: {this.filteredArray} </span>
            </div>
        )
    }
}

export default FilterObject