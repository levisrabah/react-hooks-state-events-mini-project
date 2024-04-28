import React from "react";
function Header({ isDarkMode, onDarkModeClick}){
    return(
        <header>
            <button onClick={onDarkModeClick}>
                {isDarkMode ? "Dark" : "Light"} Mode

            </button>
        </header>
    );
}
export default Header;