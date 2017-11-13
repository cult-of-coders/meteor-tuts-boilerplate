import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Menu from '/imports/client/layout/header/Menu';

class Header extends Component {
    render() {
        return (
            <header className="cc-header">
                <div className="cc-logo">
                    <a href={FlowRouter.url('home')}><img src="/assets/img/meteor-tuts.png"/></a>
                </div>

                <Menu routes={[
                    {name: "home", label: "Home"},
                    {name: "login", label: "Login"},
                    {name: "register", label: "Register"},
                ]}/>
            </header>
        )
    }
}

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
