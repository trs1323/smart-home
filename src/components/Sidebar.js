import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faLightbulb, faShieldAlt, faMapMarkerAlt, faUserFriends, faChartBar, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div>
                    <div className="active-tab"></div>
                    <FontAwesomeIcon icon={faThLarge} size="2x" /></div>
                <div>
                    <div className="active-tab"></div>
                    <FontAwesomeIcon icon={faLightbulb} size="2x" /></div>
                <div>
                    <div className="active-tab"></div>
                    <FontAwesomeIcon icon={faShieldAlt} size="2x" /></div>
                <div>
                    <div className="active-tab"></div>
                    <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" /></div>
                <div>
                    <div className="active-tab"></div>
                    <FontAwesomeIcon icon={faUserFriends} size="2x" /></div>
                <div>
                    <div className="active-tab"></div>
                    <FontAwesomeIcon icon={faChartBar} size="2x" /></div>
                <div>
                    <FontAwesomeIcon icon={faSignOutAlt} size="2x" className="signout" /></div>
            </div>
        )
    }
}
