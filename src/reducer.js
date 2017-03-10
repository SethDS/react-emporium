/**
 * Created by Seth on 3/9/2017.
 */
import {combineReducers} from "redux";

import cart from "./DUCKS/cartDuck";
import user from "./DUCKS/userDuck";

export default combineReducers({
    cart,
    user
});

