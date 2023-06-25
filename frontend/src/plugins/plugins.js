import { userVariables, userFunctions } from './user_plugins';

const MyPlugin = {
  install(app) {
    // Variables et fonctions pour les utilisateurs
    app.config.globalProperties.$userVariables = userVariables;
    app.config.globalProperties.$userFunctions = userFunctions;
  }
};

export default MyPlugin;
