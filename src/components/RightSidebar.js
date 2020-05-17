import React, { Component } from 'react';
import CanvasJSReact from '../canvasjs-2.3.2/canvasjs.react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronDown, faChevronRight, faArchive, faWifi, faMusic, faLightbulb
} from '@fortawesome/free-solid-svg-icons';
import profile1 from '../img/profile1.png';
import profile2 from '../img/profile2.png';
import profile3 from '../img/profile3.png';
import profile4 from '../img/profile4.png';
import profile5 from '../img/profile5.png';


var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class RightSidebar extends Component {
    render() {

        const options = {
            theme: "dark2",
            exportEnabled: true,
            animationEnabled: true,
            backgroundColor: "#131220",
            fontFamily: 'Poppins',
            title: {
                text: "Electricity Consumed"
            },
            axisY: {
                includeZero: false,
                suffix: "%"
            },
            axisX: {
                valueFormatString: "MMM YYYY"
            },
            data: [{
                type: "splineArea",
                xValueFormatString: "MMM YYYY",
                dataPoints: [
                    { x: new Date("2020-02"), y: 70.24 },
                    { x: new Date("2020-03"), y: 74.36 },
                    { x: new Date("2020-04"), y: 72.25 },
                    { x: new Date("2020-05"), y: 72.87 },
                    { x: new Date("2020-06"), y: 27.76 },
                    { x: new Date("2020-07"), y: 0 }
                ]
            }]
        }

        return (
            <div className="right-sidebar" >
                <div className="my-devices">
                    <div className="my-devices-header">
                        <h2>My Devices</h2>
                        <div className="my-devices-header-on">
                            <p>ON</p>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </div>
                        <div className="my-devices-header-arrow">
                            <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                    </div>
                    <div className="my-devices-body">
                        <div className="my-devices-item1">
                            <div >
                                <FontAwesomeIcon icon={faArchive} size="2x" />
                                <p>OFF</p>
                                <label class="switch" >
                                    <input type="checkbox" />
                                    <span class="slider1 round" onClick={this.OnOffSwitchRefridgerator}></span>
                                </label>
                            </div>

                            <p><b>Refridgerator</b></p>
                        </div>
                        <div className="my-devices-item2">
                            <div >
                                <FontAwesomeIcon icon={faWifi} size="2x" />
                                <p>OFF</p>
                                <label class="switch" >
                                    <input type="checkbox" />
                                    <span class="slider2 round" onClick={this.OnOffSwitchRefridgerator}></span>
                                </label>
                            </div>

                            <p><b>Router</b></p>
                        </div>
                        <div className="my-devices-item3">
                            <div >
                                <FontAwesomeIcon icon={faMusic} size="2x" />
                                <p>OFF</p>
                                <label class="switch" >
                                    <input type="checkbox" />
                                    <span class="slider3 round" onClick={this.OnOffSwitchRefridgerator}></span>
                                </label>
                            </div>

                            <p><b>Music System</b></p>
                        </div>
                        <div className="my-devices-item4">
                            <div >
                                <FontAwesomeIcon icon={faLightbulb} size="2x" />
                                <p>OFF</p>
                                <label class="switch" >
                                    <input type="checkbox" />
                                    <span class="slider4 round" onClick={this.OnOffSwitchRefridgerator}></span>
                                </label>
                            </div>

                            <p><b>Lamps</b></p>
                        </div>

                    </div>
                </div>
                <div className="members">
                    <div className="members-header">
                        <h2>Members</h2>
                        <div>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                    </div>
                    <div className="members-body">
                        <div>
                            <img src={profile1}></img>
                            <p>Jessica</p>
                            <p className="member-role">Admin</p>
                        </div>
                        <div>
                            <img src={profile2}></img>
                            <p>Matt</p>
                            <p className="member-role">Full Access</p>
                        </div>
                        <div>
                            <img src={profile3}></img>
                            <p>Dad</p>
                            <p className="member-role">Full Access</p>
                        </div>
                        <div>
                            <img src={profile4}></img>
                            <p>Mom</p>
                            <p className="member-role">Full Access</p>
                        </div>
                        <div>
                            <img src={profile5}></img>
                            <p>Andy</p>
                            <p className="member-role">Partial Access</p>
                        </div>
                    </div>
                </div>
                <div className="power-consumed">
                    <CanvasJSChart options={options}
                    /* onRef={ref => this.chart = ref} */
                    />
                </div>
            </div>
        )
    }
}
