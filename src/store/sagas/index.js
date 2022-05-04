import { takeEvery, all } from 'redux-saga/effects';

import {loginSaga} from './login';
import {LOGIN} from '../types';

export function* watchSBS() {
    yield all([
        takeEvery(LOGIN, loginSaga),
    ])
}