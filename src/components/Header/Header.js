import React from 'react';
import PropTypes from 'prop-types';
import { Container, Col, Row } from 'react-grid-system';
import  './Header.scss'

import Stats from '../UI/Stats/Stats';

const Header = ({ todos }) => {
    return (
        <header className={['header'].join(' ')}>
            <Container>
                <Row>
                    <Col xs={6}>
                        <h1 className={'header__heading'}>Redux Todo</h1>
                    </Col>
                    <Col xs={6}>
                        <Stats 
                            todos={todos}
                            statsClass={['header__stats']}/>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

Header.propTypes = {
    todos: PropTypes.array.isRequired
};

export default Header;