import {startLoading, stopLoading, updatePhotos} from '../../actions'
import { put, call, take } from "redux-saga/effects"

async function fetchImagesSaga() {
    const request = await fetch('https://jsonplaceholder.typicode.com/photos/?_limit=50')

    const data = await request.json()
    
    return data
}

function* workerSaga() {
    
    yield put(startLoading())
    const data = yield call(fetchImagesSaga)
    yield put(updatePhotos(data))
    yield put(stopLoading())
}

function* rootSaga() {
    yield workerSaga()

}


export default rootSaga