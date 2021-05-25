'use strict';

class MySubComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <span> MySubComponent Class is working</span>;
  }
}

customElements.define('mycomponent', MySubComponent);
