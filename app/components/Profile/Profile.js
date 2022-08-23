const React = require('react')

function Profile() {

    return (<>
        <h1>My profile</h1>

        <h2>About me </h2>

        <h2>Hobbies</h2>
        <div className='description'>
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
        </div>
        <div id='skills'>
            <h2>My skills</h2>

        </div>

        <a href='https://www.linkedin.com/in/jorge-iturrieta/'>Click me</a>


        
    </>)
}

module.exports = Profile