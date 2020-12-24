import { REQUEST_SAGA_HOMEPAGE_DATA,REQUEST_SAGE_DETAIL_DATA } from "./actionTypes";
const initState = {
  name: "zc",
};
type actionType = {
  type: string;
  payload?: any;
  res?: object;
};
export default function reducer(state: any = initState, action: actionType):object {
  switch (action.type) {
    case REQUEST_SAGA_HOMEPAGE_DATA:
      state.homePageDate = action.res;
      return {...state};
    case REQUEST_SAGE_DETAIL_DATA:
      state.detailData = action.res;
      return {...state};
    default:
      return {...state};
  }
}
