System.register(["../../@rhelements/rhelement/rhelement.js"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var rhelement_js_1, RHDPSearchFilterItem;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (rhelement_js_1_1) {
                rhelement_js_1 = rhelement_js_1_1;
            }
        ],
        execute: function () {
            RHDPSearchFilterItem = (function (_super) {
                __extends(RHDPSearchFilterItem, _super);
                function RHDPSearchFilterItem() {
                    var _this = _super.call(this, RHDPSearchFilterItem, { delayRender: true }) || this;
                    _this._active = false;
                    _this._inline = false;
                    _this._bubble = true;
                    _this._bounce = false;
                    _this._checkParams = _this._checkParams.bind(_this);
                    _this._clearFilters = _this._clearFilters.bind(_this);
                    _this._checkChange = _this._checkChange.bind(_this);
                    _this._updateFacet = _this._updateFacet.bind(_this);
                    return _this;
                }
                Object.defineProperty(RHDPSearchFilterItem.prototype, "html", {
                    get: function () {
                        return "\n        <style>\n        .list {\n            clear: left;\n            cursor: pointer;\n            display: flex;\n            flex-direction: row;\n            font-size: 14px;\n            height: auto;\n            line-height: 1.25em;\n            padding: .5em .5em 0 1.1em;\n        }\n        span { display: none; }\n        input[type=checkbox] {\n            flex: 0 0 auto;\n            margin: .25em 5px 0 0;\n            order: 0;\n        }\n        label {\n            margin-left: 0;\n            color: #4d4d4d;\n            cursor: pointer;\n            display: block;\n            font-size: .875rem;\n            font-weight: 400;\n            line-height: 1.5;\n            margin-bottom: 0;\n        }\n        input[type=checkbox]+label,\n        input[type=radio]+label {\n            display: inline-block;\n            margin-bottom: 0;\n            margin-left: .5rem;\n            margin-right: 1rem;\n            vertical-align: baseline;\n        }\n        </style>\n        <div class=\"list\">\n            <span>" + this.name + "</span>\n            <input type=\"checkbox\" " + (this.active ? 'checked' : '') + " id=\"filter-item-" + this.key + "\" value=\"" + this.key + "\">\n            <label for=\"filter-item-" + this.key + "\"><slot></slot></label>\n        </div>";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RHDPSearchFilterItem, "tag", {
                    get: function () { return 'rhdp-search-filter-item'; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RHDPSearchFilterItem.prototype, "name", {
                    get: function () {
                        return this._name;
                    },
                    set: function (val) {
                        if (this._name === val)
                            return;
                        this._name = val;
                        this.setAttribute('name', this._name);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RHDPSearchFilterItem.prototype, "key", {
                    get: function () {
                        return this._key;
                    },
                    set: function (val) {
                        if (this._key === val)
                            return;
                        this._key = val;
                        this.className = "filter-item-" + this._key;
                        this.setAttribute('key', this._key);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RHDPSearchFilterItem.prototype, "group", {
                    get: function () {
                        return this._group;
                    },
                    set: function (val) {
                        if (this._group === val)
                            return;
                        this._group = val;
                        this.setAttribute('group', this._group);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RHDPSearchFilterItem.prototype, "bubble", {
                    get: function () {
                        return this._bubble;
                    },
                    set: function (val) {
                        if (this._bubble === val)
                            return;
                        this._bubble = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RHDPSearchFilterItem.prototype, "bounce", {
                    get: function () {
                        return this._bounce;
                    },
                    set: function (val) {
                        if (this._bounce === val)
                            return;
                        this._bounce = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RHDPSearchFilterItem.prototype, "active", {
                    get: function () {
                        return this._active;
                    },
                    set: function (val) {
                        if (typeof val === 'string') {
                            val = true;
                        }
                        if (val === null) {
                            val = false;
                        }
                        if (this._active === val) {
                            return;
                        }
                        else {
                            this._active = val;
                            var chkbox = this.shadowRoot.querySelector('input');
                            if (this._active) {
                                this.setAttribute('active', '');
                            }
                            else {
                                this.removeAttribute('active');
                            }
                            if (chkbox) {
                                chkbox.checked = this._active;
                            }
                            var evt = { detail: { facet: this }, bubbles: this.bubble, composed: true };
                            this.dispatchEvent(new CustomEvent('filter-item-change', evt));
                            this.bubble = true;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RHDPSearchFilterItem.prototype, "value", {
                    get: function () {
                        return this._value;
                    },
                    set: function (val) {
                        if (this._value === val)
                            return;
                        this._value = val;
                        this.setAttribute('value', this.value);
                    },
                    enumerable: true,
                    configurable: true
                });
                RHDPSearchFilterItem.prototype.connectedCallback = function () {
                    _super.prototype.connectedCallback.call(this);
                    this.shadowRoot.addEventListener('change', this._updateFacet);
                    top.addEventListener('filter-item-change', this._checkChange);
                    top.addEventListener('params-ready', this._checkParams);
                    top.addEventListener('clear-filters', this._clearFilters);
                    _super.prototype.render.call(this);
                };
                Object.defineProperty(RHDPSearchFilterItem, "observedAttributes", {
                    get: function () {
                        return ['name', 'active', 'value', 'inline', 'key', 'group'];
                    },
                    enumerable: true,
                    configurable: true
                });
                RHDPSearchFilterItem.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
                    this[name] = newVal;
                };
                RHDPSearchFilterItem.prototype._updateFacet = function (e) {
                    this.bounce = true;
                    this.active = !this.active;
                };
                RHDPSearchFilterItem.prototype._checkParams = function (e) {
                    var _this = this;
                    var chk = false;
                    if (e.detail && e.detail.filters) {
                        Object.keys(e.detail.filters).forEach(function (group) {
                            e.detail.filters[group].forEach(function (facet) {
                                if (group === _this.group) {
                                    if (facet === _this.key) {
                                        chk = true;
                                        _this.bubble = false;
                                        _this.active = true;
                                        var evt = { detail: { facet: _this }, bubbles: _this.bubble, composed: true };
                                        _this.dispatchEvent(new CustomEvent('filter-item-init', evt));
                                    }
                                }
                            });
                        });
                    }
                    if (!chk) {
                        this.bubble = false;
                        this.active = false;
                    }
                };
                RHDPSearchFilterItem.prototype._checkChange = function (e) {
                    if (e.detail && e.detail.facet) {
                        if (!this.bounce) {
                            if (this.group === e.detail.facet.group && this.key === e.detail.facet.key) {
                                this.bubble = false;
                                this.active = e.detail.facet.active;
                            }
                        }
                        this.bubble = true;
                        this.bounce = false;
                    }
                };
                RHDPSearchFilterItem.prototype._clearFilters = function (e) {
                    this.bubble = false;
                    this.bounce = false;
                    this.active = false;
                };
                return RHDPSearchFilterItem;
            }(rhelement_js_1.default));
            exports_1("default", RHDPSearchFilterItem);
            rhelement_js_1.default.create(RHDPSearchFilterItem);
        }
    };
});
