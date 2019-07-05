import React from 'react';
import logo from './images/cursedLogo.svg'

function landingHeader() {
    return (
        <div className="landingHeader">
            <div className="headerContainer">
                <div className="logoContainer">
                <img src={logo} className="logo" alt="logo" />
                </div>
                <div className="nameContainer">
                    Cursed Gaming Comunity
                </div>
            </div>
        </div>
    );
}

export default landingHeader;
