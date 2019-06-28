import { UPDATE_USER } from './../actions/userAction';
import Layout from './../components/layout';

export default function userReducer(state = '', {type, payload}) {
    switch (type) {
        case 'UPDATE_USER' :
            return payload.user;
        default: return state;
    }
}

function dollarReducer(state = Layout.state, {type, payload}) {
    switch (type) {
        case 'dollar' :
            return payload.dollar;
            default: return state;
    }
}