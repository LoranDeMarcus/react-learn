import React from 'react';
import logo from './logo.png';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={ styles.block }>
            <div className={ styles.logo }>
                <a href='#' className={ styles.link }>
                    <img className={ styles.img } src={ logo } alt="" />
                </a>
            </div>
            <div className={ styles.area }>
                <div className={ styles.search }>
                    <form action="#" method='post' className={ styles.form }>
                        <input type="text" className={ styles.input } placeholder="Search People, Pages, Groups etc" />
                        <button className={ styles.button }>
                            <i className="fas fa-search" />
                        </button>
                    </form>
                </div>
                <div className={ styles.name }>
                    <span>profile</span>
                </div>
                <ul className={ styles.settings }>
                    <li className={ styles.item }>
                        <a href="#" className={ styles.settings__link }>
                            <i className="fas fa-home" />
                        </a>
                    </li>
                    <li className={ styles.item }>
                        <a href="#" className={ styles.settings__link }>
                            <i className="fas fa-user" />
                        </a>
                    </li>
                    <li className={ styles.item }>
                        <a href="#" className={ styles.settings__link }>
                            <i className="fas fa-bell" />
                        </a>
                    </li>
                    <li className={ styles.item }>
                        <a href="#" className={ styles.settings__link }>
                            <i className="fas fa-comment-dots" />
                        </a>
                    </li>
                    <li className={ styles.item }>
                        <a href="#" className={ styles.settings__link }>
                            <i className="fas fa-globe-americas" />
                        </a>
                    </li>
                </ul>
                <div className={ styles.panel }>
                    <h5 className={ styles.panel__title }>
                        { props.isAuth ? <div>{ props.login } - <button onClick={props.logout}>Log out</button></div> : <NavLink to={ '/login' }>Login</NavLink> }
                    </h5>
                </div>
                <div className={ styles.login }>

                </div>
            </div>
        </header>
    );
};

export default Header;