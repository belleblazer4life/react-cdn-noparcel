'use strict';

class MySubComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3 className='sub2'> 🍟MySubComponent Class is working </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          minima inventore maiores quasi ducimus, reiciendis ea modi similique
          in molestias?
        </p>
      </div>
    );
  }
}

//customElements.define('my-subcomponent', MySubComponent);
