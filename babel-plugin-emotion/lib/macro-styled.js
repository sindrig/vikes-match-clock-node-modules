'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = require('./index');

var _babelUtils = require('./babel-utils');

var _macro = require('./macro');

var _macro2 = _interopRequireDefault(_macro);

var _babelPluginMacros = require('babel-plugin-macros');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _babelPluginMacros.createMacro)(macro);

function macro(options) {
  var references = options.references,
      state = options.state,
      t = options.babel.types;

  var referencesWithoutDefault = references;
  if (references.default) {
    referencesWithoutDefault = (0, _babelUtils.omit)(references, function (key) {
      return key !== 'default';
    });
    references.default.reverse().forEach(function (styledReference) {
      var path = styledReference.parentPath.parentPath;
      var runtimeNode = (0, _babelUtils.buildMacroRuntimeNode)(styledReference, state, 'default', t);
      if (t.isTemplateLiteral(path.node.quasi)) {
        if (t.isMemberExpression(path.node.tag)) {
          path.replaceWith((0, _index.buildStyledCallExpression)(runtimeNode, [t.stringLiteral(path.node.tag.property.name)], path, state, t));
        } else if (t.isCallExpression(path.node.tag)) {
          path.replaceWith((0, _index.buildStyledCallExpression)(runtimeNode, path.node.tag.arguments, path, state, t));
        }
      } else if (t.isCallExpression(path) && (t.isCallExpression(path.node.callee) || t.isIdentifier(path.node.callee.object))) {
        path.replaceWith((0, _index.buildStyledObjectCallExpression)(path, state, runtimeNode, t));
      }
    });
  }
  (0, _macro2.default)(_extends({}, options, { references: referencesWithoutDefault }));
}