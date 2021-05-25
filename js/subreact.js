'use strict';

const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;
const Router = ReactRouterDOM.HashRouter;
const Switch = ReactRouterDOM.Switch;
const Prompt = ReactRouterDOM.Prompt;
const Redirect = ReactRouterDOM.Redirect;

class SubReact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router>
          <Route path="/" exact component={SubComponent} />
          <Route path="/sub" component={MyComp} />
          <Route path="/func" component={MySubComponent} />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<SubReact />, document.getElementById('sub-react'));
