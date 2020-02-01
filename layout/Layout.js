import React from 'react';
import Container from './Container';
import Header from './Header';
import Body from './Body';

class Layout extends React.Component {
    render = () =>
        <Container>
            <Header/>
            <Body>
                {this.props.children}
            </Body>
        </Container>
}

export default Layout;
