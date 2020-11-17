import React,{Component} from 'react'

class FilterObject extends Component {
    
    constructor(){
        super()

        this.state ={
            unfilteredArray: [],
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
                <span className='puzzleText'></span>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className='confirmationButton' onClick={() => this.problemSolver(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterObjectRB'> {this.filteredArray} </span>
            </div>
        )
    }
}

export default FilterObject