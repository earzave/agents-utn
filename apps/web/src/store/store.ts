import { configureStore } from '@reduxjs/toolkit'

// PLACEHOLDER: evita el error "Store does not have a valid reducer" con el store vacío.
// TODO(fase chat): borralo y agregá tus slices acá (ej. chatReducer desde features/chat/chatSlice)
//   reducers: {
//     chat: chatReducer,
//   },
const placeholderReducer = (state = {}) => state

export const store = configureStore({
  reducer: { placeholder: placeholderReducer },
})

// TODO(fase chat): conectá el saga middleware ANTES de crear el store:
//   1. import sagaMiddlewareFactory from 'redux-saga'
//   2. const sagaMiddleware = sagaMiddlewareFactory()
//   3. pasalo en configureStore: middleware: (getDefaultMiddleware) =>
//        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
//   4. después de crear el store: sagaMiddleware.run(rootSaga)
// Trade-off a documentar en el README: ¿por qué thunk:false si usás sagas?
// (no es obligatorio desactivarlo; decidí con criterio y justificá)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store