import { REQUEST_HOMEPAGE_DATA,REQUEST_DETAIL_DATA } from "./actionTypes";

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
