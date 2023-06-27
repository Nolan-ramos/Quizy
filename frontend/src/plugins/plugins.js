import { userVariables, userFunctions } from './user_plugins';
import { productVariables, productFunctions } from './product_plugins';

const MyPlugin = {
  install(app) {
    // Variables et fonctions pour les utilisateurs
    app.config.globalProperties.$userVariables = userVariables;
    app.config.globalProperties.$userFunctions = userFunctions;

    // Variables et fonctions pour les produits
    app.config.globalProperties.$productVariables = productVariables;
    app.config.globalProperties.$productFunctions = productFunctions;
  }
};

export default MyPlugin;
