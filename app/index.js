var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

//Modern way to created a component, React.createClass() is deprecated
class App extends React.Component {
  //Set what the UI will look like for a Component
  render(){
    return (
      <div>
        Hello World!
      </div>
    )
  }
}

//Render Component to DOM
ReactDOM.render(
  <App />, //pass in component to be rendered
  document.getElementById('app') //where to render component
)
