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
    global.PropagateLoader = mod.exports;
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

  // 1.5 4.5 7.5
  var distance = [1, 3, 5];

  var propagate = [(0, _emotion.keyframes)('25%{transform:translateX(-', distance[0], 'rem) scale(0.75)}50%{transform:translateX(-', distance[1], 'rem) scale(0.6)}75%{transform:translateX(-', distance[2], 'rem) scale(0.5)}95%{transform:translateX(0rem) scale(1)}'), (0, _emotion.keyframes)('25%{transform:translateX(-', distance[0], 'rem) scale(0.75)}50%{transform:translateX(-', distance[1], 'rem) scale(0.6)}75%{transform:translateX(-', distance[1], 'rem) scale(0.6)}95%{transform:translateX(0rem) scale(1)}'), (0, _emotion.keyframes)('25%{transform:translateX(-', distance[0], 'rem) scale(0.75)}75%{transform:translateX(-', distance[0], 'rem) scale(0.75)}95%{transform:translateX(0rem) scale(1)}'), (0, _emotion.keyframes)('25%{transform:translateX(', distance[0], 'rem) scale(0.75)}75%{transform:translateX(', distance[0], 'rem) scale(0.75)}95%{transform:translateX(0rem) scale(1)}'), (0, _emotion.keyframes)('25%{transform:translateX(', distance[0], 'rem) scale(0.75)}50%{transform:translateX(', distance[1], 'rem) scale(0.6)}75%{transform:translateX(', distance[1], 'rem) scale(0.6)}95%{transform:translateX(0rem) scale(1)}'), (0, _emotion.keyframes)('25%{transform:translateX(', distance[0], 'rem) scale(0.75)}50%{transform:translateX(', distance[1], 'rem) scale(0.6)}75%{transform:translateX(', distance[2], 'rem) scale(0.5)}95%{transform:translateX(0rem) scale(1)}')];

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
        return (0, _emotion.css)('{position:absolute;font-size:', _this.props.size / 3, ' ', _this.props.sizeUnit, ';height:', _this.props.size + _this.props.sizeUnit, ';width:', _this.props.size + _this.props.sizeUnit, ';height:', _this.props.size + _this.props.sizeUnit, ';background:', _this.props.color, ';border-radius:50%;animation:', propagate[i], ' 1.5s  infinite;animation-fill-mode:forwards;}');
      }, _this.wrapper = function () {
        return (0, _emotion.css)('{position:relative;}');
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
          _react2.default.createElement('div', { className: this.style(4) }),
          _react2.default.createElement('div', { className: this.style(5) })
        ) : null;
      }
    }]);

    return Loader;
  }(_react2.default.Component);

  Loader.propTypes = {
    loading: _propTypes2.default.bool,
    size: _propTypes2.default.number,
    color: _propTypes2.default.string,
    sizeUnit: _propTypes2.default.string
  };

  Loader.defaultProps = {
    loading: true,
    size: 15,
    color: '#000000',
    sizeUnit: 'px'
  };

  var Component = (0, _recompose.onlyUpdateForKeys)(['loading', 'color', 'size', 'sizeUnit'])(Loader);
  Component.defaultProps = Loader.defaultProps;
  exports.default = Component;
});