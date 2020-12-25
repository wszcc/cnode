import { takeEvery } from "redux-saga/effects";
import {
  fetcHomePagehData,
  fetchDetailPageData,
  fetchUserInfo,
} from "./createSagaAction";
import {
  REQUEST_HOMEPAGE_DATA,
  REQUEST_DETAIL_DATA,
  REQUEST_USER_INFO,
} from "./actionTypes";

function* watchFetchData() {
  yield takeEvery(REQUEST_HOMEPAGE_DATA, fetcHomePagehData);
  yield takeEvery(REQUEST_DETAIL_DATA, fetchDetailPageData);
  yield takeEvery(REQUEST_USER_INFO, fetchUserInfo);
}

export default watchFetchData;
