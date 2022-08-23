const React = require('react')


function Menu() {
    return (
        <nav className='menu'>
            <ul>
                <li tabIndex={1}><a>Item 1</a></li>
                <li tabIndex={2}><a>Item 2</a></li>
                <li tabIndex={3}><a>Item 3</a></li>
                <li tabIndex={4}><a>Item 4</a></li>
            </ul>
        </nav>)
}

module.exports = Menu