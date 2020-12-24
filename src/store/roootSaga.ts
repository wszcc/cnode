import { takeEvery } from "redux-saga/effects";
import { fetcHomePagehData, fetchDetailPageData } from "./createSagaAction";
import { REQUEST_HOMEPAGE_DATA, REQUEST_DETAIL_DATA } from "./actionTypes";

function* watchFetchData() {
  yield takeEvery(REQUEST_HOMEPAGE_DATA, fetcHomePagehData);
  yield takeEvery(REQUEST_DETAIL_DATA, fetchDetailPageData);
}

export default watchFetchData;
