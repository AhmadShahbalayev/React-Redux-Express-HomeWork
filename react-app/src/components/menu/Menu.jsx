import React from 'react';
import DropDownMenu from './DropDownMenu';
import styled from 'styled-components';

const DIV = styled.div
`
    position: relative;
`

class Menu extends React.Component {
    state = {
        top: 0,
        left: 0
    }
    showMenu = (e) => {
        this.setState({
            top: e.clientY - 360,
            left: e.clientX - 388
        })
    }
    componentDidMount() {
        window.addEventListener('click', this.showMenu)
    }
    componentWillUnmount() {
        window.addEventListener('click', this.showMenu)
    }
    render() {
        return (
            <DIV style={this.state}>
                <DropDownMenu />
            </DIV>
        );
    }
}

export default Menu;