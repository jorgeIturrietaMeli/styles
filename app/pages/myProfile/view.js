
const React = require('react')
const Script = require('nordic/script');
const Style = require('nordic/style');
const Profile = require('../../components/Profile');
const Menu = require('../../components/Menu/Menu');
const Flex = require('../../components/Flex');

function View() {
   

    return (
        <> 
            <Script src="vendor.js" />
            <Script src="myProfile.js" />
            <Style href="myProfile.css" />
   
            {/* <Profile/> */}
            {/* <Menu/> */}
            <Flex />

        </>
    )
}

module.exports = View