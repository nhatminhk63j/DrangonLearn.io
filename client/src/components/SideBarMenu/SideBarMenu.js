import React, { Component } from 'react';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import './SideBarMenu.scss';

class SideBarMenu extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="sidebar text-center">
                    <h4>My courses</h4>
                    <nav className="sidebar__menu text-left">
                        <NavLink exact={true} activeClassName='sidebar__link--active' className="sidebar__link" to="/number">Numbers</NavLink>
                        <NavLink activeClassName='sidebar__link--active' className="sidebar__link" to="/fractions">Fractions</NavLink>
                        <NavLink activeClassName='sidebar__link--active' className="sidebar__link" to="/decimal-fractions-and-percentage">Decimal fractions and percentage</NavLink>
                        <NavLink activeClassName='sidebar__link--active' className="sidebar__link" to="/measurement">Measurement</NavLink>
                        <NavLink activeClassName='sidebar__link--active' className="sidebar__link" to="/data-handing">Data handing</NavLink>
                    </nav>

                    {/* <Route path="/decimal-fractions-and-percentage" component={} /> */}
                </div>
            </BrowserRouter>
        );
    }
}

export default SideBarMenu;