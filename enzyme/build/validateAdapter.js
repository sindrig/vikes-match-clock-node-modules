Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = validateAdapter;

var _EnzymeAdapter = require('./EnzymeAdapter');

var _EnzymeAdapter2 = _interopRequireDefault(_EnzymeAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function validateAdapter(adapter) {
  if (!adapter) {
    throw new Error('\n      Enzyme Internal Error: Enzyme expects an adapter to be configured, but found none. To\n      configure an adapter, you should call `Enzyme.configure({ adapter: new Adapter() })`\n      before using any of Enzyme\'s top level APIs, where `Adapter` is the adapter\n      corresponding to the library currently being tested. For example:\n\n      import Adapter from \'enzyme-adapter-react-15\';\n\n      To find out more about this, see http://airbnb.io/enzyme/docs/installation/index.html\n    ');
  }
  if (!(adapter instanceof _EnzymeAdapter2['default'])) {
    throw new Error('Enzyme Internal Error: configured enzyme adapter did not inherit from the EnzymeAdapter base class');
  }
}