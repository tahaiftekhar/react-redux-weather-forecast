import { FETCH_WEATHER } from '../actions/index';

export default function(state=[], action){
    if(action.error){
        return state;
    }

    switch (action.type){
        case FETCH_WEATHER:
            var found = false;
            debugger
            for(var i=0;i<state.length;i++){
                if(state[i].city.id == action.payload.data.city.id){
                    found = true;
                    break
                }
            }
            if(!found)
                return [action.payload.data, ...state];
                //Same as return state.concat([action.payload.data]);
            else
                return state;
    }
    return state;
}