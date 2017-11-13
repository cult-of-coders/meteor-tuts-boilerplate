import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FlowHelpers from '/imports/client/routing/helpers'

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { routes } = this.props;

        const menuRoutes = routes.map(function (route, index) {
            let routeClasses = classNames(
                'cc-menu__item', {
                    'cc--active': FlowHelpers.isCurrentRoute(route.name)
                }

            );
            return (
                <li key={index} className={routeClasses}>
                    <a className="cc-button cc-button--menu" href={FlowRouter.url(route.name)}>
                        <span className="cc-menu__label">{route.label}</span>
                    </a>
                </li>
            )
        }, this);

        return (
            <ul className="cc-custom-list cc-menu">
                {menuRoutes}
            </ul>
        );
    }
}

Menu.propTypes = {
    routes: PropTypes.array.isRequired
};
Menu.defaultProps = {};

export default Menu;
