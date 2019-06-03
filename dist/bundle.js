'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = _interopDefault(require('styled-components'));

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var StyledButton = styled.button.withConfig({
  displayName: "Button__StyledButton",
  componentId: "cy85s3-0"
})(["border:2px solid #131313;padding:8px 10px;background:#fafafa;border-radius:3px;"]);

var Button = function Button(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(StyledButton, props, children);
};

var index = styled.h1.withConfig({
  displayName: "H1",
  componentId: "sc-12qsmf2-0"
})(["font-size:4em;"]);

var index$1 = styled.h2.withConfig({
  displayName: "H2",
  componentId: "k3byfw-0"
})(["font-size:2em;"]);

var index$2 = styled.h3.withConfig({
  displayName: "H3",
  componentId: "lzm212-0"
})(["font-size:1.2em;"]);

exports.Button = Button;
exports.H1 = index;
exports.H2 = index$1;
exports.H3 = index$2;
