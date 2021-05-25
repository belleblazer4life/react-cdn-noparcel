'use strict';
// Call routes like http://127.0.0.1:5500/index.html#/
// Call routes like http://127.0.0.1:5500/index.html#/sub
// Call routes like http://127.0.0.1:5500/index.html#/func

const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;
const Router = ReactRouterDOM.HashRouter;
const Switch = ReactRouterDOM.Switch;
const Prompt = ReactRouterDOM.Prompt;
const Redirect = ReactRouterDOM.Redirect;

console.log({ ReactRouterDOM });

class MainReact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router>
          <Route path='/' exact component={MySubComponent} />
          <Route path='/sub' component={SubComponent} />
          <Route path='/func' component={MyComp} />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<MainReact />, document.getElementById('root-react'));
