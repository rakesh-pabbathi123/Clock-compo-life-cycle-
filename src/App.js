import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {showClock: false}

  onClickButton = () => {
    const {showClock} = this.state

    this.setState({showClock: !showClock})
  }

  render() {
    const {showClock} = this.state
    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.onClickButton}
        >
          {showClock ? 'Hide Clock' : 'Show clock'}
        </button>
        {showClock && <Clock date="15-08-2000" />}
      </div>
    )
  }
}

export default App
