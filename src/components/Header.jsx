import React from 'react'
import Btn from './UI/button/Btn.jsx';

function Header() {
    return (
        <header>
            <Btn>Create new task</Btn>
            <hr className="hrText" data-content="OR"/>
            <Btn Style="color:#87ceeb; border-color:#87ceeb">Check all tasks</Btn>
        </header>
    )
}

export default Header;