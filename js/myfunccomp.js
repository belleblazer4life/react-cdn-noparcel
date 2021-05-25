'use strict';

const MyComp = (props) => {
  return (
    <div>
      <h3 className='sub3'>
        🥞This is my <u>Functional</u> component with a props object:
        <u>{props.name}</u> aka <u>{props.heroName}</u>
      </h3>
      <b>{props.children}</b>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia minima
        inventore maiores quasi ducimus, reiciendis ea modi similique in
        molestias? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Officia minima inventore maiores quasi ducimus, reiciendis ea modi
        similique in molestias?
      </p>
    </div>
  );
};

//customElements.define('my-funccomponent', MyComp);
