import React,{Component} from 'react'

class Sum extends Component {
   
    constructor(){
        super()

        this.state = {
            unfilteredArray: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filteredArray: [],
        }
    }

       
    handleChange(val) {
        this.setState.userInput({userInput: val})
    }
    
    problemSolver() {
        let names = this.state.names
        let input = this.state.userInput
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
                <span className='puzzleText'>{this.state.unfilteredArray}</span>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className='confirmationButton' onClick={() => this.problemSolver(this.userInput)}>Filter</button>
                <span className='resultsBox filterStringRB'>Filtered Names: {this.state.filteredArray}</span>
            </div>
        )
    }
}

export default Sum