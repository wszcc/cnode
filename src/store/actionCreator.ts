import {
  REQUEST_HOMEPAGE_DATA,
  REQUEST_DETAIL_DATA,
  LOGIN,
  LOGOUT,
  REQUEST_USER_INFO,
  REQUEST_COLLECT_THEME
} from "./actionTypes";

interface actionType {
  type: string;
  payload?: any;
}
// 请求主页数据的同步Action
export const getHomePageDate = (payload?: any): actionType => ({
  type: REQUEST_HOMEPAGE_DATA,
  payload,
});

export const getDetailPageDate = (payload?: any): actionType => ({
  type: REQUEST_DETAIL_DATA,
  payload,
});

export const loginAction = (): actionType => ({
  type: LOGIN,
});

export const logoutAction = (): actionType => ({
  type: LOGOUT,
});

export const getUserInfo = (payload:any) => ({
  type: REQUEST_USER_INFO,
  payload,
});

export const getUserCollectTheme = (payload:any) => ({
  type: REQUEST_COLLECT_THEME,
  payload
});
