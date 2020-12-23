import { REQUEST_SAGA_HOMEPAGE_DATA } from "./actionTypes";
const initState = {
  name: "zc",
};
type actionType = {
  type: string;
  payload?: any;
  res?: object;
};
export default function reducer(state: any = initState, action: actionType) {
  switch (action.type) {
    case REQUEST_SAGA_HOMEPAGE_DATA:
      state.homePageDate = action.res;
      return {...state};
    default:
      return state;
  }
}
