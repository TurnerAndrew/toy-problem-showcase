import React,{Component} from 'react'

class EvenAndOdd extends Component {  //creates a class based component EvenAndOdd that extends off of the Component created in React
    constructor(){
        super()//pulls in all of the properties and methods from Component
        
        this.state = { //sets the data we're using in this component
            evenArray: [], //creates an empty array for evenArray to store results
            oddArray: [], //creates an empty array for oddArray to store results
            userInput: '', //creates an empty string to store the input given in the input
        }
    }

    handleChange(val) { //method sets the state of userInput to val
        this.setState({userInput: val})
    }

    problemSolver(userInput){ //needs to sort userInput into evenArray and oddArray
        let input = userInput.split(',')
        let evens = []
        let odds = []
        
        for (let i = 0; i < input.length; i++){
            if(input[i] % 2 === 0){
                evens.push(input[i])
            } else odds.push(input[i])
        }

        this.setState({
            evenArray: evens,
            oddArray: odds
        })

    }
    
    render (){ //defines what content the component will render when called
        return ( <div className='puzzleBox evenAndOddPB'>
        `<h4>Evens and Odds</h4>`
            <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}></input>
            {/* assigns the handleChange method to change in input -- changes the state of userInput */}
            <button className='confirmationButton' onClick={() => this.problemSolver(this.state.userInput)}>Split</button>
            <span className='resultsBox'>Evens {this.state.evenArray}</span>
            <span className='resultsBox'>Odds {this.state.oddArray}</span>
        
    </div>
        )
    }

    
}

export default EvenAndOdd