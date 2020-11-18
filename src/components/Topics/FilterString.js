import React,{Component} from 'react'

class FilterString extends Component {
   
    constructor(){
        super()

        this.state = {
            unfilteredArray: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filteredArray: [],
        }
    }

       
    handleChange(val) {
        this.setState({userInput: val})
    }
    
    problemSolver(input) {
        let names = this.state.unfilteredArray
        let filtered = []
        
        for (let i = 0; i < names.length; i++){
            if(names[i].includes(input)) {
                filtered.push(names[i])
            }
        }

        this.setState({filteredArray: filtered})
    }
    
  
    render(){
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>{ JSON.stringify(this.state.unfilteredArray, null, 10) }</span>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className='confirmationButton' onClick={() => this.problemSolver(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterStringRB'>Filtered Names: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
            </div>
        )
    }
}

export default FilterString