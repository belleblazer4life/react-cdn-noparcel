('use strict');

class SubComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3 className='sub1'> 🍣SubComponent Class is-working </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          minima inventore maiores quasi ducimus, reiciendis ea modi similique
          in molestias?
        </p>
      </div>
    );
  }
}

//customElements.define('sub-component', SubComponent);
