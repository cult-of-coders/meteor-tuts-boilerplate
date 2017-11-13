import router from './router';

/**
 * Create a page specific css class from route name and append to  document body
 */
let addPageClass = () => {
    let routeClass  = router.current().route.name.replace(/_|\./g, "-");
    document.body.classList.add(`cc-${routeClass}`);
};

/**
 * Remove the page specific css class from document body
 */
let removePageClass = () => {
    let routeClass  = router.current().route.name.replace(/_|\./g, "-");
    document.body.classList.remove(`cc-${routeClass}`);
};

/**
 * Scroll Page to top
 */
let PageToTopOnRouteChange = () => {
    window.scrollTo(0, 0);
};

/**
 * Remove mobile menu open class from document body
 */
let removeMobileMenuClass = () => {
    document.body.classList.remove('cc-menu-open');
};

FlowRouter.triggers.enter([addPageClass, PageToTopOnRouteChange]);
FlowRouter.triggers.exit([removePageClass, removeMobileMenuClass]);


/**
 * Test if a route is active
 *
 * @param {string} route
 * @returns {boolean}
 */
let isCurrentRoute = (route) => {
    return router.current().route.name === route;
};


/**
 * Check if a submenu item is active
 *
 * @param {array} routes
 * @returns {boolean}
 */
let isCurrentSubmenuRoute = (routes) => {
    return routes.containsByProp('name', router.current().route.name);
};

export default FlowHelpers = {
    isCurrentRoute,
    isCurrentSubmenuRoute
};
