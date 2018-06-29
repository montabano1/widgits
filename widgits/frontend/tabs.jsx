import React from 'react';

class Tabs extends React.Component{

  constructor(props) {
    super(props);
    this.state = { index: 0};
    this.changeState = this.changeState.bind(this);
  }

  changeState(idx) {

    this.setState({index: idx});
  }

  render() {
    const tabsTitles = this.props.tabsTitles.map((tabTitle, idx) => {
      return (
        <h1>{tabTitle.title}</h1>
      );
  });
    return (
      <div className="tabs" onClick={ this.changeState }>
        <ul>
          {tabsTitles}
        </ul>
        <article>{this.props.tabsTitles[this.state.index].content}</article>
      </div>
    );
  }

}

export default Tabs;
