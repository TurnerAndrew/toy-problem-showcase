import React,{Component} from 'react'

class Sum extends Component {
    
    constructor() {
        super ()
        
        this.state = {
            number1: 0,
            number2: 0,
            sum: null,
        }
    }
    
    setNumber1(val) {
        this.setState({number1: parseInt(val, 10) })
    }
    
    setNumber2(val) {
        this.setState({number2: parseInt(val, 10) })
    }

    sum(num1, num2) {
        this.setState({sum: num1 + num2})
    }

    render(){
        return(
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input className='inputLine' onChange={(e) => this.setNumber1(e.target.value)}/>
                <input className='inputLine' onChange={(e) => this.setNumber2(e.target.value)}/>
                <button className='confirmationButton' onClick={() => this.sum(this.state.number1, this.state.number2)}>Add</button>
                <span className='resultsBox'>Sum: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum