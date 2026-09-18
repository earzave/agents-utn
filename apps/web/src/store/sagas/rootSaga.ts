import { all } from 'redux-saga/effects'

// TODO(fase chat): implementá el watcher raíz.
// Patrón: un saga "watcher" por feature que escucha actions con takeEvery/takeLatest
// y delega en sagas "worker". Ejemplo conceptual:
//   function* watchSendMessage() {
//     yield takeLatest(chatActions.sendMessage.request.type, workerSendMessage)
//   }
// Acá orquestás todos los watchers con all + fork (cada watcher corre en su propio
// "hilo" lógico, como servicios independientes detrás de un load balancer).
export function* rootSaga() {
  yield all([
    // fork(watchSendMessage),
    // fork(watchStreamTokens),
  ])
}