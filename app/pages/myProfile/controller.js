const React = require('react')
const View = require('./view')

exports.render = function render(req, res) {
    const MyProfile = props => (
        <View {...props} />
    )
    // Render view
    res.render(MyProfile, {})
}