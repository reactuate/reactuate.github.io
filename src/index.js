import { React, Route, Application,
         connect, bindActionCreators } from 'reactuate'

class App extends React.Component {
  render() {
    return <div>{this.props.children}</div>
  }
}

class HomePage extends React.Component {
  render() {
    return (<div>
     <h1>Reactuate</h1>
     </div>)
  }
}

const routes = (
  <Route component={App}>
    <Route path="/" component={HomePage} />
  </Route>
)

new Application({routes}).render()
