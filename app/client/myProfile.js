require('../pages/myProfile/styles.scss');
const MyProfileView = require('../pages/myProfile/view')
const React = require('react');
const hydrate = require('nordic/hydrate');

hydrate(<MyProfileView /> 
    ,
    document.getElementById('root-app'),
);
