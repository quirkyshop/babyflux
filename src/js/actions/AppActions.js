/**
 * Created by john on 15/10/19.
 */
import AppDispathcer from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

export default {

  actionOne: function(txt) {
    AppDispathcer.dispatch({
      type: AppConstants.KEY_ONE,
        text: txt
       });
    },
  actionTwo: function(txt) {
    AppDispathcer.dispatch({
      type: AppConstants.KEY_TWO,
        text: txt
      });
    }
};
