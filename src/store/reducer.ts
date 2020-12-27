import {
  REQUEST_SAGA_HOMEPAGE_DATA,
  REQUEST_SAGE_DETAIL_DATA,
  LOGIN,
  LOGOUT,
  REQUEST_SAGA_USER_INFO,
  REQUEST_SAGA_COLLECT_THEME,
  REQUEST_USER_THEME_INFO,
  REQUEST_SAGA_MESSAGE,
  ERROR_TYPE,
} from "./actionTypes";
import isLogin from "../utils/isLogin";
import { message } from "antd";
const initState = {
  name: "zc",
  isLogin: isLogin(),
};
type actionType = {
  type: string;
  payload?: any;
  res?: object;
};
export default function reducer(
  state: any = initState,
  action: actionType
): object {
  switch (action.type) {
    case REQUEST_SAGA_HOMEPAGE_DATA:
      state.homePageDate = action.res;
      return { ...state };
    case REQUEST_SAGE_DETAIL_DATA:
      state.detailData = action.res;
      return { ...state };
    case LOGIN:
      state.isLogin = true;
      return { ...state };
    case LOGOUT:
      state.isLogin = false;
      return { ...state };
    case REQUEST_SAGA_USER_INFO:
      state.userInfo = action.res;
      return { ...state };
    case REQUEST_SAGA_COLLECT_THEME:
      state.collectTheme = action.res;
      return { ...state };
    case REQUEST_USER_THEME_INFO:
      state.editInfo = action.payload;
      return { ...state };
    case REQUEST_SAGA_MESSAGE:
      state.message = action.res;
      return { ...state };
    case ERROR_TYPE:
      message.error("请求失败！");
      return { ...state };
    default:
      return { ...state };
  }
}
