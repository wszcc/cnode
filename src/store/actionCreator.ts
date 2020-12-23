import { REQUEST_HOMEPAGE_DATA } from "./actionTypes";

interface actionType {
  type: string;
  payload?: any;
}

export const getHomePageDate = (payload?: any): actionType => ({
  type: REQUEST_HOMEPAGE_DATA,
  payload,
});
