/**
 * Created by john on 15/10/19.
 */
import React from 'react';
import Demo from './compoents/demo/demo.jsx';

var hotObj = React.render(
    <div className="time">
        <Demo name="入口2-移动端"/>
    </div>,
    document.getElementById('app')
);

