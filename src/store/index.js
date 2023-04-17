import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';

import reducer from './slices/index';

const isDevelopment = process.env.NODE_ENV === 'development';

const store = configureStore({
    reducer,
    devTools: isDevelopment,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(isDevelopment? logger: [])
});

export default store;