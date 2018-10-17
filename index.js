/** @format */

import { AppRegistry } from "react-native";
import App from "./app/index";
import { name as appName } from "./app.json";
import { sagaMiddleware } from "./app/store";
import { watcherSaga } from "./app/sagas/index";
sagaMiddleware.run(watcherSaga);
AppRegistry.registerComponent(appName, () => App);
