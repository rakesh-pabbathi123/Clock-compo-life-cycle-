import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {
    super(props)

    this.state = {dateTime: new Date()}
    console.log('1.constructor is called')
  }

  componentDidMount() {
    console.log('2.componentDidMount is Called')
    this.TimeId = setInterval(this.tick, 1000)
  }

  tick = () => {
    this.setState({dateTime: new Date()})
  }

  componentWillDidUnmount() {
    clearInterval(this.TimeId)
  }

  render() {
    const {dateTime} = this.state

    console.log('3.render is called')
    return (
      <div className="clock-container">
        <h1 className="heading">{dateTime.toLocaleTimeString()}</h1>
      </div>
    )
  }
}

export default Clock
