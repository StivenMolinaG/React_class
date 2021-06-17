import React, { Component } from 'react';
import HeaderOption from '../HeaderOption';
import headerOptions from './headerOptions.json';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeOption: 'home'
        }
    }

    onClick = (activeOption) => {
        this.setState({ activeOption: activeOption });
    }

    render() {
        return (
            <header className="header">
                <nav className="header__nav nav">
                    <ul className="nav__list list">
                        {/* <li className={this.state.activeOption === 'home' ? 'list__item list__item--active' : 'list__item'}
                            onClick={() => this.onClick('home')}>
                            Home
                        </li>
                        <li className={this.state.activeOption === 'who-we-are' ? 'list__item list__item--active' : 'list__item'}
                            onClick={() => this.onClick('who-we-are')}>
                            Who are we?
                        </li>
                        <li className={this.state.activeOption === 'work-with-us' ? 'list__item list__item--active' : 'list__item'}
                            onClick={() => this.onClick('work-with-us')}>
                            Work with us!
                        </li>
                        <li className={this.state.activeOption === 'be-happy' ? 'list__item list__item--active' : 'list__item'}
                            onClick={() => this.onClick('be-happy')}>
                            Be happy!!!!
                        </li> */}
                        {/* <HeaderOption activeOption={this.state.activeOption}
                            onClick={this.onClick}
                            optionText="Home"
                            option="home" />
                        <HeaderOption activeOption={this.state.activeOption}
                            onClick={this.onClick}
                            optionText="Who are we?"
                            option="who-we-are" />
                        <HeaderOption activeOption={this.state.activeOption}
                            onClick={this.onClick}
                            optionText="Work with us!"
                            option="work-with-us" />
                        <HeaderOption activeOption={this.state.activeOption}
                            onClick={this.onClick}
                            optionText="Be happy!!!!"
                            option="be-happy" /> */}
                        {
                            headerOptions.map((hopt, index) => {
                                return (
                                    <HeaderOption activeOption={this.state.activeOption}
                                        onClick={this.onClick}
                                        optionText={hopt.optionText}
                                        option={hopt.option}
                                        key={index} />
                                );
                            })
                        }
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
