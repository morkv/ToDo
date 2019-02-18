import React, { Component } from 'react';

// import Aux from './hoc/Aux';

import HeaderContainer from './containers/HeaderContainer/HeaderContainer';
import ListContainer from './containers/ListContainer/ListContainer';
import FormContainer from './containers/FormContainer/FormContainer';

class App extends Component {

    render() {
        return (
            <main>
                <HeaderContainer/>
                <ListContainer/>
                <FormContainer/>
            </main>
        );
    }
}

export default App;
