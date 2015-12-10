// 一个组件是一个模块，自己带有自己的样式
import React from 'react';
import AppActions from'../../actions/AppActions';
import AppStore from'../../stores/AppStore';
import './demo.less';

var ReactPropTypes = React.PropTypes;

function getStateFromStores() {
    console.log("change ---");
    return {
        liveWord: AppStore.getLiveWord()
    };
}

var Demo = React.createClass({

    propTypes: {
        name: ReactPropTypes.string.isRequired
    },

    getInitialState: function() {
        return getStateFromStores();
    },

    componentDidMount: function() {
        AppStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        AppStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
        this.setState(getStateFromStores());
    },

    render: function() {

        return (
            <div className="demo">
                <span>名字：{this.props.name}</span>
                <p>点击的事件： {this.state.liveWord}</p>
                <div onClick={this._onOneClick}>点击 事件 1</div>
                <div onClick={this._onTwoClick}>点击 事件 2</div>
            </div>
        );
    },

    _onOneClick: function() {
        AppActions.actionOne('one');
    },

    _onTwoClick: function() {
        AppActions.actionTwo('two');
    }

});

export default Demo;
