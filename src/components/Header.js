import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCog, faBell, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import profile1 from '../img/profile1.png'

export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="logo">
                    <div className="ring1"></div>
                    <div className="ring2"></div>
                    <div className="logo-h"><h2>H</h2></div>

                </div>
                <div className="search">
                    <div>
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                    <input type="search" id="site-search" name="q"
                        placeholder="Search" />
                </div>
                <div className="options">
                    <div className="options-btn">
                        <FontAwesomeIcon icon={faCog} size='lg' />
                    </div>
                    <div className="options-btn">
                        <FontAwesomeIcon icon={faBell} size='lg' />
                    </div>
                    <div className="profile">
                        <img src={profile1}></img>
                        <p>Jessica Washington</p>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                </div>
            </div >
        )
    }
}
