'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var PropTypes = _interopDefault(require('prop-types'));
var isPropValid = _interopDefault(require('@emotion/is-prop-valid'));

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var channel = '__EMOTION_THEMING__';

// https://github.com/styled-components/styled-components/blob/e05b3fe247e9d956bcde786cec376e32afb85bca/src/utils/create-broadcast.js

var _contextTypes;
var contextTypes = (_contextTypes = {}, _contextTypes[channel] = PropTypes.object, _contextTypes);

function setTheme(theme) {
  this.setState({
    theme: theme
  });
}
var testPickPropsOnStringTag = isPropValid;
var testPickPropsOnComponent = function testPickPropsOnComponent(key) {
  return key !== 'theme' && key !== 'innerRef';
};
var testAlwaysTrue = function testAlwaysTrue() {
  return true;
};
var pickAssign = function pickAssign(testFn, target) {
  var i = 2;
  var length = arguments.length;

  for (; i < length; i++) {
    var source = arguments[i];

    var _key = void 0;

    for (_key in source) {
      if (testFn(_key)) {
        target[_key] = source[_key];
      }
    }
  }

  return target;
};

function _componentWillMount() {
  if (this.context[channel] !== undefined) {
    this.unsubscribe = this.context[channel].subscribe(setTheme.bind(this));
  }
}

function _componentWillUnmount() {
  if (this.unsubscribe !== undefined) {
    this.context[channel].unsubscribe(this.unsubscribe);
  }
}

function _get$1(target, property) {
  switch (property) {
    // react-hot-loader tries to access this stuff
    case '__proto__':
    case 'name':
    case 'prototype':
    case 'displayName':
      {
        return target[property];
      }

    default:
      {
        throw new Error("You're trying to use the styled shorthand without babel-plugin-emotion." + ("\nPlease install and setup babel-plugin-emotion or use the function call syntax(`styled('" + property + "')` instead of `styled." + property + "`)"));
      }
  }
}

function createEmotionStyled(emotion, view) {
  var _createStyled = function createStyled(tag, options) {
    if (process.env.NODE_ENV !== 'production') {
      if (tag === undefined) {
        throw new Error('You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.');
      }
    }

    var staticClassName;
    var identifierName;
    var stableClassName;
    var shouldForwardProp;

    function _ref(propName) {
      return tag.__emotion_forwardProp(propName) && // $FlowFixMe
      options.shouldForwardProp(propName);
    }

    if (options !== undefined) {
      staticClassName = options.e;
      identifierName = options.label;
      stableClassName = options.target;
      shouldForwardProp = tag.__emotion_forwardProp && options.shouldForwardProp ? _ref : options.shouldForwardProp;
    }

    var isReal = tag.__emotion_real === tag;
    var baseTag = staticClassName === undefined ? isReal && tag.__emotion_base || tag : tag;

    if (typeof shouldForwardProp !== 'function') {
      shouldForwardProp = typeof baseTag === 'string' && baseTag.charAt(0) === baseTag.charAt(0).toLowerCase() ? testPickPropsOnStringTag : testPickPropsOnComponent;
    }

    function _value() {
      if (process.env.NODE_ENV !== 'production' && stableClassName === undefined) {
        return 'NO_COMPONENT_SELECTOR';
      } // $FlowFixMe


      return "." + stableClassName;
    }

    return function () {
      var args = arguments;
      var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

      if (identifierName !== undefined) {
        styles.push("label:" + identifierName + ";");
      }

      if (staticClassName === undefined) {
        if (args[0] == null || args[0].raw === undefined) {
          styles.push.apply(styles, args);
        } else {
          styles.push(args[0][0]);
          var len = args.length;
          var i = 1;

          for (; i < len; i++) {
            styles.push(args[i], args[0][i]);
          }
        }
      }

      function _render() {
        var props = this.props,
            state = this.state;
        this.mergedProps = pickAssign(testAlwaysTrue, {}, props, {
          theme: state !== null && state.theme || props.theme || {}
        });
        var className = '';
        var classInterpolations = [];

        if (props.className) {
          if (staticClassName === undefined) {
            className += emotion.getRegisteredStyles(classInterpolations, props.className);
          } else {
            className += props.className + " ";
          }
        }

        if (staticClassName === undefined) {
          className += emotion.css.apply(this, styles.concat(classInterpolations));
        } else {
          className += staticClassName;
        }

        if (stableClassName !== undefined) {
          className += " " + stableClassName;
        }

        return view.createElement(baseTag, // $FlowFixMe
        pickAssign(shouldForwardProp, {}, props, {
          className: className,
          ref: props.innerRef
        }));
      }

      var Styled =
      /*#__PURE__*/
      function (_view$Component) {
        _inheritsLoose(Styled, _view$Component);

        function Styled() {
          return _view$Component.apply(this, arguments) || this;
        }

        var _proto = Styled.prototype;
        _proto.componentWillMount = _componentWillMount;
        _proto.componentWillUnmount = _componentWillUnmount;
        _proto.render = _render;
        return Styled;
      }(view.Component);

      Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";

      if (tag.defaultProps !== undefined) {
        // $FlowFixMe
        Styled.defaultProps = tag.defaultProps;
      }

      Styled.contextTypes = contextTypes;
      Styled.__emotion_styles = styles;
      Styled.__emotion_base = baseTag;
      Styled.__emotion_real = Styled;
      Styled.__emotion_forwardProp = shouldForwardProp;
      Object.defineProperty(Styled, 'toString', {
        enumerable: false,
        value: _value
      });

      Styled.withComponent = function (nextTag, nextOptions) {
        return _createStyled(nextTag, nextOptions !== undefined ? // $FlowFixMe
        pickAssign(testAlwaysTrue, {}, options, nextOptions) : options).apply(void 0, styles);
      };

      return Styled;
    };
  };

  if (process.env.NODE_ENV !== 'production' && typeof Proxy !== 'undefined') {
    _createStyled = new Proxy(_createStyled, {
      get: _get$1
    });
  }

  return _createStyled;
}

module.exports = createEmotionStyled;
//# sourceMappingURL=index.cjs.js.map
