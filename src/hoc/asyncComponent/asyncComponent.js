import React, { Component } from 'react';




const asyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        }

        componentDidMount () {
            importComponent()
                .then(cmp => {
                    this.setState({component: cmp.default});
                });
        }
        
        render () {
            const C = this.state.component;

            return C ? <C {...this.props} /> : null;
        }
    }
}

export default asyncComponent;


//// load only necessary code ====> optimized
/* 
to make a user of it make sure to import in App.js and use it as follows

const asyncCheckout = asyncComponent(() => {
  return import('./containers/Checkout/Checkout');
});
====> it is like a component you can pass it to routing


*/