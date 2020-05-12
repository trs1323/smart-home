import React, { Component } from 'react';
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCloud, faSun, faCloudSunRain, faCloudSun,
    faCloudShowersHeavy, faCloudRain, faWind, faMoon, faCloudMoon, faBolt, faSnowflake, faTint, faThermometerEmpty,
    faChevronDown, faLightbulb, faArchive
} from '@fortawesome/free-solid-svg-icons';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { city: "Phoenix", refridgerator: "OFF", temperature: "OFF", AC: "OFF", lights: "OFF", roomTemp: 75 }
        this.Weather = this.Weather.bind(this);
        this.OnOffSwitchRefridgerator = this.OnOffSwitchRefridgerator.bind(this);
        this.OnOffSwitchTemperature = this.OnOffSwitchTemperature.bind(this);
        this.OnOffSwitchAC = this.OnOffSwitchAC.bind(this);
        this.OnOffSwitchLights = this.OnOffSwitchLights.bind(this);
        this.CheckOn = this.CheckOn.bind(this)
        this.IncreaseTemp = this.IncreaseTemp.bind(this)
        this.DecreaseTemp = this.DecreaseTemp.bind(this)
    }

    componentDidMount() {
        Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=imperial&appid=8729b582582eb79797b6635719bda5b0`)
            .then(res => this.setState({
                temp: res.data.main,
                weather: res.data.weather
            })
            )
            .catch(err => console.log(err))
    }

    OnOffSwitchRefridgerator() {
        if (this.state.refridgerator === "OFF") {
            this.setState({
                refridgerator: "ON"
            })
        } else {
            this.setState({
                refridgerator: "OFF"
            })
        }
    }

    OnOffSwitchTemperature() {
        if (this.state.temperature === "OFF") {
            this.setState({
                temperature: "ON"
            })
        } else {
            this.setState({
                temperature: "OFF"
            })
        }
    }

    OnOffSwitchAC() {
        if (this.state.AC === "OFF") {
            this.setState({
                AC: "ON"
            })
        } else {
            this.setState({
                AC: "OFF"
            })
        }
    }

    OnOffSwitchLights() {
        if (this.state.lights === "OFF") {
            this.setState({
                lights: "ON"
            })
        } else {
            this.setState({
                lights: "OFF"
            })
        }
    }

    CheckOn(word) {
        if (word == "ON") {
            return "purple"
        }

    }

    IncreaseTemp() {
        this.setState({
            roomTemp: this.state.roomTemp + 1
        })
    }

    DecreaseTemp() {
        this.setState({
            roomTemp: this.state.roomTemp - 1
        })
    }

    Weather() {
        if (this.state.weather[0].main == "Thunderstorm") {
            return <FontAwesomeIcon icon={faBolt} size="10x" />
        } else if (this.state.weather[0].main == "Drizzle") {
            return <FontAwesomeIcon icon={faCloudRain} size="10x" />
        } else if (this.state.weather[0].main == "Rain") {
            return <FontAwesomeIcon icon={faCloudShowersHeavy} size="10x" />
        } else if (this.state.weather[0].main == "Snow") {
            return <FontAwesomeIcon icon={faSnowflake} size="10x" />
        } else if (this.state.weather[0].main == "Clear") {
            return <FontAwesomeIcon icon={faSun} size="10x" />
        } else if (this.state.weather[0].main == "Clouds") {
            return <FontAwesomeIcon icon={faCloud} size="10x" />
        }
    }

    render() {
        return (
            <div className="main">
                <div className="greetings">
                    <div>
                        <h1>Hi Jessica!</h1>
                        <p>Welcome Home! The air quality is good and Fresh you <br /> can go out today</p>
                        {this.state && this.state.weather &&
                            <div>
                                <h2>{this.state.temp.temp.toString().slice(0, 2)}°F</h2>
                                <p>Feels Like {this.state.temp.feels_like.toString().slice(0, 2)}°F</p>
                                <p>{this.state.weather[0].description}</p>
                            </div>
                        }

                    </div>
                    <div>
                        {this.state && this.state.weather &&
                            <this.Weather />
                        }
                    </div>
                </div>
                <div className="home">
                    <h2>Jessica's Home</h2>
                    {this.state && this.state.weather &&
                        <div className="home-weather">
                            <div>
                                <p>{this.state.temp.humidity}%</p>
                                <FontAwesomeIcon icon={faTint} size="sm" className="home-temp" />
                            </div>
                            <div>
                                <p>{this.state.temp.temp.toString().slice(0, 2)}°F</p>
                                <FontAwesomeIcon icon={faThermometerEmpty} size="sm" className="home-hum" />
                            </div>
                        </div>
                    }
                    <div>
                        <p>Living Room</p>
                        <FontAwesomeIcon icon={faChevronDown} size="sm" />
                    </div>
                </div>

                <div className="home-btn">
                    <div className="home-btn-container">
                        <div className="home-btn-btn">
                            <p>{this.state.refridgerator}</p>
                            <label class="switch" >
                                <input type="checkbox" />
                                <span class="slider round" onClick={this.OnOffSwitchRefridgerator}></span>
                            </label>
                        </div>
                        <FontAwesomeIcon className={this.CheckOn(this.state.refridgerator)} icon={faArchive} size="2x" />
                        <p><b>Refridgerator</b></p>
                    </div>
                    <div className="home-btn-container">
                        <div className="home-btn-btn">
                            <p>{this.state.temperature}</p>
                            <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round" onClick={this.OnOffSwitchTemperature}></span>
                            </label>
                        </div>
                        <FontAwesomeIcon icon={faBolt} size="2x" className={this.CheckOn(this.state.temperature)} />
                        <p><b>Temperature</b></p>
                    </div>
                    <div className="home-btn-container">
                        <div className="home-btn-btn">
                            <p>{this.state.AC}</p>
                            <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round" onClick={this.OnOffSwitchAC}></span>
                            </label>
                        </div>
                        <FontAwesomeIcon icon={faWind} size="2x" className={this.CheckOn(this.state.AC)} />
                        <p><b>Air Conditioner</b></p>
                    </div>
                    <div className="home-btn-container">
                        <div className="home-btn-btn">
                            <p>{this.state.lights}</p>
                            <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round" onClick={this.OnOffSwitchLights}></span>
                            </label>
                        </div>
                        <FontAwesomeIcon icon={faLightbulb} size="2x" className={this.CheckOn(this.state.lights)} />
                        <p><b>Lights</b></p>
                    </div>
                </div>
                <div className="home-settings">
                    <div className="home-settings-header" >
                        <div>
                            <FontAwesomeIcon icon={faBolt} size="lg" />
                        </div>
                        <p className="home-settings-header-p">Living Room Temperature</p>
                        <label class="switch">
                            <input type="checkbox" />
                            <span class="slider round" onClick={this.OnOffSwitchTemperature}></span>

                        </label>
                        <p>{this.state.temperature}</p>
                    </div>
                    <div className="home-settings-body">
                        <div className="home-settings-body-minus" onClick={this.DecreaseTemp}><p>-</p></div>
                        <div className="home-settings-temp">
                            <div>
                                <h1>{this.state.roomTemp}°F</h1>
                            </div>
                        </div>
                        <div className="home-settings-body-plus" onClick={this.IncreaseTemp}><p>+</p></div>
                    </div>
                </div>
            </div>
        )
    }
}
