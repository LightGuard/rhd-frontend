System.register(["../rhelement/rhelement.js"], function (exports_1, context_1) {
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
    var rhelement_js_1, RhDatetime;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (rhelement_js_1_1) {
                rhelement_js_1 = rhelement_js_1_1;
            }
        ],
        execute: function () {
            RhDatetime = (function (_super) {
                __extends(RhDatetime, _super);
                function RhDatetime() {
                    var _this = _super.call(this, RhDatetime) || this;
                    _this.type = _this.getAttribute("type") || "local";
                    return _this;
                }
                Object.defineProperty(RhDatetime.prototype, "html", {
                    get: function () {
                        return "\n<style>\n:host {\n  display: inline; }\n</style>\n<span></span>";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RhDatetime, "tag", {
                    get: function () {
                        return "rh-datetime";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RhDatetime.prototype, "styleUrl", {
                    get: function () {
                        return "rh-datetime.scss";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RhDatetime.prototype, "templateUrl", {
                    get: function () {
                        return "rh-datetime.html";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RhDatetime.prototype, "type", {
                    get: function () {
                        return this._type;
                    },
                    set: function (val) {
                        if (this._type === val) {
                            return;
                        }
                        this._type = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RhDatetime.prototype, "timestamp", {
                    get: function () {
                        return this._timestamp;
                    },
                    set: function (val) {
                        if (this._timestamp === val) {
                            return;
                        }
                        this._timestamp = val;
                        this.setDate(new Date(val * 1000));
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RhDatetime.prototype, "datetime", {
                    get: function () {
                        return this._datetime;
                    },
                    set: function (val) {
                        if (!Date.parse(val)) {
                            return;
                        }
                        if (Date.parse(val) && this._datetime === Date.parse(val)) {
                            return;
                        }
                        this.setDate(Date.parse(val));
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RhDatetime, "observedAttributes", {
                    get: function () {
                        return ["datetime", "type", "timestamp"];
                    },
                    enumerable: true,
                    configurable: true
                });
                RhDatetime.prototype.attributeChangedCallback = function (attr, oldVal, newVal) {
                    this[attr] = newVal;
                };
                RhDatetime.prototype.setDate = function (date) {
                    this._datetime = date;
                    this.shadowRoot.querySelector("span").innerText = window.Intl
                        ? this._getTypeString()
                        : date.toLocaleString();
                };
                RhDatetime.prototype._getOptions = function () {
                    var props = {
                        weekday: {
                            short: "short",
                            long: "long"
                        },
                        day: {
                            numeric: "numeric",
                            "2-digit": "2-digit"
                        },
                        month: {
                            short: "short",
                            long: "long"
                        },
                        year: {
                            numeric: "numeric",
                            "2-digit": "2-digit"
                        },
                        hour: {
                            numeric: "numeric",
                            "2-digit": "2-digit"
                        },
                        minute: {
                            numeric: "numeric",
                            "2-digit": "2-digit"
                        },
                        second: {
                            numeric: "numeric",
                            "2-digit": "2-digit"
                        },
                        timeZoneName: {
                            short: "short",
                            long: "long"
                        }
                    };
                    var options = {};
                    for (var prop in props) {
                        var value = props[prop][this.getAttribute(prop)];
                        if (value) {
                            options[prop] = value;
                        }
                    }
                    return options;
                };
                RhDatetime.prototype._getTypeString = function () {
                    var options = this._getOptions();
                    var locale = this.getAttribute("locale") || navigator.language;
                    var dt = "";
                    switch (this.type) {
                        case "local":
                            dt = new Intl.DateTimeFormat(locale, options).format(this._datetime);
                            break;
                        case "relative":
                            dt = this._getTimeRelative(this._datetime - Date.now());
                            break;
                        default:
                            dt = this._datetime;
                    }
                    return dt;
                };
                RhDatetime.prototype._getTimeRelative = function (ms) {
                    var tense = ms > 0 ? "until" : "ago";
                    var str = "just now";
                    var s = Math.round(Math.abs(ms) / 1000);
                    var min = Math.round(s / 60);
                    var h = Math.round(min / 60);
                    var d = Math.round(h / 24);
                    var m = Math.round(d / 30);
                    var y = Math.round(m / 12);
                    if (m >= 18) {
                        str = y + " years";
                    }
                    else if (m >= 12) {
                        str = "a year";
                    }
                    else if (d >= 45) {
                        str = m + " months";
                    }
                    else if (d >= 30) {
                        str = "a month";
                    }
                    else if (h >= 36) {
                        str = d + " days";
                    }
                    else if (h >= 24) {
                        str = "a day";
                    }
                    else if (min >= 90) {
                        str = h + " hours";
                    }
                    else if (min >= 45) {
                        str = "an hour";
                    }
                    else if (s >= 90) {
                        str = min + " minutes";
                    }
                    else if (s >= 45) {
                        str = "a minute";
                    }
                    else if (s >= 10) {
                        str = s + " seconds";
                    }
                    return str !== "just now" ? str + " " + tense : str;
                };
                return RhDatetime;
            }(rhelement_js_1.default));
            rhelement_js_1.default.create(RhDatetime);
        }
    };
});
