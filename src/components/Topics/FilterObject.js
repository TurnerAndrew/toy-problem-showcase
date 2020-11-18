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

    problemSolver(prop) {
        let newArray = this.state.unfilteredArray
        let employeesFiltered = []

        for(let i = 0; i < newArray.length; i++) {
            if (newArray[i].hasOwnProperty(prop)) {
                employeesFiltered.push(this.state.unfilteredArray[i])
            }
        }
     
        
        this.setState({filteredArray: employeesFiltered})
    }

    
    render(){
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>{ JSON.stringify(this.state.unfilteredArray, null, 10) }</span>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className='confirmationButton' onClick={() => this.problemSolver(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterObjectRB'> Filtered: { JSON.stringify(this.state.filteredArray, null, 10) } </span>
            </div>
        )
    }
}

export default FilterObject