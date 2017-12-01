const AuthenticationController = require('./controllers/AuthenticatoinController')
const AuthenticationControllerPolicy = require('./policies/AuthenticatonControllerPolicy')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
}