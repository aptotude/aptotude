'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var classNames = _interopDefault(require('classnames'));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".AptoButton {\n  display: inline-block;\n  margin: 0;\n  background: none;\n  border: none;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 500;\n  font-size: 1.4rem;\n  border-radius: 3px;\n  padding: 0.7rem 2rem;\n  outline: none;\n  text-decoration: none;\n  white-space: nowrap;\n  cursor: pointer;\n  text-transform: uppercase;\n  transition: color .15s ease-in-out, background-color .15s ease-in-out; }\n  .AptoButton:disabled, .AptoButton.AptoButton--disabled {\n    cursor: not-allowed; }\n\n.AptoButton--link {\n  padding: 0; }\n\n.AptoButton--primary {\n  color: #fff;\n  background-color: #64B5F6; }\n  .AptoButton--primary:hover, .AptoButton--primary.AptoButton--active {\n    background-color: #1c92f2; }\n  .AptoButton--primary:disabled, .AptoButton--primary.AptoButton--disabled {\n    background-color: #E0E0E0; }\n\n.AptoButton--danger {\n  color: #fff;\n  background-color: #D32F2F; }\n  .AptoButton--danger:hover, .AptoButton--danger.AptoButton--active {\n    background-color: #962020; }\n  .AptoButton--danger:disabled, .AptoButton--danger.AptoButton--disabled {\n    background-color: #e06e6e; }\n\n.AptoButton--link.AptoButton--primary {\n  color: #64B5F6;\n  background-color: transparent; }\n  .AptoButton--link.AptoButton--primary:hover, .AptoButton--link.AptoButton--primary.AptoButton--active {\n    color: #1c92f2; }\n  .AptoButton--link.AptoButton--primary:disabled, .AptoButton--link.AptoButton--primary.AptoButton--disabled {\n    color: #acd8fa; }\n\n.AptoButton--link.AptoButton--secondary {\n  color: #BDBDBD;\n  background-color: transparent; }\n  .AptoButton--link.AptoButton--secondary:hover, .AptoButton--link.AptoButton--secondary.AptoButton--active {\n    color: #1c92f2; }\n  .AptoButton--link.AptoButton--secondary:disabled, .AptoButton--link.AptoButton--secondary.AptoButton--disabled {\n    color: #e3e3e3; }\n\n.AptoButton--link.AptoButton--secondaryDark {\n  color: #808080;\n  background-color: transparent; }\n  .AptoButton--link.AptoButton--secondaryDark:hover, .AptoButton--link.AptoButton--secondaryDark.AptoButton--active {\n    color: #1c92f2; }\n  .AptoButton--link.AptoButton--secondaryDark:disabled, .AptoButton--link.AptoButton--secondaryDark.AptoButton--disabled {\n    color: #a6a6a6; }\n\n.AptoButton--link.AptoButton--danger {\n  color: #D32F2F;\n  background-color: transparent; }\n  .AptoButton--link.AptoButton--danger:hover, .AptoButton--link.AptoButton--danger.AptoButton--active {\n    color: #962020; }\n  .AptoButton--link.AptoButton--danger:disabled, .AptoButton--link.AptoButton--danger.AptoButton--disabled {\n    color: #e06e6e; }\n\n.AptoHold {\n  background-color: #BDBDBD;\n  border-radius: 3px;\n  height: 3px;\n  display: block;\n  visibility: hidden; }\n  .AptoHold .AptoHold-progressBar {\n    background-color: #D32F2F;\n    border-radius: 3px;\n    height: 3px;\n    width: 0;\n    display: block; }\n  .AptoHold.AptoHold--active {\n    visibility: visible; }\n    .AptoHold.AptoHold--active .AptoHold-progressBar {\n      width: 100%;\n      transition: width 2s linear; }\n";
styleInject(css);

function missingHref(href) {
    return !href || href.trim() === '#';
}
var COMPONENT_PREFIX = 'AptoButton';
var AptoButton = /** @class */ (function (_super) {
    __extends(AptoButton, _super);
    function AptoButton(props) {
        if (props === void 0) { props = {}; }
        var _this = _super.call(this, props) || this;
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }
    AptoButton.prototype.handleClick = function (event) {
        var _a = this.props, disabled = _a.disabled, href = _a.href, onClick = _a.onClick;
        if (disabled || missingHref(href)) {
            if (event) {
                event.preventDefault();
            }
        }
        if (disabled) {
            if (event) {
                event.stopPropagation();
            }
            return;
        }
        if (onClick) {
            onClick(event);
        }
    };
    AptoButton.prototype.render = function () {
        var _a = this.props, variant = _a.variant, kind = _a.kind, forwardRef = _a.forwardRef, className = _a.className, children = _a.children, disabled = _a.disabled, active = _a.active, href = _a.href, title = _a.title, rest = __rest(_a, ["variant", "kind", "forwardRef", "className", "children", "disabled", "active", "href", "title"]);
        if (href && href === '#') {
            rest.role = rest.role || 'button';
        }
        var Component = href ? 'a' : 'button';
        var classes = classNames(COMPONENT_PREFIX, COMPONENT_PREFIX + "--" + kind, COMPONENT_PREFIX + "--" + variant, disabled && COMPONENT_PREFIX + "--disabled", active && COMPONENT_PREFIX + "--active", className);
        return (React__default.createElement(Component, __assign({}, rest, { ref: forwardRef, "aria-label": title, href: href, disabled: disabled || undefined, onClick: this.handleClick, className: classes }), children));
    };
    AptoButton.defaultProps = {
        kind: 'button',
        variant: 'primary',
        active: false,
        disabled: false
    };
    return AptoButton;
}(React__default.PureComponent));

var css$1 = ".AptoCard {\n  margin: 10px 0;\n  background: #fff;\n  border: none;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 2px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 500;\n  font-size: 1.4rem;\n  padding: 0;\n  display: block;\n  position: relative; }\n";
styleInject(css$1);

var COMPONENT_PREFIX$1 = 'AptoCard';
var AptoCard = /** @class */ (function (_super) {
    __extends(AptoCard, _super);
    function AptoCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AptoCard.prototype.render = function () {
        var _a = this.props, className = _a.className, forwardRef = _a.forwardRef, children = _a.children, rest = __rest(_a, ["className", "forwardRef", "children"]);
        var classes = classNames(COMPONENT_PREFIX$1, className);
        return (React__default.createElement("div", __assign({}, rest, { ref: forwardRef, className: classes }), children));
    };
    return AptoCard;
}(React__default.Component));

var css$2 = ".AptoCard {\n  margin: 10px 0;\n  background: #fff;\n  border: none;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 2px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 500;\n  font-size: 1.4rem;\n  padding: 0;\n  display: block;\n  position: relative; }\n\n.AptoCardContent {\n  margin: 0;\n  padding: 1.3rem 1.6rem;\n  display: block; }\n  .AptoCardContent.AptoCardContent--noPadding {\n    padding: 0; }\n";
styleInject(css$2);

var COMPONENT_PREFIX$2 = 'AptoCardContent';
var AptoCardContent = /** @class */ (function (_super) {
    __extends(AptoCardContent, _super);
    function AptoCardContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AptoCardContent.prototype.render = function () {
        var _a = this.props, noPadding = _a.noPadding, className = _a.className, forwardRef = _a.forwardRef, children = _a.children, rest = __rest(_a, ["noPadding", "className", "forwardRef", "children"]);
        var classes = classNames(COMPONENT_PREFIX$2, noPadding && COMPONENT_PREFIX$2 + "--noPadding", className);
        return (React__default.createElement("div", __assign({}, rest, { ref: forwardRef, className: classes }), children));
    };
    return AptoCardContent;
}(React__default.Component));

var css$3 = ".AptoCard {\n  margin: 10px 0;\n  background: #fff;\n  border: none;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 2px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 500;\n  font-size: 1.4rem;\n  padding: 0;\n  display: block;\n  position: relative; }\n\n.AptoCardFooter {\n  display: flex;\n  padding: 0 1.6rem 1.3rem 1.6rem;\n  justify-content: space-between; }\n  .AptoCardFooter.AptoCardFooter--padTop {\n    padding-top: 1.3rem; }\n  .AptoCardFooter.AptoCardFooter--left {\n    justify-content: flex-start; }\n  .AptoCardFooter.AptoCardFooter--right {\n    justify-content: flex-end; }\n  .AptoCardFooter.AptoCardFooter--center {\n    justify-content: center; }\n";
styleInject(css$3);

var COMPONENT_PREFIX$3 = 'AptoCardFooter';
var AptoCardFooter = /** @class */ (function (_super) {
    __extends(AptoCardFooter, _super);
    function AptoCardFooter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AptoCardFooter.prototype.render = function () {
        var _a = this.props, padTop = _a.padTop, align = _a.align, className = _a.className, forwardRef = _a.forwardRef, children = _a.children, rest = __rest(_a, ["padTop", "align", "className", "forwardRef", "children"]);
        var classes = classNames(COMPONENT_PREFIX$3, padTop && COMPONENT_PREFIX$3 + "--padTop", align && COMPONENT_PREFIX$3 + "--" + align, className);
        return (React__default.createElement("div", __assign({}, rest, { ref: forwardRef, className: classes }), children));
    };
    return AptoCardFooter;
}(React__default.Component));

var css$4 = ".AptoCard {\n  margin: 10px 0;\n  background: #fff;\n  border: none;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 2px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 500;\n  font-size: 1.4rem;\n  padding: 0;\n  display: block;\n  position: relative; }\n\n.AptoCardHeader {\n  display: block;\n  font-size: 1.2rem;\n  color: #9E9E9E;\n  padding: 1.3rem 1.6rem 0 1.6rem; }\n  .AptoCardHeader.AptoCardHeader--padBottom {\n    padding-bottom: 1.3rem; }\n";
styleInject(css$4);

var COMPONENT_PREFIX$4 = 'AptoCardHeader';
var AptoCardHeader = /** @class */ (function (_super) {
    __extends(AptoCardHeader, _super);
    function AptoCardHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AptoCardHeader.prototype.render = function () {
        var _a = this.props, padBottom = _a.padBottom, className = _a.className, forwardRef = _a.forwardRef, children = _a.children, rest = __rest(_a, ["padBottom", "className", "forwardRef", "children"]);
        var classes = classNames(COMPONENT_PREFIX$4, padBottom && COMPONENT_PREFIX$4 + "--padBottom", className);
        return (React__default.createElement("div", __assign({}, rest, { ref: forwardRef, className: classes }), children));
    };
    return AptoCardHeader;
}(React__default.Component));

var css$5 = ".AptoCol-1, .AptoCol-2, .AptoCol-3, .AptoCol-4, .AptoCol-5, .AptoCol-6, .AptoCol-7, .AptoCol-8, .AptoCol-9, .AptoCol-10, .AptoCol-11, .AptoCol-12, .AptoCol,\n.AptoCol-auto, .AptoCol-sm-1, .AptoCol-sm-2, .AptoCol-sm-3, .AptoCol-sm-4, .AptoCol-sm-5, .AptoCol-sm-6, .AptoCol-sm-7, .AptoCol-sm-8, .AptoCol-sm-9, .AptoCol-sm-10, .AptoCol-sm-11, .AptoCol-sm-12, .AptoCol-sm,\n.AptoCol-sm-auto, .AptoCol-md-1, .AptoCol-md-2, .AptoCol-md-3, .AptoCol-md-4, .AptoCol-md-5, .AptoCol-md-6, .AptoCol-md-7, .AptoCol-md-8, .AptoCol-md-9, .AptoCol-md-10, .AptoCol-md-11, .AptoCol-md-12, .AptoCol-md,\n.AptoCol-md-auto, .AptoCol-lg-1, .AptoCol-lg-2, .AptoCol-lg-3, .AptoCol-lg-4, .AptoCol-lg-5, .AptoCol-lg-6, .AptoCol-lg-7, .AptoCol-lg-8, .AptoCol-lg-9, .AptoCol-lg-10, .AptoCol-lg-11, .AptoCol-lg-12, .AptoCol-lg,\n.AptoCol-lg-auto, .AptoCol-xl-1, .AptoCol-xl-2, .AptoCol-xl-3, .AptoCol-xl-4, .AptoCol-xl-5, .AptoCol-xl-6, .AptoCol-xl-7, .AptoCol-xl-8, .AptoCol-xl-9, .AptoCol-xl-10, .AptoCol-xl-11, .AptoCol-xl-12, .AptoCol-xl,\n.AptoCol-xl-auto {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 10px;\n  padding-left: 10px;\n  box-sizing: border-box; }\n\n.AptoCol {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%; }\n\n.AptoCol-auto {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: none; }\n\n.AptoCol-1 {\n  flex: 0 0 8.33333%;\n  max-width: 8.33333%; }\n\n.AptoCol-2 {\n  flex: 0 0 16.66667%;\n  max-width: 16.66667%; }\n\n.AptoCol-3 {\n  flex: 0 0 25%;\n  max-width: 25%; }\n\n.AptoCol-4 {\n  flex: 0 0 33.33333%;\n  max-width: 33.33333%; }\n\n.AptoCol-5 {\n  flex: 0 0 41.66667%;\n  max-width: 41.66667%; }\n\n.AptoCol-6 {\n  flex: 0 0 50%;\n  max-width: 50%; }\n\n.AptoCol-7 {\n  flex: 0 0 58.33333%;\n  max-width: 58.33333%; }\n\n.AptoCol-8 {\n  flex: 0 0 66.66667%;\n  max-width: 66.66667%; }\n\n.AptoCol-9 {\n  flex: 0 0 75%;\n  max-width: 75%; }\n\n.AptoCol-10 {\n  flex: 0 0 83.33333%;\n  max-width: 83.33333%; }\n\n.AptoCol-11 {\n  flex: 0 0 91.66667%;\n  max-width: 91.66667%; }\n\n.AptoCol-12 {\n  flex: 0 0 100%;\n  max-width: 100%; }\n\n@media (min-width: 576px) {\n  .AptoCol-sm {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .AptoCol-sm-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .AptoCol-sm-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .AptoCol-sm-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .AptoCol-sm-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .AptoCol-sm-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .AptoCol-sm-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .AptoCol-sm-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .AptoCol-sm-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .AptoCol-sm-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .AptoCol-sm-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .AptoCol-sm-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .AptoCol-sm-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .AptoCol-sm-12 {\n    flex: 0 0 100%;\n    max-width: 100%; } }\n\n@media (min-width: 768px) {\n  .AptoCol-md {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .AptoCol-md-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .AptoCol-md-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .AptoCol-md-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .AptoCol-md-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .AptoCol-md-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .AptoCol-md-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .AptoCol-md-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .AptoCol-md-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .AptoCol-md-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .AptoCol-md-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .AptoCol-md-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .AptoCol-md-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .AptoCol-md-12 {\n    flex: 0 0 100%;\n    max-width: 100%; } }\n\n@media (min-width: 992px) {\n  .AptoCol-lg {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .AptoCol-lg-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .AptoCol-lg-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .AptoCol-lg-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .AptoCol-lg-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .AptoCol-lg-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .AptoCol-lg-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .AptoCol-lg-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .AptoCol-lg-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .AptoCol-lg-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .AptoCol-lg-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .AptoCol-lg-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .AptoCol-lg-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .AptoCol-lg-12 {\n    flex: 0 0 100%;\n    max-width: 100%; } }\n\n@media (min-width: 1200px) {\n  .AptoCol-xl {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .AptoCol-xl-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .AptoCol-xl-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .AptoCol-xl-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .AptoCol-xl-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .AptoCol-xl-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .AptoCol-xl-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .AptoCol-xl-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .AptoCol-xl-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .AptoCol-xl-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .AptoCol-xl-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .AptoCol-xl-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .AptoCol-xl-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .AptoCol-xl-12 {\n    flex: 0 0 100%;\n    max-width: 100%; } }\n\n.AptoCol.AptoCol--alignStart {\n  align-self: flex-start; }\n\n.AptoCol.AptoCol--alignCenter {\n  align-self: center; }\n\n.AptoCol.AptoCol--alignEnd {\n  align-self: flex-end; }\n";
styleInject(css$5);

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

var COMPONENT_PREFIX$5 = 'AptoCol';
var AptoCol = /** @class */ (function (_super) {
    __extends(AptoCol, _super);
    function AptoCol() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AptoCol.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, forwardRef = _a.forwardRef, align = _a.align, rest = __rest(_a, ["children", "className", "forwardRef", "align"]);
        var classes = classNames(COMPONENT_PREFIX$5, this._getClass(), align && COMPONENT_PREFIX$5 + "--align" + capitalize(align), className);
        return (React__default.createElement("div", __assign({}, rest, { ref: forwardRef, className: classes }), children));
    };
    AptoCol.prototype._getClass = function () {
        var classes = [];
        if (this.props.xs) {
            classes.push(this._parseAttribute(this.props.xs, ''));
        }
        if (this.props.sm) {
            classes.push(this._parseAttribute(this.props.sm, 'sm'));
        }
        if (this.props.md) {
            classes.push(this._parseAttribute(this.props.md, 'md'));
        }
        if (this.props.lg) {
            classes.push(this._parseAttribute(this.props.lg, 'lg'));
        }
        if (this.props.xl) {
            classes.push(this._parseAttribute(this.props.xl, 'xl'));
        }
        return classes.length ? classes.join(' ') : '';
    };
    AptoCol.prototype._parseAttribute = function (count, size) {
        if (size !== '') {
            size = "-" + size;
        }
        return count === 'true' ? "" + COMPONENT_PREFIX$5 + size : "" + COMPONENT_PREFIX$5 + size + "-" + count;
    };
    return AptoCol;
}(React__default.PureComponent));

var css$6 = ".AptoContainer {\n  display: block;\n  position: relative;\n  width: 100%;\n  padding-right: 10px;\n  padding-left: 10px;\n  margin-right: auto;\n  margin-left: auto;\n  box-sizing: border-box; }\n  @media (min-width: 576px) {\n    .AptoContainer.AptoContainer--fixed {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .AptoContainer.AptoContainer--fixed {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .AptoContainer.AptoContainer--fixed {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .AptoContainer.AptoContainer--fixed {\n      max-width: 1140px; } }\n  .AptoContainer.AptoContainer--scroll {\n    height: 100%;\n    overflow-y: auto; }\n";
styleInject(css$6);

var COMPONENT_PREFIX$6 = 'AptoContainer';
var AptoContainer = /** @class */ (function (_super) {
    __extends(AptoContainer, _super);
    function AptoContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AptoContainer.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, scroll = _a.scroll, fixed = _a.fixed, forwardRef = _a.forwardRef, rest = __rest(_a, ["children", "className", "scroll", "fixed", "forwardRef"]);
        var classes = classNames(COMPONENT_PREFIX$6, scroll && COMPONENT_PREFIX$6 + "--scroll", fixed && COMPONENT_PREFIX$6 + "--fixed", className);
        return (React__default.createElement("div", __assign({}, rest, { ref: forwardRef, className: classes }), children));
    };
    AptoContainer.defaultProps = {
        scroll: false,
        fixed: false
    };
    return AptoContainer;
}(React__default.PureComponent));

var css$7 = ".AptoHeader {\n  font-family: \"Open Sans\", sans-serif;\n  display: block;\n  line-height: 1.5;\n  margin: 0;\n  padding: 0; }\n  .AptoHeader.AptoHeader--h1 {\n    font-size: 2.2rem;\n    font-weight: 400;\n    text-transform: uppercase; }\n  .AptoHeader.AptoHeader--h2 {\n    font-size: 1.8rem;\n    font-weight: 400;\n    text-transform: uppercase; }\n  .AptoHeader.AptoHeader--h3 {\n    font-size: 1.4rem;\n    font-weight: 700; }\n  .AptoHeader.AptoHeader--h4 {\n    font-size: 1.2rem;\n    font-weight: 700; }\n  .AptoHeader.AptoHeader--h5 {\n    font-size: 1.2rem;\n    font-weight: 700; }\n  .AptoHeader.AptoHeader--h6 {\n    font-size: 1.2rem;\n    font-weight: 700; }\n";
styleInject(css$7);

var COMPONENT_PREFIX$7 = 'AptoHeader';
var AptoHeader = /** @class */ (function (_super) {
    __extends(AptoHeader, _super);
    function AptoHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AptoHeader.prototype.render = function () {
        var _a = this.props, type = _a.type, className = _a.className, forwardRef = _a.forwardRef, children = _a.children, rest = __rest(_a, ["type", "className", "forwardRef", "children"]);
        var Component = 'h1';
        switch (type) {
            case '2':
                Component = 'h2';
                break;
            case '3':
                Component = 'h3';
                break;
            case '4':
                Component = 'h4';
                break;
            case '5':
                Component = 'h5';
                break;
            case '6':
                Component = 'h6';
                break;
            case '1':
            default:
                Component = 'h1';
                break;
        }
        var classes = classNames(COMPONENT_PREFIX$7, type && COMPONENT_PREFIX$7 + "--h" + type, className);
        return (React__default.createElement(Component, __assign({}, rest, { ref: forwardRef, className: classes }), children));
    };
    AptoHeader.defaultProps = {
        type: '1'
    };
    return AptoHeader;
}(React__default.PureComponent));

var css$8 = ".AptoHelpText {\n  display: block;\n  font-size: 1rem;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 500;\n  line-height: 1.5;\n  color: #BDBDBD; }\n  .AptoHelpText.AptoHelpText--error {\n    color: #981818; }\n  .AptoHelpText.AptoHelpText--inline {\n    display: inline-block; }\n";
styleInject(css$8);

var COMPONENT_PREFIX$8 = 'AptoHelpText';
var AptoHelpText = /** @class */ (function (_super) {
    __extends(AptoHelpText, _super);
    function AptoHelpText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AptoHelpText.prototype.render = function () {
        var _a = this.props, error = _a.error, inline = _a.inline, className = _a.className, forwardRef = _a.forwardRef, children = _a.children, rest = __rest(_a, ["error", "inline", "className", "forwardRef", "children"]);
        var classes = classNames(COMPONENT_PREFIX$8, error && COMPONENT_PREFIX$8 + "--error", inline && COMPONENT_PREFIX$8 + "--inline", className);
        return (React__default.createElement("div", __assign({}, rest, { ref: forwardRef, className: classes }), children));
    };
    AptoHelpText.defaultProps = {
        error: false,
        inline: false
    };
    return AptoHelpText;
}(React__default.Component));

var css$9 = ".AptoList {\n  margin: 0;\n  padding: 0; }\n  .AptoList.AptoList--ol, .AptoList.AptoList--ul {\n    list-style: none; }\n  .AptoList > *:last-child .AptoListItem-content {\n    border-bottom-color: transparent; }\n";
styleInject(css$9);

var COMPONENT_PREFIX$9 = 'AptoList';
var AptoList = /** @class */ (function (_super) {
    __extends(AptoList, _super);
    function AptoList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AptoList.prototype.render = function () {
        var _a = this.props, type = _a.type, className = _a.className, forwardRef = _a.forwardRef, children = _a.children, rest = __rest(_a, ["type", "className", "forwardRef", "children"]);
        var classes = classNames(COMPONENT_PREFIX$9, type ? COMPONENT_PREFIX$9 + "--" + type : undefined, className);
        var Component = type || 'div';
        return (React__default.createElement(Component, __assign({}, rest, { ref: forwardRef, className: classes }), children));
    };
    return AptoList;
}(React__default.Component));

var css$a = ".AptoListItem {\n  display: block;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  position: relative;\n  background-color: #fff; }\n  .AptoListItem .AptoListItem-content {\n    padding: 1.4rem 1.6rem;\n    margin: 0;\n    width: 100%;\n    overflow: hidden;\n    border-bottom: 1px solid #DEDEDE; }\n  .AptoListItem.AptoListItem--link {\n    cursor: pointer; }\n    .AptoListItem.AptoListItem--link:after {\n      content: \"\";\n      display: inline-block;\n      border-right: 2px solid #908e8e;\n      border-bottom: 2px solid #908e8e;\n      width: 8px;\n      height: 8px;\n      position: absolute;\n      right: 15px;\n      top: 50%;\n      transform: rotate(-45deg) translateY(-50%); }\n    .AptoListItem.AptoListItem--link .AptoListItem-content {\n      padding-right: 3.6rem; }\n  .AptoListItem.AptoListItem--empty {\n    color: #BDBDBD; }\n    .AptoListItem.AptoListItem--empty .AptoListItem-content {\n      padding-left: 3.6rem;\n      padding-right: 3.6rem;\n      border-bottom-color: transparent; }\n  .AptoListItem.AptoListItem--link:hover, .AptoListItem.AptoListItem--active {\n    background-color: #EEEEEE; }\n";
styleInject(css$a);

var COMPONENT_PREFIX$a = 'AptoListItem';
var AptoListItem = /** @class */ (function (_super) {
    __extends(AptoListItem, _super);
    function AptoListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AptoListItem.prototype.render = function () {
        var _a = this.props, type = _a.type, className = _a.className, forwardRef = _a.forwardRef, children = _a.children, link = _a.link, active = _a.active, empty = _a.empty, rest = __rest(_a, ["type", "className", "forwardRef", "children", "link", "active", "empty"]);
        var classes = classNames(COMPONENT_PREFIX$a, type ? COMPONENT_PREFIX$a + "--" + type : undefined, link && COMPONENT_PREFIX$a + "--link", active && COMPONENT_PREFIX$a + "--active", empty && COMPONENT_PREFIX$a + "--empty", className);
        var Component = type || 'div';
        return (React__default.createElement(Component, __assign({}, rest, { ref: forwardRef, className: classes }),
            React__default.createElement("div", { className: "AptoListItem-content" }, children)));
    };
    AptoListItem.defaultProps = {
        link: false,
        active: false,
        empty: false
    };
    return AptoListItem;
}(React__default.Component));

var css$b = ".AptoParagraph {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 1.4rem;\n  font-weight: 500;\n  line-height: 1.5;\n  margin: 0;\n  padding: 0;\n  display: block; }\n\n.AptoParagraph + .AptoParagraph {\n  padding-top: 10px; }\n\n.AptoParagraph--compact + .AptoParagraph--compact {\n  padding-top: 0.2rem; }\n";
styleInject(css$b);

var COMPONENT_PREFIX$b = 'AptoParagraph';
var AptoParagraph = /** @class */ (function (_super) {
    __extends(AptoParagraph, _super);
    function AptoParagraph() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AptoParagraph.prototype.render = function () {
        var _a = this.props, compact = _a.compact, className = _a.className, forwardRef = _a.forwardRef, children = _a.children, rest = __rest(_a, ["compact", "className", "forwardRef", "children"]);
        var classes = classNames(COMPONENT_PREFIX$b, compact && COMPONENT_PREFIX$b + "--compact", className);
        return (React__default.createElement("p", __assign({}, rest, { ref: forwardRef, className: classes }), children));
    };
    return AptoParagraph;
}(React__default.PureComponent));

var css$c = ".AptoRow {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -10px;\n  margin-left: -10px;\n  box-sizing: border-box; }\n  .AptoRow.AptoRow--noGutter {\n    margin-right: 0;\n    margin-left: 0; }\n    .AptoRow.AptoRow--noGutter > .AptoCol,\n    .AptoRow.AptoRow--noGutter > [class*=\"AptoCol-\"] {\n      padding-right: 0;\n      padding-left: 0; }\n  .AptoRow.AptoRow--alignStart {\n    align-items: flex-start; }\n  .AptoRow.AptoRow--alignCenter {\n    align-items: center; }\n  .AptoRow.AptoRow--alignEnd {\n    align-items: flex-end; }\n  .AptoRow.AptoRow--justifyStart {\n    justify-content: flex-start; }\n  .AptoRow.AptoRow--justifyCenter {\n    justify-content: center; }\n  .AptoRow.AptoRow--justifyEnd {\n    justify-content: flex-end; }\n  .AptoRow.AptoRow--justifyAround {\n    justify-content: space-around; }\n  .AptoRow.AptoRow--justifyBetween {\n    justify-content: space-between; }\n";
styleInject(css$c);

var COMPONENT_PREFIX$c = 'AptoRow';
var AptoRow = /** @class */ (function (_super) {
    __extends(AptoRow, _super);
    function AptoRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AptoRow.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, noGutter = _a.noGutter, forwardRef = _a.forwardRef, align = _a.align, justify = _a.justify, rest = __rest(_a, ["children", "className", "noGutter", "forwardRef", "align", "justify"]);
        var classes = classNames(COMPONENT_PREFIX$c, noGutter && COMPONENT_PREFIX$c + "--noGutter", align && COMPONENT_PREFIX$c + "--align" + capitalize(align), justify && COMPONENT_PREFIX$c + "--justify" + capitalize(justify), className);
        return (React__default.createElement("div", __assign({}, rest, { ref: forwardRef, className: classes }), children));
    };
    AptoRow.defaultProps = {
        noGutter: false
    };
    return AptoRow;
}(React__default.PureComponent));

var css$d = "@keyframes aptoShimmerAnimation {\n  0% {\n    background-position: -468px 0; }\n  100% {\n    background-position: 468px 0; } }\n\n.AptoShimmer {\n  animation: aptoShimmerAnimation 2s linear infinite;\n  animation-fill-mode: forwards;\n  background: #F5F5F5;\n  background: linear-gradient(to right, #F5F5F5 8%, #E0E0E0 18%, #F5F5F5 33%);\n  background-size: 992px 100%;\n  display: inline-block;\n  position: relative;\n  min-height: 1.6rem;\n  padding: 0;\n  min-width: 1.6rem;\n  vertical-align: middle; }\n";
styleInject(css$d);

var COMPONENT_PREFIX$d = 'AptoShimmer';
var AptoShimmer = /** @class */ (function (_super) {
    __extends(AptoShimmer, _super);
    function AptoShimmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AptoShimmer.prototype.render = function () {
        var _a = this.props, forwardRef = _a.forwardRef, className = _a.className, rest = __rest(_a, ["forwardRef", "className"]);
        var classes = classNames(COMPONENT_PREFIX$d, className);
        return (React__default.createElement("div", __assign({}, rest, { ref: forwardRef, className: classes })));
    };
    return AptoShimmer;
}(React__default.Component));

var css$e = ".AptoSpinner {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(255, 255, 255, 0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  user-select: none; }\n  .AptoSpinner.AptoSpinner--noOverlay {\n    background: transparent; }\n\n.AptoSpinner-spinner {\n  position: relative;\n  display: inline-block;\n  width: 28px;\n  height: 28px;\n  margin-right: 10px;\n  vertical-align: middle; }\n  .AptoSpinner-spinner svg {\n    animation-duration: 750ms;\n    animation: AptoSpinner-rotate 1s linear infinite; }\n  .AptoSpinner-spinner circle {\n    fill: transparent;\n    stroke-width: 4px;\n    stroke-dasharray: 128px;\n    stroke-dashoffset: 82px;\n    stroke: #64B5F6; }\n\n.AptoSpinner-content {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 1.4rem;\n  font-weight: 500;\n  line-height: 1.5;\n  color: #9E9E9E;\n  display: inline-block; }\n\n@-webkit-keyframes AptoSpinner-rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes AptoSpinner-rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n";
styleInject(css$e);

var COMPONENT_PREFIX$e = 'AptoSpinner';
var AptoSpinner = /** @class */ (function (_super) {
    __extends(AptoSpinner, _super);
    function AptoSpinner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AptoSpinner.prototype.render = function () {
        var _a = this.props, text = _a.text, noOverlay = _a.noOverlay, className = _a.className, forwardRef = _a.forwardRef, rest = __rest(_a, ["text", "noOverlay", "className", "forwardRef"]);
        var classes = classNames(COMPONENT_PREFIX$e, noOverlay && COMPONENT_PREFIX$e + "--noOverlay", className);
        return (React__default.createElement("div", __assign({}, rest, { ref: forwardRef, className: classes }),
            React__default.createElement("div", { className: "AptoSpinner-spinner" },
                React__default.createElement("svg", { viewBox: "0 0 64 64" },
                    React__default.createElement("circle", { transform: "translate(32,32)", r: "26" }))),
            text ? React__default.createElement("div", { className: "AptoSpinner-content" }, text) : null));
    };
    AptoSpinner.defaultProps = {
        text: '',
        noOverlay: false
    };
    return AptoSpinner;
}(React__default.Component));

var css$f = ".AptoTabGroup {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 1.4rem;\n  font-weight: 500;\n  line-height: 1.5;\n  margin: 10px 0;\n  padding: 0;\n  display: block; }\n";
styleInject(css$f);

var css$g = ".AptoTabPane {\n  display: none;\n  position: relative;\n  outline: none; }\n  .AptoTabPane.AptoTabPane--active {\n    display: block; }\n";
styleInject(css$g);

var COMPONENT_PREFIX$f = 'AptoTabPane';
var AptoTabPane = /** @class */ (function (_super) {
    __extends(AptoTabPane, _super);
    function AptoTabPane() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AptoTabPane.prototype.render = function () {
        var _a = this.props, children = _a.children, group = _a.group, index = _a.index, active = _a.active, className = _a.className;
        var classes = classNames(COMPONENT_PREFIX$f, active ? COMPONENT_PREFIX$f + "--active" : null, className);
        return (React__default.createElement("div", { className: classes, role: "tabpanel", id: COMPONENT_PREFIX$f + "-" + group + "-" + index, "aria-labelledby": "AptoTabNav-" + group + "-" + index, "aria-hidden": !active }, active ? children : null));
    };
    return AptoTabPane;
}(React__default.Component));

var END = 35;
var HOME = 36;
var LEFT_ARROW = 37;
var RIGHT_ARROW = 39;

var nextId = 0;
var AptoTabs = /** @class */ (function (_super) {
    __extends(AptoTabs, _super);
    function AptoTabs(props) {
        if (props === void 0) { props = {}; }
        var _this = _super.call(this, props) || this;
        _this.tabCount = 0;
        _this.activateTab = function (index) {
            var _a = _this.props, activeIndex = _a.activeIndex, onActive = _a.onActive;
            if (index >= _this.tabCount) {
                index = 0;
            }
            if (index < 0) {
                index = 0;
            }
            if (activeIndex === undefined) {
                _this.setState({ activeIndex: index });
            }
            if (onActive) {
                onActive(index);
            }
        };
        _this.state = {
            activeIndex: props.activeIndex || 0
        };
        nextId += 1;
        _this.keyDownHandler = _this.keyDownHandler.bind(_this);
        return _this;
    }
    AptoTabs.getDerivedStateFromProps = function (nextProps, prevState) {
        var activeIndex = nextProps.activeIndex;
        var stateActiveIndex = prevState.activeIndex;
        if (stateActiveIndex !== activeIndex && activeIndex !== undefined) {
            return { activeIndex: activeIndex };
        }
        return { activeIndex: stateActiveIndex || 0 };
    };
    AptoTabs.prototype.keyDownHandler = function (event) {
        var t = this.state.activeIndex || 0;
        switch (event.keyCode) {
            case HOME:
                this.activateTab(0);
                event.preventDefault();
                break;
            case END:
                this.activateTab(this.tabCount - 1);
                event.preventDefault();
                break;
            case RIGHT_ARROW:
                t = t + 1;
                this.activateTab(t);
                event.preventDefault();
                break;
            case LEFT_ARROW:
                t = t - 1;
                if (t < 0) {
                    t = this.tabCount - 1;
                }
                this.activateTab(t);
                event.preventDefault();
                break;
            default:
        }
    };
    AptoTabs.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
        delete rest.activeIndex;
        delete rest.onActive;
        var activeIndex = this.state.activeIndex;
        var tabContent = [];
        this.tabCount = React.Children.count(children);
        var tabs = React.Children.map(children, function (tab, index) {
            if (!tab) {
                return undefined;
            }
            var tabProps = tab.props || {};
            var isTabActive = index === activeIndex;
            tabContent.push(React__default.createElement(AptoTabPane, { key: "AptoTabPane-" + nextId + "-" + index, active: isTabActive, group: nextId, index: index }, tabProps.children));
            return React.cloneElement(tab, {
                active: isTabActive,
                onActivate: function () { return _this.activateTab(index); },
                tabGroupId: nextId,
                tabIndex: index
            });
        });
        var classes = classNames('AptoTabGroup', className);
        return (React__default.createElement("div", { className: classes },
            React__default.createElement(AptoCard, { className: "AptoTabNav-wrapper" },
                React__default.createElement("nav", { className: "AptoTabNav", role: "tablist", onKeyDown: this.keyDownHandler }, tabs)),
            React__default.createElement("div", { className: "AptoTabPane-wrapper" }, tabContent)));
    };
    return AptoTabs;
}(React__default.Component));

var css$h = ".AptoTabNav-wrapper {\n  margin-bottom: 10px; }\n\n.AptoTabNav {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: -1px; }\n\n.AptoTabNav-item {\n  display: inline-block;\n  flex: 1 1 auto;\n  line-height: 1;\n  text-align: center;\n  text-decoration: none;\n  padding: 1.2rem 0;\n  color: #9E9E9E;\n  font-size: 1.2rem;\n  border: none;\n  border-bottom: 2px solid transparent;\n  transition: color .15s ease-in-out, border-color .15s ease-in-out, font-weight .15s ease-in-out;\n  outline: none;\n  margin: 0;\n  border-radius: 0; }\n  .AptoTabNav-item.AptoTabNav-item--active {\n    border-bottom-color: #64B5F6;\n    color: #64B5F6;\n    font-weight: 700; }\n  .AptoTabNav-item:focus, .AptoTabNav-item:hover {\n    color: #64B5F6; }\n";
styleInject(css$h);

var COMPONENT_PREFIX$g = 'AptoTabNav-item';
var AptoTab = /** @class */ (function (_super) {
    __extends(AptoTab, _super);
    function AptoTab() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onClickTab = function (event) {
            var onActivate = _this.props.onActivate;
            if (event) {
                event.preventDefault();
            }
            if (onActivate) {
                onActivate();
            }
        };
        return _this;
    }
    AptoTab.prototype.render = function () {
        var _a = this.props, active = _a.active, forwardRef = _a.forwardRef, title = _a.title, tabGroupId = _a.tabGroupId, tabIndex = _a.tabIndex, className = _a.className, rest = __rest(_a, ["active", "forwardRef", "title", "tabGroupId", "tabIndex", "className"]);
        delete rest.onActivate;
        var classes = classNames(COMPONENT_PREFIX$g, active && COMPONENT_PREFIX$g + "--active", className);
        return (React__default.createElement("button", __assign({ key: "AptoTabNav-" + tabGroupId + "-" + tabIndex, ref: forwardRef, className: classes, role: "tab", tabIndex: active ? 0 : -1, id: "AptoTabNav-" + tabGroupId + "-" + tabIndex, "aria-controls": "AptoTabPane-" + tabGroupId + "-" + tabIndex, "aria-selected": active, onClick: this.onClickTab }, rest), title));
    };
    AptoTab.defaultProps = {
        tabGroupId: 0,
        tabIndex: 0,
        active: false,
        title: ''
    };
    return AptoTab;
}(React__default.Component));

var css$i = ".AptoThumbnail {\n  border: 1px solid #BDBDBD;\n  width: 100px;\n  height: 80px;\n  display: block;\n  margin: 8px;\n  overflow: hidden; }\n  .AptoThumbnail img {\n    display: inline-block;\n    object-fit: cover;\n    width: 100%;\n    height: 100%;\n    max-height: 100%;\n    max-width: 100%; }\n";
styleInject(css$i);

var COMPONENT_PREFIX$h = 'AptoThumbnail';
var AptoThumbnail = /** @class */ (function (_super) {
    __extends(AptoThumbnail, _super);
    function AptoThumbnail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AptoThumbnail.prototype.render = function () {
        var _a = this.props, className = _a.className, forwardRef = _a.forwardRef, children = _a.children, rest = __rest(_a, ["className", "forwardRef", "children"]);
        var classes = classNames(COMPONENT_PREFIX$h, className);
        return (React__default.createElement("div", __assign({}, rest, { ref: forwardRef, className: classes }), children));
    };
    return AptoThumbnail;
}(React__default.PureComponent));

exports.AptoButton = AptoButton;
exports.AptoCard = AptoCard;
exports.AptoCardContent = AptoCardContent;
exports.AptoCardFooter = AptoCardFooter;
exports.AptoCardHeader = AptoCardHeader;
exports.AptoCol = AptoCol;
exports.AptoContainer = AptoContainer;
exports.AptoHeader = AptoHeader;
exports.AptoHelpText = AptoHelpText;
exports.AptoList = AptoList;
exports.AptoListItem = AptoListItem;
exports.AptoParagraph = AptoParagraph;
exports.AptoRow = AptoRow;
exports.AptoShimmer = AptoShimmer;
exports.AptoSpinner = AptoSpinner;
exports.AptoTabs = AptoTabs;
exports.AptoTab = AptoTab;
exports.AptoTabPane = AptoTabPane;
exports.AptoThumbnail = AptoThumbnail;
