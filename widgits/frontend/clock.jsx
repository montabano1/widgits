import React from 'react';


class Clock extends React.Component{
  constructor() {
    super();
    this.state = {time: new Date()};
    this.tick = this.tick.bind(this);
    // debugger
  }


  render() {
    return (
      <div>
        <section className="clock">
          <h1>Clock</h1>
          <h3>{this.state.time.getHours()} : {(100 + this.state.time.getMinutes()).toString().slice(1)} : {(100 + this.state.time.getSeconds()).toString().slice(1)} </h3>
        </section>
      </div>
    );
  }

  tick() {
    this.state.time.setSeconds(this.state.time.getSeconds() + 1);
    this.setState({time: this.state.time});
  }

  componentDidMount(){
    this.intId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intId);
    this.intId = 0;
  }
}



export default Clock;
