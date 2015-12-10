/**
 * Created by john on 15/10/19.
 */
import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import  {EventEmitter} from 'events';
import  assign from 'object-assign';

var CHANGE_EVENT = 'change';

var __innerTxt = "";

var AppStore = assign({}, EventEmitter.prototype, {

    getLiveWord:function(){
        return __innerTxt;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {

    switch(action.type) {
        case AppConstants.KEY_ONE:

            __innerTxt = " 事件 1 ";
            AppStore.emitChange();
            break;
        case AppConstants.KEY_TWO:
            __innerTxt = " 事件 2 ";
            AppStore.emitChange();
            break;
        default:
        // no op
    }
});

export default AppStore;
