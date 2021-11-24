function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } const _app = require('./app');

const _app2 = _interopRequireDefault(_app);

const port = process.env.APP_PORT;
_app2.default.listen(port);
