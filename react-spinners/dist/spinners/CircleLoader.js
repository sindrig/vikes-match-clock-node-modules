(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'emotion', 'recompose'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('emotion'), require('recompose'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.emotion, global.recompose);
    global.CircleLoader = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _emotion, _recompose) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var circle = (0, _emotion.keyframes)('0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}');

  var Loader = function (_React$Component) {
    _inherits(Loader, _React$Component);

    function Loader() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Loader);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Loader.__proto__ || Object.getPrototypeOf(Loader)).call.apply(_ref, [this].concat(args))), _this), _this.style = function (i) {
        return (0, _emotion.css)('{position:absolute;height:', (_this.props.size * (1 - i / 10)).toString() + _this.props.sizeUnit, ';width:', (_this.props.size * (1 - i / 10)).toString() + _this.props.sizeUnit, ';border:1px solid ', _this.props.color, ';border-radius:100%;transition:2s;border-bottom:none;border-right:none;top:', i * 0.7 * 2.5, '%;left:', i * 0.35 * 2.5, '%;animation-fill-mode:\'\';animation:', circle, ' 1s ', i * 0.2, 's infinite linear;}');
      }, _this.wrapper = function () {
        return (0, _emotion.css)('{position:relative;width:', _this.props.size.toString() + _this.props.sizeUnit, ';height:', _this.props.size.toString() + _this.props.sizeUnit, ';}');
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Loader, [{
      key: 'render',
      value: function render() {
        return this.props.loading ? _react2.default.createElement(
          'div',
          { className: this.wrapper() },
          _react2.default.createElement('div', { className: this.style(0) }),
          _react2.default.createElement('div', { className: this.style(1) }),
          _react2.default.createElement('div', { className: this.style(2) }),
          _react2.default.createElement('div', { className: this.style(3) }),
          _react2.default.createElement('div', { className: this.style(4) })
        ) : null;
      }
    }]);

    return Loader;
  }(_react2.default.Component);

  Loader.propTypes = {
    loading: _propTypes2.default.bool,
    color: _propTypes2.default.string,
    size: _propTypes2.default.number,
    sizeUnit: _propTypes2.default.string
  };

  Loader.defaultProps = {
    loading: true,
    color: '#000000',
    size: 50,
    sizeUnit: 'px'
  };

  var Component = (0, _recompose.onlyUpdateForKeys)(['loading', 'color', 'size', 'sizeUnit'])(Loader);
  Component.defaultProps = Loader.defaultProps;
  exports.default = Component;
});