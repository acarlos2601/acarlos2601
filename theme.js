/*! For license information please see theme.js.LICENSE.txt */
(() => {
  var e = {
      46: () => {
        function e(t) {
          return (e =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(t);
        }
        !(function (t) {
          var i = 0,
            n = function (e, i) {
              (this.options = i),
                (this.$elementFilestyle = []),
                (this.$element = t(e));
            };
          n.prototype = {
            clear: function () {
              this.$element.val(""),
                this.$elementFilestyle.find(":text").val(""),
                this.$elementFilestyle.find(".badge").remove();
            },
            destroy: function () {
              this.$element.removeAttr("style").removeData("filestyle"),
                this.$elementFilestyle.remove();
            },
            disabled: function (e) {
              if (!0 === e)
                this.options.disabled ||
                  (this.$element.attr("disabled", "true"),
                  this.$elementFilestyle.find("label").attr("disabled", "true"),
                  (this.options.disabled = !0));
              else {
                if (!1 !== e) return this.options.disabled;
                this.options.disabled &&
                  (this.$element.removeAttr("disabled"),
                  this.$elementFilestyle.find("label").removeAttr("disabled"),
                  (this.options.disabled = !1));
              }
            },
            buttonBefore: function (e) {
              if (!0 === e)
                this.options.buttonBefore ||
                  ((this.options.buttonBefore = !0),
                  this.options.input &&
                    (this.$elementFilestyle.remove(),
                    this.constructor(),
                    this.pushNameFiles()));
              else {
                if (!1 !== e) return this.options.buttonBefore;
                this.options.buttonBefore &&
                  ((this.options.buttonBefore = !1),
                  this.options.input &&
                    (this.$elementFilestyle.remove(),
                    this.constructor(),
                    this.pushNameFiles()));
              }
            },
            icon: function (e) {
              if (!0 === e)
                this.options.icon ||
                  ((this.options.icon = !0),
                  this.$elementFilestyle
                    .find("label")
                    .prepend(this.htmlIcon()));
              else {
                if (!1 !== e) return this.options.icon;
                this.options.icon &&
                  ((this.options.icon = !1),
                  this.$elementFilestyle.find(".icon-span-filestyle").remove());
              }
            },
            input: function (e) {
              if (!0 === e)
                this.options.input ||
                  ((this.options.input = !0),
                  this.options.buttonBefore
                    ? this.$elementFilestyle.append(this.htmlInput())
                    : this.$elementFilestyle.prepend(this.htmlInput()),
                  this.$elementFilestyle.find(".badge").remove(),
                  this.pushNameFiles(),
                  this.$elementFilestyle
                    .find(".group-span-filestyle")
                    .addClass("input-group-btn"));
              else {
                if (!1 !== e) return this.options.input;
                if (this.options.input) {
                  (this.options.input = !1),
                    this.$elementFilestyle.find(":text").remove();
                  var t = this.pushNameFiles();
                  t.length > 0 &&
                    this.options.badge &&
                    this.$elementFilestyle
                      .find("label")
                      .append(' <span class="badge">' + t.length + "</span>"),
                    this.$elementFilestyle
                      .find(".group-span-filestyle")
                      .removeClass("input-group-btn");
                }
              }
            },
            size: function (e) {
              if (void 0 === e) return this.options.size;
              var t = this.$elementFilestyle.find("label"),
                i = this.$elementFilestyle.find("input");
              t.removeClass("btn-lg btn-sm"),
                i.removeClass("input-lg input-sm"),
                "nr" != e && (t.addClass("btn-" + e), i.addClass("input-" + e));
            },
            placeholder: function (e) {
              if (void 0 === e) return this.options.placeholder;
              (this.options.placeholder = e),
                this.$elementFilestyle.find("input").attr("placeholder", e);
            },
            buttonText: function (e) {
              if (void 0 === e) return this.options.buttonText;
              (this.options.buttonText = e),
                this.$elementFilestyle
                  .find("label .buttonText")
                  .html(this.options.buttonText);
            },
            buttonName: function (e) {
              if (void 0 === e) return this.options.buttonName;
              (this.options.buttonName = e),
                this.$elementFilestyle
                  .find("label")
                  .attr({ class: "btn " + this.options.buttonName });
            },
            iconName: function (e) {
              if (void 0 === e) return this.options.iconName;
              this.$elementFilestyle
                .find(".icon-span-filestyle")
                .attr({
                  class: "icon-span-filestyle " + this.options.iconName,
                });
            },
            htmlIcon: function () {
              return this.options.icon
                ? '<span class="icon-span-filestyle ' +
                    this.options.iconName +
                    '"></span> '
                : "";
            },
            htmlInput: function () {
              return this.options.input
                ? '<input type="text" class="form-control ' +
                    ("nr" == this.options.size
                      ? ""
                      : "input-" + this.options.size) +
                    '" placeholder="' +
                    this.options.placeholder +
                    '" disabled> '
                : "";
            },
            pushNameFiles: function () {
              var e = "",
                t = [];
              void 0 === this.$element[0].files
                ? (t[0] = { name: this.$element[0] && this.$element[0].value })
                : (t = this.$element[0].files);
              for (var i = 0; i < t.length; i++)
                e += t[i].name.split("\\").pop() + ", ";
              return (
                "" !== e
                  ? this.$elementFilestyle
                      .find(":text")
                      .val(e.replace(/\, $/g, ""))
                  : this.$elementFilestyle.find(":text").val(""),
                t
              );
            },
            constructor: function () {
              var e,
                n,
                r = this,
                o = r.$element.attr("id");
              ("" !== o && o) ||
                ((o = "filestyle-" + i), r.$element.attr({ id: o }), i++),
                (n =
                  '<span class="group-span-filestyle ' +
                  (r.options.input ? "input-group-btn" : "") +
                  '"><label for="' +
                  o +
                  '" class="btn ' +
                  r.options.buttonName +
                  " " +
                  ("nr" == r.options.size ? "" : "btn-" + r.options.size) +
                  '" ' +
                  (r.options.disabled ? 'disabled="true"' : "") +
                  ">" +
                  r.htmlIcon() +
                  '<span class="buttonText">' +
                  r.options.buttonText +
                  "</span></label></span>"),
                (e = r.options.buttonBefore
                  ? n + r.htmlInput()
                  : r.htmlInput() + n),
                (r.$elementFilestyle = t(
                  '<div class="bootstrap-filestyle input-group">' + e + "</div>"
                )),
                r.$elementFilestyle
                  .find(".group-span-filestyle")
                  .attr("tabindex", "0")
                  .keypress(function (e) {
                    if (13 === e.keyCode || 32 === e.charCode)
                      return r.$elementFilestyle.find("label").click(), !1;
                  }),
                r.$element
                  .css({ position: "absolute", clip: "rect(0px 0px 0px 0px)" })
                  .attr("tabindex", "-1")
                  .after(r.$elementFilestyle),
                r.options.disabled && r.$element.attr("disabled", "true"),
                r.$element.change(function () {
                  var e = r.pushNameFiles();
                  0 == r.options.input && r.options.badge
                    ? 0 == r.$elementFilestyle.find(".badge").length
                      ? r.$elementFilestyle
                          .find("label")
                          .append(
                            ' <span class="badge">' + e.length + "</span>"
                          )
                      : 0 == e.length
                      ? r.$elementFilestyle.find(".badge").remove()
                      : r.$elementFilestyle.find(".badge").html(e.length)
                    : r.$elementFilestyle.find(".badge").remove();
                }),
                window.navigator.userAgent.search(/firefox/i) > -1 &&
                  r.$elementFilestyle.find("label").click(function () {
                    return r.$element.click(), !1;
                  });
            },
          };
          var r = t.fn.filestyle;
          (t.fn.filestyle = function (i, r) {
            var o = "",
              s = this.each(function () {
                if ("file" === t(this).attr("type")) {
                  var s = t(this),
                    a = s.data("filestyle"),
                    l = t.extend(
                      {},
                      t.fn.filestyle.defaults,
                      i,
                      "object" === e(i) && i
                    );
                  a ||
                    (s.data("filestyle", (a = new n(this, l))),
                    a.constructor()),
                    "string" == typeof i && (o = a[i](r));
                }
              });
            return void 0 !== e(o) ? o : s;
          }),
            (t.fn.filestyle.defaults = {
              buttonText: "Choose file",
              iconName: "glyphicon glyphicon-folder-open",
              buttonName: "btn-default",
              size: "nr",
              input: !0,
              badge: !0,
              icon: !0,
              buttonBefore: !1,
              disabled: !1,
              placeholder: "",
            }),
            (t.fn.filestyle.noConflict = function () {
              return (t.fn.filestyle = r), this;
            }),
            t(function () {
              t(".filestyle").each(function () {
                var e = t(this),
                  i = {
                    input: "false" !== e.attr("data-input"),
                    icon: "false" !== e.attr("data-icon"),
                    buttonBefore: "true" === e.attr("data-buttonBefore"),
                    disabled: "true" === e.attr("data-disabled"),
                    size: e.attr("data-size"),
                    buttonText: e.attr("data-buttonText"),
                    buttonName: e.attr("data-buttonName"),
                    iconName: e.attr("data-iconName"),
                    badge: "false" !== e.attr("data-badge"),
                    placeholder: e.attr("data-placeholder"),
                  };
                e.filestyle(i);
              });
            });
        })(window.jQuery);
      },
      356: () => {
        var e;
        (e = jQuery).fn.scrollbox = function (t) {
          return (
            ((t = e.extend(
              {
                linear: !1,
                startDelay: 2,
                delay: 3,
                step: 5,
                speed: 32,
                switchItems: 1,
                direction: "vertical",
                distance: "auto",
                autoPlay: !0,
                onMouseOverPause: !0,
                paused: !1,
                queue: null,
                listElement: "ul",
                listItemElement: "li",
                infiniteLoop: !0,
                switchAmount: 0,
                afterForward: null,
                afterBackward: null,
                triggerStackable: !1,
              },
              t
            )).scrollOffset =
              "vertical" === t.direction ? "scrollTop" : "scrollLeft"),
            t.queue && (t.queue = e("#" + t.queue)),
            this.each(function () {
              var i,
                n,
                r,
                o,
                s,
                a,
                l,
                c,
                u,
                h = e(this),
                d = null,
                p = null,
                f = !1,
                m = 0,
                g = 0;
              t.onMouseOverPause &&
                (h.bind("mouseover", function () {
                  f = !0;
                }),
                h.bind("mouseout", function () {
                  f = !1;
                })),
                (i = h.children(t.listElement + ":first-child")),
                !1 === t.infiniteLoop &&
                  0 === t.switchAmount &&
                  (t.switchAmount = i.children().length),
                (a = function () {
                  var r, s, a, l, c;
                  if (
                    !f &&
                    ((r = i.children(t.listItemElement + ":first-child")),
                    (l =
                      "auto" !== t.distance
                        ? t.distance
                        : "vertical" === t.direction
                        ? r.outerHeight(!0)
                        : r.outerWidth(!0)),
                    t.linear
                      ? (a = Math.min(h[0][t.scrollOffset] + t.step, l))
                      : ((c = Math.max(
                          3,
                          parseInt(0.3 * (l - h[0][t.scrollOffset]), 10)
                        )),
                        (a = Math.min(h[0][t.scrollOffset] + c, l))),
                    (h[0][t.scrollOffset] = a),
                    a >= l)
                  ) {
                    for (s = 0; s < t.switchItems; s++)
                      t.queue && t.queue.find(t.listItemElement).length > 0
                        ? (i.append(t.queue.find(t.listItemElement)[0]),
                          i
                            .children(t.listItemElement + ":first-child")
                            .remove())
                        : i.append(
                            i.children(t.listItemElement + ":first-child")
                          ),
                        ++m;
                    if (
                      ((h[0][t.scrollOffset] = 0),
                      clearInterval(d),
                      (d = null),
                      e.isFunction(t.afterForward) &&
                        t.afterForward.call(h, {
                          switchCount: m,
                          currentFirstChild: i.children(
                            t.listItemElement + ":first-child"
                          ),
                        }),
                      t.triggerStackable && 0 !== g)
                    )
                      return void n();
                    if (!1 === t.infiniteLoop && m >= t.switchAmount) return;
                    t.autoPlay && (p = setTimeout(o, 1e3 * t.delay));
                  }
                }),
                (l = function () {
                  if (!f) {
                    var r, s, a, l, c;
                    if (0 === h[0][t.scrollOffset]) {
                      for (s = 0; s < t.switchItems; s++)
                        i.children(
                          t.listItemElement + ":last-child"
                        ).insertBefore(
                          i.children(t.listItemElement + ":first-child")
                        );
                      (r = i.children(t.listItemElement + ":first-child")),
                        (l =
                          "auto" !== t.distance
                            ? t.distance
                            : "vertical" === t.direction
                            ? r.height()
                            : r.width()),
                        (h[0][t.scrollOffset] = l);
                    }
                    if (
                      (t.linear
                        ? (a = Math.max(h[0][t.scrollOffset] - t.step, 0))
                        : ((c = Math.max(
                            3,
                            parseInt(0.3 * h[0][t.scrollOffset], 10)
                          )),
                          (a = Math.max(h[0][t.scrollOffset] - c, 0))),
                      (h[0][t.scrollOffset] = a),
                      0 === a)
                    ) {
                      if (
                        (--m,
                        clearInterval(d),
                        (d = null),
                        e.isFunction(t.afterBackward) &&
                          t.afterBackward.call(h, {
                            switchCount: m,
                            currentFirstChild: i.children(
                              t.listItemElement + ":first-child"
                            ),
                          }),
                        t.triggerStackable && 0 !== g)
                      )
                        return void n();
                      t.autoPlay && (p = setTimeout(o, 1e3 * t.delay));
                    }
                  }
                }),
                (n = function () {
                  0 !== g &&
                    (g > 0
                      ? (g--, (p = setTimeout(o, 0)))
                      : (g++, (p = setTimeout(r, 0))));
                }),
                (o = function () {
                  clearInterval(d), (d = setInterval(a, t.speed));
                }),
                (r = function () {
                  clearInterval(d), (d = setInterval(l, t.speed));
                }),
                (c = function () {
                  (t.autoPlay = !0),
                    (f = !1),
                    clearInterval(d),
                    (d = setInterval(a, t.speed));
                }),
                (u = function () {
                  f = !0;
                }),
                (s = function (e) {
                  (t.delay = e || t.delay),
                    clearTimeout(p),
                    t.autoPlay && (p = setTimeout(o, 1e3 * t.delay));
                }),
                t.autoPlay && (p = setTimeout(o, 1e3 * t.startDelay)),
                h.bind("resetClock", function (e) {
                  s(e);
                }),
                h.bind("forward", function () {
                  t.triggerStackable
                    ? null !== d
                      ? g++
                      : o()
                    : (clearTimeout(p), o());
                }),
                h.bind("backward", function () {
                  t.triggerStackable
                    ? null !== d
                      ? g--
                      : r()
                    : (clearTimeout(p), r());
                }),
                h.bind("pauseHover", function () {
                  u();
                }),
                h.bind("forwardHover", function () {
                  c();
                }),
                h.bind("speedUp", function (e, i) {
                  "undefined" === i &&
                    (i = Math.max(1, parseInt(t.speed / 2, 10))),
                    (t.speed = i);
                }),
                h.bind("speedDown", function (e, i) {
                  "undefined" === i && (i = 2 * t.speed), (t.speed = i);
                }),
                h.bind("updateConfig", function (i, n) {
                  t = e.extend(t, n);
                });
            })
          );
        };
      },
      751: () => {
        !(function (e) {
          var t = {
            url: !1,
            callback: !1,
            target: !1,
            duration: 120,
            on: "mouseover",
            touch: !0,
            onZoomIn: !1,
            onZoomOut: !1,
            magnify: 1,
          };
          (e.zoom = function (t, i, n, r) {
            var o,
              s,
              a,
              l,
              c,
              u,
              h,
              d = e(t),
              p = d.css("position"),
              f = e(i);
            return (
              (t.style.position = /(absolute|fixed)/.test(p) ? p : "relative"),
              (t.style.overflow = "hidden"),
              (n.style.width = n.style.height = ""),
              e(n)
                .addClass("zoomImg")
                .css({
                  position: "absolute",
                  top: 0,
                  left: 0,
                  opacity: 0,
                  width: n.width * r,
                  height: n.height * r,
                  border: "none",
                  maxWidth: "none",
                  maxHeight: "none",
                })
                .appendTo(t),
              {
                init: function () {
                  (s = d.outerWidth()),
                    (o = d.outerHeight()),
                    i === t
                      ? ((l = s), (a = o))
                      : ((l = f.outerWidth()), (a = f.outerHeight())),
                    (c = (n.width - s) / l),
                    (u = (n.height - o) / a),
                    (h = f.offset());
                },
                move: function (e) {
                  var t = e.pageX - h.left,
                    i = e.pageY - h.top;
                  (i = Math.max(Math.min(i, a), 0)),
                    (t = Math.max(Math.min(t, l), 0)),
                    (n.style.left = t * -c + "px"),
                    (n.style.top = i * -u + "px");
                },
              }
            );
          }),
            (e.fn.zoom = function (i) {
              return this.each(function () {
                var n = e.extend({}, t, i || {}),
                  r = (n.target && e(n.target)[0]) || this,
                  o = this,
                  s = e(o),
                  a = document.createElement("img"),
                  l = e(a),
                  c = "mousemove.zoom",
                  u = !1,
                  h = !1;
                if (!n.url) {
                  var d = o.querySelector("img");
                  if (
                    (d &&
                      (n.url =
                        d.getAttribute("data-src") || d.currentSrc || d.src),
                    !n.url)
                  )
                    return;
                }
                s.one(
                  "zoom.destroy",
                  function (e, t) {
                    s.off(".zoom"),
                      (r.style.position = e),
                      (r.style.overflow = t),
                      (a.onload = null),
                      l.remove();
                  }.bind(this, r.style.position, r.style.overflow)
                ),
                  (a.onload = function () {
                    function t(t) {
                      d.init(),
                        d.move(t),
                        l
                          .stop()
                          .fadeTo(
                            e.support.opacity ? n.duration : 0,
                            1,
                            !!e.isFunction(n.onZoomIn) && n.onZoomIn.call(a)
                          );
                    }
                    function i() {
                      l.stop().fadeTo(
                        n.duration,
                        0,
                        !!e.isFunction(n.onZoomOut) && n.onZoomOut.call(a)
                      );
                    }
                    var d = e.zoom(r, o, a, n.magnify);
                    "grab" === n.on
                      ? s.on("mousedown.zoom", function (n) {
                          1 === n.which &&
                            (e(document).one("mouseup.zoom", function () {
                              i(), e(document).off(c, d.move);
                            }),
                            t(n),
                            e(document).on(c, d.move),
                            n.preventDefault());
                        })
                      : "click" === n.on
                      ? s.on("click.zoom", function (n) {
                          return u
                            ? void 0
                            : ((u = !0),
                              t(n),
                              e(document).on(c, d.move),
                              e(document).one("click.zoom", function () {
                                i(), (u = !1), e(document).off(c, d.move);
                              }),
                              !1);
                        })
                      : "toggle" === n.on
                      ? s.on("click.zoom", function (e) {
                          u ? i() : t(e), (u = !u);
                        })
                      : "mouseover" === n.on &&
                        (d.init(),
                        s
                          .on("mouseenter.zoom", t)
                          .on("mouseleave.zoom", i)
                          .on(c, d.move)),
                      n.touch &&
                        s
                          .on("touchstart.zoom", function (e) {
                            e.preventDefault(),
                              h
                                ? ((h = !1), i())
                                : ((h = !0),
                                  t(
                                    e.originalEvent.touches[0] ||
                                      e.originalEvent.changedTouches[0]
                                  ));
                          })
                          .on("touchmove.zoom", function (e) {
                            e.preventDefault(),
                              d.move(
                                e.originalEvent.touches[0] ||
                                  e.originalEvent.changedTouches[0]
                              );
                          })
                          .on("touchend.zoom", function (e) {
                            e.preventDefault(), h && ((h = !1), i());
                          }),
                      e.isFunction(n.callback) && n.callback.call(a);
                  }),
                  a.setAttribute("role", "presentation"),
                  (a.src = n.url);
              });
            }),
            (e.fn.zoom.defaults = t);
        })(window.jQuery);
      },
      650: () => {
        !(function (e) {
          "use strict";
          var t = 0;
          function i(t, i) {
            return e.map(t, function (e) {
              return (function (e, t) {
                return e + ".touchspin_" + t;
              })(e, i);
            });
          }
          e.fn.TouchSpin = function (n) {
            if ("destroy" !== n) {
              var r = {
                  min: 0,
                  max: 100,
                  initval: "",
                  replacementval: "",
                  step: 1,
                  decimals: 0,
                  stepinterval: 100,
                  forcestepdivisibility: "round",
                  stepintervaldelay: 500,
                  verticalbuttons: !1,
                  verticalupclass: "glyphicon glyphicon-chevron-up",
                  verticaldownclass: "glyphicon glyphicon-chevron-down",
                  prefix: "",
                  postfix: "",
                  prefix_extraclass: "",
                  postfix_extraclass: "",
                  booster: !0,
                  boostat: 10,
                  maxboostedstep: !1,
                  mousewheel: !0,
                  buttondown_class: "btn btn-default",
                  buttonup_class: "btn btn-default",
                  buttondown_txt: "-",
                  buttonup_txt: "+",
                },
                o = {
                  min: "min",
                  max: "max",
                  initval: "init-val",
                  replacementval: "replacement-val",
                  step: "step",
                  decimals: "decimals",
                  stepinterval: "step-interval",
                  verticalbuttons: "vertical-buttons",
                  verticalupclass: "vertical-up-class",
                  verticaldownclass: "vertical-down-class",
                  forcestepdivisibility: "force-step-divisibility",
                  stepintervaldelay: "step-interval-delay",
                  prefix: "prefix",
                  postfix: "postfix",
                  prefix_extraclass: "prefix-extra-class",
                  postfix_extraclass: "postfix-extra-class",
                  booster: "booster",
                  boostat: "boostat",
                  maxboostedstep: "max-boosted-step",
                  mousewheel: "mouse-wheel",
                  buttondown_class: "button-down-class",
                  buttonup_class: "button-up-class",
                  buttondown_txt: "button-down-txt",
                  buttonup_txt: "button-up-txt",
                };
              return this.each(function () {
                var s,
                  a,
                  l,
                  c,
                  u,
                  h,
                  d,
                  p,
                  f,
                  m,
                  g,
                  v,
                  y = e(this),
                  _ = y.data(),
                  b = 0,
                  w = !1;
                function x() {
                  var e, t, i;
                  "" !== (e = y.val())
                    ? (s.decimals > 0 && "." === e) ||
                      ((t = parseFloat(e)),
                      isNaN(t) &&
                        (t = "" !== s.replacementval ? s.replacementval : 0),
                      (i = t),
                      t.toString() !== e && (i = t),
                      t < s.min && (i = s.min),
                      t > s.max && (i = s.max),
                      (i = (function (e) {
                        switch (s.forcestepdivisibility) {
                          case "round":
                            return (Math.round(e / s.step) * s.step).toFixed(
                              s.decimals
                            );
                          case "floor":
                            return (Math.floor(e / s.step) * s.step).toFixed(
                              s.decimals
                            );
                          case "ceil":
                            return (Math.ceil(e / s.step) * s.step).toFixed(
                              s.decimals
                            );
                          default:
                            return e;
                        }
                      })(i)),
                      Number(e).toString() !== i.toString() &&
                        (y.val(i), y.trigger("change")))
                    : "" !== s.replacementval &&
                      (y.val(s.replacementval), y.trigger("change"));
                }
                function S() {
                  if (s.booster) {
                    var e = Math.pow(2, Math.floor(b / s.boostat)) * s.step;
                    return (
                      s.maxboostedstep &&
                        e > s.maxboostedstep &&
                        ((e = s.maxboostedstep), (c = Math.round(c / e) * e)),
                      Math.max(s.step, e)
                    );
                  }
                  return s.step;
                }
                function C() {
                  x(), (c = parseFloat(l.input.val())), isNaN(c) && (c = 0);
                  var e = c,
                    t = S();
                  (c += t) > s.max &&
                    ((c = s.max), y.trigger("touchspin.on.max"), A()),
                    l.input.val(Number(c).toFixed(s.decimals)),
                    e !== c && y.trigger("change");
                }
                function T() {
                  x(), (c = parseFloat(l.input.val())), isNaN(c) && (c = 0);
                  var e = c,
                    t = S();
                  (c -= t) < s.min &&
                    ((c = s.min), y.trigger("touchspin.on.min"), A()),
                    l.input.val(c.toFixed(s.decimals)),
                    e !== c && y.trigger("change");
                }
                function k() {
                  A(),
                    (b = 0),
                    (w = "down"),
                    y.trigger("touchspin.on.startspin"),
                    y.trigger("touchspin.on.startdownspin"),
                    (d = setTimeout(function () {
                      u = setInterval(function () {
                        b++, T();
                      }, s.stepinterval);
                    }, s.stepintervaldelay));
                }
                function E() {
                  A(),
                    (b = 0),
                    (w = "up"),
                    y.trigger("touchspin.on.startspin"),
                    y.trigger("touchspin.on.startupspin"),
                    (p = setTimeout(function () {
                      h = setInterval(function () {
                        b++, C();
                      }, s.stepinterval);
                    }, s.stepintervaldelay));
                }
                function A() {
                  switch (
                    (clearTimeout(d),
                    clearTimeout(p),
                    clearInterval(u),
                    clearInterval(h),
                    w)
                  ) {
                    case "up":
                      y.trigger("touchspin.on.stopupspin"),
                        y.trigger("touchspin.on.stopspin");
                      break;
                    case "down":
                      y.trigger("touchspin.on.stopdownspin"),
                        y.trigger("touchspin.on.stopspin");
                  }
                  (b = 0), (w = !1);
                }
                y.data("alreadyinitialized") ||
                  (y.data("alreadyinitialized", !0),
                  (t += 1),
                  y.data("spinnerid", t),
                  y.is("input")
                    ? ("" !==
                        (s = e.extend(
                          {},
                          r,
                          _,
                          ((v = {}),
                          e.each(o, function (e, t) {
                            var i = "bts-" + t;
                            y.is("[data-" + i + "]") && (v[e] = y.data(i));
                          }),
                          v),
                          n
                        )).initval &&
                        "" === y.val() &&
                        y.val(s.initval),
                      x(),
                      (m = y.val()),
                      (g = y.parent()),
                      "" !== m && (m = Number(m).toFixed(s.decimals)),
                      y.data("initvalue", m).val(m),
                      y.addClass("form-control"),
                      g.hasClass("input-group")
                        ? (function (t) {
                            t.addClass("bootstrap-touchspin");
                            var i,
                              n,
                              r = y.prev(),
                              o = y.next(),
                              l =
                                '<span class="input-group-addon bootstrap-touchspin-prefix">' +
                                s.prefix +
                                "</span>",
                              c =
                                '<span class="input-group-addon bootstrap-touchspin-postfix">' +
                                s.postfix +
                                "</span>";
                            r.hasClass("input-group-btn")
                              ? ((i =
                                  '<button class="' +
                                  s.buttondown_class +
                                  ' bootstrap-touchspin-down" type="button">' +
                                  s.buttondown_txt +
                                  "</button>"),
                                r.append(i))
                              : ((i =
                                  '<span class="input-group-btn"><button class="' +
                                  s.buttondown_class +
                                  ' bootstrap-touchspin-down" type="button">' +
                                  s.buttondown_txt +
                                  "</button></span>"),
                                e(i).insertBefore(y)),
                              o.hasClass("input-group-btn")
                                ? ((n =
                                    '<button class="' +
                                    s.buttonup_class +
                                    ' bootstrap-touchspin-up" type="button">' +
                                    s.buttonup_txt +
                                    "</button>"),
                                  o.prepend(n))
                                : ((n =
                                    '<span class="input-group-btn"><button class="' +
                                    s.buttonup_class +
                                    ' bootstrap-touchspin-up" type="button">' +
                                    s.buttonup_txt +
                                    "</button></span>"),
                                  e(n).insertAfter(y)),
                              e(l).insertBefore(y),
                              e(c).insertAfter(y),
                              (a = t);
                          })(g)
                        : ((f = s.verticalbuttons
                            ? '<div class="input-group bootstrap-touchspin"><span class="input-group-addon bootstrap-touchspin-prefix">' +
                              s.prefix +
                              '</span><span class="input-group-addon bootstrap-touchspin-postfix">' +
                              s.postfix +
                              '</span><span class="input-group-btn-vertical"><button class="' +
                              s.buttondown_class +
                              ' bootstrap-touchspin-up" type="button"><i class="' +
                              s.verticalupclass +
                              '"></i></button><button class="' +
                              s.buttonup_class +
                              ' bootstrap-touchspin-down" type="button"><i class="' +
                              s.verticaldownclass +
                              '"></i></button></span></div>'
                            : '<div class="input-group bootstrap-touchspin"><span class="input-group-btn"><button class="' +
                              s.buttondown_class +
                              ' bootstrap-touchspin-down" type="button">' +
                              s.buttondown_txt +
                              '</button></span><span class="input-group-addon bootstrap-touchspin-prefix">' +
                              s.prefix +
                              '</span><span class="input-group-addon bootstrap-touchspin-postfix">' +
                              s.postfix +
                              '</span><span class="input-group-btn"><button class="' +
                              s.buttonup_class +
                              ' bootstrap-touchspin-up" type="button">' +
                              s.buttonup_txt +
                              "</button></span></div>"),
                          (a = e(f).insertBefore(y)),
                          e(".bootstrap-touchspin-prefix", a).after(y),
                          y.hasClass("input-sm")
                            ? a.addClass("input-group-sm")
                            : y.hasClass("input-lg") &&
                              a.addClass("input-group-lg")),
                      (l = {
                        down: e(".bootstrap-touchspin-down", a),
                        up: e(".bootstrap-touchspin-up", a),
                        input: e("input", a),
                        prefix: e(".bootstrap-touchspin-prefix", a).addClass(
                          s.prefix_extraclass
                        ),
                        postfix: e(".bootstrap-touchspin-postfix", a).addClass(
                          s.postfix_extraclass
                        ),
                      }),
                      "" === s.prefix && l.prefix.hide(),
                      "" === s.postfix && l.postfix.hide(),
                      y.on("keydown", function (e) {
                        var t = e.keyCode || e.which;
                        38 === t
                          ? ("up" !== w && (C(), E()), e.preventDefault())
                          : 40 === t &&
                            ("down" !== w && (T(), k()), e.preventDefault());
                      }),
                      y.on("keyup", function (e) {
                        var t = e.keyCode || e.which;
                        (38 === t || 40 === t) && A();
                      }),
                      y.on("blur", function () {
                        x();
                      }),
                      l.down.on("keydown", function (e) {
                        var t = e.keyCode || e.which;
                        (32 !== t && 13 !== t) ||
                          ("down" !== w && (T(), k()), e.preventDefault());
                      }),
                      l.down.on("keyup", function (e) {
                        var t = e.keyCode || e.which;
                        (32 !== t && 13 !== t) || A();
                      }),
                      l.up.on("keydown", function (e) {
                        var t = e.keyCode || e.which;
                        (32 !== t && 13 !== t) ||
                          ("up" !== w && (C(), E()), e.preventDefault());
                      }),
                      l.up.on("keyup", function (e) {
                        var t = e.keyCode || e.which;
                        (32 !== t && 13 !== t) || A();
                      }),
                      l.down.on("mousedown.touchspin", function (e) {
                        l.down.off("touchstart.touchspin"),
                          y.is(":disabled") ||
                            (T(), k(), e.preventDefault(), e.stopPropagation());
                      }),
                      l.down.on("touchstart.touchspin", function (e) {
                        l.down.off("mousedown.touchspin"),
                          y.is(":disabled") ||
                            (T(), k(), e.preventDefault(), e.stopPropagation());
                      }),
                      l.up.on("mousedown.touchspin", function (e) {
                        l.up.off("touchstart.touchspin"),
                          y.is(":disabled") ||
                            (C(), E(), e.preventDefault(), e.stopPropagation());
                      }),
                      l.up.on("touchstart.touchspin", function (e) {
                        l.up.off("mousedown.touchspin"),
                          y.is(":disabled") ||
                            (C(), E(), e.preventDefault(), e.stopPropagation());
                      }),
                      l.up.on(
                        "mouseout touchleave touchend touchcancel",
                        function (e) {
                          w && (e.stopPropagation(), A());
                        }
                      ),
                      l.down.on(
                        "mouseout touchleave touchend touchcancel",
                        function (e) {
                          w && (e.stopPropagation(), A());
                        }
                      ),
                      l.down.on("mousemove touchmove", function (e) {
                        w && (e.stopPropagation(), e.preventDefault());
                      }),
                      l.up.on("mousemove touchmove", function (e) {
                        w && (e.stopPropagation(), e.preventDefault());
                      }),
                      e(document).on(
                        i(["mouseup", "touchend", "touchcancel"], t).join(" "),
                        function (e) {
                          w && (e.preventDefault(), A());
                        }
                      ),
                      e(document).on(
                        i(
                          ["mousemove", "touchmove", "scroll", "scrollstart"],
                          t
                        ).join(" "),
                        function (e) {
                          w && (e.preventDefault(), A());
                        }
                      ),
                      y.on("mousewheel DOMMouseScroll", function (e) {
                        if (s.mousewheel && y.is(":focus")) {
                          var t =
                            e.originalEvent.wheelDelta ||
                            -e.originalEvent.deltaY ||
                            -e.originalEvent.detail;
                          e.stopPropagation(),
                            e.preventDefault(),
                            t < 0 ? T() : C();
                        }
                      }),
                      y.on("touchspin.uponce", function () {
                        A(), C();
                      }),
                      y.on("touchspin.downonce", function () {
                        A(), T();
                      }),
                      y.on("touchspin.startupspin", function () {
                        E();
                      }),
                      y.on("touchspin.startdownspin", function () {
                        k();
                      }),
                      y.on("touchspin.stopspin", function () {
                        A();
                      }),
                      y.on("touchspin.updatesettings", function (t, i) {
                        !(function (t) {
                          (function (t) {
                            s = e.extend({}, s, t);
                          })(t),
                            x();
                          var i = l.input.val();
                          "" !== i &&
                            ((i = Number(l.input.val())),
                            l.input.val(i.toFixed(s.decimals)));
                        })(i);
                      }),
                      l.input.css("display", "block"))
                    : console.log("Must be an input."));
              });
            }
            this.each(function () {
              var t = e(this).data();
              e(document).off(
                i(
                  [
                    "mouseup",
                    "touchend",
                    "touchcancel",
                    "mousemove",
                    "touchmove",
                    "scroll",
                    "scrollstart",
                  ],
                  t.spinnerid
                ).join(" ")
              );
            });
          };
        })(jQuery);
      },
      249: () => {
        function e(t) {
          return (e =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(t);
        }
        if ("undefined" == typeof jQuery)
          throw new Error("Bootstrap's JavaScript requires jQuery");
        !(function (e) {
          var t = jQuery.fn.jquery.split(" ")[0].split(".");
          if (
            (t[0] < 2 && t[1] < 9) ||
            (1 == t[0] && 9 == t[1] && t[2] < 1) ||
            t[0] >= 4
          )
            throw new Error(
              "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
            );
        })(),
          (function (t) {
            "use strict";
            function i(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            }
            var n = function (e, t, i) {
                for (var n = !0; n; ) {
                  var r = e,
                    o = t,
                    s = i;
                  (n = !1), null === r && (r = Function.prototype);
                  var a = Object.getOwnPropertyDescriptor(r, o);
                  if (void 0 !== a) {
                    if ("value" in a) return a.value;
                    var l = a.get;
                    if (void 0 === l) return;
                    return l.call(s);
                  }
                  var c = Object.getPrototypeOf(r);
                  if (null === c) return;
                  (e = c), (t = o), (i = s), (n = !0), (a = c = void 0);
                }
              },
              r = (function () {
                function e(e, t) {
                  for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      "value" in n && (n.writable = !0),
                      Object.defineProperty(e, n.key, n);
                  }
                }
                return function (t, i, n) {
                  return i && e(t.prototype, i), n && e(t, n), t;
                };
              })(),
              o = (function (e) {
                function t(e) {
                  return {}.toString
                    .call(e)
                    .match(/\s([a-zA-Z]+)/)[1]
                    .toLowerCase();
                }
                function i(e) {
                  return (e[0] || e).nodeType;
                }
                var n = !1,
                  r = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend",
                  },
                  o = {
                    TRANSITION_END: "bsTransitionEnd",
                    getUID: function (e) {
                      do {
                        e += ~~(1e6 * Math.random());
                      } while (document.getElementById(e));
                      return e;
                    },
                    getSelectorFromElement: function (e) {
                      var t = e.getAttribute("data-target");
                      return (
                        t ||
                          ((t = e.getAttribute("href") || ""),
                          (t = /^#[a-z]/i.test(t) ? t : null)),
                        t
                      );
                    },
                    reflow: function (e) {
                      new Function("bs", "return bs")(e.offsetHeight);
                    },
                    triggerTransitionEnd: function (t) {
                      e(t).trigger(n.end);
                    },
                    supportsTransitionEnd: function () {
                      return Boolean(n);
                    },
                    typeCheckConfig: function (e, n, r) {
                      for (var o in r)
                        if (r.hasOwnProperty(o)) {
                          var s,
                            a = r[o],
                            l = n[o];
                          if (
                            ((s = l && i(l) ? "element" : t(l)),
                            !new RegExp(a).test(s))
                          )
                            throw new Error(
                              e.toUpperCase() +
                                ': Option "' +
                                o +
                                '" provided type "' +
                                s +
                                '" but expected type "' +
                                a +
                                '".'
                            );
                        }
                    },
                  };
                return (
                  (n = (function () {
                    if (window.QUnit) return !1;
                    var e = document.createElement("bootstrap");
                    for (var t in r)
                      if (void 0 !== e.style[t]) return { end: r[t] };
                    return !1;
                  })()),
                  (e.fn.emulateTransitionEnd = function (t) {
                    var i = this,
                      n = !1;
                    return (
                      e(this).one(o.TRANSITION_END, function () {
                        n = !0;
                      }),
                      setTimeout(function () {
                        n || o.triggerTransitionEnd(i);
                      }, t),
                      this
                    );
                  }),
                  o.supportsTransitionEnd() &&
                    (e.event.special[o.TRANSITION_END] = {
                      bindType: n.end,
                      delegateType: n.end,
                      handle: function (t) {
                        if (e(t.target).is(this))
                          return t.handleObj.handler.apply(this, arguments);
                      },
                    }),
                  o
                );
              })(jQuery),
              s =
                ((function (e) {
                  var t = "alert",
                    n = "bs.alert",
                    s = "." + n,
                    a = e.fn[t],
                    l = {
                      CLOSE: "close" + s,
                      CLOSED: "closed" + s,
                      CLICK_DATA_API: "click" + s + ".data-api",
                    },
                    c = (function () {
                      function t(e) {
                        i(this, t), (this._element = e);
                      }
                      return (
                        r(
                          t,
                          [
                            {
                              key: "close",
                              value: function (e) {
                                e = e || this._element;
                                var t = this._getRootElement(e);
                                this._triggerCloseEvent(
                                  t
                                ).isDefaultPrevented() ||
                                  this._removeElement(t);
                              },
                            },
                            {
                              key: "dispose",
                              value: function () {
                                e.removeData(this._element, n),
                                  (this._element = null);
                              },
                            },
                            {
                              key: "_getRootElement",
                              value: function (t) {
                                var i = o.getSelectorFromElement(t),
                                  n = !1;
                                return (
                                  i && (n = e(i)[0]),
                                  n || (n = e(t).closest(".alert")[0]),
                                  n
                                );
                              },
                            },
                            {
                              key: "_triggerCloseEvent",
                              value: function (t) {
                                var i = e.Event(l.CLOSE);
                                return e(t).trigger(i), i;
                              },
                            },
                            {
                              key: "_removeElement",
                              value: function (t) {
                                return (
                                  e(t).removeClass("in"),
                                  o.supportsTransitionEnd() &&
                                  e(t).hasClass("fade")
                                    ? void e(t)
                                        .one(
                                          o.TRANSITION_END,
                                          e.proxy(this._destroyElement, this, t)
                                        )
                                        .emulateTransitionEnd(150)
                                    : void this._destroyElement(t)
                                );
                              },
                            },
                            {
                              key: "_destroyElement",
                              value: function (t) {
                                e(t).detach().trigger(l.CLOSED).remove();
                              },
                            },
                          ],
                          [
                            {
                              key: "_jQueryInterface",
                              value: function (i) {
                                return this.each(function () {
                                  var r = e(this),
                                    o = r.data(n);
                                  o || ((o = new t(this)), r.data(n, o)),
                                    "close" === i && o[i](this);
                                });
                              },
                            },
                            {
                              key: "_handleDismiss",
                              value: function (e) {
                                return function (t) {
                                  t && t.preventDefault(), e.close(this);
                                };
                              },
                            },
                            {
                              key: "VERSION",
                              get: function () {
                                return "4.0.0-alpha.4";
                              },
                            },
                          ]
                        ),
                        t
                      );
                    })();
                  e(document).on(
                    l.CLICK_DATA_API,
                    '[data-dismiss="alert"]',
                    c._handleDismiss(new c())
                  ),
                    (e.fn[t] = c._jQueryInterface),
                    (e.fn[t].Constructor = c),
                    (e.fn[t].noConflict = function () {
                      return (e.fn[t] = a), c._jQueryInterface;
                    });
                })(jQuery),
                (function (e) {
                  var t = "button",
                    n = "bs.button",
                    o = "." + n,
                    s = ".data-api",
                    a = e.fn[t],
                    l = "active",
                    c = '[data-toggle^="button"]',
                    u = ".btn",
                    h = {
                      CLICK_DATA_API: "click" + o + s,
                      FOCUS_BLUR_DATA_API: "focus" + o + s + " blur" + o + s,
                    },
                    d = (function () {
                      function t(e) {
                        i(this, t), (this._element = e);
                      }
                      return (
                        r(
                          t,
                          [
                            {
                              key: "toggle",
                              value: function () {
                                var t = !0,
                                  i = e(this._element).closest(
                                    '[data-toggle="buttons"]'
                                  )[0];
                                if (i) {
                                  var n = e(this._element).find("input")[0];
                                  if (n) {
                                    if ("radio" === n.type)
                                      if (
                                        n.checked &&
                                        e(this._element).hasClass(l)
                                      )
                                        t = !1;
                                      else {
                                        var r = e(i).find(".active")[0];
                                        r && e(r).removeClass(l);
                                      }
                                    t &&
                                      ((n.checked = !e(this._element).hasClass(
                                        l
                                      )),
                                      e(this._element).trigger("change")),
                                      n.focus();
                                  }
                                } else
                                  this._element.setAttribute(
                                    "aria-pressed",
                                    !e(this._element).hasClass(l)
                                  );
                                t && e(this._element).toggleClass(l);
                              },
                            },
                            {
                              key: "dispose",
                              value: function () {
                                e.removeData(this._element, n),
                                  (this._element = null);
                              },
                            },
                          ],
                          [
                            {
                              key: "_jQueryInterface",
                              value: function (i) {
                                return this.each(function () {
                                  var r = e(this).data(n);
                                  r || ((r = new t(this)), e(this).data(n, r)),
                                    "toggle" === i && r[i]();
                                });
                              },
                            },
                            {
                              key: "VERSION",
                              get: function () {
                                return "4.0.0-alpha.4";
                              },
                            },
                          ]
                        ),
                        t
                      );
                    })();
                  e(document)
                    .on(h.CLICK_DATA_API, c, function (t) {
                      t.preventDefault();
                      var i = t.target;
                      e(i).hasClass("btn") || (i = e(i).closest(u)),
                        d._jQueryInterface.call(e(i), "toggle");
                    })
                    .on(h.FOCUS_BLUR_DATA_API, c, function (t) {
                      var i = e(t.target).closest(u)[0];
                      e(i).toggleClass("focus", /^focus(in)?$/.test(t.type));
                    }),
                    (e.fn[t] = d._jQueryInterface),
                    (e.fn[t].Constructor = d),
                    (e.fn[t].noConflict = function () {
                      return (e.fn[t] = a), d._jQueryInterface;
                    });
                })(jQuery),
                (function (t) {
                  var n = "carousel",
                    s = "bs.carousel",
                    a = "." + s,
                    l = ".data-api",
                    c = t.fn[n],
                    u = {
                      interval: 5e3,
                      keyboard: !0,
                      slide: !1,
                      pause: "hover",
                      wrap: !0,
                    },
                    h = {
                      interval: "(number|boolean)",
                      keyboard: "boolean",
                      slide: "(boolean|string)",
                      pause: "(string|boolean)",
                      wrap: "boolean",
                    },
                    d = "next",
                    p = "prev",
                    f = {
                      SLIDE: "slide" + a,
                      SLID: "slid" + a,
                      KEYDOWN: "keydown" + a,
                      MOUSEENTER: "mouseenter" + a,
                      MOUSELEAVE: "mouseleave" + a,
                      LOAD_DATA_API: "load" + a + l,
                      CLICK_DATA_API: "click" + a + l,
                    },
                    m = "active",
                    g = ".active.carousel-item",
                    v = (function () {
                      function l(e, n) {
                        i(this, l),
                          (this._items = null),
                          (this._interval = null),
                          (this._activeElement = null),
                          (this._isPaused = !1),
                          (this._isSliding = !1),
                          (this._config = this._getConfig(n)),
                          (this._element = t(e)[0]),
                          (this._indicatorsElement = t(this._element).find(
                            ".carousel-indicators"
                          )[0]),
                          this._addEventListeners();
                      }
                      return (
                        r(
                          l,
                          [
                            {
                              key: "next",
                              value: function () {
                                this._isSliding || this._slide(d);
                              },
                            },
                            {
                              key: "nextWhenVisible",
                              value: function () {
                                document.hidden || this.next();
                              },
                            },
                            {
                              key: "prev",
                              value: function () {
                                this._isSliding || this._slide(p);
                              },
                            },
                            {
                              key: "pause",
                              value: function (e) {
                                e || (this._isPaused = !0),
                                  t(this._element).find(".next, .prev")[0] &&
                                    o.supportsTransitionEnd() &&
                                    (o.triggerTransitionEnd(this._element),
                                    this.cycle(!0)),
                                  clearInterval(this._interval),
                                  (this._interval = null);
                              },
                            },
                            {
                              key: "cycle",
                              value: function (e) {
                                e || (this._isPaused = !1),
                                  this._interval &&
                                    (clearInterval(this._interval),
                                    (this._interval = null)),
                                  this._config.interval &&
                                    !this._isPaused &&
                                    (this._interval = setInterval(
                                      t.proxy(
                                        document.visibilityState
                                          ? this.nextWhenVisible
                                          : this.next,
                                        this
                                      ),
                                      this._config.interval
                                    ));
                              },
                            },
                            {
                              key: "to",
                              value: function (e) {
                                var i = this;
                                this._activeElement = t(this._element).find(
                                  g
                                )[0];
                                var n = this._getItemIndex(this._activeElement);
                                if (!(e > this._items.length - 1 || e < 0)) {
                                  if (this._isSliding)
                                    return void t(this._element).one(
                                      f.SLID,
                                      function () {
                                        return i.to(e);
                                      }
                                    );
                                  if (n === e)
                                    return this.pause(), void this.cycle();
                                  var r = e > n ? d : p;
                                  this._slide(r, this._items[e]);
                                }
                              },
                            },
                            {
                              key: "dispose",
                              value: function () {
                                t(this._element).off(a),
                                  t.removeData(this._element, s),
                                  (this._items = null),
                                  (this._config = null),
                                  (this._element = null),
                                  (this._interval = null),
                                  (this._isPaused = null),
                                  (this._isSliding = null),
                                  (this._activeElement = null),
                                  (this._indicatorsElement = null);
                              },
                            },
                            {
                              key: "_getConfig",
                              value: function (e) {
                                return (
                                  (e = t.extend({}, u, e)),
                                  o.typeCheckConfig(n, e, h),
                                  e
                                );
                              },
                            },
                            {
                              key: "_addEventListeners",
                              value: function () {
                                this._config.keyboard &&
                                  t(this._element).on(
                                    f.KEYDOWN,
                                    t.proxy(this._keydown, this)
                                  ),
                                  "hover" !== this._config.pause ||
                                    "ontouchstart" in
                                      document.documentElement ||
                                    t(this._element)
                                      .on(
                                        f.MOUSEENTER,
                                        t.proxy(this.pause, this)
                                      )
                                      .on(
                                        f.MOUSELEAVE,
                                        t.proxy(this.cycle, this)
                                      );
                              },
                            },
                            {
                              key: "_keydown",
                              value: function (e) {
                                if (
                                  (e.preventDefault(),
                                  !/input|textarea/i.test(e.target.tagName))
                                )
                                  switch (e.which) {
                                    case 37:
                                      this.prev();
                                      break;
                                    case 39:
                                      this.next();
                                      break;
                                    default:
                                      return;
                                  }
                              },
                            },
                            {
                              key: "_getItemIndex",
                              value: function (e) {
                                return (
                                  (this._items = t.makeArray(
                                    t(e).parent().find(".carousel-item")
                                  )),
                                  this._items.indexOf(e)
                                );
                              },
                            },
                            {
                              key: "_getItemByDirection",
                              value: function (e, t) {
                                var i = e === d,
                                  n = e === p,
                                  r = this._getItemIndex(t),
                                  o = this._items.length - 1;
                                if (
                                  ((n && 0 === r) || (i && r === o)) &&
                                  !this._config.wrap
                                )
                                  return t;
                                var s =
                                  (r + (e === p ? -1 : 1)) % this._items.length;
                                return -1 === s
                                  ? this._items[this._items.length - 1]
                                  : this._items[s];
                              },
                            },
                            {
                              key: "_triggerSlideEvent",
                              value: function (e, i) {
                                var n = t.Event(f.SLIDE, {
                                  relatedTarget: e,
                                  direction: i,
                                });
                                return t(this._element).trigger(n), n;
                              },
                            },
                            {
                              key: "_setActiveIndicatorElement",
                              value: function (e) {
                                if (this._indicatorsElement) {
                                  t(this._indicatorsElement)
                                    .find(".active")
                                    .removeClass(m);
                                  var i =
                                    this._indicatorsElement.children[
                                      this._getItemIndex(e)
                                    ];
                                  i && t(i).addClass(m);
                                }
                              },
                            },
                            {
                              key: "_slide",
                              value: function (e, i) {
                                var n = this,
                                  r = t(this._element).find(g)[0],
                                  s =
                                    i || (r && this._getItemByDirection(e, r)),
                                  a = Boolean(this._interval),
                                  l = e === d ? "left" : "right";
                                if (s && t(s).hasClass(m)) this._isSliding = !1;
                                else if (
                                  !this._triggerSlideEvent(
                                    s,
                                    l
                                  ).isDefaultPrevented() &&
                                  r &&
                                  s
                                ) {
                                  (this._isSliding = !0),
                                    a && this.pause(),
                                    this._setActiveIndicatorElement(s);
                                  var c = t.Event(f.SLID, {
                                    relatedTarget: s,
                                    direction: l,
                                  });
                                  o.supportsTransitionEnd() &&
                                  t(this._element).hasClass("slide")
                                    ? (t(s).addClass(e),
                                      o.reflow(s),
                                      t(r).addClass(l),
                                      t(s).addClass(l),
                                      t(r)
                                        .one(o.TRANSITION_END, function () {
                                          t(s).removeClass(l).removeClass(e),
                                            t(s).addClass(m),
                                            t(r)
                                              .removeClass(m)
                                              .removeClass(e)
                                              .removeClass(l),
                                            (n._isSliding = !1),
                                            setTimeout(function () {
                                              return t(n._element).trigger(c);
                                            }, 0);
                                        })
                                        .emulateTransitionEnd(600))
                                    : (t(r).removeClass(m),
                                      t(s).addClass(m),
                                      (this._isSliding = !1),
                                      t(this._element).trigger(c)),
                                    a && this.cycle();
                                }
                              },
                            },
                          ],
                          [
                            {
                              key: "_jQueryInterface",
                              value: function (i) {
                                return this.each(function () {
                                  var n = t(this).data(s),
                                    r = t.extend({}, u, t(this).data());
                                  "object" == e(i) && t.extend(r, i);
                                  var o = "string" == typeof i ? i : r.slide;
                                  if (
                                    (n ||
                                      ((n = new l(this, r)),
                                      t(this).data(s, n)),
                                    "number" == typeof i)
                                  )
                                    n.to(i);
                                  else if ("string" == typeof o) {
                                    if (void 0 === n[o])
                                      throw new Error(
                                        'No method named "' + o + '"'
                                      );
                                    n[o]();
                                  } else r.interval && (n.pause(), n.cycle());
                                });
                              },
                            },
                            {
                              key: "_dataApiClickHandler",
                              value: function (e) {
                                var i = o.getSelectorFromElement(this);
                                if (i) {
                                  var n = t(i)[0];
                                  if (n && t(n).hasClass("carousel")) {
                                    var r = t.extend(
                                        {},
                                        t(n).data(),
                                        t(this).data()
                                      ),
                                      a = this.getAttribute("data-slide-to");
                                    a && (r.interval = !1),
                                      l._jQueryInterface.call(t(n), r),
                                      a && t(n).data(s).to(a),
                                      e.preventDefault();
                                  }
                                }
                              },
                            },
                            {
                              key: "VERSION",
                              get: function () {
                                return "4.0.0-alpha.4";
                              },
                            },
                            {
                              key: "Default",
                              get: function () {
                                return u;
                              },
                            },
                          ]
                        ),
                        l
                      );
                    })();
                  t(document).on(
                    f.CLICK_DATA_API,
                    "[data-slide], [data-slide-to]",
                    v._dataApiClickHandler
                  ),
                    t(window).on(f.LOAD_DATA_API, function () {
                      t('[data-ride="carousel"]').each(function () {
                        var e = t(this);
                        v._jQueryInterface.call(e, e.data());
                      });
                    }),
                    (t.fn[n] = v._jQueryInterface),
                    (t.fn[n].Constructor = v),
                    (t.fn[n].noConflict = function () {
                      return (t.fn[n] = c), v._jQueryInterface;
                    });
                })(jQuery),
                (function (t) {
                  var n = "collapse",
                    s = "bs.collapse",
                    a = "." + s,
                    l = t.fn[n],
                    c = { toggle: !0, parent: "" },
                    u = { toggle: "boolean", parent: "string" },
                    h = {
                      SHOW: "show" + a,
                      SHOWN: "shown" + a,
                      HIDE: "hide" + a,
                      HIDDEN: "hidden" + a,
                      CLICK_DATA_API: "click" + a + ".data-api",
                    },
                    d = "in",
                    p = "collapse",
                    f = "collapsing",
                    m = "collapsed",
                    g = "width",
                    v = (function () {
                      function a(e, n) {
                        i(this, a),
                          (this._isTransitioning = !1),
                          (this._element = e),
                          (this._config = this._getConfig(n)),
                          (this._triggerArray = t.makeArray(
                            t(
                              '[data-toggle="collapse"][href="#' +
                                e.id +
                                '"],[data-toggle="collapse"][data-target="#' +
                                e.id +
                                '"]'
                            )
                          )),
                          (this._parent = this._config.parent
                            ? this._getParent()
                            : null),
                          this._config.parent ||
                            this._addAriaAndCollapsedClass(
                              this._element,
                              this._triggerArray
                            ),
                          this._config.toggle && this.toggle();
                      }
                      return (
                        r(
                          a,
                          [
                            {
                              key: "toggle",
                              value: function () {
                                t(this._element).hasClass(d)
                                  ? this.hide()
                                  : this.show();
                              },
                            },
                            {
                              key: "show",
                              value: function () {
                                var e = this;
                                if (
                                  !this._isTransitioning &&
                                  !t(this._element).hasClass(d)
                                ) {
                                  var i = void 0,
                                    n = void 0;
                                  if (
                                    (this._parent &&
                                      ((i = t.makeArray(
                                        t(".panel > .in, .panel > .collapsing")
                                      )).length ||
                                        (i = null)),
                                    !(
                                      i &&
                                      ((n = t(i).data(s)),
                                      n && n._isTransitioning)
                                    ))
                                  ) {
                                    var r = t.Event(h.SHOW);
                                    if (
                                      (t(this._element).trigger(r),
                                      !r.isDefaultPrevented())
                                    ) {
                                      i &&
                                        (a._jQueryInterface.call(t(i), "hide"),
                                        n || t(i).data(s, null));
                                      var l = this._getDimension();
                                      t(this._element)
                                        .removeClass(p)
                                        .addClass(f),
                                        (this._element.style[l] = 0),
                                        this._element.setAttribute(
                                          "aria-expanded",
                                          !0
                                        ),
                                        this._triggerArray.length &&
                                          t(this._triggerArray)
                                            .removeClass(m)
                                            .attr("aria-expanded", !0),
                                        this.setTransitioning(!0);
                                      var c = function () {
                                        t(e._element)
                                          .removeClass(f)
                                          .addClass(p)
                                          .addClass(d),
                                          (e._element.style[l] = ""),
                                          e.setTransitioning(!1),
                                          t(e._element).trigger(h.SHOWN);
                                      };
                                      if (!o.supportsTransitionEnd())
                                        return void c();
                                      var u =
                                        "scroll" +
                                        (l[0].toUpperCase() + l.slice(1));
                                      t(this._element)
                                        .one(o.TRANSITION_END, c)
                                        .emulateTransitionEnd(600),
                                        (this._element.style[l] =
                                          this._element[u] + "px");
                                    }
                                  }
                                }
                              },
                            },
                            {
                              key: "hide",
                              value: function () {
                                var e = this;
                                if (
                                  !this._isTransitioning &&
                                  t(this._element).hasClass(d)
                                ) {
                                  var i = t.Event(h.HIDE);
                                  if (
                                    (t(this._element).trigger(i),
                                    !i.isDefaultPrevented())
                                  ) {
                                    var n = this._getDimension(),
                                      r =
                                        n === g
                                          ? "offsetWidth"
                                          : "offsetHeight";
                                    (this._element.style[n] =
                                      this._element[r] + "px"),
                                      o.reflow(this._element),
                                      t(this._element)
                                        .addClass(f)
                                        .removeClass(p)
                                        .removeClass(d),
                                      this._element.setAttribute(
                                        "aria-expanded",
                                        !1
                                      ),
                                      this._triggerArray.length &&
                                        t(this._triggerArray)
                                          .addClass(m)
                                          .attr("aria-expanded", !1),
                                      this.setTransitioning(!0);
                                    var s = function () {
                                      e.setTransitioning(!1),
                                        t(e._element)
                                          .removeClass(f)
                                          .addClass(p)
                                          .trigger(h.HIDDEN);
                                    };
                                    return (
                                      (this._element.style[n] = 0),
                                      o.supportsTransitionEnd()
                                        ? void t(this._element)
                                            .one(o.TRANSITION_END, s)
                                            .emulateTransitionEnd(600)
                                        : void s()
                                    );
                                  }
                                }
                              },
                            },
                            {
                              key: "setTransitioning",
                              value: function (e) {
                                this._isTransitioning = e;
                              },
                            },
                            {
                              key: "dispose",
                              value: function () {
                                t.removeData(this._element, s),
                                  (this._config = null),
                                  (this._parent = null),
                                  (this._element = null),
                                  (this._triggerArray = null),
                                  (this._isTransitioning = null);
                              },
                            },
                            {
                              key: "_getConfig",
                              value: function (e) {
                                return (
                                  ((e = t.extend({}, c, e)).toggle = Boolean(
                                    e.toggle
                                  )),
                                  o.typeCheckConfig(n, e, u),
                                  e
                                );
                              },
                            },
                            {
                              key: "_getDimension",
                              value: function () {
                                return t(this._element).hasClass(g)
                                  ? g
                                  : "height";
                              },
                            },
                            {
                              key: "_getParent",
                              value: function () {
                                var e = this,
                                  i = t(this._config.parent)[0],
                                  n =
                                    '[data-toggle="collapse"][data-parent="' +
                                    this._config.parent +
                                    '"]';
                                return (
                                  t(i)
                                    .find(n)
                                    .each(function (t, i) {
                                      e._addAriaAndCollapsedClass(
                                        a._getTargetFromElement(i),
                                        [i]
                                      );
                                    }),
                                  i
                                );
                              },
                            },
                            {
                              key: "_addAriaAndCollapsedClass",
                              value: function (e, i) {
                                if (e) {
                                  var n = t(e).hasClass(d);
                                  e.setAttribute("aria-expanded", n),
                                    i.length &&
                                      t(i)
                                        .toggleClass(m, !n)
                                        .attr("aria-expanded", n);
                                }
                              },
                            },
                          ],
                          [
                            {
                              key: "_getTargetFromElement",
                              value: function (e) {
                                var i = o.getSelectorFromElement(e);
                                return i ? t(i)[0] : null;
                              },
                            },
                            {
                              key: "_jQueryInterface",
                              value: function (i) {
                                return this.each(function () {
                                  var n = t(this),
                                    r = n.data(s),
                                    o = t.extend(
                                      {},
                                      c,
                                      n.data(),
                                      "object" == e(i) && i
                                    );
                                  if (
                                    (!r &&
                                      o.toggle &&
                                      /show|hide/.test(i) &&
                                      (o.toggle = !1),
                                    r || ((r = new a(this, o)), n.data(s, r)),
                                    "string" == typeof i)
                                  ) {
                                    if (void 0 === r[i])
                                      throw new Error(
                                        'No method named "' + i + '"'
                                      );
                                    r[i]();
                                  }
                                });
                              },
                            },
                            {
                              key: "VERSION",
                              get: function () {
                                return "4.0.0-alpha.4";
                              },
                            },
                            {
                              key: "Default",
                              get: function () {
                                return c;
                              },
                            },
                          ]
                        ),
                        a
                      );
                    })();
                  t(document).on(
                    h.CLICK_DATA_API,
                    '[data-toggle="collapse"]',
                    function (e) {
                      e.preventDefault();
                      var i = v._getTargetFromElement(this),
                        n = t(i).data(s) ? "toggle" : t(this).data();
                      v._jQueryInterface.call(t(i), n);
                    }
                  ),
                    (t.fn[n] = v._jQueryInterface),
                    (t.fn[n].Constructor = v),
                    (t.fn[n].noConflict = function () {
                      return (t.fn[n] = l), v._jQueryInterface;
                    });
                })(jQuery),
                (function (e) {
                  var t = "dropdown",
                    n = "bs.dropdown",
                    s = "." + n,
                    a = ".data-api",
                    l = e.fn[t],
                    c = {
                      HIDE: "hide" + s,
                      HIDDEN: "hidden" + s,
                      SHOW: "show" + s,
                      SHOWN: "shown" + s,
                      CLICK: "click" + s,
                      CLICK_DATA_API: "click" + s + a,
                      KEYDOWN_DATA_API: "keydown" + s + a,
                    },
                    u = "disabled",
                    h = "open",
                    d = '[data-toggle="dropdown"]',
                    p = (function () {
                      function t(e) {
                        i(this, t),
                          (this._element = e),
                          this._addEventListeners();
                      }
                      return (
                        r(
                          t,
                          [
                            {
                              key: "toggle",
                              value: function () {
                                if (this.disabled || e(this).hasClass(u))
                                  return !1;
                                var i = t._getParentFromElement(this),
                                  n = e(i).hasClass(h);
                                if ((t._clearMenus(), n)) return !1;
                                if (
                                  "ontouchstart" in document.documentElement &&
                                  !e(i).closest(".navbar-nav").length
                                ) {
                                  var r = document.createElement("div");
                                  (r.className = "dropdown-backdrop"),
                                    e(r).insertBefore(this),
                                    e(r).on("click", t._clearMenus);
                                }
                                var o = { relatedTarget: this },
                                  s = e.Event(c.SHOW, o);
                                return (
                                  e(i).trigger(s),
                                  !s.isDefaultPrevented() &&
                                    (this.focus(),
                                    this.setAttribute("aria-expanded", "true"),
                                    e(i).toggleClass(h),
                                    e(i).trigger(e.Event(c.SHOWN, o)),
                                    !1)
                                );
                              },
                            },
                            {
                              key: "dispose",
                              value: function () {
                                e.removeData(this._element, n),
                                  e(this._element).off(s),
                                  (this._element = null);
                              },
                            },
                            {
                              key: "_addEventListeners",
                              value: function () {
                                e(this._element).on(c.CLICK, this.toggle);
                              },
                            },
                          ],
                          [
                            {
                              key: "_jQueryInterface",
                              value: function (i) {
                                return this.each(function () {
                                  var r = e(this).data(n);
                                  if (
                                    (r || e(this).data(n, (r = new t(this))),
                                    "string" == typeof i)
                                  ) {
                                    if (void 0 === r[i])
                                      throw new Error(
                                        'No method named "' + i + '"'
                                      );
                                    r[i].call(this);
                                  }
                                });
                              },
                            },
                            {
                              key: "_clearMenus",
                              value: function (i) {
                                if (!i || 3 !== i.which) {
                                  var n = e(".dropdown-backdrop")[0];
                                  n && n.parentNode.removeChild(n);
                                  for (
                                    var r = e.makeArray(e(d)), o = 0;
                                    o < r.length;
                                    o++
                                  ) {
                                    var s = t._getParentFromElement(r[o]),
                                      a = { relatedTarget: r[o] };
                                    if (
                                      e(s).hasClass(h) &&
                                      !(
                                        i &&
                                        "click" === i.type &&
                                        /input|textarea/i.test(
                                          i.target.tagName
                                        ) &&
                                        e.contains(s, i.target)
                                      )
                                    ) {
                                      var l = e.Event(c.HIDE, a);
                                      e(s).trigger(l),
                                        l.isDefaultPrevented() ||
                                          (r[o].setAttribute(
                                            "aria-expanded",
                                            "false"
                                          ),
                                          e(s)
                                            .removeClass(h)
                                            .trigger(e.Event(c.HIDDEN, a)));
                                    }
                                  }
                                }
                              },
                            },
                            {
                              key: "_getParentFromElement",
                              value: function (t) {
                                var i = void 0,
                                  n = o.getSelectorFromElement(t);
                                return n && (i = e(n)[0]), i || t.parentNode;
                              },
                            },
                            {
                              key: "_dataApiKeydownHandler",
                              value: function (i) {
                                if (
                                  /(38|40|27|32)/.test(i.which) &&
                                  !/input|textarea/i.test(i.target.tagName) &&
                                  (i.preventDefault(),
                                  i.stopPropagation(),
                                  !this.disabled && !e(this).hasClass(u))
                                ) {
                                  var n = t._getParentFromElement(this),
                                    r = e(n).hasClass(h);
                                  if (
                                    (!r && 27 !== i.which) ||
                                    (r && 27 === i.which)
                                  ) {
                                    if (27 === i.which) {
                                      var o = e(n).find(d)[0];
                                      e(o).trigger("focus");
                                    }
                                    return void e(this).trigger("click");
                                  }
                                  var s = e.makeArray(
                                    e(
                                      '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'
                                    )
                                  );
                                  if (
                                    (s = s.filter(function (e) {
                                      return e.offsetWidth || e.offsetHeight;
                                    })).length
                                  ) {
                                    var a = s.indexOf(i.target);
                                    38 === i.which && a > 0 && a--,
                                      40 === i.which && a < s.length - 1 && a++,
                                      a < 0 && (a = 0),
                                      s[a].focus();
                                  }
                                }
                              },
                            },
                            {
                              key: "VERSION",
                              get: function () {
                                return "4.0.0-alpha.4";
                              },
                            },
                          ]
                        ),
                        t
                      );
                    })();
                  e(document)
                    .on(c.KEYDOWN_DATA_API, d, p._dataApiKeydownHandler)
                    .on(
                      c.KEYDOWN_DATA_API,
                      '[role="menu"]',
                      p._dataApiKeydownHandler
                    )
                    .on(
                      c.KEYDOWN_DATA_API,
                      '[role="listbox"]',
                      p._dataApiKeydownHandler
                    )
                    .on(c.CLICK_DATA_API, p._clearMenus)
                    .on(c.CLICK_DATA_API, d, p.prototype.toggle)
                    .on(c.CLICK_DATA_API, ".dropdown form", function (e) {
                      e.stopPropagation();
                    }),
                    (e.fn[t] = p._jQueryInterface),
                    (e.fn[t].Constructor = p),
                    (e.fn[t].noConflict = function () {
                      return (e.fn[t] = l), p._jQueryInterface;
                    });
                })(jQuery),
                (function (t) {
                  var n = "modal",
                    s = "bs.modal",
                    a = "." + s,
                    l = t.fn[n],
                    c = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
                    u = {
                      backdrop: "(boolean|string)",
                      keyboard: "boolean",
                      focus: "boolean",
                      show: "boolean",
                    },
                    h = {
                      HIDE: "hide" + a,
                      HIDDEN: "hidden" + a,
                      SHOW: "show" + a,
                      SHOWN: "shown" + a,
                      FOCUSIN: "focusin" + a,
                      RESIZE: "resize" + a,
                      CLICK_DISMISS: "click.dismiss" + a,
                      KEYDOWN_DISMISS: "keydown.dismiss" + a,
                      MOUSEUP_DISMISS: "mouseup.dismiss" + a,
                      MOUSEDOWN_DISMISS: "mousedown.dismiss" + a,
                      CLICK_DATA_API: "click" + a + ".data-api",
                    },
                    d = "modal-open",
                    p = "fade",
                    f = "in",
                    m = (function () {
                      function l(e, n) {
                        i(this, l),
                          (this._config = this._getConfig(n)),
                          (this._element = e),
                          (this._dialog = t(e).find(".modal-dialog")[0]),
                          (this._backdrop = null),
                          (this._isShown = !1),
                          (this._isBodyOverflowing = !1),
                          (this._ignoreBackdropClick = !1),
                          (this._originalBodyPadding = 0),
                          (this._scrollbarWidth = 0);
                      }
                      return (
                        r(
                          l,
                          [
                            {
                              key: "toggle",
                              value: function (e) {
                                return this._isShown
                                  ? this.hide()
                                  : this.show(e);
                              },
                            },
                            {
                              key: "show",
                              value: function (e) {
                                var i = this,
                                  n = t.Event(h.SHOW, { relatedTarget: e });
                                t(this._element).trigger(n),
                                  this._isShown ||
                                    n.isDefaultPrevented() ||
                                    ((this._isShown = !0),
                                    this._checkScrollbar(),
                                    this._setScrollbar(),
                                    t(document.body).addClass(d),
                                    this._setEscapeEvent(),
                                    this._setResizeEvent(),
                                    t(this._element).on(
                                      h.CLICK_DISMISS,
                                      '[data-dismiss="modal"]',
                                      t.proxy(this.hide, this)
                                    ),
                                    t(this._dialog).on(
                                      h.MOUSEDOWN_DISMISS,
                                      function () {
                                        t(i._element).one(
                                          h.MOUSEUP_DISMISS,
                                          function (e) {
                                            t(e.target).is(i._element) &&
                                              (i._ignoreBackdropClick = !0);
                                          }
                                        );
                                      }
                                    ),
                                    this._showBackdrop(
                                      t.proxy(this._showElement, this, e)
                                    ));
                              },
                            },
                            {
                              key: "hide",
                              value: function (e) {
                                e && e.preventDefault();
                                var i = t.Event(h.HIDE);
                                t(this._element).trigger(i),
                                  this._isShown &&
                                    !i.isDefaultPrevented() &&
                                    ((this._isShown = !1),
                                    this._setEscapeEvent(),
                                    this._setResizeEvent(),
                                    t(document).off(h.FOCUSIN),
                                    t(this._element).removeClass(f),
                                    t(this._element).off(h.CLICK_DISMISS),
                                    t(this._dialog).off(h.MOUSEDOWN_DISMISS),
                                    o.supportsTransitionEnd() &&
                                    t(this._element).hasClass(p)
                                      ? t(this._element)
                                          .one(
                                            o.TRANSITION_END,
                                            t.proxy(this._hideModal, this)
                                          )
                                          .emulateTransitionEnd(300)
                                      : this._hideModal());
                              },
                            },
                            {
                              key: "dispose",
                              value: function () {
                                t.removeData(this._element, s),
                                  t(window).off(a),
                                  t(document).off(a),
                                  t(this._element).off(a),
                                  t(this._backdrop).off(a),
                                  (this._config = null),
                                  (this._element = null),
                                  (this._dialog = null),
                                  (this._backdrop = null),
                                  (this._isShown = null),
                                  (this._isBodyOverflowing = null),
                                  (this._ignoreBackdropClick = null),
                                  (this._originalBodyPadding = null),
                                  (this._scrollbarWidth = null);
                              },
                            },
                            {
                              key: "_getConfig",
                              value: function (e) {
                                return (
                                  (e = t.extend({}, c, e)),
                                  o.typeCheckConfig(n, e, u),
                                  e
                                );
                              },
                            },
                            {
                              key: "_showElement",
                              value: function (e) {
                                var i = this,
                                  n =
                                    o.supportsTransitionEnd() &&
                                    t(this._element).hasClass(p);
                                (this._element.parentNode &&
                                  this._element.parentNode.nodeType ===
                                    Node.ELEMENT_NODE) ||
                                  document.body.appendChild(this._element),
                                  (this._element.style.display = "block"),
                                  this._element.removeAttribute("aria-hidden"),
                                  (this._element.scrollTop = 0),
                                  n && o.reflow(this._element),
                                  t(this._element).addClass(f),
                                  this._config.focus && this._enforceFocus();
                                var r = t.Event(h.SHOWN, { relatedTarget: e }),
                                  s = function () {
                                    i._config.focus && i._element.focus(),
                                      t(i._element).trigger(r);
                                  };
                                n
                                  ? t(this._dialog)
                                      .one(o.TRANSITION_END, s)
                                      .emulateTransitionEnd(300)
                                  : s();
                              },
                            },
                            {
                              key: "_enforceFocus",
                              value: function () {
                                var e = this;
                                t(document)
                                  .off(h.FOCUSIN)
                                  .on(h.FOCUSIN, function (i) {
                                    document === i.target ||
                                      e._element === i.target ||
                                      t(e._element).has(i.target).length ||
                                      e._element.focus();
                                  });
                              },
                            },
                            {
                              key: "_setEscapeEvent",
                              value: function () {
                                var e = this;
                                this._isShown && this._config.keyboard
                                  ? t(this._element).on(
                                      h.KEYDOWN_DISMISS,
                                      function (t) {
                                        27 === t.which && e.hide();
                                      }
                                    )
                                  : this._isShown ||
                                    t(this._element).off(h.KEYDOWN_DISMISS);
                              },
                            },
                            {
                              key: "_setResizeEvent",
                              value: function () {
                                this._isShown
                                  ? t(window).on(
                                      h.RESIZE,
                                      t.proxy(this._handleUpdate, this)
                                    )
                                  : t(window).off(h.RESIZE);
                              },
                            },
                            {
                              key: "_hideModal",
                              value: function () {
                                var e = this;
                                (this._element.style.display = "none"),
                                  this._element.setAttribute(
                                    "aria-hidden",
                                    "true"
                                  ),
                                  this._showBackdrop(function () {
                                    t(document.body).removeClass(d),
                                      e._resetAdjustments(),
                                      e._resetScrollbar(),
                                      t(e._element).trigger(h.HIDDEN);
                                  });
                              },
                            },
                            {
                              key: "_removeBackdrop",
                              value: function () {
                                this._backdrop &&
                                  (t(this._backdrop).remove(),
                                  (this._backdrop = null));
                              },
                            },
                            {
                              key: "_showBackdrop",
                              value: function (e) {
                                var i = this,
                                  n = t(this._element).hasClass(p) ? p : "";
                                if (this._isShown && this._config.backdrop) {
                                  var r = o.supportsTransitionEnd() && n;
                                  if (
                                    ((this._backdrop =
                                      document.createElement("div")),
                                    (this._backdrop.className =
                                      "modal-backdrop"),
                                    n && t(this._backdrop).addClass(n),
                                    t(this._backdrop).appendTo(document.body),
                                    t(this._element).on(
                                      h.CLICK_DISMISS,
                                      function (e) {
                                        return i._ignoreBackdropClick
                                          ? void (i._ignoreBackdropClick = !1)
                                          : void (
                                              e.target === e.currentTarget &&
                                              ("static" === i._config.backdrop
                                                ? i._element.focus()
                                                : i.hide())
                                            );
                                      }
                                    ),
                                    r && o.reflow(this._backdrop),
                                    t(this._backdrop).addClass(f),
                                    !e)
                                  )
                                    return;
                                  if (!r) return void e();
                                  t(this._backdrop)
                                    .one(o.TRANSITION_END, e)
                                    .emulateTransitionEnd(150);
                                } else if (!this._isShown && this._backdrop) {
                                  t(this._backdrop).removeClass(f);
                                  var s = function () {
                                    i._removeBackdrop(), e && e();
                                  };
                                  o.supportsTransitionEnd() &&
                                  t(this._element).hasClass(p)
                                    ? t(this._backdrop)
                                        .one(o.TRANSITION_END, s)
                                        .emulateTransitionEnd(150)
                                    : s();
                                } else e && e();
                              },
                            },
                            {
                              key: "_handleUpdate",
                              value: function () {
                                this._adjustDialog();
                              },
                            },
                            {
                              key: "_adjustDialog",
                              value: function () {
                                var e =
                                  this._element.scrollHeight >
                                  document.documentElement.clientHeight;
                                !this._isBodyOverflowing &&
                                  e &&
                                  (this._element.style.paddingLeft =
                                    this._scrollbarWidth + "px"),
                                  this._isBodyOverflowing &&
                                    !e &&
                                    (this._element.style.paddingRight =
                                      this._scrollbarWidth + "px");
                              },
                            },
                            {
                              key: "_resetAdjustments",
                              value: function () {
                                (this._element.style.paddingLeft = ""),
                                  (this._element.style.paddingRight = "");
                              },
                            },
                            {
                              key: "_checkScrollbar",
                              value: function () {
                                (this._isBodyOverflowing =
                                  document.body.clientWidth <
                                  window.innerWidth),
                                  (this._scrollbarWidth =
                                    this._getScrollbarWidth());
                              },
                            },
                            {
                              key: "_setScrollbar",
                              value: function () {
                                var e = parseInt(
                                  t(
                                    ".navbar-fixed-top, .navbar-fixed-bottom, .is-fixed"
                                  ).css("padding-right") || 0,
                                  10
                                );
                                (this._originalBodyPadding =
                                  document.body.style.paddingRight || ""),
                                  this._isBodyOverflowing &&
                                    (document.body.style.paddingRight =
                                      e + this._scrollbarWidth + "px");
                              },
                            },
                            {
                              key: "_resetScrollbar",
                              value: function () {
                                document.body.style.paddingRight =
                                  this._originalBodyPadding;
                              },
                            },
                            {
                              key: "_getScrollbarWidth",
                              value: function () {
                                var e = document.createElement("div");
                                (e.className = "modal-scrollbar-measure"),
                                  document.body.appendChild(e);
                                var t = e.offsetWidth - e.clientWidth;
                                return document.body.removeChild(e), t;
                              },
                            },
                          ],
                          [
                            {
                              key: "_jQueryInterface",
                              value: function (i, n) {
                                return this.each(function () {
                                  var r = t(this).data(s),
                                    o = t.extend(
                                      {},
                                      l.Default,
                                      t(this).data(),
                                      "object" == e(i) && i
                                    );
                                  if (
                                    (r ||
                                      ((r = new l(this, o)),
                                      t(this).data(s, r)),
                                    "string" == typeof i)
                                  ) {
                                    if (void 0 === r[i])
                                      throw new Error(
                                        'No method named "' + i + '"'
                                      );
                                    r[i](n);
                                  } else o.show && r.show(n);
                                });
                              },
                            },
                            {
                              key: "VERSION",
                              get: function () {
                                return "4.0.0-alpha.4";
                              },
                            },
                            {
                              key: "Default",
                              get: function () {
                                return c;
                              },
                            },
                          ]
                        ),
                        l
                      );
                    })();
                  t(document).on(
                    h.CLICK_DATA_API,
                    '[data-toggle="modal"]',
                    function (e) {
                      var i = this,
                        n = void 0,
                        r = o.getSelectorFromElement(this);
                      r && (n = t(r)[0]);
                      var a = t(n).data(s)
                        ? "toggle"
                        : t.extend({}, t(n).data(), t(this).data());
                      "A" === this.tagName && e.preventDefault();
                      var l = t(n).one(h.SHOW, function (e) {
                        e.isDefaultPrevented() ||
                          l.one(h.HIDDEN, function () {
                            t(i).is(":visible") && i.focus();
                          });
                      });
                      m._jQueryInterface.call(t(n), a, this);
                    }
                  ),
                    (t.fn[n] = m._jQueryInterface),
                    (t.fn[n].Constructor = m),
                    (t.fn[n].noConflict = function () {
                      return (t.fn[n] = l), m._jQueryInterface;
                    });
                })(jQuery),
                (function (t) {
                  var n = "scrollspy",
                    s = "bs.scrollspy",
                    a = "." + s,
                    l = t.fn[n],
                    c = { offset: 10, method: "auto", target: "" },
                    u = {
                      offset: "number",
                      method: "string",
                      target: "(string|element)",
                    },
                    h = {
                      ACTIVATE: "activate" + a,
                      SCROLL: "scroll" + a,
                      LOAD_DATA_API: "load" + a + ".data-api",
                    },
                    d = "active",
                    p = ".nav-link",
                    f = "position",
                    m = (function () {
                      function l(e, n) {
                        i(this, l),
                          (this._element = e),
                          (this._scrollElement =
                            "BODY" === e.tagName ? window : e),
                          (this._config = this._getConfig(n)),
                          (this._selector =
                            this._config.target +
                            " " +
                            ".nav-link," +
                            this._config.target +
                            " .dropdown-item"),
                          (this._offsets = []),
                          (this._targets = []),
                          (this._activeTarget = null),
                          (this._scrollHeight = 0),
                          t(this._scrollElement).on(
                            h.SCROLL,
                            t.proxy(this._process, this)
                          ),
                          this.refresh(),
                          this._process();
                      }
                      return (
                        r(
                          l,
                          [
                            {
                              key: "refresh",
                              value: function () {
                                var e = this,
                                  i =
                                    this._scrollElement !==
                                    this._scrollElement.window
                                      ? f
                                      : "offset",
                                  n =
                                    "auto" === this._config.method
                                      ? i
                                      : this._config.method,
                                  r = n === f ? this._getScrollTop() : 0;
                                (this._offsets = []),
                                  (this._targets = []),
                                  (this._scrollHeight =
                                    this._getScrollHeight()),
                                  t
                                    .makeArray(t(this._selector))
                                    .map(function (e) {
                                      var i = void 0,
                                        s = o.getSelectorFromElement(e);
                                      return (
                                        s && (i = t(s)[0]),
                                        i && (i.offsetWidth || i.offsetHeight)
                                          ? [t(i)[n]().top + r, s]
                                          : null
                                      );
                                    })
                                    .filter(function (e) {
                                      return e;
                                    })
                                    .sort(function (e, t) {
                                      return e[0] - t[0];
                                    })
                                    .forEach(function (t) {
                                      e._offsets.push(t[0]),
                                        e._targets.push(t[1]);
                                    });
                              },
                            },
                            {
                              key: "dispose",
                              value: function () {
                                t.removeData(this._element, s),
                                  t(this._scrollElement).off(a),
                                  (this._element = null),
                                  (this._scrollElement = null),
                                  (this._config = null),
                                  (this._selector = null),
                                  (this._offsets = null),
                                  (this._targets = null),
                                  (this._activeTarget = null),
                                  (this._scrollHeight = null);
                              },
                            },
                            {
                              key: "_getConfig",
                              value: function (e) {
                                if (
                                  "string" !=
                                  typeof (e = t.extend({}, c, e)).target
                                ) {
                                  var i = t(e.target).attr("id");
                                  i ||
                                    ((i = o.getUID(n)),
                                    t(e.target).attr("id", i)),
                                    (e.target = "#" + i);
                                }
                                return o.typeCheckConfig(n, e, u), e;
                              },
                            },
                            {
                              key: "_getScrollTop",
                              value: function () {
                                return this._scrollElement === window
                                  ? this._scrollElement.scrollY
                                  : this._scrollElement.scrollTop;
                              },
                            },
                            {
                              key: "_getScrollHeight",
                              value: function () {
                                return (
                                  this._scrollElement.scrollHeight ||
                                  Math.max(
                                    document.body.scrollHeight,
                                    document.documentElement.scrollHeight
                                  )
                                );
                              },
                            },
                            {
                              key: "_process",
                              value: function () {
                                var e =
                                    this._getScrollTop() + this._config.offset,
                                  t = this._getScrollHeight(),
                                  i =
                                    this._config.offset +
                                    t -
                                    this._scrollElement.offsetHeight;
                                if (
                                  (this._scrollHeight !== t && this.refresh(),
                                  e >= i)
                                ) {
                                  var n =
                                    this._targets[this._targets.length - 1];
                                  this._activeTarget !== n && this._activate(n);
                                }
                                if (this._activeTarget && e < this._offsets[0])
                                  return (
                                    (this._activeTarget = null),
                                    void this._clear()
                                  );
                                for (var r = this._offsets.length; r--; )
                                  this._activeTarget !== this._targets[r] &&
                                    e >= this._offsets[r] &&
                                    (void 0 === this._offsets[r + 1] ||
                                      e < this._offsets[r + 1]) &&
                                    this._activate(this._targets[r]);
                              },
                            },
                            {
                              key: "_activate",
                              value: function (e) {
                                (this._activeTarget = e), this._clear();
                                var i = this._selector.split(",");
                                i = i.map(function (t) {
                                  return (
                                    t +
                                    '[data-target="' +
                                    e +
                                    '"],' +
                                    t +
                                    '[href="' +
                                    e +
                                    '"]'
                                  );
                                });
                                var n = t(i.join(","));
                                n.hasClass("dropdown-item")
                                  ? (n
                                      .closest(".dropdown")
                                      .find(".dropdown-toggle")
                                      .addClass(d),
                                    n.addClass(d))
                                  : n.parents("li").find(p).addClass(d),
                                  t(this._scrollElement).trigger(h.ACTIVATE, {
                                    relatedTarget: e,
                                  });
                              },
                            },
                            {
                              key: "_clear",
                              value: function () {
                                t(this._selector)
                                  .filter(".active")
                                  .removeClass(d);
                              },
                            },
                          ],
                          [
                            {
                              key: "_jQueryInterface",
                              value: function (i) {
                                return this.each(function () {
                                  var n = t(this).data(s),
                                    r = ("object" == e(i) && i) || null;
                                  if (
                                    (n ||
                                      ((n = new l(this, r)),
                                      t(this).data(s, n)),
                                    "string" == typeof i)
                                  ) {
                                    if (void 0 === n[i])
                                      throw new Error(
                                        'No method named "' + i + '"'
                                      );
                                    n[i]();
                                  }
                                });
                              },
                            },
                            {
                              key: "VERSION",
                              get: function () {
                                return "4.0.0-alpha.4";
                              },
                            },
                            {
                              key: "Default",
                              get: function () {
                                return c;
                              },
                            },
                          ]
                        ),
                        l
                      );
                    })();
                  t(window).on(h.LOAD_DATA_API, function () {
                    for (
                      var e = t.makeArray(t('[data-spy="scroll"]')),
                        i = e.length;
                      i--;

                    ) {
                      var n = t(e[i]);
                      m._jQueryInterface.call(n, n.data());
                    }
                  }),
                    (t.fn[n] = m._jQueryInterface),
                    (t.fn[n].Constructor = m),
                    (t.fn[n].noConflict = function () {
                      return (t.fn[n] = l), m._jQueryInterface;
                    });
                })(jQuery),
                (function (e) {
                  var t = "tab",
                    n = "bs.tab",
                    s = "." + n,
                    a = e.fn[t],
                    l = {
                      HIDE: "hide" + s,
                      HIDDEN: "hidden" + s,
                      SHOW: "show" + s,
                      SHOWN: "shown" + s,
                      CLICK_DATA_API: "click" + s + ".data-api",
                    },
                    c = "active",
                    u = "fade",
                    h = (function () {
                      function t(e) {
                        i(this, t), (this._element = e);
                      }
                      return (
                        r(
                          t,
                          [
                            {
                              key: "show",
                              value: function () {
                                var t = this;
                                if (
                                  !this._element.parentNode ||
                                  this._element.parentNode.nodeType !==
                                    Node.ELEMENT_NODE ||
                                  !e(this._element).hasClass(c)
                                ) {
                                  var i = void 0,
                                    n = void 0,
                                    r = e(this._element).closest(
                                      "ul:not(.dropdown-menu)"
                                    )[0],
                                    s = o.getSelectorFromElement(this._element);
                                  r &&
                                    (n = (n = e.makeArray(
                                      e(r).find(".active")
                                    ))[n.length - 1]);
                                  var a = e.Event(l.HIDE, {
                                      relatedTarget: this._element,
                                    }),
                                    u = e.Event(l.SHOW, { relatedTarget: n });
                                  if (
                                    (n && e(n).trigger(a),
                                    e(this._element).trigger(u),
                                    !u.isDefaultPrevented() &&
                                      !a.isDefaultPrevented())
                                  ) {
                                    s && (i = e(s)[0]),
                                      this._activate(this._element, r);
                                    var h = function () {
                                      var i = e.Event(l.HIDDEN, {
                                          relatedTarget: t._element,
                                        }),
                                        r = e.Event(l.SHOWN, {
                                          relatedTarget: n,
                                        });
                                      e(n).trigger(i), e(t._element).trigger(r);
                                    };
                                    i
                                      ? this._activate(i, i.parentNode, h)
                                      : h();
                                  }
                                }
                              },
                            },
                            {
                              key: "dispose",
                              value: function () {
                                e.removeClass(this._element, n),
                                  (this._element = null);
                              },
                            },
                            {
                              key: "_activate",
                              value: function (t, i, n) {
                                var r = e(i).find(
                                    "> .nav-item > .active, > .active"
                                  )[0],
                                  s =
                                    n &&
                                    o.supportsTransitionEnd() &&
                                    ((r && e(r).hasClass(u)) ||
                                      Boolean(
                                        e(i).find(
                                          "> .nav-item .fade, > .fade"
                                        )[0]
                                      )),
                                  a = e.proxy(
                                    this._transitionComplete,
                                    this,
                                    t,
                                    r,
                                    s,
                                    n
                                  );
                                r && s
                                  ? e(r)
                                      .one(o.TRANSITION_END, a)
                                      .emulateTransitionEnd(150)
                                  : a(),
                                  r && e(r).removeClass("in");
                              },
                            },
                            {
                              key: "_transitionComplete",
                              value: function (t, i, n, r) {
                                if (i) {
                                  e(i).removeClass(c);
                                  var s = e(i).find(
                                    "> .dropdown-menu .active"
                                  )[0];
                                  s && e(s).removeClass(c),
                                    i.setAttribute("aria-expanded", !1);
                                }
                                if (
                                  (e(t).addClass(c),
                                  t.setAttribute("aria-expanded", !0),
                                  n
                                    ? (o.reflow(t), e(t).addClass("in"))
                                    : e(t).removeClass(u),
                                  t.parentNode &&
                                    e(t.parentNode).hasClass("dropdown-menu"))
                                ) {
                                  var a = e(t).closest(".dropdown")[0];
                                  a &&
                                    e(a).find(".dropdown-toggle").addClass(c),
                                    t.setAttribute("aria-expanded", !0);
                                }
                                r && r();
                              },
                            },
                          ],
                          [
                            {
                              key: "_jQueryInterface",
                              value: function (i) {
                                return this.each(function () {
                                  var r = e(this),
                                    o = r.data(n);
                                  if (
                                    (o || ((o = o = new t(this)), r.data(n, o)),
                                    "string" == typeof i)
                                  ) {
                                    if (void 0 === o[i])
                                      throw new Error(
                                        'No method named "' + i + '"'
                                      );
                                    o[i]();
                                  }
                                });
                              },
                            },
                            {
                              key: "VERSION",
                              get: function () {
                                return "4.0.0-alpha.4";
                              },
                            },
                          ]
                        ),
                        t
                      );
                    })();
                  e(document).on(
                    l.CLICK_DATA_API,
                    '[data-toggle="tab"], [data-toggle="pill"]',
                    function (t) {
                      t.preventDefault(),
                        h._jQueryInterface.call(e(this), "show");
                    }
                  ),
                    (e.fn[t] = h._jQueryInterface),
                    (e.fn[t].Constructor = h),
                    (e.fn[t].noConflict = function () {
                      return (e.fn[t] = a), h._jQueryInterface;
                    });
                })(jQuery),
                (function (t) {
                  if (void 0 === window.Tether)
                    throw new Error(
                      "Bootstrap tooltips require Tether (http://github.hubspot.com/tether/)"
                    );
                  var n = "tooltip",
                    s = "bs.tooltip",
                    a = "." + s,
                    l = t.fn[n],
                    c = {
                      animation: !0,
                      template:
                        '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                      trigger: "hover focus",
                      title: "",
                      delay: 0,
                      html: !1,
                      selector: !1,
                      placement: "top",
                      offset: "0 0",
                      constraints: [],
                    },
                    u = {
                      animation: "boolean",
                      template: "string",
                      title: "(string|element|function)",
                      trigger: "string",
                      delay: "(number|object)",
                      html: "boolean",
                      selector: "(string|boolean)",
                      placement: "(string|function)",
                      offset: "string",
                      constraints: "array",
                    },
                    h = {
                      TOP: "bottom center",
                      RIGHT: "middle left",
                      BOTTOM: "top center",
                      LEFT: "middle right",
                    },
                    d = "in",
                    p = "out",
                    f = {
                      HIDE: "hide" + a,
                      HIDDEN: "hidden" + a,
                      SHOW: "show" + a,
                      SHOWN: "shown" + a,
                      INSERTED: "inserted" + a,
                      CLICK: "click" + a,
                      FOCUSIN: "focusin" + a,
                      FOCUSOUT: "focusout" + a,
                      MOUSEENTER: "mouseenter" + a,
                      MOUSELEAVE: "mouseleave" + a,
                    },
                    m = "fade",
                    g = "in",
                    v = { element: !1, enabled: !1 },
                    y = "hover",
                    _ = "focus",
                    b = (function () {
                      function l(e, t) {
                        i(this, l),
                          (this._isEnabled = !0),
                          (this._timeout = 0),
                          (this._hoverState = ""),
                          (this._activeTrigger = {}),
                          (this._tether = null),
                          (this.element = e),
                          (this.config = this._getConfig(t)),
                          (this.tip = null),
                          this._setListeners();
                      }
                      return (
                        r(
                          l,
                          [
                            {
                              key: "enable",
                              value: function () {
                                this._isEnabled = !0;
                              },
                            },
                            {
                              key: "disable",
                              value: function () {
                                this._isEnabled = !1;
                              },
                            },
                            {
                              key: "toggleEnabled",
                              value: function () {
                                this._isEnabled = !this._isEnabled;
                              },
                            },
                            {
                              key: "toggle",
                              value: function (e) {
                                if (e) {
                                  var i = this.constructor.DATA_KEY,
                                    n = t(e.currentTarget).data(i);
                                  n ||
                                    ((n = new this.constructor(
                                      e.currentTarget,
                                      this._getDelegateConfig()
                                    )),
                                    t(e.currentTarget).data(i, n)),
                                    (n._activeTrigger.click =
                                      !n._activeTrigger.click),
                                    n._isWithActiveTrigger()
                                      ? n._enter(null, n)
                                      : n._leave(null, n);
                                } else {
                                  if (t(this.getTipElement()).hasClass(g))
                                    return void this._leave(null, this);
                                  this._enter(null, this);
                                }
                              },
                            },
                            {
                              key: "dispose",
                              value: function () {
                                clearTimeout(this._timeout),
                                  this.cleanupTether(),
                                  t.removeData(
                                    this.element,
                                    this.constructor.DATA_KEY
                                  ),
                                  t(this.element).off(
                                    this.constructor.EVENT_KEY
                                  ),
                                  this.tip && t(this.tip).remove(),
                                  (this._isEnabled = null),
                                  (this._timeout = null),
                                  (this._hoverState = null),
                                  (this._activeTrigger = null),
                                  (this._tether = null),
                                  (this.element = null),
                                  (this.config = null),
                                  (this.tip = null);
                              },
                            },
                            {
                              key: "show",
                              value: function () {
                                var e = this,
                                  i = t.Event(this.constructor.Event.SHOW);
                                if (this.isWithContent() && this._isEnabled) {
                                  t(this.element).trigger(i);
                                  var n = t.contains(
                                    this.element.ownerDocument.documentElement,
                                    this.element
                                  );
                                  if (i.isDefaultPrevented() || !n) return;
                                  var r = this.getTipElement(),
                                    s = o.getUID(this.constructor.NAME);
                                  r.setAttribute("id", s),
                                    this.element.setAttribute(
                                      "aria-describedby",
                                      s
                                    ),
                                    this.setContent(),
                                    this.config.animation && t(r).addClass(m);
                                  var a =
                                      "function" == typeof this.config.placement
                                        ? this.config.placement.call(
                                            this,
                                            r,
                                            this.element
                                          )
                                        : this.config.placement,
                                    c = this._getAttachment(a);
                                  t(r)
                                    .data(this.constructor.DATA_KEY, this)
                                    .appendTo(document.body),
                                    t(this.element).trigger(
                                      this.constructor.Event.INSERTED
                                    ),
                                    (this._tether = new Tether({
                                      attachment: c,
                                      element: r,
                                      target: this.element,
                                      classes: v,
                                      classPrefix: "bs-tether",
                                      offset: this.config.offset,
                                      constraints: this.config.constraints,
                                      addTargetClasses: !1,
                                    })),
                                    o.reflow(r),
                                    this._tether.position(),
                                    t(r).addClass(g);
                                  var u = function () {
                                    var i = e._hoverState;
                                    (e._hoverState = null),
                                      t(e.element).trigger(
                                        e.constructor.Event.SHOWN
                                      ),
                                      i === p && e._leave(null, e);
                                  };
                                  if (
                                    o.supportsTransitionEnd() &&
                                    t(this.tip).hasClass(m)
                                  )
                                    return void t(this.tip)
                                      .one(o.TRANSITION_END, u)
                                      .emulateTransitionEnd(
                                        l._TRANSITION_DURATION
                                      );
                                  u();
                                }
                              },
                            },
                            {
                              key: "hide",
                              value: function (e) {
                                var i = this,
                                  n = this.getTipElement(),
                                  r = t.Event(this.constructor.Event.HIDE),
                                  s = function () {
                                    i._hoverState !== d &&
                                      n.parentNode &&
                                      n.parentNode.removeChild(n),
                                      i.element.removeAttribute(
                                        "aria-describedby"
                                      ),
                                      t(i.element).trigger(
                                        i.constructor.Event.HIDDEN
                                      ),
                                      i.cleanupTether(),
                                      e && e();
                                  };
                                t(this.element).trigger(r),
                                  r.isDefaultPrevented() ||
                                    (t(n).removeClass(g),
                                    o.supportsTransitionEnd() &&
                                    t(this.tip).hasClass(m)
                                      ? t(n)
                                          .one(o.TRANSITION_END, s)
                                          .emulateTransitionEnd(150)
                                      : s(),
                                    (this._hoverState = ""));
                              },
                            },
                            {
                              key: "isWithContent",
                              value: function () {
                                return Boolean(this.getTitle());
                              },
                            },
                            {
                              key: "getTipElement",
                              value: function () {
                                return (this.tip =
                                  this.tip || t(this.config.template)[0]);
                              },
                            },
                            {
                              key: "setContent",
                              value: function () {
                                var e = t(this.getTipElement());
                                this.setElementContent(
                                  e.find(".tooltip-inner"),
                                  this.getTitle()
                                ),
                                  e.removeClass(m).removeClass(g),
                                  this.cleanupTether();
                              },
                            },
                            {
                              key: "setElementContent",
                              value: function (i, n) {
                                var r = this.config.html;
                                "object" == e(n) && (n.nodeType || n.jquery)
                                  ? r
                                    ? t(n).parent().is(i) || i.empty().append(n)
                                    : i.text(t(n).text())
                                  : i[r ? "html" : "text"](n);
                              },
                            },
                            {
                              key: "getTitle",
                              value: function () {
                                var e = this.element.getAttribute(
                                  "data-original-title"
                                );
                                return (
                                  e ||
                                    (e =
                                      "function" == typeof this.config.title
                                        ? this.config.title.call(this.element)
                                        : this.config.title),
                                  e
                                );
                              },
                            },
                            {
                              key: "cleanupTether",
                              value: function () {
                                this._tether && this._tether.destroy();
                              },
                            },
                            {
                              key: "_getAttachment",
                              value: function (e) {
                                return h[e.toUpperCase()];
                              },
                            },
                            {
                              key: "_setListeners",
                              value: function () {
                                var e = this;
                                this.config.trigger
                                  .split(" ")
                                  .forEach(function (i) {
                                    if ("click" === i)
                                      t(e.element).on(
                                        e.constructor.Event.CLICK,
                                        e.config.selector,
                                        t.proxy(e.toggle, e)
                                      );
                                    else if ("manual" !== i) {
                                      var n =
                                          i === y
                                            ? e.constructor.Event.MOUSEENTER
                                            : e.constructor.Event.FOCUSIN,
                                        r =
                                          i === y
                                            ? e.constructor.Event.MOUSELEAVE
                                            : e.constructor.Event.FOCUSOUT;
                                      t(e.element)
                                        .on(
                                          n,
                                          e.config.selector,
                                          t.proxy(e._enter, e)
                                        )
                                        .on(
                                          r,
                                          e.config.selector,
                                          t.proxy(e._leave, e)
                                        );
                                    }
                                  }),
                                  this.config.selector
                                    ? (this.config = t.extend({}, this.config, {
                                        trigger: "manual",
                                        selector: "",
                                      }))
                                    : this._fixTitle();
                              },
                            },
                            {
                              key: "_fixTitle",
                              value: function () {
                                var t = e(
                                  this.element.getAttribute(
                                    "data-original-title"
                                  )
                                );
                                (this.element.getAttribute("title") ||
                                  "string" !== t) &&
                                  (this.element.setAttribute(
                                    "data-original-title",
                                    this.element.getAttribute("title") || ""
                                  ),
                                  this.element.setAttribute("title", ""));
                              },
                            },
                            {
                              key: "_enter",
                              value: function (e, i) {
                                var n = this.constructor.DATA_KEY;
                                return (
                                  (i = i || t(e.currentTarget).data(n)) ||
                                    ((i = new this.constructor(
                                      e.currentTarget,
                                      this._getDelegateConfig()
                                    )),
                                    t(e.currentTarget).data(n, i)),
                                  e &&
                                    (i._activeTrigger[
                                      "focusin" === e.type ? _ : y
                                    ] = !0),
                                  t(i.getTipElement()).hasClass(g) ||
                                  i._hoverState === d
                                    ? void (i._hoverState = d)
                                    : (clearTimeout(i._timeout),
                                      (i._hoverState = d),
                                      i.config.delay && i.config.delay.show
                                        ? void (i._timeout = setTimeout(
                                            function () {
                                              i._hoverState === d && i.show();
                                            },
                                            i.config.delay.show
                                          ))
                                        : void i.show())
                                );
                              },
                            },
                            {
                              key: "_leave",
                              value: function (e, i) {
                                var n = this.constructor.DATA_KEY;
                                if (
                                  ((i = i || t(e.currentTarget).data(n)) ||
                                    ((i = new this.constructor(
                                      e.currentTarget,
                                      this._getDelegateConfig()
                                    )),
                                    t(e.currentTarget).data(n, i)),
                                  e &&
                                    (i._activeTrigger[
                                      "focusout" === e.type ? _ : y
                                    ] = !1),
                                  !i._isWithActiveTrigger())
                                )
                                  return (
                                    clearTimeout(i._timeout),
                                    (i._hoverState = p),
                                    i.config.delay && i.config.delay.hide
                                      ? void (i._timeout = setTimeout(
                                          function () {
                                            i._hoverState === p && i.hide();
                                          },
                                          i.config.delay.hide
                                        ))
                                      : void i.hide()
                                  );
                              },
                            },
                            {
                              key: "_isWithActiveTrigger",
                              value: function () {
                                for (var e in this._activeTrigger)
                                  if (this._activeTrigger[e]) return !0;
                                return !1;
                              },
                            },
                            {
                              key: "_getConfig",
                              value: function (e) {
                                return (
                                  (e = t.extend(
                                    {},
                                    this.constructor.Default,
                                    t(this.element).data(),
                                    e
                                  )).delay &&
                                    "number" == typeof e.delay &&
                                    (e.delay = {
                                      show: e.delay,
                                      hide: e.delay,
                                    }),
                                  o.typeCheckConfig(
                                    n,
                                    e,
                                    this.constructor.DefaultType
                                  ),
                                  e
                                );
                              },
                            },
                            {
                              key: "_getDelegateConfig",
                              value: function () {
                                var e = {};
                                if (this.config)
                                  for (var t in this.config)
                                    this.constructor.Default[t] !==
                                      this.config[t] && (e[t] = this.config[t]);
                                return e;
                              },
                            },
                          ],
                          [
                            {
                              key: "_jQueryInterface",
                              value: function (i) {
                                return this.each(function () {
                                  var n = t(this).data(s),
                                    r = "object" == e(i) ? i : null;
                                  if (
                                    (n || !/destroy|hide/.test(i)) &&
                                    (n ||
                                      ((n = new l(this, r)),
                                      t(this).data(s, n)),
                                    "string" == typeof i)
                                  ) {
                                    if (void 0 === n[i])
                                      throw new Error(
                                        'No method named "' + i + '"'
                                      );
                                    n[i]();
                                  }
                                });
                              },
                            },
                            {
                              key: "VERSION",
                              get: function () {
                                return "4.0.0-alpha.4";
                              },
                            },
                            {
                              key: "Default",
                              get: function () {
                                return c;
                              },
                            },
                            {
                              key: "NAME",
                              get: function () {
                                return n;
                              },
                            },
                            {
                              key: "DATA_KEY",
                              get: function () {
                                return s;
                              },
                            },
                            {
                              key: "Event",
                              get: function () {
                                return f;
                              },
                            },
                            {
                              key: "EVENT_KEY",
                              get: function () {
                                return a;
                              },
                            },
                            {
                              key: "DefaultType",
                              get: function () {
                                return u;
                              },
                            },
                          ]
                        ),
                        l
                      );
                    })();
                  return (
                    (t.fn[n] = b._jQueryInterface),
                    (t.fn[n].Constructor = b),
                    (t.fn[n].noConflict = function () {
                      return (t.fn[n] = l), b._jQueryInterface;
                    }),
                    b
                  );
                })(jQuery));
            !(function (t) {
              var o = "popover",
                a = "bs.popover",
                l = "." + a,
                c = t.fn[o],
                u = t.extend({}, s.Default, {
                  placement: "right",
                  trigger: "click",
                  content: "",
                  template:
                    '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
                }),
                h = t.extend({}, s.DefaultType, {
                  content: "(string|element|function)",
                }),
                d = {
                  HIDE: "hide" + l,
                  HIDDEN: "hidden" + l,
                  SHOW: "show" + l,
                  SHOWN: "shown" + l,
                  INSERTED: "inserted" + l,
                  CLICK: "click" + l,
                  FOCUSIN: "focusin" + l,
                  FOCUSOUT: "focusout" + l,
                  MOUSEENTER: "mouseenter" + l,
                  MOUSELEAVE: "mouseleave" + l,
                },
                p = (function (s) {
                  function c() {
                    i(this, c),
                      n(
                        Object.getPrototypeOf(c.prototype),
                        "constructor",
                        this
                      ).apply(this, arguments);
                  }
                  return (
                    (function (t, i) {
                      if ("function" != typeof i && null !== i)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            e(i)
                        );
                      (t.prototype = Object.create(i && i.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        i &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, i)
                            : (t.__proto__ = i));
                    })(c, s),
                    r(
                      c,
                      [
                        {
                          key: "isWithContent",
                          value: function () {
                            return this.getTitle() || this._getContent();
                          },
                        },
                        {
                          key: "getTipElement",
                          value: function () {
                            return (this.tip =
                              this.tip || t(this.config.template)[0]);
                          },
                        },
                        {
                          key: "setContent",
                          value: function () {
                            var e = t(this.getTipElement());
                            this.setElementContent(
                              e.find(".popover-title"),
                              this.getTitle()
                            ),
                              this.setElementContent(
                                e.find(".popover-content"),
                                this._getContent()
                              ),
                              e.removeClass("fade").removeClass("in"),
                              this.cleanupTether();
                          },
                        },
                        {
                          key: "_getContent",
                          value: function () {
                            return (
                              this.element.getAttribute("data-content") ||
                              ("function" == typeof this.config.content
                                ? this.config.content.call(this.element)
                                : this.config.content)
                            );
                          },
                        },
                      ],
                      [
                        {
                          key: "_jQueryInterface",
                          value: function (i) {
                            return this.each(function () {
                              var n = t(this).data(a),
                                r = "object" == e(i) ? i : null;
                              if (
                                (n || !/destroy|hide/.test(i)) &&
                                (n ||
                                  ((n = new c(this, r)), t(this).data(a, n)),
                                "string" == typeof i)
                              ) {
                                if (void 0 === n[i])
                                  throw new Error(
                                    'No method named "' + i + '"'
                                  );
                                n[i]();
                              }
                            });
                          },
                        },
                        {
                          key: "VERSION",
                          get: function () {
                            return "4.0.0-alpha.4";
                          },
                        },
                        {
                          key: "Default",
                          get: function () {
                            return u;
                          },
                        },
                        {
                          key: "NAME",
                          get: function () {
                            return o;
                          },
                        },
                        {
                          key: "DATA_KEY",
                          get: function () {
                            return a;
                          },
                        },
                        {
                          key: "Event",
                          get: function () {
                            return d;
                          },
                        },
                        {
                          key: "EVENT_KEY",
                          get: function () {
                            return l;
                          },
                        },
                        {
                          key: "DefaultType",
                          get: function () {
                            return h;
                          },
                        },
                      ]
                    ),
                    c
                  );
                })(s);
              (t.fn[o] = p._jQueryInterface),
                (t.fn[o].Constructor = p),
                (t.fn[o].noConflict = function () {
                  return (t.fn[o] = c), p._jQueryInterface;
                });
            })(jQuery);
          })(jQuery);
      },
      291: (e) => {
        function t(e) {
          return (t =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function i() {
          (this._events = this._events || {}),
            (this._maxListeners = this._maxListeners || void 0);
        }
        function n(e) {
          return "function" == typeof e;
        }
        function r(e) {
          return "object" === t(e) && null !== e;
        }
        function o(e) {
          return void 0 === e;
        }
        (e.exports = i),
          (i.EventEmitter = i),
          (i.prototype._events = void 0),
          (i.prototype._maxListeners = void 0),
          (i.defaultMaxListeners = 10),
          (i.prototype.setMaxListeners = function (e) {
            if ("number" != typeof e || e < 0 || isNaN(e))
              throw TypeError("n must be a positive number");
            return (this._maxListeners = e), this;
          }),
          (i.prototype.emit = function (e) {
            var t, i, s, a, l, c;
            if (
              (this._events || (this._events = {}),
              "error" === e &&
                (!this._events.error ||
                  (r(this._events.error) && !this._events.error.length)))
            ) {
              if ((t = arguments[1]) instanceof Error) throw t;
              var u = new Error(
                'Uncaught, unspecified "error" event. (' + t + ")"
              );
              throw ((u.context = t), u);
            }
            if (o((i = this._events[e]))) return !1;
            if (n(i))
              switch (arguments.length) {
                case 1:
                  i.call(this);
                  break;
                case 2:
                  i.call(this, arguments[1]);
                  break;
                case 3:
                  i.call(this, arguments[1], arguments[2]);
                  break;
                default:
                  (a = Array.prototype.slice.call(arguments, 1)),
                    i.apply(this, a);
              }
            else if (r(i))
              for (
                a = Array.prototype.slice.call(arguments, 1),
                  s = (c = i.slice()).length,
                  l = 0;
                l < s;
                l++
              )
                c[l].apply(this, a);
            return !0;
          }),
          (i.prototype.addListener = function (e, t) {
            var s;
            if (!n(t)) throw TypeError("listener must be a function");
            return (
              this._events || (this._events = {}),
              this._events.newListener &&
                this.emit("newListener", e, n(t.listener) ? t.listener : t),
              this._events[e]
                ? r(this._events[e])
                  ? this._events[e].push(t)
                  : (this._events[e] = [this._events[e], t])
                : (this._events[e] = t),
              r(this._events[e]) &&
                !this._events[e].warned &&
                (s = o(this._maxListeners)
                  ? i.defaultMaxListeners
                  : this._maxListeners) &&
                s > 0 &&
                this._events[e].length > s &&
                ((this._events[e].warned = !0),
                console.error(
                  "(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",
                  this._events[e].length
                ),
                "function" == typeof console.trace && console.trace()),
              this
            );
          }),
          (i.prototype.on = i.prototype.addListener),
          (i.prototype.once = function (e, t) {
            if (!n(t)) throw TypeError("listener must be a function");
            var i = !1;
            function r() {
              this.removeListener(e, r),
                i || ((i = !0), t.apply(this, arguments));
            }
            return (r.listener = t), this.on(e, r), this;
          }),
          (i.prototype.removeListener = function (e, t) {
            var i, o, s, a;
            if (!n(t)) throw TypeError("listener must be a function");
            if (!this._events || !this._events[e]) return this;
            if (
              ((s = (i = this._events[e]).length),
              (o = -1),
              i === t || (n(i.listener) && i.listener === t))
            )
              delete this._events[e],
                this._events.removeListener &&
                  this.emit("removeListener", e, t);
            else if (r(i)) {
              for (a = s; a-- > 0; )
                if (i[a] === t || (i[a].listener && i[a].listener === t)) {
                  o = a;
                  break;
                }
              if (o < 0) return this;
              1 === i.length
                ? ((i.length = 0), delete this._events[e])
                : i.splice(o, 1),
                this._events.removeListener &&
                  this.emit("removeListener", e, t);
            }
            return this;
          }),
          (i.prototype.removeAllListeners = function (e) {
            var t, i;
            if (!this._events) return this;
            if (!this._events.removeListener)
              return (
                0 === arguments.length
                  ? (this._events = {})
                  : this._events[e] && delete this._events[e],
                this
              );
            if (0 === arguments.length) {
              for (t in this._events)
                "removeListener" !== t && this.removeAllListeners(t);
              return (
                this.removeAllListeners("removeListener"),
                (this._events = {}),
                this
              );
            }
            if (n((i = this._events[e]))) this.removeListener(e, i);
            else if (i)
              for (; i.length; ) this.removeListener(e, i[i.length - 1]);
            return delete this._events[e], this;
          }),
          (i.prototype.listeners = function (e) {
            return this._events && this._events[e]
              ? n(this._events[e])
                ? [this._events[e]]
                : this._events[e].slice()
              : [];
          }),
          (i.prototype.listenerCount = function (e) {
            if (this._events) {
              var t = this._events[e];
              if (n(t)) return 1;
              if (t) return t.length;
            }
            return 0;
          }),
          (i.listenerCount = function (e, t) {
            return e.listenerCount(t);
          });
      },
      144: (e, t) => {
        var i, n, r, o;
        function s(e) {
          return (s =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        (o = function () {
          return (function e(t, i, n) {
            function r(s, a) {
              if (!i[s]) {
                if (!t[s]) {
                  if (o) return o(s, !0);
                  var l = new Error("Cannot find module '" + s + "'");
                  throw ((l.code = "MODULE_NOT_FOUND"), l);
                }
                var c = (i[s] = { exports: {} });
                t[s][0].call(
                  c.exports,
                  function (e) {
                    return r(t[s][1][e] || e);
                  },
                  c,
                  c.exports,
                  e,
                  t,
                  i,
                  n
                );
              }
              return i[s].exports;
            }
            for (var o = void 0, s = 0; s < n.length; s++) r(n[s]);
            return r;
          })(
            {
              1: [
                function (e, t, i) {
                  t.exports = function (e) {
                    var t,
                      i,
                      n,
                      r = -1;
                    if (
                      e.lines.length > 1 &&
                      "flex-start" === e.style.alignContent
                    )
                      for (t = 0; (n = e.lines[++r]); )
                        (n.crossStart = t), (t += n.cross);
                    else if (
                      e.lines.length > 1 &&
                      "flex-end" === e.style.alignContent
                    )
                      for (t = e.flexStyle.crossSpace; (n = e.lines[++r]); )
                        (n.crossStart = t), (t += n.cross);
                    else if (
                      e.lines.length > 1 &&
                      "center" === e.style.alignContent
                    )
                      for (t = e.flexStyle.crossSpace / 2; (n = e.lines[++r]); )
                        (n.crossStart = t), (t += n.cross);
                    else if (
                      e.lines.length > 1 &&
                      "space-between" === e.style.alignContent
                    )
                      for (
                        i = e.flexStyle.crossSpace / (e.lines.length - 1),
                          t = 0;
                        (n = e.lines[++r]);

                      )
                        (n.crossStart = t), (t += n.cross + i);
                    else if (
                      e.lines.length > 1 &&
                      "space-around" === e.style.alignContent
                    )
                      for (
                        t =
                          (i =
                            (2 * e.flexStyle.crossSpace) /
                            (2 * e.lines.length)) / 2;
                        (n = e.lines[++r]);

                      )
                        (n.crossStart = t), (t += n.cross + i);
                    else
                      for (
                        i = e.flexStyle.crossSpace / e.lines.length,
                          t = e.flexStyle.crossInnerBefore;
                        (n = e.lines[++r]);

                      )
                        (n.crossStart = t), (n.cross += i), (t += n.cross);
                  };
                },
                {},
              ],
              2: [
                function (e, t, i) {
                  t.exports = function (e) {
                    for (var t, i = -1; (line = e.lines[++i]); )
                      for (t = -1; (child = line.children[++t]); ) {
                        var n = child.style.alignSelf;
                        "auto" === n && (n = e.style.alignItems),
                          "flex-start" === n
                            ? (child.flexStyle.crossStart = line.crossStart)
                            : "flex-end" === n
                            ? (child.flexStyle.crossStart =
                                line.crossStart +
                                line.cross -
                                child.flexStyle.crossOuter)
                            : "center" === n
                            ? (child.flexStyle.crossStart =
                                line.crossStart +
                                (line.cross - child.flexStyle.crossOuter) / 2)
                            : ((child.flexStyle.crossStart = line.crossStart),
                              (child.flexStyle.crossOuter = line.cross),
                              (child.flexStyle.cross =
                                child.flexStyle.crossOuter -
                                child.flexStyle.crossBefore -
                                child.flexStyle.crossAfter));
                      }
                  };
                },
                {},
              ],
              3: [
                function (e, t, i) {
                  t.exports = function (e, t) {
                    var i = "row" === t || "row-reverse" === t,
                      n = e.mainAxis;
                    n
                      ? (i && "inline" === n) ||
                        (!i && "block" === n) ||
                        (e.flexStyle = {
                          main: e.flexStyle.cross,
                          cross: e.flexStyle.main,
                          mainOffset: e.flexStyle.crossOffset,
                          crossOffset: e.flexStyle.mainOffset,
                          mainBefore: e.flexStyle.crossBefore,
                          mainAfter: e.flexStyle.crossAfter,
                          crossBefore: e.flexStyle.mainBefore,
                          crossAfter: e.flexStyle.mainAfter,
                          mainInnerBefore: e.flexStyle.crossInnerBefore,
                          mainInnerAfter: e.flexStyle.crossInnerAfter,
                          crossInnerBefore: e.flexStyle.mainInnerBefore,
                          crossInnerAfter: e.flexStyle.mainInnerAfter,
                          mainBorderBefore: e.flexStyle.crossBorderBefore,
                          mainBorderAfter: e.flexStyle.crossBorderAfter,
                          crossBorderBefore: e.flexStyle.mainBorderBefore,
                          crossBorderAfter: e.flexStyle.mainBorderAfter,
                        })
                      : ((e.flexStyle = i
                          ? {
                              main: e.style.width,
                              cross: e.style.height,
                              mainOffset: e.style.offsetWidth,
                              crossOffset: e.style.offsetHeight,
                              mainBefore: e.style.marginLeft,
                              mainAfter: e.style.marginRight,
                              crossBefore: e.style.marginTop,
                              crossAfter: e.style.marginBottom,
                              mainInnerBefore: e.style.paddingLeft,
                              mainInnerAfter: e.style.paddingRight,
                              crossInnerBefore: e.style.paddingTop,
                              crossInnerAfter: e.style.paddingBottom,
                              mainBorderBefore: e.style.borderLeftWidth,
                              mainBorderAfter: e.style.borderRightWidth,
                              crossBorderBefore: e.style.borderTopWidth,
                              crossBorderAfter: e.style.borderBottomWidth,
                            }
                          : {
                              main: e.style.height,
                              cross: e.style.width,
                              mainOffset: e.style.offsetHeight,
                              crossOffset: e.style.offsetWidth,
                              mainBefore: e.style.marginTop,
                              mainAfter: e.style.marginBottom,
                              crossBefore: e.style.marginLeft,
                              crossAfter: e.style.marginRight,
                              mainInnerBefore: e.style.paddingTop,
                              mainInnerAfter: e.style.paddingBottom,
                              crossInnerBefore: e.style.paddingLeft,
                              crossInnerAfter: e.style.paddingRight,
                              mainBorderBefore: e.style.borderTopWidth,
                              mainBorderAfter: e.style.borderBottomWidth,
                              crossBorderBefore: e.style.borderLeftWidth,
                              crossBorderAfter: e.style.borderRightWidth,
                            }),
                        "content-box" === e.style.boxSizing &&
                          ("number" == typeof e.flexStyle.main &&
                            (e.flexStyle.main +=
                              e.flexStyle.mainInnerBefore +
                              e.flexStyle.mainInnerAfter +
                              e.flexStyle.mainBorderBefore +
                              e.flexStyle.mainBorderAfter),
                          "number" == typeof e.flexStyle.cross &&
                            (e.flexStyle.cross +=
                              e.flexStyle.crossInnerBefore +
                              e.flexStyle.crossInnerAfter +
                              e.flexStyle.crossBorderBefore +
                              e.flexStyle.crossBorderAfter))),
                      (e.mainAxis = i ? "inline" : "block"),
                      (e.crossAxis = i ? "block" : "inline"),
                      "number" == typeof e.style.flexBasis &&
                        (e.flexStyle.main =
                          e.style.flexBasis +
                          e.flexStyle.mainInnerBefore +
                          e.flexStyle.mainInnerAfter +
                          e.flexStyle.mainBorderBefore +
                          e.flexStyle.mainBorderAfter),
                      (e.flexStyle.mainOuter = e.flexStyle.main),
                      (e.flexStyle.crossOuter = e.flexStyle.cross),
                      "auto" === e.flexStyle.mainOuter &&
                        (e.flexStyle.mainOuter = e.flexStyle.mainOffset),
                      "auto" === e.flexStyle.crossOuter &&
                        (e.flexStyle.crossOuter = e.flexStyle.crossOffset),
                      "number" == typeof e.flexStyle.mainBefore &&
                        (e.flexStyle.mainOuter += e.flexStyle.mainBefore),
                      "number" == typeof e.flexStyle.mainAfter &&
                        (e.flexStyle.mainOuter += e.flexStyle.mainAfter),
                      "number" == typeof e.flexStyle.crossBefore &&
                        (e.flexStyle.crossOuter += e.flexStyle.crossBefore),
                      "number" == typeof e.flexStyle.crossAfter &&
                        (e.flexStyle.crossOuter += e.flexStyle.crossAfter);
                  };
                },
                {},
              ],
              4: [
                function (e, t, i) {
                  var n = e("../reduce");
                  t.exports = function (e) {
                    if (e.mainSpace > 0) {
                      var t = n(
                        e.children,
                        function (e, t) {
                          return e + parseFloat(t.style.flexGrow);
                        },
                        0
                      );
                      t > 0 &&
                        ((e.main = n(
                          e.children,
                          function (i, n) {
                            return (
                              "auto" === n.flexStyle.main
                                ? (n.flexStyle.main =
                                    n.flexStyle.mainOffset +
                                    (parseFloat(n.style.flexGrow) / t) *
                                      e.mainSpace)
                                : (n.flexStyle.main +=
                                    (parseFloat(n.style.flexGrow) / t) *
                                    e.mainSpace),
                              (n.flexStyle.mainOuter =
                                n.flexStyle.main +
                                n.flexStyle.mainBefore +
                                n.flexStyle.mainAfter),
                              i + n.flexStyle.mainOuter
                            );
                          },
                          0
                        )),
                        (e.mainSpace = 0));
                    }
                  };
                },
                { "../reduce": 12 },
              ],
              5: [
                function (e, t, i) {
                  var n = e("../reduce");
                  t.exports = function (e) {
                    if (e.mainSpace < 0) {
                      var t = n(
                        e.children,
                        function (e, t) {
                          return e + parseFloat(t.style.flexShrink);
                        },
                        0
                      );
                      t > 0 &&
                        ((e.main = n(
                          e.children,
                          function (i, n) {
                            return (
                              (n.flexStyle.main +=
                                (parseFloat(n.style.flexShrink) / t) *
                                e.mainSpace),
                              (n.flexStyle.mainOuter =
                                n.flexStyle.main +
                                n.flexStyle.mainBefore +
                                n.flexStyle.mainAfter),
                              i + n.flexStyle.mainOuter
                            );
                          },
                          0
                        )),
                        (e.mainSpace = 0));
                    }
                  };
                },
                { "../reduce": 12 },
              ],
              6: [
                function (e, t, i) {
                  var n = e("../reduce");
                  t.exports = function (e) {
                    var t;
                    e.lines = [(t = { main: 0, cross: 0, children: [] })];
                    for (var i, r = -1; (i = e.children[++r]); )
                      "nowrap" === e.style.flexWrap ||
                      0 === t.children.length ||
                      "auto" === e.flexStyle.main ||
                      e.flexStyle.main -
                        e.flexStyle.mainInnerBefore -
                        e.flexStyle.mainInnerAfter -
                        e.flexStyle.mainBorderBefore -
                        e.flexStyle.mainBorderAfter >=
                        t.main + i.flexStyle.mainOuter
                        ? ((t.main += i.flexStyle.mainOuter),
                          (t.cross = Math.max(t.cross, i.flexStyle.crossOuter)))
                        : e.lines.push(
                            (t = {
                              main: i.flexStyle.mainOuter,
                              cross: i.flexStyle.crossOuter,
                              children: [],
                            })
                          ),
                        t.children.push(i);
                    (e.flexStyle.mainLines = n(
                      e.lines,
                      function (e, t) {
                        return Math.max(e, t.main);
                      },
                      0
                    )),
                      (e.flexStyle.crossLines = n(
                        e.lines,
                        function (e, t) {
                          return e + t.cross;
                        },
                        0
                      )),
                      "auto" === e.flexStyle.main &&
                        (e.flexStyle.main = Math.max(
                          e.flexStyle.mainOffset,
                          e.flexStyle.mainLines +
                            e.flexStyle.mainInnerBefore +
                            e.flexStyle.mainInnerAfter +
                            e.flexStyle.mainBorderBefore +
                            e.flexStyle.mainBorderAfter
                        )),
                      "auto" === e.flexStyle.cross &&
                        (e.flexStyle.cross = Math.max(
                          e.flexStyle.crossOffset,
                          e.flexStyle.crossLines +
                            e.flexStyle.crossInnerBefore +
                            e.flexStyle.crossInnerAfter +
                            e.flexStyle.crossBorderBefore +
                            e.flexStyle.crossBorderAfter
                        )),
                      (e.flexStyle.crossSpace =
                        e.flexStyle.cross -
                        e.flexStyle.crossInnerBefore -
                        e.flexStyle.crossInnerAfter -
                        e.flexStyle.crossBorderBefore -
                        e.flexStyle.crossBorderAfter -
                        e.flexStyle.crossLines),
                      (e.flexStyle.mainOuter =
                        e.flexStyle.main +
                        e.flexStyle.mainBefore +
                        e.flexStyle.mainAfter),
                      (e.flexStyle.crossOuter =
                        e.flexStyle.cross +
                        e.flexStyle.crossBefore +
                        e.flexStyle.crossAfter);
                  };
                },
                { "../reduce": 12 },
              ],
              7: [
                function (e, t, i) {
                  t.exports = function (t) {
                    for (var i, n = -1; (i = t.children[++n]); )
                      e("./flex-direction")(i, t.style.flexDirection);
                    e("./flex-direction")(t, t.style.flexDirection),
                      e("./order")(t),
                      e("./flexbox-lines")(t),
                      e("./align-content")(t),
                      (n = -1);
                    for (var r; (r = t.lines[++n]); )
                      (r.mainSpace =
                        t.flexStyle.main -
                        t.flexStyle.mainInnerBefore -
                        t.flexStyle.mainInnerAfter -
                        t.flexStyle.mainBorderBefore -
                        t.flexStyle.mainBorderAfter -
                        r.main),
                        e("./flex-grow")(r),
                        e("./flex-shrink")(r),
                        e("./margin-main")(r),
                        e("./margin-cross")(r),
                        e("./justify-content")(r, t.style.justifyContent, t);
                    e("./align-items")(t);
                  };
                },
                {
                  "./align-content": 1,
                  "./align-items": 2,
                  "./flex-direction": 3,
                  "./flex-grow": 4,
                  "./flex-shrink": 5,
                  "./flexbox-lines": 6,
                  "./justify-content": 8,
                  "./margin-cross": 9,
                  "./margin-main": 10,
                  "./order": 11,
                },
              ],
              8: [
                function (e, t, i) {
                  t.exports = function (e, t, i) {
                    var n,
                      r,
                      o,
                      s = i.flexStyle.mainInnerBefore,
                      a = -1;
                    if ("flex-end" === t)
                      for (n = e.mainSpace, n += s; (o = e.children[++a]); )
                        (o.flexStyle.mainStart = n),
                          (n += o.flexStyle.mainOuter);
                    else if ("center" === t)
                      for (n = e.mainSpace / 2, n += s; (o = e.children[++a]); )
                        (o.flexStyle.mainStart = n),
                          (n += o.flexStyle.mainOuter);
                    else if ("space-between" === t)
                      for (
                        r = e.mainSpace / (e.children.length - 1),
                          n = 0,
                          n += s;
                        (o = e.children[++a]);

                      )
                        (o.flexStyle.mainStart = n),
                          (n += o.flexStyle.mainOuter + r);
                    else if ("space-around" === t)
                      for (
                        n =
                          (r = (2 * e.mainSpace) / (2 * e.children.length)) / 2,
                          n += s;
                        (o = e.children[++a]);

                      )
                        (o.flexStyle.mainStart = n),
                          (n += o.flexStyle.mainOuter + r);
                    else
                      for (n = 0, n += s; (o = e.children[++a]); )
                        (o.flexStyle.mainStart = n),
                          (n += o.flexStyle.mainOuter);
                  };
                },
                {},
              ],
              9: [
                function (e, t, i) {
                  t.exports = function (e) {
                    for (var t, i = -1; (t = e.children[++i]); ) {
                      var n = 0;
                      "auto" === t.flexStyle.crossBefore && ++n,
                        "auto" === t.flexStyle.crossAfter && ++n;
                      var r = e.cross - t.flexStyle.crossOuter;
                      "auto" === t.flexStyle.crossBefore &&
                        (t.flexStyle.crossBefore = r / n),
                        "auto" === t.flexStyle.crossAfter &&
                          (t.flexStyle.crossAfter = r / n),
                        "auto" === t.flexStyle.cross
                          ? (t.flexStyle.crossOuter =
                              t.flexStyle.crossOffset +
                              t.flexStyle.crossBefore +
                              t.flexStyle.crossAfter)
                          : (t.flexStyle.crossOuter =
                              t.flexStyle.cross +
                              t.flexStyle.crossBefore +
                              t.flexStyle.crossAfter);
                    }
                  };
                },
                {},
              ],
              10: [
                function (e, t, i) {
                  t.exports = function (e) {
                    for (var t, i = 0, n = -1; (t = e.children[++n]); )
                      "auto" === t.flexStyle.mainBefore && ++i,
                        "auto" === t.flexStyle.mainAfter && ++i;
                    if (i > 0) {
                      for (n = -1; (t = e.children[++n]); )
                        "auto" === t.flexStyle.mainBefore &&
                          (t.flexStyle.mainBefore = e.mainSpace / i),
                          "auto" === t.flexStyle.mainAfter &&
                            (t.flexStyle.mainAfter = e.mainSpace / i),
                          "auto" === t.flexStyle.main
                            ? (t.flexStyle.mainOuter =
                                t.flexStyle.mainOffset +
                                t.flexStyle.mainBefore +
                                t.flexStyle.mainAfter)
                            : (t.flexStyle.mainOuter =
                                t.flexStyle.main +
                                t.flexStyle.mainBefore +
                                t.flexStyle.mainAfter);
                      e.mainSpace = 0;
                    }
                  };
                },
                {},
              ],
              11: [
                function (e, t, i) {
                  var n = /^(column|row)-reverse$/;
                  t.exports = function (e) {
                    e.children.sort(function (e, t) {
                      return e.style.order - t.style.order || e.index - t.index;
                    }),
                      n.test(e.style.flexDirection) && e.children.reverse();
                  };
                },
                {},
              ],
              12: [
                function (e, t, i) {
                  t.exports = function (e, t, i) {
                    for (var n = e.length, r = -1; ++r < n; )
                      r in e && (i = t(i, e[r], r));
                    return i;
                  };
                },
                {},
              ],
              13: [
                function (e, t, i) {
                  var n = e("./read"),
                    r = e("./write"),
                    o = e("./readAll"),
                    s = e("./writeAll");
                  (t.exports = function (e) {
                    s(o(e));
                  }),
                    (t.exports.read = n),
                    (t.exports.write = r),
                    (t.exports.readAll = o),
                    (t.exports.writeAll = s);
                },
                {
                  "./read": 15,
                  "./readAll": 16,
                  "./write": 17,
                  "./writeAll": 18,
                },
              ],
              14: [
                function (e, t, i) {
                  function n(e, t) {
                    (o.style.cssText =
                      "border:none!important;clip:rect(0 0 0 0)!important;display:block!important;font-size:1em!important;height:0!important;margin:0!important;padding:0!important;position:relative!important;width:" +
                      e +
                      "!important"),
                      t.parentNode.insertBefore(o, t.nextSibling);
                    var i = o.offsetWidth;
                    return t.parentNode.removeChild(o), i;
                  }
                  t.exports = function (e, t) {
                    var i = String(e).match(r);
                    if (!i) return e;
                    var o = i[1],
                      s = i[2];
                    return "px" === s
                      ? 1 * o
                      : "cm" === s
                      ? 0.3937 * o * 96
                      : "in" === s
                      ? 96 * o
                      : "mm" === s
                      ? (0.3937 * o * 96) / 10
                      : "pc" === s
                      ? (12 * o * 96) / 72
                      : "pt" === s
                      ? (96 * o) / 72
                      : "rem" === s
                      ? 16 * o
                      : n(e, t);
                  };
                  var r = /^([-+]?\d*\.?\d+)(%|[a-z]+)$/,
                    o = document.createElement("div");
                },
                {},
              ],
              15: [
                function (e, t, i) {
                  function n(e, t) {
                    for (var i; (i = r.exec(t)); ) {
                      var n = i[1]
                        .toLowerCase()
                        .replace(/-[a-z]/g, function (e) {
                          return e.slice(1).toUpperCase();
                        });
                      e[n] = i[2];
                    }
                  }
                  t.exports = function (e) {
                    var t = {
                      alignContent: "stretch",
                      alignItems: "stretch",
                      alignSelf: "auto",
                      borderBottomWidth: 0,
                      borderLeftWidth: 0,
                      borderRightWidth: 0,
                      borderTopWidth: 0,
                      boxSizing: "content-box",
                      display: "inline",
                      flexBasis: "auto",
                      flexDirection: "row",
                      flexGrow: 0,
                      flexShrink: 1,
                      flexWrap: "nowrap",
                      justifyContent: "flex-start",
                      height: "auto",
                      marginTop: 0,
                      marginRight: 0,
                      marginLeft: 0,
                      marginBottom: 0,
                      paddingTop: 0,
                      paddingRight: 0,
                      paddingLeft: 0,
                      paddingBottom: 0,
                      maxHeight: "none",
                      maxWidth: "none",
                      minHeight: 0,
                      minWidth: 0,
                      order: 0,
                      position: "static",
                      width: "auto",
                    };
                    if (e instanceof Element) {
                      var i = e.hasAttribute("data-style"),
                        r = i
                          ? e.getAttribute("data-style")
                          : e.getAttribute("style") || "";
                      i || e.setAttribute("data-style", r),
                        (function (e, t) {
                          for (var i in e)
                            i in t &&
                              !/^(alignSelf|height|width)$/.test(i) &&
                              (e[i] = t[i]);
                        })(
                          t,
                          (window.getComputedStyle && getComputedStyle(e)) || {}
                        );
                      var s = e.currentStyle || {};
                      for (var a in ((function (e, t) {
                        for (var i in e)
                          if (i in t) e[i] = t[i];
                          else {
                            var n = i.replace(/[A-Z]/g, "-$&").toLowerCase();
                            n in t && (e[i] = t[n]);
                          }
                        "-js-display" in t && (e.display = t["-js-display"]);
                      })(t, s),
                      n(t, r),
                      t))
                        t[a] = o(t[a], e);
                      var l = e.getBoundingClientRect();
                      (t.offsetHeight = l.height || e.offsetHeight),
                        (t.offsetWidth = l.width || e.offsetWidth);
                    }
                    return { element: e, style: t };
                  };
                  var r = /([^\s:;]+)\s*:\s*([^;]+?)\s*(;|$)/g,
                    o = e("./getComputedLength");
                },
                { "./getComputedLength": 14 },
              ],
              16: [
                function (e, t, i) {
                  function n(e, t) {
                    for (
                      var i, s = r(e), a = [], l = -1;
                      (i = e.childNodes[++l]);

                    ) {
                      var c = 3 === i.nodeType && !/^\s*$/.test(i.nodeValue);
                      if (s && c) {
                        var u = i;
                        (i = e.insertBefore(
                          document.createElement("flex-item"),
                          u
                        )).appendChild(u);
                      }
                      if (i instanceof Element) {
                        var h = n(i, t);
                        if (s) {
                          var d = i.style;
                          (d.display = "inline-block"),
                            (d.position = "absolute"),
                            (h.style = o(i).style),
                            a.push(h);
                        }
                      }
                    }
                    var p = { element: e, children: a };
                    return s && ((p.style = o(e).style), t.push(p)), p;
                  }
                  function r(e) {
                    var t = e instanceof Element,
                      i = t && e.getAttribute("data-style"),
                      n = t && e.currentStyle && e.currentStyle["-js-display"];
                    return s.test(i) || a.test(n);
                  }
                  t.exports = function (e) {
                    var t = [];
                    return n(e, t), t;
                  };
                  var o = e("../read"),
                    s = /(^|;)\s*display\s*:\s*(inline-)?flex\s*(;|$)/i,
                    a = /^(inline-)?flex$/i;
                },
                { "../read": 15 },
              ],
              17: [
                function (e, t, i) {
                  function n(e) {
                    return "string" == typeof e ? e : Math.max(e, 0) + "px";
                  }
                  t.exports = function (e) {
                    r(e);
                    var t = e.element.style,
                      i =
                        "inline" === e.mainAxis
                          ? ["main", "cross"]
                          : ["cross", "main"];
                    (t.boxSizing = "content-box"),
                      (t.display = "block"),
                      (t.position = "relative"),
                      (t.width = n(
                        e.flexStyle[i[0]] -
                          e.flexStyle[i[0] + "InnerBefore"] -
                          e.flexStyle[i[0] + "InnerAfter"] -
                          e.flexStyle[i[0] + "BorderBefore"] -
                          e.flexStyle[i[0] + "BorderAfter"]
                      )),
                      (t.height = n(
                        e.flexStyle[i[1]] -
                          e.flexStyle[i[1] + "InnerBefore"] -
                          e.flexStyle[i[1] + "InnerAfter"] -
                          e.flexStyle[i[1] + "BorderBefore"] -
                          e.flexStyle[i[1] + "BorderAfter"]
                      ));
                    for (var o, s = -1; (o = e.children[++s]); ) {
                      var a = o.element.style,
                        l =
                          "inline" === o.mainAxis
                            ? ["main", "cross"]
                            : ["cross", "main"];
                      (a.boxSizing = "content-box"),
                        (a.display = "block"),
                        (a.position = "absolute"),
                        "auto" !== o.flexStyle[l[0]] &&
                          (a.width = n(
                            o.flexStyle[l[0]] -
                              o.flexStyle[l[0] + "InnerBefore"] -
                              o.flexStyle[l[0] + "InnerAfter"] -
                              o.flexStyle[l[0] + "BorderBefore"] -
                              o.flexStyle[l[0] + "BorderAfter"]
                          )),
                        "auto" !== o.flexStyle[l[1]] &&
                          (a.height = n(
                            o.flexStyle[l[1]] -
                              o.flexStyle[l[1] + "InnerBefore"] -
                              o.flexStyle[l[1] + "InnerAfter"] -
                              o.flexStyle[l[1] + "BorderBefore"] -
                              o.flexStyle[l[1] + "BorderAfter"]
                          )),
                        (a.top = n(o.flexStyle[l[1] + "Start"])),
                        (a.left = n(o.flexStyle[l[0] + "Start"])),
                        (a.marginTop = n(o.flexStyle[l[1] + "Before"])),
                        (a.marginRight = n(o.flexStyle[l[0] + "After"])),
                        (a.marginBottom = n(o.flexStyle[l[1] + "After"])),
                        (a.marginLeft = n(o.flexStyle[l[0] + "Before"]));
                    }
                  };
                  var r = e("../flexbox");
                },
                { "../flexbox": 7 },
              ],
              18: [
                function (e, t, i) {
                  t.exports = function (e) {
                    for (var t, i = -1; (t = e[++i]); ) n(t);
                  };
                  var n = e("../write");
                },
                { "../write": 17 },
              ],
            },
            {},
            [13]
          )(13);
        }),
          "object" == s(t)
            ? (e.exports = o())
            : ((n = []),
              void 0 ===
                (r = "function" == typeof (i = o) ? i.apply(t, n) : i) ||
                (e.exports = r));
      },
      930: () => {
        var e;
        (e = jQuery).fn.extend({
          slimScroll: function (i) {
            var n = e.extend(
              {
                width: "auto",
                height: "250px",
                size: "7px",
                color: "#000",
                position: "right",
                distance: "1px",
                start: "top",
                opacity: 0.4,
                alwaysVisible: !1,
                disableFadeOut: !1,
                railVisible: !1,
                railColor: "#333",
                railOpacity: 0.2,
                railDraggable: !0,
                railClass: "slimScrollRail",
                barClass: "slimScrollBar",
                wrapperClass: "slimScrollDiv",
                allowPageScroll: !1,
                wheelStep: 20,
                touchScrollStep: 200,
                borderRadius: "7px",
                railBorderRadius: "7px",
              },
              i
            );
            return (
              this.each(function () {
                function r(t) {
                  if (c) {
                    var i = 0;
                    (t = t || window.event).wheelDelta &&
                      (i = -t.wheelDelta / 120),
                      t.detail && (i = t.detail / 3),
                      e(t.target || t.srcTarget || t.srcElement)
                        .closest("." + n.wrapperClass)
                        .is(y.parent()) && o(i, !0),
                      t.preventDefault && !v && t.preventDefault(),
                      v || (t.returnValue = !1);
                  }
                }
                function o(e, t, i) {
                  v = !1;
                  var r = y.outerHeight() - b.outerHeight();
                  t &&
                    ((t =
                      parseInt(b.css("top")) +
                      ((e * parseInt(n.wheelStep)) / 100) * b.outerHeight()),
                    (t = Math.min(Math.max(t, 0), r)),
                    (t = 0 < e ? Math.ceil(t) : Math.floor(t)),
                    b.css({ top: t + "px" })),
                    (t =
                      (m =
                        parseInt(b.css("top")) /
                        (y.outerHeight() - b.outerHeight())) *
                      (y[0].scrollHeight - y.outerHeight())),
                    i &&
                      ((e = ((t = e) / y[0].scrollHeight) * y.outerHeight()),
                      (e = Math.min(Math.max(e, 0), r)),
                      b.css({ top: e + "px" })),
                    y.scrollTop(t),
                    y.trigger("slimscrolling", ~~t),
                    a(),
                    l();
                }
                function s() {
                  (f = Math.max(
                    (y.outerHeight() / y[0].scrollHeight) * y.outerHeight(),
                    30
                  )),
                    b.css({ height: f + "px" });
                  var e = f == y.outerHeight() ? "none" : "block";
                  b.css({ display: e });
                }
                function a() {
                  s(),
                    clearTimeout(d),
                    m == ~~m
                      ? ((v = n.allowPageScroll),
                        g != m &&
                          y.trigger("slimscroll", 0 == ~~m ? "top" : "bottom"))
                      : (v = !1),
                    (g = m),
                    f >= y.outerHeight()
                      ? (v = !0)
                      : (b.stop(!0, !0).fadeIn("fast"),
                        n.railVisible && w.stop(!0, !0).fadeIn("fast"));
                }
                function l() {
                  n.alwaysVisible ||
                    (d = setTimeout(function () {
                      (n.disableFadeOut && c) ||
                        u ||
                        h ||
                        (b.fadeOut("slow"), w.fadeOut("slow"));
                    }, 1e3));
                }
                var c,
                  u,
                  h,
                  d,
                  p,
                  f,
                  m,
                  g,
                  v = !1,
                  y = e(this);
                if (y.parent().hasClass(n.wrapperClass)) {
                  var _ = y.scrollTop(),
                    b = y.siblings("." + n.barClass),
                    w = y.siblings("." + n.railClass);
                  if ((s(), e.isPlainObject(i))) {
                    if ("height" in i && "auto" == i.height) {
                      y.parent().css("height", "auto"), y.css("height", "auto");
                      var x = y.parent().parent().height();
                      y.parent().css("height", x), y.css("height", x);
                    } else
                      "height" in i &&
                        ((x = i.height),
                        y.parent().css("height", x),
                        y.css("height", x));
                    if ("scrollTo" in i) _ = parseInt(n.scrollTo);
                    else if ("scrollBy" in i) _ += parseInt(n.scrollBy);
                    else if ("destroy" in i)
                      return b.remove(), w.remove(), void y.unwrap();
                    o(_, !1, !0);
                  }
                } else
                  (e.isPlainObject(i) && "destroy" in i) ||
                    ((n.height =
                      "auto" == n.height ? y.parent().height() : n.height),
                    (_ = e("<div></div>")
                      .addClass(n.wrapperClass)
                      .css({
                        position: "relative",
                        overflow: "hidden",
                        width: n.width,
                        height: n.height,
                      })),
                    y.css({
                      overflow: "hidden",
                      width: n.width,
                      height: n.height,
                    }),
                    (w = e("<div></div>")
                      .addClass(n.railClass)
                      .css({
                        width: n.size,
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        display:
                          n.alwaysVisible && n.railVisible ? "block" : "none",
                        "border-radius": n.railBorderRadius,
                        background: n.railColor,
                        opacity: n.railOpacity,
                        zIndex: 90,
                      })),
                    (b = e("<div></div>")
                      .addClass(n.barClass)
                      .css({
                        background: n.color,
                        width: n.size,
                        position: "absolute",
                        top: 0,
                        opacity: n.opacity,
                        display: n.alwaysVisible ? "block" : "none",
                        "border-radius": n.borderRadius,
                        BorderRadius: n.borderRadius,
                        MozBorderRadius: n.borderRadius,
                        WebkitBorderRadius: n.borderRadius,
                        zIndex: 99,
                      })),
                    (x =
                      "right" == n.position
                        ? { right: n.distance }
                        : { left: n.distance }),
                    w.css(x),
                    b.css(x),
                    y.wrap(_),
                    y.parent().append(b),
                    y.parent().append(w),
                    n.railDraggable &&
                      b
                        .bind("mousedown", function (i) {
                          var n = e(document);
                          return (
                            (h = !0),
                            (t = parseFloat(b.css("top"))),
                            (pageY = i.pageY),
                            n.bind("mousemove.slimscroll", function (e) {
                              (currTop = t + e.pageY - pageY),
                                b.css("top", currTop),
                                o(0, b.position().top, !1);
                            }),
                            n.bind("mouseup.slimscroll", function (e) {
                              (h = !1), l(), n.unbind(".slimscroll");
                            }),
                            !1
                          );
                        })
                        .bind("selectstart.slimscroll", function (e) {
                          return e.stopPropagation(), e.preventDefault(), !1;
                        }),
                    w.hover(
                      function () {
                        a();
                      },
                      function () {
                        l();
                      }
                    ),
                    b.hover(
                      function () {
                        u = !0;
                      },
                      function () {
                        u = !1;
                      }
                    ),
                    y.hover(
                      function () {
                        (c = !0), a(), l();
                      },
                      function () {
                        (c = !1), l();
                      }
                    ),
                    y.bind("touchstart", function (e, t) {
                      e.originalEvent.touches.length &&
                        (p = e.originalEvent.touches[0].pageY);
                    }),
                    y.bind("touchmove", function (e) {
                      v || e.originalEvent.preventDefault(),
                        e.originalEvent.touches.length &&
                          (o(
                            (p - e.originalEvent.touches[0].pageY) /
                              n.touchScrollStep,
                            !0
                          ),
                          (p = e.originalEvent.touches[0].pageY));
                    }),
                    s(),
                    "bottom" === n.start
                      ? (b.css({ top: y.outerHeight() - b.outerHeight() }),
                        o(0, !0))
                      : "top" !== n.start &&
                        (o(e(n.start).position().top, null, !0),
                        n.alwaysVisible || b.hide()),
                    window.addEventListener
                      ? (this.addEventListener("DOMMouseScroll", r, !1),
                        this.addEventListener("mousewheel", r, !1))
                      : document.attachEvent("onmousewheel", r));
              }),
              this
            );
          },
        }),
          e.fn.extend({ slimscroll: e.fn.slimScroll });
      },
      653: (e, t, i) => {
        var n, r, o, s;
        function a(e) {
          return (a =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        (s = function (e) {
          "use strict";
          function t(t) {
            return (
              !t ||
                void 0 !== t.allowPageScroll ||
                (void 0 === t.swipe && void 0 === t.swipeStatus) ||
                (t.allowPageScroll = u),
              void 0 !== t.click && void 0 === t.tap && (t.tap = t.click),
              t || (t = {}),
              (t = e.extend({}, e.fn.swipe.defaults, t)),
              this.each(function () {
                var n = e(this),
                  r = n.data(A);
                r || ((r = new i(this, t)), n.data(A, r));
              })
            );
          }
          function i(t, i) {
            function I(t) {
              if (
                !(
                  !0 === Se.data(A + "_intouch") ||
                  e(t.target).closest(i.excludedElements, Se).length > 0
                )
              ) {
                var a = t.originalEvent ? t.originalEvent : t;
                if (
                  !a.pointerType ||
                  "mouse" != a.pointerType ||
                  0 != i.fallbackToMouseEvents
                ) {
                  var l,
                    c = a.touches,
                    u = c ? c[0] : a;
                  return (
                    (Ce = w),
                    c
                      ? (Te = c.length)
                      : !1 !== i.preventDefaultEvents && t.preventDefault(),
                    (pe = 0),
                    (fe = null),
                    (me = null),
                    (we = null),
                    (ge = 0),
                    (ve = 0),
                    (ye = 0),
                    (_e = 1),
                    (be = 0),
                    ((h = {})[n] = ie(n)),
                    (h[r] = ie(r)),
                    (h[o] = ie(o)),
                    (h[s] = ie(s)),
                    (xe = h),
                    Z(),
                    J(0, u),
                    !c || Te === i.fingers || i.fingers === _ || V()
                      ? ((Ee = se()),
                        2 == Te &&
                          (J(1, c[1]),
                          (ve = ye = re(ke[0].start, ke[1].start))),
                        (i.swipeStatus || i.pinchStatus) && (l = L(a, Ce)))
                      : (l = !1),
                    !1 === l
                      ? (L(a, (Ce = C)), l)
                      : (i.hold &&
                          (je = setTimeout(
                            e.proxy(function () {
                              Se.trigger("hold", [a.target]),
                                i.hold && (l = i.hold.call(Se, a, a.target));
                            }, this),
                            i.longTapThreshold
                          )),
                        X(!0),
                        null)
                  );
                }
              }
              var h;
            }
            function O(t) {
              var a,
                d,
                p,
                f,
                m = t.originalEvent ? t.originalEvent : t;
              if (Ce !== S && Ce !== C && !G()) {
                var g,
                  b = m.touches,
                  w = ee(b ? b[0] : m);
                if (
                  ((Ae = se()),
                  b && (Te = b.length),
                  i.hold && clearTimeout(je),
                  (Ce = x),
                  2 == Te &&
                    (0 == ve
                      ? (J(1, b[1]), (ve = ye = re(ke[0].start, ke[1].start)))
                      : (ee(b[1]),
                        (ye = re(ke[0].end, ke[1].end)),
                        ke[0].end,
                        ke[1].end,
                        (we = 1 > _e ? c : l)),
                    (_e = ((ye / ve) * 1).toFixed(2)),
                    (be = Math.abs(ve - ye))),
                  Te === i.fingers || i.fingers === _ || !b || V())
                ) {
                  if (
                    ((fe = oe(w.start, w.end)),
                    (function (e, t) {
                      if (!1 !== i.preventDefaultEvents)
                        if (i.allowPageScroll === u) e.preventDefault();
                        else {
                          var a = i.allowPageScroll === h;
                          switch (t) {
                            case n:
                              ((i.swipeLeft && a) ||
                                (!a && i.allowPageScroll != v)) &&
                                e.preventDefault();
                              break;
                            case r:
                              ((i.swipeRight && a) ||
                                (!a && i.allowPageScroll != v)) &&
                                e.preventDefault();
                              break;
                            case o:
                              ((i.swipeUp && a) ||
                                (!a && i.allowPageScroll != y)) &&
                                e.preventDefault();
                              break;
                            case s:
                              ((i.swipeDown && a) ||
                                (!a && i.allowPageScroll != y)) &&
                                e.preventDefault();
                          }
                        }
                    })(t, (me = oe(w.last, w.end))),
                    (p = w.start),
                    (f = w.end),
                    (pe = Math.round(
                      Math.sqrt(Math.pow(f.x - p.x, 2) + Math.pow(f.y - p.y, 2))
                    )),
                    (ge = ne()),
                    (function (e, t) {
                      e != u &&
                        ((t = Math.max(t, te(e))), (xe[e].distance = t));
                    })(fe, pe),
                    (g = L(m, Ce)),
                    !i.triggerOnTouchEnd || i.triggerOnTouchLeave)
                  ) {
                    var T = !0;
                    if (i.triggerOnTouchLeave) {
                      var k = {
                        left: (d = (a = e((a = this))).offset()).left,
                        right: d.left + a.outerWidth(),
                        top: d.top,
                        bottom: d.top + a.outerHeight(),
                      };
                      T = (function (e, t) {
                        return (
                          e.x > t.left &&
                          e.x < t.right &&
                          e.y > t.top &&
                          e.y < t.bottom
                        );
                      })(w.end, k);
                    }
                    !i.triggerOnTouchEnd && T
                      ? (Ce = B(x))
                      : i.triggerOnTouchLeave && !T && (Ce = B(S)),
                      (Ce != C && Ce != S) || L(m, Ce);
                  }
                } else L(m, (Ce = C));
                !1 === g && L(m, (Ce = C));
              }
            }
            function P(e) {
              var t = e.originalEvent ? e.originalEvent : e,
                n = t.touches;
              if (n) {
                if (n.length && !G())
                  return (
                    (function (e) {
                      (Ie = se()), (Oe = e.touches.length + 1);
                    })(t),
                    !0
                  );
                if (n.length && G()) return !0;
              }
              return (
                G() && (Te = Oe),
                (Ae = se()),
                (ge = ne()),
                z() || !$()
                  ? L(t, (Ce = C))
                  : i.triggerOnTouchEnd ||
                    (!1 === i.triggerOnTouchEnd && Ce === x)
                  ? (!1 !== i.preventDefaultEvents &&
                      !1 !== e.cancelable &&
                      e.preventDefault(),
                    L(t, (Ce = S)))
                  : !i.triggerOnTouchEnd && U()
                  ? F(t, (Ce = S), f)
                  : Ce === x && L(t, (Ce = C)),
                X(!1),
                null
              );
            }
            function D() {
              (Te = 0),
                (Ae = 0),
                (Ee = 0),
                (ve = 0),
                (ye = 0),
                (_e = 1),
                Z(),
                X(!1);
            }
            function j(e) {
              var t = e.originalEvent ? e.originalEvent : e;
              i.triggerOnTouchLeave && L(t, (Ce = B(S)));
            }
            function N() {
              Se.off(le, I),
                Se.off(de, D),
                Se.off(ce, O),
                Se.off(ue, P),
                he && Se.off(he, j),
                X(!1);
            }
            function B(e) {
              var t = e,
                n = H(),
                r = $(),
                o = z();
              return (
                !n || o
                  ? (t = C)
                  : !r ||
                    e != x ||
                    (i.triggerOnTouchEnd && !i.triggerOnTouchLeave)
                  ? !r && e == S && i.triggerOnTouchLeave && (t = C)
                  : (t = S),
                t
              );
            }
            function L(e, t) {
              var n,
                r = e.touches;
              return (
                (!(!R() || !W()) || W()) && (n = F(e, t, d)),
                (!(!M() || !V()) || V()) && !1 !== n && (n = F(e, t, p)),
                K() && Y() && !1 !== n
                  ? (n = F(e, t, m))
                  : ge > i.longTapThreshold && b > pe && i.longTap && !1 !== n
                  ? (n = F(e, t, g))
                  : !(
                      (1 !== Te && T) ||
                      !(isNaN(pe) || pe < i.threshold) ||
                      !U()
                    ) &&
                    !1 !== n &&
                    (n = F(e, t, f)),
                t === C && D(),
                t === S && ((r && r.length) || D()),
                n
              );
            }
            function F(t, a, u) {
              var h;
              if (u == d) {
                if (
                  (Se.trigger("swipeStatus", [
                    a,
                    fe || null,
                    pe || 0,
                    ge || 0,
                    Te,
                    ke,
                    me,
                  ]),
                  i.swipeStatus &&
                    !1 ===
                      (h = i.swipeStatus.call(
                        Se,
                        t,
                        a,
                        fe || null,
                        pe || 0,
                        ge || 0,
                        Te,
                        ke,
                        me
                      )))
                )
                  return !1;
                if (a == S && R()) {
                  if (
                    (clearTimeout(De),
                    clearTimeout(je),
                    Se.trigger("swipe", [fe, pe, ge, Te, ke, me]),
                    i.swipe &&
                      !1 === (h = i.swipe.call(Se, t, fe, pe, ge, Te, ke, me)))
                  )
                    return !1;
                  switch (fe) {
                    case n:
                      Se.trigger("swipeLeft", [fe, pe, ge, Te, ke, me]),
                        i.swipeLeft &&
                          (h = i.swipeLeft.call(Se, t, fe, pe, ge, Te, ke, me));
                      break;
                    case r:
                      Se.trigger("swipeRight", [fe, pe, ge, Te, ke, me]),
                        i.swipeRight &&
                          (h = i.swipeRight.call(
                            Se,
                            t,
                            fe,
                            pe,
                            ge,
                            Te,
                            ke,
                            me
                          ));
                      break;
                    case o:
                      Se.trigger("swipeUp", [fe, pe, ge, Te, ke, me]),
                        i.swipeUp &&
                          (h = i.swipeUp.call(Se, t, fe, pe, ge, Te, ke, me));
                      break;
                    case s:
                      Se.trigger("swipeDown", [fe, pe, ge, Te, ke, me]),
                        i.swipeDown &&
                          (h = i.swipeDown.call(Se, t, fe, pe, ge, Te, ke, me));
                  }
                }
              }
              if (u == p) {
                if (
                  (Se.trigger("pinchStatus", [
                    a,
                    we || null,
                    be || 0,
                    ge || 0,
                    Te,
                    _e,
                    ke,
                  ]),
                  i.pinchStatus &&
                    !1 ===
                      (h = i.pinchStatus.call(
                        Se,
                        t,
                        a,
                        we || null,
                        be || 0,
                        ge || 0,
                        Te,
                        _e,
                        ke
                      )))
                )
                  return !1;
                if (a == S && M())
                  switch (we) {
                    case l:
                      Se.trigger("pinchIn", [
                        we || null,
                        be || 0,
                        ge || 0,
                        Te,
                        _e,
                        ke,
                      ]),
                        i.pinchIn &&
                          (h = i.pinchIn.call(
                            Se,
                            t,
                            we || null,
                            be || 0,
                            ge || 0,
                            Te,
                            _e,
                            ke
                          ));
                      break;
                    case c:
                      Se.trigger("pinchOut", [
                        we || null,
                        be || 0,
                        ge || 0,
                        Te,
                        _e,
                        ke,
                      ]),
                        i.pinchOut &&
                          (h = i.pinchOut.call(
                            Se,
                            t,
                            we || null,
                            be || 0,
                            ge || 0,
                            Te,
                            _e,
                            ke
                          ));
                  }
              }
              return (
                u == f
                  ? (a !== C && a !== S) ||
                    (clearTimeout(De),
                    clearTimeout(je),
                    Y() && !K()
                      ? ((Pe = se()),
                        (De = setTimeout(
                          e.proxy(function () {
                            (Pe = null),
                              Se.trigger("tap", [t.target]),
                              i.tap && (h = i.tap.call(Se, t, t.target));
                          }, this),
                          i.doubleTapThreshold
                        )))
                      : ((Pe = null),
                        Se.trigger("tap", [t.target]),
                        i.tap && (h = i.tap.call(Se, t, t.target))))
                  : u == m
                  ? (a !== C && a !== S) ||
                    (clearTimeout(De),
                    clearTimeout(je),
                    (Pe = null),
                    Se.trigger("doubletap", [t.target]),
                    i.doubleTap && (h = i.doubleTap.call(Se, t, t.target)))
                  : u == g &&
                    ((a !== C && a !== S) ||
                      (clearTimeout(De),
                      (Pe = null),
                      Se.trigger("longtap", [t.target]),
                      i.longTap && (h = i.longTap.call(Se, t, t.target)))),
                h
              );
            }
            function $() {
              var e = !0;
              return null !== i.threshold && (e = pe >= i.threshold), e;
            }
            function z() {
              var e = !1;
              return (
                null !== i.cancelThreshold &&
                  null !== fe &&
                  (e = te(fe) - pe >= i.cancelThreshold),
                e
              );
            }
            function H() {
              return !(i.maxTimeThreshold && ge >= i.maxTimeThreshold);
            }
            function M() {
              var e = q(),
                t = Q(),
                n = null === i.pinchThreshold || be >= i.pinchThreshold;
              return e && t && n;
            }
            function V() {
              return !!(i.pinchStatus || i.pinchIn || i.pinchOut);
            }
            function R() {
              var e = H(),
                t = $(),
                i = q(),
                n = Q();
              return !z() && n && i && t && e;
            }
            function W() {
              return !!(
                i.swipe ||
                i.swipeStatus ||
                i.swipeLeft ||
                i.swipeRight ||
                i.swipeUp ||
                i.swipeDown
              );
            }
            function q() {
              return Te === i.fingers || i.fingers === _ || !T;
            }
            function Q() {
              return 0 !== ke[0].end.x;
            }
            function U() {
              return !!i.tap;
            }
            function Y() {
              return !!i.doubleTap;
            }
            function K() {
              if (null == Pe) return !1;
              var e = se();
              return Y() && e - Pe <= i.doubleTapThreshold;
            }
            function Z() {
              (Ie = 0), (Oe = 0);
            }
            function G() {
              var e = !1;
              return Ie && se() - Ie <= i.fingerReleaseThreshold && (e = !0), e;
            }
            function X(e) {
              Se &&
                (!0 === e
                  ? (Se.on(ce, O), Se.on(ue, P), he && Se.on(he, j))
                  : (Se.off(ce, O, !1),
                    Se.off(ue, P, !1),
                    he && Se.off(he, j, !1)),
                Se.data(A + "_intouch", !0 === e));
            }
            function J(e, t) {
              var i = {
                start: { x: 0, y: 0 },
                last: { x: 0, y: 0 },
                end: { x: 0, y: 0 },
              };
              return (
                (i.start.x = i.last.x = i.end.x = t.pageX || t.clientX),
                (i.start.y = i.last.y = i.end.y = t.pageY || t.clientY),
                (ke[e] = i),
                i
              );
            }
            function ee(e) {
              var t = void 0 !== e.identifier ? e.identifier : 0,
                i = (function (e) {
                  return ke[e] || null;
                })(t);
              return (
                null === i && (i = J(t, e)),
                (i.last.x = i.end.x),
                (i.last.y = i.end.y),
                (i.end.x = e.pageX || e.clientX),
                (i.end.y = e.pageY || e.clientY),
                i
              );
            }
            function te(e) {
              return xe[e] ? xe[e].distance : void 0;
            }
            function ie(e) {
              return { direction: e, distance: 0 };
            }
            function ne() {
              return Ae - Ee;
            }
            function re(e, t) {
              var i = Math.abs(e.x - t.x),
                n = Math.abs(e.y - t.y);
              return Math.round(Math.sqrt(i * i + n * n));
            }
            function oe(e, t) {
              if (((a = t), (i = e).x == a.x && i.y == a.y)) return u;
              var i,
                a,
                l = (function (e, t) {
                  var i = e.x - t.x,
                    n = t.y - e.y,
                    r = Math.atan2(n, i),
                    o = Math.round((180 * r) / Math.PI);
                  return 0 > o && (o = 360 - Math.abs(o)), o;
                })(e, t);
              return (45 >= l && l >= 0) || (360 >= l && l >= 315)
                ? n
                : l >= 135 && 225 >= l
                ? r
                : l > 45 && 135 > l
                ? s
                : o;
            }
            function se() {
              return new Date().getTime();
            }
            i = e.extend({}, i);
            var ae = T || E || !i.fallbackToMouseEvents,
              le = ae
                ? E
                  ? k
                    ? "MSPointerDown"
                    : "pointerdown"
                  : "touchstart"
                : "mousedown",
              ce = ae
                ? E
                  ? k
                    ? "MSPointerMove"
                    : "pointermove"
                  : "touchmove"
                : "mousemove",
              ue = ae
                ? E
                  ? k
                    ? "MSPointerUp"
                    : "pointerup"
                  : "touchend"
                : "mouseup",
              he = ae ? (E ? "mouseleave" : null) : "mouseleave",
              de = E
                ? k
                  ? "MSPointerCancel"
                  : "pointercancel"
                : "touchcancel",
              pe = 0,
              fe = null,
              me = null,
              ge = 0,
              ve = 0,
              ye = 0,
              _e = 1,
              be = 0,
              we = 0,
              xe = null,
              Se = e(t),
              Ce = "start",
              Te = 0,
              ke = {},
              Ee = 0,
              Ae = 0,
              Ie = 0,
              Oe = 0,
              Pe = 0,
              De = null,
              je = null;
            try {
              Se.on(le, I), Se.on(de, D);
            } catch (t) {
              e.error(
                "events not supported " + le + "," + de + " on jQuery.swipe"
              );
            }
            (this.enable = function () {
              return this.disable(), Se.on(le, I), Se.on(de, D), Se;
            }),
              (this.disable = function () {
                return N(), Se;
              }),
              (this.destroy = function () {
                N(), Se.data(A, null), (Se = null);
              }),
              (this.option = function (t, n) {
                if ("object" == a(t)) i = e.extend(i, t);
                else if (void 0 !== i[t]) {
                  if (void 0 === n) return i[t];
                  i[t] = n;
                } else {
                  if (!t) return i;
                  e.error(
                    "Option " + t + " does not exist on jQuery.swipe.options"
                  );
                }
                return null;
              });
          }
          var n = "left",
            r = "right",
            o = "up",
            s = "down",
            l = "in",
            c = "out",
            u = "none",
            h = "auto",
            d = "swipe",
            p = "pinch",
            f = "tap",
            m = "doubletap",
            g = "longtap",
            v = "horizontal",
            y = "vertical",
            _ = "all",
            b = 10,
            w = "start",
            x = "move",
            S = "end",
            C = "cancel",
            T = "ontouchstart" in window,
            k = window.navigator.msPointerEnabled && !window.PointerEvent && !T,
            E =
              (window.PointerEvent || window.navigator.msPointerEnabled) && !T,
            A = "TouchSwipe";
          (e.fn.swipe = function (i) {
            var n = e(this),
              r = n.data(A);
            if (r && "string" == typeof i) {
              if (r[i])
                return r[i].apply(r, Array.prototype.slice.call(arguments, 1));
              e.error("Method " + i + " does not exist on jQuery.swipe");
            } else if (r && "object" == a(i)) r.option.apply(r, arguments);
            else if (!(r || ("object" != a(i) && i)))
              return t.apply(this, arguments);
            return n;
          }),
            (e.fn.swipe.version = "1.6.18"),
            (e.fn.swipe.defaults = {
              fingers: 1,
              threshold: 75,
              cancelThreshold: null,
              pinchThreshold: 20,
              maxTimeThreshold: null,
              fingerReleaseThreshold: 250,
              longTapThreshold: 500,
              doubleTapThreshold: 200,
              swipe: null,
              swipeLeft: null,
              swipeRight: null,
              swipeUp: null,
              swipeDown: null,
              swipeStatus: null,
              pinchIn: null,
              pinchOut: null,
              pinchStatus: null,
              click: null,
              tap: null,
              doubleTap: null,
              longTap: null,
              hold: null,
              triggerOnTouchEnd: !0,
              triggerOnTouchLeave: !1,
              allowPageScroll: "auto",
              fallbackToMouseEvents: !0,
              excludedElements: ".noSwipe",
              preventDefaultEvents: !0,
            }),
            (e.fn.swipe.phases = {
              PHASE_START: w,
              PHASE_MOVE: x,
              PHASE_END: S,
              PHASE_CANCEL: C,
            }),
            (e.fn.swipe.directions = {
              LEFT: n,
              RIGHT: r,
              UP: o,
              DOWN: s,
              IN: l,
              OUT: c,
            }),
            (e.fn.swipe.pageScroll = {
              NONE: u,
              HORIZONTAL: v,
              VERTICAL: y,
              AUTO: h,
            }),
            (e.fn.swipe.fingers = {
              ONE: 1,
              TWO: 2,
              THREE: 3,
              FOUR: 4,
              FIVE: 5,
              ALL: _,
            });
        }),
          i.amdO.jQuery
            ? ((r = [i(609)]),
              void 0 ===
                (o = "function" == typeof (n = s) ? n.apply(t, r) : n) ||
                (e.exports = o))
            : s(e.exports ? i(609) : jQuery);
      },
      344: () => {
        function e(t) {
          return (e =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(t);
        }
        var t, i, n;
        !(function (t, i, n, r) {
          function o(e, i) {
            (this.settings = null),
              (this.options = t.extend({}, o.Defaults, i)),
              (this.$element = t(e)),
              (this._handlers = {}),
              (this._plugins = {}),
              (this._supress = {}),
              (this._current = null),
              (this._speed = null),
              (this._coordinates = []),
              (this._breakpoint = null),
              (this._width = null),
              (this._items = []),
              (this._clones = []),
              (this._mergers = []),
              (this._widths = []),
              (this._invalidated = {}),
              (this._pipe = []),
              (this._drag = {
                time: null,
                target: null,
                pointer: null,
                stage: { start: null, current: null },
                direction: null,
              }),
              (this._states = {
                current: {},
                tags: {
                  initializing: ["busy"],
                  animating: ["busy"],
                  dragging: ["interacting"],
                },
              }),
              t.each(
                ["onResize", "onThrottledResize"],
                t.proxy(function (e, i) {
                  this._handlers[i] = t.proxy(this[i], this);
                }, this)
              ),
              t.each(
                o.Plugins,
                t.proxy(function (e, t) {
                  this._plugins[e.charAt(0).toLowerCase() + e.slice(1)] = new t(
                    this
                  );
                }, this)
              ),
              t.each(
                o.Workers,
                t.proxy(function (e, i) {
                  this._pipe.push({
                    filter: i.filter,
                    run: t.proxy(i.run, this),
                  });
                }, this)
              ),
              this.setup(),
              this.initialize();
          }
          (o.Defaults = {
            items: 3,
            loop: !1,
            center: !1,
            rewind: !1,
            checkVisibility: !0,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: i,
            fallbackEasing: "swing",
            slideTransition: "",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            refreshClass: "owl-refresh",
            loadedClass: "owl-loaded",
            loadingClass: "owl-loading",
            rtlClass: "owl-rtl",
            responsiveClass: "owl-responsive",
            dragClass: "owl-drag",
            itemClass: "owl-item",
            stageClass: "owl-stage",
            stageOuterClass: "owl-stage-outer",
            grabClass: "owl-grab",
          }),
            (o.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
            (o.Type = { Event: "event", State: "state" }),
            (o.Plugins = {}),
            (o.Workers = [
              {
                filter: ["width", "settings"],
                run: function () {
                  this._width = this.$element.width();
                },
              },
              {
                filter: ["width", "items", "settings"],
                run: function (e) {
                  e.current =
                    this._items && this._items[this.relative(this._current)];
                },
              },
              {
                filter: ["items", "settings"],
                run: function () {
                  this.$stage.children(".cloned").remove();
                },
              },
              {
                filter: ["width", "items", "settings"],
                run: function (e) {
                  var t = this.settings.margin || "",
                    i = !this.settings.autoWidth,
                    n = this.settings.rtl,
                    r = {
                      width: "auto",
                      "margin-left": n ? t : "",
                      "margin-right": n ? "" : t,
                    };
                  !i && this.$stage.children().css(r), (e.css = r);
                },
              },
              {
                filter: ["width", "items", "settings"],
                run: function (e) {
                  var t =
                      (this.width() / this.settings.items).toFixed(3) -
                      this.settings.margin,
                    i = null,
                    n = this._items.length,
                    r = !this.settings.autoWidth,
                    o = [];
                  for (e.items = { merge: !1, width: t }; n--; )
                    (i = this._mergers[n]),
                      (i =
                        (this.settings.mergeFit &&
                          Math.min(i, this.settings.items)) ||
                        i),
                      (e.items.merge = i > 1 || e.items.merge),
                      (o[n] = r ? t * i : this._items[n].width());
                  this._widths = o;
                },
              },
              {
                filter: ["items", "settings"],
                run: function () {
                  var e = [],
                    i = this._items,
                    n = this.settings,
                    r = Math.max(2 * n.items, 4),
                    o = 2 * Math.ceil(i.length / 2),
                    s =
                      n.loop && i.length ? (n.rewind ? r : Math.max(r, o)) : 0,
                    a = "",
                    l = "";
                  for (s /= 2; s > 0; )
                    e.push(this.normalize(e.length / 2, !0)),
                      (a += i[e[e.length - 1]][0].outerHTML),
                      e.push(
                        this.normalize(i.length - 1 - (e.length - 1) / 2, !0)
                      ),
                      (l = i[e[e.length - 1]][0].outerHTML + l),
                      (s -= 1);
                  (this._clones = e),
                    t(a).addClass("cloned").appendTo(this.$stage),
                    t(l).addClass("cloned").prependTo(this.$stage);
                },
              },
              {
                filter: ["width", "items", "settings"],
                run: function () {
                  for (
                    var e = this.settings.rtl ? 1 : -1,
                      t = this._clones.length + this._items.length,
                      i = -1,
                      n = 0,
                      r = 0,
                      o = [];
                    ++i < t;

                  )
                    (n = o[i - 1] || 0),
                      (r =
                        this._widths[this.relative(i)] + this.settings.margin),
                      o.push(n + r * e);
                  this._coordinates = o;
                },
              },
              {
                filter: ["width", "items", "settings"],
                run: function () {
                  var e = this.settings.stagePadding,
                    t = this._coordinates,
                    i = {
                      width: Math.ceil(Math.abs(t[t.length - 1])) + 2 * e,
                      "padding-left": e || "",
                      "padding-right": e || "",
                    };
                  this.$stage.css(i);
                },
              },
              {
                filter: ["width", "items", "settings"],
                run: function (e) {
                  var t = this._coordinates.length,
                    i = !this.settings.autoWidth,
                    n = this.$stage.children();
                  if (i && e.items.merge)
                    for (; t--; )
                      (e.css.width = this._widths[this.relative(t)]),
                        n.eq(t).css(e.css);
                  else i && ((e.css.width = e.items.width), n.css(e.css));
                },
              },
              {
                filter: ["items"],
                run: function () {
                  this._coordinates.length < 1 &&
                    this.$stage.removeAttr("style");
                },
              },
              {
                filter: ["width", "items", "settings"],
                run: function (e) {
                  (e.current = e.current
                    ? this.$stage.children().index(e.current)
                    : 0),
                    (e.current = Math.max(
                      this.minimum(),
                      Math.min(this.maximum(), e.current)
                    )),
                    this.reset(e.current);
                },
              },
              {
                filter: ["position"],
                run: function () {
                  this.animate(this.coordinates(this._current));
                },
              },
              {
                filter: ["width", "position", "items", "settings"],
                run: function () {
                  var e,
                    t,
                    i,
                    n,
                    r = this.settings.rtl ? 1 : -1,
                    o = 2 * this.settings.stagePadding,
                    s = this.coordinates(this.current()) + o,
                    a = s + this.width() * r,
                    l = [];
                  for (i = 0, n = this._coordinates.length; i < n; i++)
                    (e = this._coordinates[i - 1] || 0),
                      (t = Math.abs(this._coordinates[i]) + o * r),
                      ((this.op(e, "<=", s) && this.op(e, ">", a)) ||
                        (this.op(t, "<", s) && this.op(t, ">", a))) &&
                        l.push(i);
                  this.$stage.children(".active").removeClass("active"),
                    this.$stage
                      .children(":eq(" + l.join("), :eq(") + ")")
                      .addClass("active"),
                    this.$stage.children(".center").removeClass("center"),
                    this.settings.center &&
                      this.$stage
                        .children()
                        .eq(this.current())
                        .addClass("center");
                },
              },
            ]),
            (o.prototype.initializeStage = function () {
              (this.$stage = this.$element.find(
                "." + this.settings.stageClass
              )),
                this.$stage.length ||
                  (this.$element.addClass(this.options.loadingClass),
                  (this.$stage = t("<" + this.settings.stageElement + ">", {
                    class: this.settings.stageClass,
                  }).wrap(
                    t("<div/>", { class: this.settings.stageOuterClass })
                  )),
                  this.$element.append(this.$stage.parent()));
            }),
            (o.prototype.initializeItems = function () {
              var e = this.$element.find(".owl-item");
              if (e.length)
                return (
                  (this._items = e.get().map(function (e) {
                    return t(e);
                  })),
                  (this._mergers = this._items.map(function () {
                    return 1;
                  })),
                  void this.refresh()
                );
              this.replace(this.$element.children().not(this.$stage.parent())),
                this.isVisible() ? this.refresh() : this.invalidate("width"),
                this.$element
                  .removeClass(this.options.loadingClass)
                  .addClass(this.options.loadedClass);
            }),
            (o.prototype.initialize = function () {
              var e, t, i;
              this.enter("initializing"),
                this.trigger("initialize"),
                this.$element.toggleClass(
                  this.settings.rtlClass,
                  this.settings.rtl
                ),
                this.settings.autoWidth &&
                  !this.is("pre-loading") &&
                  ((e = this.$element.find("img")),
                  (t = this.settings.nestedItemSelector
                    ? "." + this.settings.nestedItemSelector
                    : r),
                  (i = this.$element.children(t).width()),
                  e.length && i <= 0 && this.preloadAutoWidthImages(e)),
                this.initializeStage(),
                this.initializeItems(),
                this.registerEventHandlers(),
                this.leave("initializing"),
                this.trigger("initialized");
            }),
            (o.prototype.isVisible = function () {
              return (
                !this.settings.checkVisibility || this.$element.is(":visible")
              );
            }),
            (o.prototype.setup = function () {
              var e = this.viewport(),
                i = this.options.responsive,
                n = -1,
                r = null;
              i
                ? (t.each(i, function (t) {
                    t <= e && t > n && (n = Number(t));
                  }),
                  "function" ==
                    typeof (r = t.extend({}, this.options, i[n]))
                      .stagePadding && (r.stagePadding = r.stagePadding()),
                  delete r.responsive,
                  r.responsiveClass &&
                    this.$element.attr(
                      "class",
                      this.$element
                        .attr("class")
                        .replace(
                          new RegExp(
                            "(" + this.options.responsiveClass + "-)\\S+\\s",
                            "g"
                          ),
                          "$1" + n
                        )
                    ))
                : (r = t.extend({}, this.options)),
                this.trigger("change", {
                  property: { name: "settings", value: r },
                }),
                (this._breakpoint = n),
                (this.settings = r),
                this.invalidate("settings"),
                this.trigger("changed", {
                  property: { name: "settings", value: this.settings },
                });
            }),
            (o.prototype.optionsLogic = function () {
              this.settings.autoWidth &&
                ((this.settings.stagePadding = !1), (this.settings.merge = !1));
            }),
            (o.prototype.prepare = function (e) {
              var i = this.trigger("prepare", { content: e });
              return (
                i.data ||
                  (i.data = t("<" + this.settings.itemElement + "/>")
                    .addClass(this.options.itemClass)
                    .append(e)),
                this.trigger("prepared", { content: i.data }),
                i.data
              );
            }),
            (o.prototype.update = function () {
              for (
                var e = 0,
                  i = this._pipe.length,
                  n = t.proxy(function (e) {
                    return this[e];
                  }, this._invalidated),
                  r = {};
                e < i;

              )
                (this._invalidated.all ||
                  t.grep(this._pipe[e].filter, n).length > 0) &&
                  this._pipe[e].run(r),
                  e++;
              (this._invalidated = {}),
                !this.is("valid") && this.enter("valid");
            }),
            (o.prototype.width = function (e) {
              switch ((e = e || o.Width.Default)) {
                case o.Width.Inner:
                case o.Width.Outer:
                  return this._width;
                default:
                  return (
                    this._width -
                    2 * this.settings.stagePadding +
                    this.settings.margin
                  );
              }
            }),
            (o.prototype.refresh = function () {
              this.enter("refreshing"),
                this.trigger("refresh"),
                this.setup(),
                this.optionsLogic(),
                this.$element.addClass(this.options.refreshClass),
                this.update(),
                this.$element.removeClass(this.options.refreshClass),
                this.leave("refreshing"),
                this.trigger("refreshed");
            }),
            (o.prototype.onThrottledResize = function () {
              i.clearTimeout(this.resizeTimer),
                (this.resizeTimer = i.setTimeout(
                  this._handlers.onResize,
                  this.settings.responsiveRefreshRate
                ));
            }),
            (o.prototype.onResize = function () {
              return (
                !!this._items.length &&
                this._width !== this.$element.width() &&
                !!this.isVisible() &&
                (this.enter("resizing"),
                this.trigger("resize").isDefaultPrevented()
                  ? (this.leave("resizing"), !1)
                  : (this.invalidate("width"),
                    this.refresh(),
                    this.leave("resizing"),
                    void this.trigger("resized")))
              );
            }),
            (o.prototype.registerEventHandlers = function () {
              t.support.transition &&
                this.$stage.on(
                  t.support.transition.end + ".owl.core",
                  t.proxy(this.onTransitionEnd, this)
                ),
                !1 !== this.settings.responsive &&
                  this.on(i, "resize", this._handlers.onThrottledResize),
                this.settings.mouseDrag &&
                  (this.$element.addClass(this.options.dragClass),
                  this.$stage.on(
                    "mousedown.owl.core",
                    t.proxy(this.onDragStart, this)
                  ),
                  this.$stage.on(
                    "dragstart.owl.core selectstart.owl.core",
                    function () {
                      return !1;
                    }
                  )),
                this.settings.touchDrag &&
                  (this.$stage.on(
                    "touchstart.owl.core",
                    t.proxy(this.onDragStart, this)
                  ),
                  this.$stage.on(
                    "touchcancel.owl.core",
                    t.proxy(this.onDragEnd, this)
                  ));
            }),
            (o.prototype.onDragStart = function (e) {
              var i = null;
              3 !== e.which &&
                (t.support.transform
                  ? (i = {
                      x: (i = this.$stage
                        .css("transform")
                        .replace(/.*\(|\)| /g, "")
                        .split(","))[16 === i.length ? 12 : 4],
                      y: i[16 === i.length ? 13 : 5],
                    })
                  : ((i = this.$stage.position()),
                    (i = {
                      x: this.settings.rtl
                        ? i.left +
                          this.$stage.width() -
                          this.width() +
                          this.settings.margin
                        : i.left,
                      y: i.top,
                    })),
                this.is("animating") &&
                  (t.support.transform ? this.animate(i.x) : this.$stage.stop(),
                  this.invalidate("position")),
                this.$element.toggleClass(
                  this.options.grabClass,
                  "mousedown" === e.type
                ),
                this.speed(0),
                (this._drag.time = new Date().getTime()),
                (this._drag.target = t(e.target)),
                (this._drag.stage.start = i),
                (this._drag.stage.current = i),
                (this._drag.pointer = this.pointer(e)),
                t(n).on(
                  "mouseup.owl.core touchend.owl.core",
                  t.proxy(this.onDragEnd, this)
                ),
                t(n).one(
                  "mousemove.owl.core touchmove.owl.core",
                  t.proxy(function (e) {
                    var i = this.difference(
                      this._drag.pointer,
                      this.pointer(e)
                    );
                    t(n).on(
                      "mousemove.owl.core touchmove.owl.core",
                      t.proxy(this.onDragMove, this)
                    ),
                      (Math.abs(i.x) < Math.abs(i.y) && this.is("valid")) ||
                        (e.preventDefault(),
                        this.enter("dragging"),
                        this.trigger("drag"));
                  }, this)
                ));
            }),
            (o.prototype.onDragMove = function (e) {
              var t = null,
                i = null,
                n = null,
                r = this.difference(this._drag.pointer, this.pointer(e)),
                o = this.difference(this._drag.stage.start, r);
              this.is("dragging") &&
                (e.preventDefault(),
                this.settings.loop
                  ? ((t = this.coordinates(this.minimum())),
                    (i = this.coordinates(this.maximum() + 1) - t),
                    (o.x = ((((o.x - t) % i) + i) % i) + t))
                  : ((t = this.settings.rtl
                      ? this.coordinates(this.maximum())
                      : this.coordinates(this.minimum())),
                    (i = this.settings.rtl
                      ? this.coordinates(this.minimum())
                      : this.coordinates(this.maximum())),
                    (n = this.settings.pullDrag ? (-1 * r.x) / 5 : 0),
                    (o.x = Math.max(Math.min(o.x, t + n), i + n))),
                (this._drag.stage.current = o),
                this.animate(o.x));
            }),
            (o.prototype.onDragEnd = function (e) {
              var i = this.difference(this._drag.pointer, this.pointer(e)),
                r = this._drag.stage.current,
                o = (i.x > 0) ^ this.settings.rtl ? "left" : "right";
              t(n).off(".owl.core"),
                this.$element.removeClass(this.options.grabClass),
                ((0 !== i.x && this.is("dragging")) || !this.is("valid")) &&
                  (this.speed(
                    this.settings.dragEndSpeed || this.settings.smartSpeed
                  ),
                  this.current(
                    this.closest(r.x, 0 !== i.x ? o : this._drag.direction)
                  ),
                  this.invalidate("position"),
                  this.update(),
                  (this._drag.direction = o),
                  (Math.abs(i.x) > 3 ||
                    new Date().getTime() - this._drag.time > 300) &&
                    this._drag.target.one("click.owl.core", function () {
                      return !1;
                    })),
                this.is("dragging") &&
                  (this.leave("dragging"), this.trigger("dragged"));
            }),
            (o.prototype.closest = function (e, i) {
              var n = -1,
                o = this.width(),
                s = this.coordinates();
              return (
                this.settings.freeDrag ||
                  t.each(
                    s,
                    t.proxy(function (t, a) {
                      return (
                        "left" === i && e > a - 30 && e < a + 30
                          ? (n = t)
                          : "right" === i && e > a - o - 30 && e < a - o + 30
                          ? (n = t + 1)
                          : this.op(e, "<", a) &&
                            this.op(
                              e,
                              ">",
                              s[t + 1] !== r ? s[t + 1] : a - o
                            ) &&
                            (n = "left" === i ? t + 1 : t),
                        -1 === n
                      );
                    }, this)
                  ),
                this.settings.loop ||
                  (this.op(e, ">", s[this.minimum()])
                    ? (n = e = this.minimum())
                    : this.op(e, "<", s[this.maximum()]) &&
                      (n = e = this.maximum())),
                n
              );
            }),
            (o.prototype.animate = function (e) {
              var i = this.speed() > 0;
              this.is("animating") && this.onTransitionEnd(),
                i && (this.enter("animating"), this.trigger("translate")),
                t.support.transform3d && t.support.transition
                  ? this.$stage.css({
                      transform: "translate3d(" + e + "px,0px,0px)",
                      transition:
                        this.speed() / 1e3 +
                        "s" +
                        (this.settings.slideTransition
                          ? " " + this.settings.slideTransition
                          : ""),
                    })
                  : i
                  ? this.$stage.animate(
                      { left: e + "px" },
                      this.speed(),
                      this.settings.fallbackEasing,
                      t.proxy(this.onTransitionEnd, this)
                    )
                  : this.$stage.css({ left: e + "px" });
            }),
            (o.prototype.is = function (e) {
              return this._states.current[e] && this._states.current[e] > 0;
            }),
            (o.prototype.current = function (e) {
              if (e === r) return this._current;
              if (0 === this._items.length) return r;
              if (((e = this.normalize(e)), this._current !== e)) {
                var t = this.trigger("change", {
                  property: { name: "position", value: e },
                });
                t.data !== r && (e = this.normalize(t.data)),
                  (this._current = e),
                  this.invalidate("position"),
                  this.trigger("changed", {
                    property: { name: "position", value: this._current },
                  });
              }
              return this._current;
            }),
            (o.prototype.invalidate = function (e) {
              return (
                "string" === t.type(e) &&
                  ((this._invalidated[e] = !0),
                  this.is("valid") && this.leave("valid")),
                t.map(this._invalidated, function (e, t) {
                  return t;
                })
              );
            }),
            (o.prototype.reset = function (e) {
              (e = this.normalize(e)) !== r &&
                ((this._speed = 0),
                (this._current = e),
                this.suppress(["translate", "translated"]),
                this.animate(this.coordinates(e)),
                this.release(["translate", "translated"]));
            }),
            (o.prototype.normalize = function (e, t) {
              var i = this._items.length,
                n = t ? 0 : this._clones.length;
              return (
                !this.isNumeric(e) || i < 1
                  ? (e = r)
                  : (e < 0 || e >= i + n) &&
                    (e = ((((e - n / 2) % i) + i) % i) + n / 2),
                e
              );
            }),
            (o.prototype.relative = function (e) {
              return (e -= this._clones.length / 2), this.normalize(e, !0);
            }),
            (o.prototype.maximum = function (e) {
              var t,
                i,
                n,
                r = this.settings,
                o = this._coordinates.length;
              if (r.loop) o = this._clones.length / 2 + this._items.length - 1;
              else if (r.autoWidth || r.merge) {
                if ((t = this._items.length))
                  for (
                    i = this._items[--t].width(), n = this.$element.width();
                    t-- &&
                    !((i += this._items[t].width() + this.settings.margin) > n);

                  );
                o = t + 1;
              } else
                o = r.center
                  ? this._items.length - 1
                  : this._items.length - r.items;
              return e && (o -= this._clones.length / 2), Math.max(o, 0);
            }),
            (o.prototype.minimum = function (e) {
              return e ? 0 : this._clones.length / 2;
            }),
            (o.prototype.items = function (e) {
              return e === r
                ? this._items.slice()
                : ((e = this.normalize(e, !0)), this._items[e]);
            }),
            (o.prototype.mergers = function (e) {
              return e === r
                ? this._mergers.slice()
                : ((e = this.normalize(e, !0)), this._mergers[e]);
            }),
            (o.prototype.clones = function (e) {
              var i = this._clones.length / 2,
                n = i + this._items.length,
                o = function (e) {
                  return e % 2 == 0 ? n + e / 2 : i - (e + 1) / 2;
                };
              return e === r
                ? t.map(this._clones, function (e, t) {
                    return o(t);
                  })
                : t.map(this._clones, function (t, i) {
                    return t === e ? o(i) : null;
                  });
            }),
            (o.prototype.speed = function (e) {
              return e !== r && (this._speed = e), this._speed;
            }),
            (o.prototype.coordinates = function (e) {
              var i,
                n = 1,
                o = e - 1;
              return e === r
                ? t.map(
                    this._coordinates,
                    t.proxy(function (e, t) {
                      return this.coordinates(t);
                    }, this)
                  )
                : (this.settings.center
                    ? (this.settings.rtl && ((n = -1), (o = e + 1)),
                      (i = this._coordinates[e]),
                      (i +=
                        ((this.width() - i + (this._coordinates[o] || 0)) / 2) *
                        n))
                    : (i = this._coordinates[o] || 0),
                  (i = Math.ceil(i)));
            }),
            (o.prototype.duration = function (e, t, i) {
              return 0 === i
                ? 0
                : Math.min(Math.max(Math.abs(t - e), 1), 6) *
                    Math.abs(i || this.settings.smartSpeed);
            }),
            (o.prototype.to = function (e, t) {
              var i = this.current(),
                n = null,
                r = e - this.relative(i),
                o = (r > 0) - (r < 0),
                s = this._items.length,
                a = this.minimum(),
                l = this.maximum();
              this.settings.loop
                ? (!this.settings.rewind &&
                    Math.abs(r) > s / 2 &&
                    (r += -1 * o * s),
                  (n = (((((e = i + r) - a) % s) + s) % s) + a) !== e &&
                    n - r <= l &&
                    n - r > 0 &&
                    ((i = n - r), (e = n), this.reset(i)))
                : (e = this.settings.rewind
                    ? ((e % (l += 1)) + l) % l
                    : Math.max(a, Math.min(l, e))),
                this.speed(this.duration(i, e, t)),
                this.current(e),
                this.isVisible() && this.update();
            }),
            (o.prototype.next = function (e) {
              (e = e || !1), this.to(this.relative(this.current()) + 1, e);
            }),
            (o.prototype.prev = function (e) {
              (e = e || !1), this.to(this.relative(this.current()) - 1, e);
            }),
            (o.prototype.onTransitionEnd = function (e) {
              if (
                e !== r &&
                (e.stopPropagation(),
                (e.target || e.srcElement || e.originalTarget) !==
                  this.$stage.get(0))
              )
                return !1;
              this.leave("animating"), this.trigger("translated");
            }),
            (o.prototype.viewport = function () {
              var e;
              return (
                this.options.responsiveBaseElement !== i
                  ? (e = t(this.options.responsiveBaseElement).width())
                  : i.innerWidth
                  ? (e = i.innerWidth)
                  : n.documentElement && n.documentElement.clientWidth
                  ? (e = n.documentElement.clientWidth)
                  : console.warn("Can not detect viewport width."),
                e
              );
            }),
            (o.prototype.replace = function (e) {
              this.$stage.empty(),
                (this._items = []),
                e && (e = e instanceof jQuery ? e : t(e)),
                this.settings.nestedItemSelector &&
                  (e = e.find("." + this.settings.nestedItemSelector)),
                e
                  .filter(function () {
                    return 1 === this.nodeType;
                  })
                  .each(
                    t.proxy(function (e, t) {
                      (t = this.prepare(t)),
                        this.$stage.append(t),
                        this._items.push(t),
                        this._mergers.push(
                          1 *
                            t
                              .find("[data-merge]")
                              .addBack("[data-merge]")
                              .attr("data-merge") || 1
                        );
                    }, this)
                  ),
                this.reset(
                  this.isNumeric(this.settings.startPosition)
                    ? this.settings.startPosition
                    : 0
                ),
                this.invalidate("items");
            }),
            (o.prototype.add = function (e, i) {
              var n = this.relative(this._current);
              (i = i === r ? this._items.length : this.normalize(i, !0)),
                (e = e instanceof jQuery ? e : t(e)),
                this.trigger("add", { content: e, position: i }),
                (e = this.prepare(e)),
                0 === this._items.length || i === this._items.length
                  ? (0 === this._items.length && this.$stage.append(e),
                    0 !== this._items.length && this._items[i - 1].after(e),
                    this._items.push(e),
                    this._mergers.push(
                      1 *
                        e
                          .find("[data-merge]")
                          .addBack("[data-merge]")
                          .attr("data-merge") || 1
                    ))
                  : (this._items[i].before(e),
                    this._items.splice(i, 0, e),
                    this._mergers.splice(
                      i,
                      0,
                      1 *
                        e
                          .find("[data-merge]")
                          .addBack("[data-merge]")
                          .attr("data-merge") || 1
                    )),
                this._items[n] && this.reset(this._items[n].index()),
                this.invalidate("items"),
                this.trigger("added", { content: e, position: i });
            }),
            (o.prototype.remove = function (e) {
              (e = this.normalize(e, !0)) !== r &&
                (this.trigger("remove", {
                  content: this._items[e],
                  position: e,
                }),
                this._items[e].remove(),
                this._items.splice(e, 1),
                this._mergers.splice(e, 1),
                this.invalidate("items"),
                this.trigger("removed", { content: null, position: e }));
            }),
            (o.prototype.preloadAutoWidthImages = function (e) {
              e.each(
                t.proxy(function (e, i) {
                  this.enter("pre-loading"),
                    (i = t(i)),
                    t(new Image())
                      .one(
                        "load",
                        t.proxy(function (e) {
                          i.attr("src", e.target.src),
                            i.css("opacity", 1),
                            this.leave("pre-loading"),
                            !this.is("pre-loading") &&
                              !this.is("initializing") &&
                              this.refresh();
                        }, this)
                      )
                      .attr(
                        "src",
                        i.attr("src") ||
                          i.attr("data-src") ||
                          i.attr("data-src-retina")
                      );
                }, this)
              );
            }),
            (o.prototype.destroy = function () {
              for (var e in (this.$element.off(".owl.core"),
              this.$stage.off(".owl.core"),
              t(n).off(".owl.core"),
              !1 !== this.settings.responsive &&
                (i.clearTimeout(this.resizeTimer),
                this.off(i, "resize", this._handlers.onThrottledResize)),
              this._plugins))
                this._plugins[e].destroy();
              this.$stage.children(".cloned").remove(),
                this.$stage.unwrap(),
                this.$stage.children().contents().unwrap(),
                this.$stage.children().unwrap(),
                this.$stage.remove(),
                this.$element
                  .removeClass(this.options.refreshClass)
                  .removeClass(this.options.loadingClass)
                  .removeClass(this.options.loadedClass)
                  .removeClass(this.options.rtlClass)
                  .removeClass(this.options.dragClass)
                  .removeClass(this.options.grabClass)
                  .attr(
                    "class",
                    this.$element
                      .attr("class")
                      .replace(
                        new RegExp(
                          this.options.responsiveClass + "-\\S+\\s",
                          "g"
                        ),
                        ""
                      )
                  )
                  .removeData("owl.carousel");
            }),
            (o.prototype.op = function (e, t, i) {
              var n = this.settings.rtl;
              switch (t) {
                case "<":
                  return n ? e > i : e < i;
                case ">":
                  return n ? e < i : e > i;
                case ">=":
                  return n ? e <= i : e >= i;
                case "<=":
                  return n ? e >= i : e <= i;
              }
            }),
            (o.prototype.on = function (e, t, i, n) {
              e.addEventListener
                ? e.addEventListener(t, i, n)
                : e.attachEvent && e.attachEvent("on" + t, i);
            }),
            (o.prototype.off = function (e, t, i, n) {
              e.removeEventListener
                ? e.removeEventListener(t, i, n)
                : e.detachEvent && e.detachEvent("on" + t, i);
            }),
            (o.prototype.trigger = function (e, i, n, r, s) {
              var a = {
                  item: { count: this._items.length, index: this.current() },
                },
                l = t.camelCase(
                  t
                    .grep(["on", e, n], function (e) {
                      return e;
                    })
                    .join("-")
                    .toLowerCase()
                ),
                c = t.Event(
                  [e, "owl", n || "carousel"].join(".").toLowerCase(),
                  t.extend({ relatedTarget: this }, a, i)
                );
              return (
                this._supress[e] ||
                  (t.each(this._plugins, function (e, t) {
                    t.onTrigger && t.onTrigger(c);
                  }),
                  this.register({ type: o.Type.Event, name: e }),
                  this.$element.trigger(c),
                  this.settings &&
                    "function" == typeof this.settings[l] &&
                    this.settings[l].call(this, c)),
                c
              );
            }),
            (o.prototype.enter = function (e) {
              t.each(
                [e].concat(this._states.tags[e] || []),
                t.proxy(function (e, t) {
                  this._states.current[t] === r &&
                    (this._states.current[t] = 0),
                    this._states.current[t]++;
                }, this)
              );
            }),
            (o.prototype.leave = function (e) {
              t.each(
                [e].concat(this._states.tags[e] || []),
                t.proxy(function (e, t) {
                  this._states.current[t]--;
                }, this)
              );
            }),
            (o.prototype.register = function (e) {
              if (e.type === o.Type.Event) {
                if (
                  (t.event.special[e.name] || (t.event.special[e.name] = {}),
                  !t.event.special[e.name].owl)
                ) {
                  var i = t.event.special[e.name]._default;
                  (t.event.special[e.name]._default = function (e) {
                    return !i ||
                      !i.apply ||
                      (e.namespace && -1 !== e.namespace.indexOf("owl"))
                      ? e.namespace && e.namespace.indexOf("owl") > -1
                      : i.apply(this, arguments);
                  }),
                    (t.event.special[e.name].owl = !0);
                }
              } else
                e.type === o.Type.State &&
                  (this._states.tags[e.name]
                    ? (this._states.tags[e.name] = this._states.tags[
                        e.name
                      ].concat(e.tags))
                    : (this._states.tags[e.name] = e.tags),
                  (this._states.tags[e.name] = t.grep(
                    this._states.tags[e.name],
                    t.proxy(function (i, n) {
                      return t.inArray(i, this._states.tags[e.name]) === n;
                    }, this)
                  )));
            }),
            (o.prototype.suppress = function (e) {
              t.each(
                e,
                t.proxy(function (e, t) {
                  this._supress[t] = !0;
                }, this)
              );
            }),
            (o.prototype.release = function (e) {
              t.each(
                e,
                t.proxy(function (e, t) {
                  delete this._supress[t];
                }, this)
              );
            }),
            (o.prototype.pointer = function (e) {
              var t = { x: null, y: null };
              return (
                (e =
                  (e = e.originalEvent || e || i.event).touches &&
                  e.touches.length
                    ? e.touches[0]
                    : e.changedTouches && e.changedTouches.length
                    ? e.changedTouches[0]
                    : e).pageX
                  ? ((t.x = e.pageX), (t.y = e.pageY))
                  : ((t.x = e.clientX), (t.y = e.clientY)),
                t
              );
            }),
            (o.prototype.isNumeric = function (e) {
              return !isNaN(parseFloat(e));
            }),
            (o.prototype.difference = function (e, t) {
              return { x: e.x - t.x, y: e.y - t.y };
            }),
            (t.fn.owlCarousel = function (i) {
              var n = Array.prototype.slice.call(arguments, 1);
              return this.each(function () {
                var r = t(this),
                  s = r.data("owl.carousel");
                s ||
                  ((s = new o(this, "object" == e(i) && i)),
                  r.data("owl.carousel", s),
                  t.each(
                    [
                      "next",
                      "prev",
                      "to",
                      "destroy",
                      "refresh",
                      "replace",
                      "add",
                      "remove",
                    ],
                    function (e, i) {
                      s.register({ type: o.Type.Event, name: i }),
                        s.$element.on(
                          i + ".owl.carousel.core",
                          t.proxy(function (e) {
                            e.namespace &&
                              e.relatedTarget !== this &&
                              (this.suppress([i]),
                              s[i].apply(this, [].slice.call(arguments, 1)),
                              this.release([i]));
                          }, s)
                        );
                    }
                  )),
                  "string" == typeof i &&
                    "_" !== i.charAt(0) &&
                    s[i].apply(s, n);
              });
            }),
            (t.fn.owlCarousel.Constructor = o);
        })(window.Zepto || window.jQuery, window, document),
          (t = window.Zepto || window.jQuery),
          (i = window),
          document,
          ((n = function e(i) {
            (this._core = i),
              (this._interval = null),
              (this._visible = null),
              (this._handlers = {
                "initialized.owl.carousel": t.proxy(function (e) {
                  e.namespace &&
                    this._core.settings.autoRefresh &&
                    this.watch();
                }, this),
              }),
              (this._core.options = t.extend(
                {},
                e.Defaults,
                this._core.options
              )),
              this._core.$element.on(this._handlers);
          }).Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
          (n.prototype.watch = function () {
            this._interval ||
              ((this._visible = this._core.isVisible()),
              (this._interval = i.setInterval(
                t.proxy(this.refresh, this),
                this._core.settings.autoRefreshInterval
              )));
          }),
          (n.prototype.refresh = function () {
            this._core.isVisible() !== this._visible &&
              ((this._visible = !this._visible),
              this._core.$element.toggleClass("owl-hidden", !this._visible),
              this._visible &&
                this._core.invalidate("width") &&
                this._core.refresh());
          }),
          (n.prototype.destroy = function () {
            var e, t;
            for (e in (i.clearInterval(this._interval), this._handlers))
              this._core.$element.off(e, this._handlers[e]);
            for (t in Object.getOwnPropertyNames(this))
              "function" != typeof this[t] && (this[t] = null);
          }),
          (t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = n),
          (function (e, t, i, n) {
            var r = function t(i) {
              (this._core = i),
                (this._loaded = []),
                (this._handlers = {
                  "initialized.owl.carousel change.owl.carousel resized.owl.carousel":
                    e.proxy(function (t) {
                      if (
                        t.namespace &&
                        this._core.settings &&
                        this._core.settings.lazyLoad &&
                        ((t.property && "position" == t.property.name) ||
                          "initialized" == t.type)
                      ) {
                        var i = this._core.settings,
                          n = (i.center && Math.ceil(i.items / 2)) || i.items,
                          r = (i.center && -1 * n) || 0,
                          o =
                            (t.property && void 0 !== t.property.value
                              ? t.property.value
                              : this._core.current()) + r,
                          s = this._core.clones().length,
                          a = e.proxy(function (e, t) {
                            this.load(t);
                          }, this);
                        for (
                          i.lazyLoadEager > 0 &&
                          ((n += i.lazyLoadEager),
                          i.loop && ((o -= i.lazyLoadEager), n++));
                          r++ < n;

                        )
                          this.load(s / 2 + this._core.relative(o)),
                            s &&
                              e.each(
                                this._core.clones(this._core.relative(o)),
                                a
                              ),
                            o++;
                      }
                    }, this),
                }),
                (this._core.options = e.extend(
                  {},
                  t.Defaults,
                  this._core.options
                )),
                this._core.$element.on(this._handlers);
            };
            (r.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
              (r.prototype.load = function (i) {
                var n = this._core.$stage.children().eq(i),
                  r = n && n.find(".owl-lazy");
                !r ||
                  e.inArray(n.get(0), this._loaded) > -1 ||
                  (r.each(
                    e.proxy(function (i, n) {
                      var r,
                        o = e(n),
                        s =
                          (t.devicePixelRatio > 1 &&
                            o.attr("data-src-retina")) ||
                          o.attr("data-src") ||
                          o.attr("data-srcset");
                      this._core.trigger(
                        "load",
                        { element: o, url: s },
                        "lazy"
                      ),
                        o.is("img")
                          ? o
                              .one(
                                "load.owl.lazy",
                                e.proxy(function () {
                                  o.css("opacity", 1),
                                    this._core.trigger(
                                      "loaded",
                                      { element: o, url: s },
                                      "lazy"
                                    );
                                }, this)
                              )
                              .attr("src", s)
                          : o.is("source")
                          ? o
                              .one(
                                "load.owl.lazy",
                                e.proxy(function () {
                                  this._core.trigger(
                                    "loaded",
                                    { element: o, url: s },
                                    "lazy"
                                  );
                                }, this)
                              )
                              .attr("srcset", s)
                          : (((r = new Image()).onload = e.proxy(function () {
                              o.css({
                                "background-image": 'url("' + s + '")',
                                opacity: "1",
                              }),
                                this._core.trigger(
                                  "loaded",
                                  { element: o, url: s },
                                  "lazy"
                                );
                            }, this)),
                            (r.src = s));
                    }, this)
                  ),
                  this._loaded.push(n.get(0)));
              }),
              (r.prototype.destroy = function () {
                var e, t;
                for (e in this.handlers)
                  this._core.$element.off(e, this.handlers[e]);
                for (t in Object.getOwnPropertyNames(this))
                  "function" != typeof this[t] && (this[t] = null);
              }),
              (e.fn.owlCarousel.Constructor.Plugins.Lazy = r);
          })(window.Zepto || window.jQuery, window, document),
          (function (e, t, i, n) {
            var r = function i(n) {
              (this._core = n),
                (this._previousHeight = null),
                (this._handlers = {
                  "initialized.owl.carousel refreshed.owl.carousel": e.proxy(
                    function (e) {
                      e.namespace &&
                        this._core.settings.autoHeight &&
                        this.update();
                    },
                    this
                  ),
                  "changed.owl.carousel": e.proxy(function (e) {
                    e.namespace &&
                      this._core.settings.autoHeight &&
                      "position" === e.property.name &&
                      this.update();
                  }, this),
                  "loaded.owl.lazy": e.proxy(function (e) {
                    e.namespace &&
                      this._core.settings.autoHeight &&
                      e.element
                        .closest("." + this._core.settings.itemClass)
                        .index() === this._core.current() &&
                      this.update();
                  }, this),
                }),
                (this._core.options = e.extend(
                  {},
                  i.Defaults,
                  this._core.options
                )),
                this._core.$element.on(this._handlers),
                (this._intervalId = null);
              var r = this;
              e(t).on("load", function () {
                r._core.settings.autoHeight && r.update();
              }),
                e(t).resize(function () {
                  r._core.settings.autoHeight &&
                    (null != r._intervalId && clearTimeout(r._intervalId),
                    (r._intervalId = setTimeout(function () {
                      r.update();
                    }, 250)));
                });
            };
            (r.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
              (r.prototype.update = function () {
                var t = this._core._current,
                  i = t + this._core.settings.items,
                  n = this._core.settings.lazyLoad,
                  r = this._core.$stage.children().toArray().slice(t, i),
                  o = [],
                  s = 0;
                e.each(r, function (t, i) {
                  o.push(e(i).height());
                }),
                  (s = Math.max.apply(null, o)) <= 1 &&
                    n &&
                    this._previousHeight &&
                    (s = this._previousHeight),
                  (this._previousHeight = s),
                  this._core.$stage
                    .parent()
                    .height(s)
                    .addClass(this._core.settings.autoHeightClass);
              }),
              (r.prototype.destroy = function () {
                var e, t;
                for (e in this._handlers)
                  this._core.$element.off(e, this._handlers[e]);
                for (t in Object.getOwnPropertyNames(this))
                  "function" != typeof this[t] && (this[t] = null);
              }),
              (e.fn.owlCarousel.Constructor.Plugins.AutoHeight = r);
          })(window.Zepto || window.jQuery, window, document),
          (function (e, t, i, n) {
            var r = function t(i) {
              (this._core = i),
                (this._videos = {}),
                (this._playing = null),
                (this._handlers = {
                  "initialized.owl.carousel": e.proxy(function (e) {
                    e.namespace &&
                      this._core.register({
                        type: "state",
                        name: "playing",
                        tags: ["interacting"],
                      });
                  }, this),
                  "resize.owl.carousel": e.proxy(function (e) {
                    e.namespace &&
                      this._core.settings.video &&
                      this.isInFullScreen() &&
                      e.preventDefault();
                  }, this),
                  "refreshed.owl.carousel": e.proxy(function (e) {
                    e.namespace &&
                      this._core.is("resizing") &&
                      this._core.$stage
                        .find(".cloned .owl-video-frame")
                        .remove();
                  }, this),
                  "changed.owl.carousel": e.proxy(function (e) {
                    e.namespace &&
                      "position" === e.property.name &&
                      this._playing &&
                      this.stop();
                  }, this),
                  "prepared.owl.carousel": e.proxy(function (t) {
                    if (t.namespace) {
                      var i = e(t.content).find(".owl-video");
                      i.length &&
                        (i.css("display", "none"), this.fetch(i, e(t.content)));
                    }
                  }, this),
                }),
                (this._core.options = e.extend(
                  {},
                  t.Defaults,
                  this._core.options
                )),
                this._core.$element.on(this._handlers),
                this._core.$element.on(
                  "click.owl.video",
                  ".owl-video-play-icon",
                  e.proxy(function (e) {
                    this.play(e);
                  }, this)
                );
            };
            (r.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
              (r.prototype.fetch = function (e, t) {
                var i = e.attr("data-vimeo-id")
                    ? "vimeo"
                    : e.attr("data-vzaar-id")
                    ? "vzaar"
                    : "youtube",
                  n =
                    e.attr("data-vimeo-id") ||
                    e.attr("data-youtube-id") ||
                    e.attr("data-vzaar-id"),
                  r = e.attr("data-width") || this._core.settings.videoWidth,
                  o = e.attr("data-height") || this._core.settings.videoHeight,
                  s = e.attr("href");
                if (!s) throw new Error("Missing video URL.");
                if (
                  (n = s.match(
                    /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
                  ))[3].indexOf("youtu") > -1
                )
                  i = "youtube";
                else if (n[3].indexOf("vimeo") > -1) i = "vimeo";
                else {
                  if (!(n[3].indexOf("vzaar") > -1))
                    throw new Error("Video URL not supported.");
                  i = "vzaar";
                }
                (n = n[6]),
                  (this._videos[s] = { type: i, id: n, width: r, height: o }),
                  t.attr("data-video", s),
                  this.thumbnail(e, this._videos[s]);
              }),
              (r.prototype.thumbnail = function (t, i) {
                var n,
                  r,
                  o =
                    i.width && i.height
                      ? "width:" + i.width + "px;height:" + i.height + "px;"
                      : "",
                  s = t.find("img"),
                  a = "src",
                  l = "",
                  c = this._core.settings,
                  u = function (i) {
                    (n = c.lazyLoad
                      ? e("<div/>", { class: "owl-video-tn " + l, srcType: i })
                      : e("<div/>", {
                          class: "owl-video-tn",
                          style: "opacity:1;background-image:url(" + i + ")",
                        })),
                      t.after(n),
                      t.after('<div class="owl-video-play-icon"></div>');
                  };
                if (
                  (t.wrap(
                    e("<div/>", { class: "owl-video-wrapper", style: o })
                  ),
                  this._core.settings.lazyLoad &&
                    ((a = "data-src"), (l = "owl-lazy")),
                  s.length)
                )
                  return u(s.attr(a)), s.remove(), !1;
                "youtube" === i.type
                  ? ((r = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg"),
                    u(r))
                  : "vimeo" === i.type
                  ? e.ajax({
                      type: "GET",
                      url: "//vimeo.com/api/v2/video/" + i.id + ".json",
                      jsonp: "callback",
                      dataType: "jsonp",
                      success: function (e) {
                        (r = e[0].thumbnail_large), u(r);
                      },
                    })
                  : "vzaar" === i.type &&
                    e.ajax({
                      type: "GET",
                      url: "//vzaar.com/api/videos/" + i.id + ".json",
                      jsonp: "callback",
                      dataType: "jsonp",
                      success: function (e) {
                        (r = e.framegrab_url), u(r);
                      },
                    });
              }),
              (r.prototype.stop = function () {
                this._core.trigger("stop", null, "video"),
                  this._playing.find(".owl-video-frame").remove(),
                  this._playing.removeClass("owl-video-playing"),
                  (this._playing = null),
                  this._core.leave("playing"),
                  this._core.trigger("stopped", null, "video");
              }),
              (r.prototype.play = function (t) {
                var i,
                  n = e(t.target).closest("." + this._core.settings.itemClass),
                  r = this._videos[n.attr("data-video")],
                  o = r.width || "100%",
                  s = r.height || this._core.$stage.height();
                this._playing ||
                  (this._core.enter("playing"),
                  this._core.trigger("play", null, "video"),
                  (n = this._core.items(this._core.relative(n.index()))),
                  this._core.reset(n.index()),
                  (i = e(
                    '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'
                  )).attr("height", s),
                  i.attr("width", o),
                  "youtube" === r.type
                    ? i.attr(
                        "src",
                        "//www.youtube.com/embed/" +
                          r.id +
                          "?autoplay=1&rel=0&v=" +
                          r.id
                      )
                    : "vimeo" === r.type
                    ? i.attr(
                        "src",
                        "//player.vimeo.com/video/" + r.id + "?autoplay=1"
                      )
                    : "vzaar" === r.type &&
                      i.attr(
                        "src",
                        "//view.vzaar.com/" + r.id + "/player?autoplay=true"
                      ),
                  e(i)
                    .wrap('<div class="owl-video-frame" />')
                    .insertAfter(n.find(".owl-video")),
                  (this._playing = n.addClass("owl-video-playing")));
              }),
              (r.prototype.isInFullScreen = function () {
                var t =
                  i.fullscreenElement ||
                  i.mozFullScreenElement ||
                  i.webkitFullscreenElement;
                return t && e(t).parent().hasClass("owl-video-frame");
              }),
              (r.prototype.destroy = function () {
                var e, t;
                for (e in (this._core.$element.off("click.owl.video"),
                this._handlers))
                  this._core.$element.off(e, this._handlers[e]);
                for (t in Object.getOwnPropertyNames(this))
                  "function" != typeof this[t] && (this[t] = null);
              }),
              (e.fn.owlCarousel.Constructor.Plugins.Video = r);
          })(window.Zepto || window.jQuery, window, document),
          (function (e, t, i, n) {
            var r = function t(i) {
              (this.core = i),
                (this.core.options = e.extend(
                  {},
                  t.Defaults,
                  this.core.options
                )),
                (this.swapping = !0),
                (this.previous = n),
                (this.next = n),
                (this.handlers = {
                  "change.owl.carousel": e.proxy(function (e) {
                    e.namespace &&
                      "position" == e.property.name &&
                      ((this.previous = this.core.current()),
                      (this.next = e.property.value));
                  }, this),
                  "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
                    e.proxy(function (e) {
                      e.namespace && (this.swapping = "translated" == e.type);
                    }, this),
                  "translate.owl.carousel": e.proxy(function (e) {
                    e.namespace &&
                      this.swapping &&
                      (this.core.options.animateOut ||
                        this.core.options.animateIn) &&
                      this.swap();
                  }, this),
                }),
                this.core.$element.on(this.handlers);
            };
            (r.Defaults = { animateOut: !1, animateIn: !1 }),
              (r.prototype.swap = function () {
                if (
                  1 === this.core.settings.items &&
                  e.support.animation &&
                  e.support.transition
                ) {
                  this.core.speed(0);
                  var t,
                    i = e.proxy(this.clear, this),
                    n = this.core.$stage.children().eq(this.previous),
                    r = this.core.$stage.children().eq(this.next),
                    o = this.core.settings.animateIn,
                    s = this.core.settings.animateOut;
                  this.core.current() !== this.previous &&
                    (s &&
                      ((t =
                        this.core.coordinates(this.previous) -
                        this.core.coordinates(this.next)),
                      n
                        .one(e.support.animation.end, i)
                        .css({ left: t + "px" })
                        .addClass("animated owl-animated-out")
                        .addClass(s)),
                    o &&
                      r
                        .one(e.support.animation.end, i)
                        .addClass("animated owl-animated-in")
                        .addClass(o));
                }
              }),
              (r.prototype.clear = function (t) {
                e(t.target)
                  .css({ left: "" })
                  .removeClass("animated owl-animated-out owl-animated-in")
                  .removeClass(this.core.settings.animateIn)
                  .removeClass(this.core.settings.animateOut),
                  this.core.onTransitionEnd();
              }),
              (r.prototype.destroy = function () {
                var e, t;
                for (e in this.handlers)
                  this.core.$element.off(e, this.handlers[e]);
                for (t in Object.getOwnPropertyNames(this))
                  "function" != typeof this[t] && (this[t] = null);
              }),
              (e.fn.owlCarousel.Constructor.Plugins.Animate = r);
          })(window.Zepto || window.jQuery, window, document),
          (function (e, t, i, n) {
            var r = function t(i) {
              (this._core = i),
                (this._call = null),
                (this._time = 0),
                (this._timeout = 0),
                (this._paused = !0),
                (this._handlers = {
                  "changed.owl.carousel": e.proxy(function (e) {
                    e.namespace && "settings" === e.property.name
                      ? this._core.settings.autoplay
                        ? this.play()
                        : this.stop()
                      : e.namespace &&
                        "position" === e.property.name &&
                        this._paused &&
                        (this._time = 0);
                  }, this),
                  "initialized.owl.carousel": e.proxy(function (e) {
                    e.namespace && this._core.settings.autoplay && this.play();
                  }, this),
                  "play.owl.autoplay": e.proxy(function (e, t, i) {
                    e.namespace && this.play(t, i);
                  }, this),
                  "stop.owl.autoplay": e.proxy(function (e) {
                    e.namespace && this.stop();
                  }, this),
                  "mouseover.owl.autoplay": e.proxy(function () {
                    this._core.settings.autoplayHoverPause &&
                      this._core.is("rotating") &&
                      this.pause();
                  }, this),
                  "mouseleave.owl.autoplay": e.proxy(function () {
                    this._core.settings.autoplayHoverPause &&
                      this._core.is("rotating") &&
                      this.play();
                  }, this),
                  "touchstart.owl.core": e.proxy(function () {
                    this._core.settings.autoplayHoverPause &&
                      this._core.is("rotating") &&
                      this.pause();
                  }, this),
                  "touchend.owl.core": e.proxy(function () {
                    this._core.settings.autoplayHoverPause && this.play();
                  }, this),
                }),
                this._core.$element.on(this._handlers),
                (this._core.options = e.extend(
                  {},
                  t.Defaults,
                  this._core.options
                ));
            };
            (r.Defaults = {
              autoplay: !1,
              autoplayTimeout: 5e3,
              autoplayHoverPause: !1,
              autoplaySpeed: !1,
            }),
              (r.prototype._next = function (n) {
                (this._call = t.setTimeout(
                  e.proxy(this._next, this, n),
                  this._timeout *
                    (Math.round(this.read() / this._timeout) + 1) -
                    this.read()
                )),
                  this._core.is("interacting") ||
                    i.hidden ||
                    this._core.next(n || this._core.settings.autoplaySpeed);
              }),
              (r.prototype.read = function () {
                return new Date().getTime() - this._time;
              }),
              (r.prototype.play = function (i, n) {
                var r;
                this._core.is("rotating") || this._core.enter("rotating"),
                  (i = i || this._core.settings.autoplayTimeout),
                  (r = Math.min(this._time % (this._timeout || i), i)),
                  this._paused
                    ? ((this._time = this.read()), (this._paused = !1))
                    : t.clearTimeout(this._call),
                  (this._time += (this.read() % i) - r),
                  (this._timeout = i),
                  (this._call = t.setTimeout(
                    e.proxy(this._next, this, n),
                    i - r
                  ));
              }),
              (r.prototype.stop = function () {
                this._core.is("rotating") &&
                  ((this._time = 0),
                  (this._paused = !0),
                  t.clearTimeout(this._call),
                  this._core.leave("rotating"));
              }),
              (r.prototype.pause = function () {
                this._core.is("rotating") &&
                  !this._paused &&
                  ((this._time = this.read()),
                  (this._paused = !0),
                  t.clearTimeout(this._call));
              }),
              (r.prototype.destroy = function () {
                var e, t;
                for (e in (this.stop(), this._handlers))
                  this._core.$element.off(e, this._handlers[e]);
                for (t in Object.getOwnPropertyNames(this))
                  "function" != typeof this[t] && (this[t] = null);
              }),
              (e.fn.owlCarousel.Constructor.Plugins.autoplay = r);
          })(window.Zepto || window.jQuery, window, document),
          (function (e, t, i, n) {
            "use strict";
            var r = function t(i) {
              (this._core = i),
                (this._initialized = !1),
                (this._pages = []),
                (this._controls = {}),
                (this._templates = []),
                (this.$element = this._core.$element),
                (this._overrides = {
                  next: this._core.next,
                  prev: this._core.prev,
                  to: this._core.to,
                }),
                (this._handlers = {
                  "prepared.owl.carousel": e.proxy(function (t) {
                    t.namespace &&
                      this._core.settings.dotsData &&
                      this._templates.push(
                        '<div class="' +
                          this._core.settings.dotClass +
                          '">' +
                          e(t.content)
                            .find("[data-dot]")
                            .addBack("[data-dot]")
                            .attr("data-dot") +
                          "</div>"
                      );
                  }, this),
                  "added.owl.carousel": e.proxy(function (e) {
                    e.namespace &&
                      this._core.settings.dotsData &&
                      this._templates.splice(
                        e.position,
                        0,
                        this._templates.pop()
                      );
                  }, this),
                  "remove.owl.carousel": e.proxy(function (e) {
                    e.namespace &&
                      this._core.settings.dotsData &&
                      this._templates.splice(e.position, 1);
                  }, this),
                  "changed.owl.carousel": e.proxy(function (e) {
                    e.namespace && "position" == e.property.name && this.draw();
                  }, this),
                  "initialized.owl.carousel": e.proxy(function (e) {
                    e.namespace &&
                      !this._initialized &&
                      (this._core.trigger("initialize", null, "navigation"),
                      this.initialize(),
                      this.update(),
                      this.draw(),
                      (this._initialized = !0),
                      this._core.trigger("initialized", null, "navigation"));
                  }, this),
                  "refreshed.owl.carousel": e.proxy(function (e) {
                    e.namespace &&
                      this._initialized &&
                      (this._core.trigger("refresh", null, "navigation"),
                      this.update(),
                      this.draw(),
                      this._core.trigger("refreshed", null, "navigation"));
                  }, this),
                }),
                (this._core.options = e.extend(
                  {},
                  t.Defaults,
                  this._core.options
                )),
                this.$element.on(this._handlers);
            };
            (r.Defaults = {
              nav: !1,
              navText: [
                '<span aria-label="Previous">&#x2039;</span>',
                '<span aria-label="Next">&#x203a;</span>',
              ],
              navSpeed: !1,
              navElement: 'button type="button" role="presentation"',
              navContainer: !1,
              navContainerClass: "owl-nav",
              navClass: ["owl-prev", "owl-next"],
              slideBy: 1,
              dotClass: "owl-dot",
              dotsClass: "owl-dots",
              dots: !0,
              dotsEach: !1,
              dotsData: !1,
              dotsSpeed: !1,
              dotsContainer: !1,
            }),
              (r.prototype.initialize = function () {
                var t,
                  i = this._core.settings;
                for (t in ((this._controls.$relative = (
                  i.navContainer
                    ? e(i.navContainer)
                    : e("<div>")
                        .addClass(i.navContainerClass)
                        .appendTo(this.$element)
                ).addClass("disabled")),
                (this._controls.$previous = e("<" + i.navElement + ">")
                  .addClass(i.navClass[0])
                  .html(i.navText[0])
                  .prependTo(this._controls.$relative)
                  .on(
                    "click",
                    e.proxy(function (e) {
                      this.prev(i.navSpeed);
                    }, this)
                  )),
                (this._controls.$next = e("<" + i.navElement + ">")
                  .addClass(i.navClass[1])
                  .html(i.navText[1])
                  .appendTo(this._controls.$relative)
                  .on(
                    "click",
                    e.proxy(function (e) {
                      this.next(i.navSpeed);
                    }, this)
                  )),
                i.dotsData ||
                  (this._templates = [
                    e('<button role="button">')
                      .addClass(i.dotClass)
                      .append(e("<span>"))
                      .prop("outerHTML"),
                  ]),
                (this._controls.$absolute = (
                  i.dotsContainer
                    ? e(i.dotsContainer)
                    : e("<div>").addClass(i.dotsClass).appendTo(this.$element)
                ).addClass("disabled")),
                this._controls.$absolute.on(
                  "click",
                  "button",
                  e.proxy(function (t) {
                    var n = e(t.target).parent().is(this._controls.$absolute)
                      ? e(t.target).index()
                      : e(t.target).parent().index();
                    t.preventDefault(), this.to(n, i.dotsSpeed);
                  }, this)
                ),
                this._overrides))
                  this._core[t] = e.proxy(this[t], this);
              }),
              (r.prototype.destroy = function () {
                var e, t, i, n, r;
                for (e in ((r = this._core.settings), this._handlers))
                  this.$element.off(e, this._handlers[e]);
                for (t in this._controls)
                  "$relative" === t && r.navContainer
                    ? this._controls[t].html("")
                    : this._controls[t].remove();
                for (n in this.overides) this._core[n] = this._overrides[n];
                for (i in Object.getOwnPropertyNames(this))
                  "function" != typeof this[i] && (this[i] = null);
              }),
              (r.prototype.update = function () {
                var e,
                  t,
                  i = this._core.clones().length / 2,
                  n = i + this._core.items().length,
                  r = this._core.maximum(!0),
                  o = this._core.settings,
                  s =
                    o.center || o.autoWidth || o.dotsData
                      ? 1
                      : o.dotsEach || o.items;
                if (
                  ("page" !== o.slideBy &&
                    (o.slideBy = Math.min(o.slideBy, o.items)),
                  o.dots || "page" == o.slideBy)
                )
                  for (this._pages = [], e = i, t = 0; e < n; e++) {
                    if (t >= s || 0 === t) {
                      if (
                        (this._pages.push({
                          start: Math.min(r, e - i),
                          end: e - i + s - 1,
                        }),
                        Math.min(r, e - i) === r)
                      )
                        break;
                      t = 0;
                    }
                    t += this._core.mergers(this._core.relative(e));
                  }
              }),
              (r.prototype.draw = function () {
                var t,
                  i = this._core.settings,
                  n = this._core.items().length <= i.items,
                  r = this._core.relative(this._core.current()),
                  o = i.loop || i.rewind;
                this._controls.$relative.toggleClass("disabled", !i.nav || n),
                  i.nav &&
                    (this._controls.$previous.toggleClass(
                      "disabled",
                      !o && r <= this._core.minimum(!0)
                    ),
                    this._controls.$next.toggleClass(
                      "disabled",
                      !o && r >= this._core.maximum(!0)
                    )),
                  this._controls.$absolute.toggleClass(
                    "disabled",
                    !i.dots || n
                  ),
                  i.dots &&
                    ((t =
                      this._pages.length -
                      this._controls.$absolute.children().length),
                    i.dotsData && 0 !== t
                      ? this._controls.$absolute.html(this._templates.join(""))
                      : t > 0
                      ? this._controls.$absolute.append(
                          new Array(t + 1).join(this._templates[0])
                        )
                      : t < 0 &&
                        this._controls.$absolute.children().slice(t).remove(),
                    this._controls.$absolute
                      .find(".active")
                      .removeClass("active"),
                    this._controls.$absolute
                      .children()
                      .eq(e.inArray(this.current(), this._pages))
                      .addClass("active"));
              }),
              (r.prototype.onTrigger = function (t) {
                var i = this._core.settings;
                t.page = {
                  index: e.inArray(this.current(), this._pages),
                  count: this._pages.length,
                  size:
                    i &&
                    (i.center || i.autoWidth || i.dotsData
                      ? 1
                      : i.dotsEach || i.items),
                };
              }),
              (r.prototype.current = function () {
                var t = this._core.relative(this._core.current());
                return e
                  .grep(
                    this._pages,
                    e.proxy(function (e, i) {
                      return e.start <= t && e.end >= t;
                    }, this)
                  )
                  .pop();
              }),
              (r.prototype.getPosition = function (t) {
                var i,
                  n,
                  r = this._core.settings;
                return (
                  "page" == r.slideBy
                    ? ((i = e.inArray(this.current(), this._pages)),
                      (n = this._pages.length),
                      t ? ++i : --i,
                      (i = this._pages[((i % n) + n) % n].start))
                    : ((i = this._core.relative(this._core.current())),
                      (n = this._core.items().length),
                      t ? (i += r.slideBy) : (i -= r.slideBy)),
                  i
                );
              }),
              (r.prototype.next = function (t) {
                e.proxy(this._overrides.to, this._core)(
                  this.getPosition(!0),
                  t
                );
              }),
              (r.prototype.prev = function (t) {
                e.proxy(this._overrides.to, this._core)(
                  this.getPosition(!1),
                  t
                );
              }),
              (r.prototype.to = function (t, i, n) {
                var r;
                !n && this._pages.length
                  ? ((r = this._pages.length),
                    e.proxy(this._overrides.to, this._core)(
                      this._pages[((t % r) + r) % r].start,
                      i
                    ))
                  : e.proxy(this._overrides.to, this._core)(t, i);
              }),
              (e.fn.owlCarousel.Constructor.Plugins.Navigation = r);
          })(window.Zepto || window.jQuery, window, document),
          (function (e, t, i, n) {
            "use strict";
            var r = function i(n) {
              (this._core = n),
                (this._hashes = {}),
                (this.$element = this._core.$element),
                (this._handlers = {
                  "initialized.owl.carousel": e.proxy(function (i) {
                    i.namespace &&
                      "URLHash" === this._core.settings.startPosition &&
                      e(t).trigger("hashchange.owl.navigation");
                  }, this),
                  "prepared.owl.carousel": e.proxy(function (t) {
                    if (t.namespace) {
                      var i = e(t.content)
                        .find("[data-hash]")
                        .addBack("[data-hash]")
                        .attr("data-hash");
                      if (!i) return;
                      this._hashes[i] = t.content;
                    }
                  }, this),
                  "changed.owl.carousel": e.proxy(function (i) {
                    if (i.namespace && "position" === i.property.name) {
                      var n = this._core.items(
                          this._core.relative(this._core.current())
                        ),
                        r = e
                          .map(this._hashes, function (e, t) {
                            return e === n ? t : null;
                          })
                          .join();
                      if (!r || t.location.hash.slice(1) === r) return;
                      t.location.hash = r;
                    }
                  }, this),
                }),
                (this._core.options = e.extend(
                  {},
                  i.Defaults,
                  this._core.options
                )),
                this.$element.on(this._handlers),
                e(t).on(
                  "hashchange.owl.navigation",
                  e.proxy(function (e) {
                    var i = t.location.hash.substring(1),
                      n = this._core.$stage.children(),
                      r = this._hashes[i] && n.index(this._hashes[i]);
                    void 0 !== r &&
                      r !== this._core.current() &&
                      this._core.to(this._core.relative(r), !1, !0);
                  }, this)
                );
            };
            (r.Defaults = { URLhashListener: !1 }),
              (r.prototype.destroy = function () {
                var i, n;
                for (i in (e(t).off("hashchange.owl.navigation"),
                this._handlers))
                  this._core.$element.off(i, this._handlers[i]);
                for (n in Object.getOwnPropertyNames(this))
                  "function" != typeof this[n] && (this[n] = null);
              }),
              (e.fn.owlCarousel.Constructor.Plugins.Hash = r);
          })(window.Zepto || window.jQuery, window, document),
          (function (e, t, i, n) {
            function r(t, i) {
              var n = !1,
                r = t.charAt(0).toUpperCase() + t.slice(1);
              return (
                e.each(
                  (t + " " + a.join(r + " ") + r).split(" "),
                  function (e, t) {
                    if (void 0 !== s[t]) return (n = !i || t), !1;
                  }
                ),
                n
              );
            }
            function o(e) {
              return r(e, !0);
            }
            var s = e("<support>").get(0).style,
              a = "Webkit Moz O ms".split(" "),
              l = {
                transition: {
                  end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend",
                  },
                },
                animation: {
                  end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend",
                  },
                },
              };
            !!r("transition") &&
              ((e.support.transition = new String(o("transition"))),
              (e.support.transition.end =
                l.transition.end[e.support.transition])),
              !!r("animation") &&
                ((e.support.animation = new String(o("animation"))),
                (e.support.animation.end =
                  l.animation.end[e.support.animation])),
              r("transform") &&
                ((e.support.transform = new String(o("transform"))),
                (e.support.transform3d = !!r("perspective")));
          })(window.Zepto || window.jQuery, window, document);
      },
      225: (e, t, i) => {
        var n, r;
        function o(e) {
          return (o =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        (e = i.nmd(e)),
          (function (e) {
            "use strict";
            if (!e.jQuery) {
              var t = function e(t, i) {
                return new e.fn.init(t, i);
              };
              (t.isWindow = function (e) {
                return e && e === e.window;
              }),
                (t.type = function (e) {
                  return e
                    ? "object" === o(e) || "function" == typeof e
                      ? n[s.call(e)] || "object"
                      : o(e)
                    : e + "";
                }),
                (t.isArray =
                  Array.isArray ||
                  function (e) {
                    return "array" === t.type(e);
                  }),
                (t.isPlainObject = function (e) {
                  var i;
                  if (
                    !e ||
                    "object" !== t.type(e) ||
                    e.nodeType ||
                    t.isWindow(e)
                  )
                    return !1;
                  try {
                    if (
                      e.constructor &&
                      !r.call(e, "constructor") &&
                      !r.call(e.constructor.prototype, "isPrototypeOf")
                    )
                      return !1;
                  } catch (e) {
                    return !1;
                  }
                  for (i in e);
                  return void 0 === i || r.call(e, i);
                }),
                (t.each = function (e, t, i) {
                  var n = 0,
                    r = e.length,
                    o = c(e);
                  if (i) {
                    if (o) for (; n < r && !1 !== t.apply(e[n], i); n++);
                    else
                      for (n in e)
                        if (e.hasOwnProperty(n) && !1 === t.apply(e[n], i))
                          break;
                  } else if (o)
                    for (; n < r && !1 !== t.call(e[n], n, e[n]); n++);
                  else
                    for (n in e)
                      if (e.hasOwnProperty(n) && !1 === t.call(e[n], n, e[n]))
                        break;
                  return e;
                }),
                (t.data = function (e, n, r) {
                  if (void 0 === r) {
                    var o = e[t.expando],
                      s = o && i[o];
                    if (void 0 === n) return s;
                    if (s && n in s) return s[n];
                  } else if (void 0 !== n) {
                    var a = e[t.expando] || (e[t.expando] = ++t.uuid);
                    return (i[a] = i[a] || {}), (i[a][n] = r), r;
                  }
                }),
                (t.removeData = function (e, n) {
                  var r = e[t.expando],
                    o = r && i[r];
                  o &&
                    (n
                      ? t.each(n, function (e, t) {
                          delete o[t];
                        })
                      : delete i[r]);
                }),
                (t.extend = function () {
                  var e,
                    i,
                    n,
                    r,
                    s,
                    a,
                    l = arguments[0] || {},
                    c = 1,
                    u = arguments.length,
                    h = !1;
                  for (
                    "boolean" == typeof l &&
                      ((h = l), (l = arguments[c] || {}), c++),
                      "object" !== o(l) && "function" !== t.type(l) && (l = {}),
                      c === u && ((l = this), c--);
                    c < u;
                    c++
                  )
                    if ((s = arguments[c]))
                      for (r in s)
                        s.hasOwnProperty(r) &&
                          ((e = l[r]),
                          l !== (n = s[r]) &&
                            (h &&
                            n &&
                            (t.isPlainObject(n) || (i = t.isArray(n)))
                              ? (i
                                  ? ((i = !1), (a = e && t.isArray(e) ? e : []))
                                  : (a = e && t.isPlainObject(e) ? e : {}),
                                (l[r] = t.extend(h, a, n)))
                              : void 0 !== n && (l[r] = n)));
                  return l;
                }),
                (t.queue = function (e, i, n) {
                  if (e) {
                    var r,
                      o,
                      s = t.data(e, (i = (i || "fx") + "queue"));
                    return n
                      ? (!s || t.isArray(n)
                          ? (s = t.data(
                              e,
                              i,
                              ((o = []),
                              (r = n) &&
                                (c(Object(r))
                                  ? (function (e, t) {
                                      for (
                                        var i = +t.length, n = 0, r = e.length;
                                        n < i;

                                      )
                                        e[r++] = t[n++];
                                      if (i != i)
                                        for (; void 0 !== t[n]; )
                                          e[r++] = t[n++];
                                      e.length = r;
                                    })(o, "string" == typeof r ? [r] : r)
                                  : [].push.call(o, r)),
                              o)
                            ))
                          : s.push(n),
                        s)
                      : s || [];
                  }
                }),
                (t.dequeue = function (e, i) {
                  t.each(e.nodeType ? [e] : e, function (e, n) {
                    var r = t.queue(n, (i = i || "fx")),
                      o = r.shift();
                    "inprogress" === o && (o = r.shift()),
                      o &&
                        ("fx" === i && r.unshift("inprogress"),
                        o.call(n, function () {
                          t.dequeue(n, i);
                        }));
                  });
                }),
                (t.fn = t.prototype =
                  {
                    init: function (e) {
                      if (e.nodeType) return (this[0] = e), this;
                      throw new Error("Not a DOM node.");
                    },
                    offset: function () {
                      var t = this[0].getBoundingClientRect
                        ? this[0].getBoundingClientRect()
                        : { top: 0, left: 0 };
                      return {
                        top:
                          t.top +
                          (e.pageYOffset || document.scrollTop || 0) -
                          (document.clientTop || 0),
                        left:
                          t.left +
                          (e.pageXOffset || document.scrollLeft || 0) -
                          (document.clientLeft || 0),
                      };
                    },
                    position: function () {
                      var e = this[0],
                        i = (function (e) {
                          for (
                            var t = e.offsetParent;
                            t &&
                            "html" !== t.nodeName.toLowerCase() &&
                            t.style &&
                            "static" === t.style.position;

                          )
                            t = t.offsetParent;
                          return t || document;
                        })(e),
                        n = this.offset(),
                        r = /^(?:body|html)$/i.test(i.nodeName)
                          ? { top: 0, left: 0 }
                          : t(i).offset();
                      return (
                        (n.top -= parseFloat(e.style.marginTop) || 0),
                        (n.left -= parseFloat(e.style.marginLeft) || 0),
                        i.style &&
                          ((r.top += parseFloat(i.style.borderTopWidth) || 0),
                          (r.left += parseFloat(i.style.borderLeftWidth) || 0)),
                        { top: n.top - r.top, left: n.left - r.left }
                      );
                    },
                  });
              var i = {};
              (t.expando = "velocity" + new Date().getTime()), (t.uuid = 0);
              for (
                var n = {},
                  r = n.hasOwnProperty,
                  s = n.toString,
                  a =
                    "Boolean Number String Function Array Date RegExp Object Error".split(
                      " "
                    ),
                  l = 0;
                l < a.length;
                l++
              )
                n["[object " + a[l] + "]"] = a[l].toLowerCase();
              (t.fn.init.prototype = t.fn), (e.Velocity = { Utilities: t });
            }
            function c(e) {
              var i = e.length,
                n = t.type(e);
              return (
                "function" !== n &&
                !t.isWindow(e) &&
                (!(1 !== e.nodeType || !i) ||
                  "array" === n ||
                  0 === i ||
                  ("number" == typeof i && i > 0 && i - 1 in e))
              );
            }
          })(window),
          (function (s) {
            "use strict";
            "object" === o(e) && "object" === o(e.exports)
              ? (e.exports = s())
              : void 0 ===
                  (r = "function" == typeof (n = s) ? n.call(t, i, t, e) : n) ||
                (e.exports = r);
          })(function () {
            "use strict";
            return (function (e, t, i, n) {
              var r,
                o = (function () {
                  if (i.documentMode) return i.documentMode;
                  for (var e = 7; e > 4; e--) {
                    var t = i.createElement("div");
                    if (
                      ((t.innerHTML =
                        "\x3c!--[if IE " +
                        e +
                        "]><span></span><![endif]--\x3e"),
                      t.getElementsByTagName("span").length)
                    )
                      return (t = null), e;
                  }
                  return n;
                })(),
                s =
                  ((r = 0),
                  t.webkitRequestAnimationFrame ||
                    t.mozRequestAnimationFrame ||
                    function (e) {
                      var t,
                        i = new Date().getTime();
                      return (
                        (t = Math.max(0, 16 - (i - r))),
                        (r = i + t),
                        setTimeout(function () {
                          e(i + t);
                        }, t)
                      );
                    }),
                a = (function () {
                  var e = t.performance || {};
                  if ("function" != typeof e.now) {
                    var i =
                      e.timing && e.timing.navigationStart
                        ? e.timing.navigationStart
                        : new Date().getTime();
                    e.now = function () {
                      return new Date().getTime() - i;
                    };
                  }
                  return e;
                })(),
                l = (function () {
                  var e = Array.prototype.slice;
                  try {
                    return e.call(i.documentElement), e;
                  } catch (t) {
                    return function (t, i) {
                      var n = this.length;
                      if (
                        ("number" != typeof t && (t = 0),
                        "number" != typeof i && (i = n),
                        this.slice)
                      )
                        return e.call(this, t, i);
                      var r,
                        o = [],
                        s = t >= 0 ? t : Math.max(0, n + t),
                        a = (i < 0 ? n + i : Math.min(i, n)) - s;
                      if (a > 0)
                        if (((o = new Array(a)), this.charAt))
                          for (r = 0; r < a; r++) o[r] = this.charAt(s + r);
                        else for (r = 0; r < a; r++) o[r] = this[s + r];
                      return o;
                    };
                  }
                })(),
                c = function () {
                  return Array.prototype.includes
                    ? function (e, t) {
                        return e.includes(t);
                      }
                    : Array.prototype.indexOf
                    ? function (e, t) {
                        return e.indexOf(t) >= 0;
                      }
                    : function (e, t) {
                        for (var i = 0; i < e.length; i++)
                          if (e[i] === t) return !0;
                        return !1;
                      };
                };
              function u(e) {
                return (
                  d.isWrapped(e) ? (e = l.call(e)) : d.isNode(e) && (e = [e]), e
                );
              }
              var h,
                d = {
                  isNumber: function (e) {
                    return "number" == typeof e;
                  },
                  isString: function (e) {
                    return "string" == typeof e;
                  },
                  isArray:
                    Array.isArray ||
                    function (e) {
                      return (
                        "[object Array]" === Object.prototype.toString.call(e)
                      );
                    },
                  isFunction: function (e) {
                    return (
                      "[object Function]" === Object.prototype.toString.call(e)
                    );
                  },
                  isNode: function (e) {
                    return e && e.nodeType;
                  },
                  isWrapped: function (e) {
                    return (
                      e &&
                      e !== t &&
                      d.isNumber(e.length) &&
                      !d.isString(e) &&
                      !d.isFunction(e) &&
                      !d.isNode(e) &&
                      (0 === e.length || d.isNode(e[0]))
                    );
                  },
                  isSVG: function (e) {
                    return t.SVGElement && e instanceof t.SVGElement;
                  },
                  isEmptyObject: function (e) {
                    for (var t in e) if (e.hasOwnProperty(t)) return !1;
                    return !0;
                  },
                },
                p = !1;
              if (
                (e.fn && e.fn.jquery
                  ? ((h = e), (p = !0))
                  : (h = t.Velocity.Utilities),
                o <= 8 && !p)
              )
                throw new Error(
                  "Velocity: IE8 and below require jQuery to be loaded before Velocity."
                );
              if (!(o <= 7)) {
                var f = 400,
                  m = "swing",
                  g = {
                    State: {
                      isMobile:
                        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                          navigator.userAgent
                        ),
                      isAndroid: /Android/i.test(navigator.userAgent),
                      isGingerbread: /Android 2\.3\.[3-7]/i.test(
                        navigator.userAgent
                      ),
                      isChrome: t.chrome,
                      isFirefox: /Firefox/i.test(navigator.userAgent),
                      prefixElement: i.createElement("div"),
                      prefixMatches: {},
                      scrollAnchor: null,
                      scrollPropertyLeft: null,
                      scrollPropertyTop: null,
                      isTicking: !1,
                      calls: [],
                      delayedElements: { count: 0 },
                    },
                    CSS: {},
                    Utilities: h,
                    Redirects: {},
                    Easings: {},
                    Promise: t.Promise,
                    defaults: {
                      queue: "",
                      duration: f,
                      easing: m,
                      begin: n,
                      complete: n,
                      progress: n,
                      display: n,
                      visibility: n,
                      loop: !1,
                      delay: !1,
                      mobileHA: !0,
                      _cacheValues: !0,
                      promiseRejectEmpty: !0,
                    },
                    init: function (e) {
                      h.data(e, "velocity", {
                        isSVG: d.isSVG(e),
                        isAnimating: !1,
                        computedStyle: null,
                        tweensContainer: null,
                        rootPropertyValueCache: {},
                        transformCache: {},
                      });
                    },
                    hook: null,
                    mock: !1,
                    version: { major: 1, minor: 5, patch: 0 },
                    debug: !1,
                    timestamp: !0,
                    pauseAll: function (e) {
                      var t = new Date().getTime();
                      h.each(g.State.calls, function (t, i) {
                        if (i) {
                          if (
                            e !== n &&
                            (i[2].queue !== e || !1 === i[2].queue)
                          )
                            return !0;
                          i[5] = { resume: !1 };
                        }
                      }),
                        h.each(g.State.delayedElements, function (e, i) {
                          i && S(i, t);
                        });
                    },
                    resumeAll: function (e) {
                      new Date().getTime();
                      h.each(g.State.calls, function (t, i) {
                        if (i) {
                          if (
                            e !== n &&
                            (i[2].queue !== e || !1 === i[2].queue)
                          )
                            return !0;
                          i[5] && (i[5].resume = !0);
                        }
                      }),
                        h.each(g.State.delayedElements, function (e, t) {
                          t && C(t);
                        });
                    },
                  };
                t.pageYOffset !== n
                  ? ((g.State.scrollAnchor = t),
                    (g.State.scrollPropertyLeft = "pageXOffset"),
                    (g.State.scrollPropertyTop = "pageYOffset"))
                  : ((g.State.scrollAnchor =
                      i.documentElement || i.body.parentNode || i.body),
                    (g.State.scrollPropertyLeft = "scrollLeft"),
                    (g.State.scrollPropertyTop = "scrollTop"));
                var v = (function () {
                  function e(e) {
                    return -e.tension * e.x - e.friction * e.v;
                  }
                  function t(t, i, n) {
                    var r = {
                      x: t.x + n.dx * i,
                      v: t.v + n.dv * i,
                      tension: t.tension,
                      friction: t.friction,
                    };
                    return { dx: r.v, dv: e(r) };
                  }
                  function i(i, n) {
                    var r = { dx: i.v, dv: e(i) },
                      o = t(i, 0.5 * n, r),
                      s = t(i, 0.5 * n, o),
                      a = t(i, n, s),
                      l = (1 / 6) * (r.dx + 2 * (o.dx + s.dx) + a.dx),
                      c = (1 / 6) * (r.dv + 2 * (o.dv + s.dv) + a.dv);
                    return (i.x = i.x + l * n), (i.v = i.v + c * n), i;
                  }
                  return function e(t, n, r) {
                    var o,
                      s,
                      a,
                      l = { x: -1, v: 0, tension: null, friction: null },
                      c = [0],
                      u = 0,
                      h = 1e-4;
                    for (
                      t = parseFloat(t) || 500,
                        n = parseFloat(n) || 20,
                        r = r || null,
                        l.tension = t,
                        l.friction = n,
                        s = (o = null !== r)
                          ? ((u = e(t, n)) / r) * 0.016
                          : 0.016;
                      (a = i(a || l, s)),
                        c.push(1 + a.x),
                        (u += 16),
                        Math.abs(a.x) > h && Math.abs(a.v) > h;

                    );
                    return o
                      ? function (e) {
                          return c[(e * (c.length - 1)) | 0];
                        }
                      : u;
                  };
                })();
                (g.Easings = {
                  linear: function (e) {
                    return e;
                  },
                  swing: function (e) {
                    return 0.5 - Math.cos(e * Math.PI) / 2;
                  },
                  spring: function (e) {
                    return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e);
                  },
                }),
                  h.each(
                    [
                      ["ease", [0.25, 0.1, 0.25, 1]],
                      ["ease-in", [0.42, 0, 1, 1]],
                      ["ease-out", [0, 0, 0.58, 1]],
                      ["ease-in-out", [0.42, 0, 0.58, 1]],
                      ["easeInSine", [0.47, 0, 0.745, 0.715]],
                      ["easeOutSine", [0.39, 0.575, 0.565, 1]],
                      ["easeInOutSine", [0.445, 0.05, 0.55, 0.95]],
                      ["easeInQuad", [0.55, 0.085, 0.68, 0.53]],
                      ["easeOutQuad", [0.25, 0.46, 0.45, 0.94]],
                      ["easeInOutQuad", [0.455, 0.03, 0.515, 0.955]],
                      ["easeInCubic", [0.55, 0.055, 0.675, 0.19]],
                      ["easeOutCubic", [0.215, 0.61, 0.355, 1]],
                      ["easeInOutCubic", [0.645, 0.045, 0.355, 1]],
                      ["easeInQuart", [0.895, 0.03, 0.685, 0.22]],
                      ["easeOutQuart", [0.165, 0.84, 0.44, 1]],
                      ["easeInOutQuart", [0.77, 0, 0.175, 1]],
                      ["easeInQuint", [0.755, 0.05, 0.855, 0.06]],
                      ["easeOutQuint", [0.23, 1, 0.32, 1]],
                      ["easeInOutQuint", [0.86, 0, 0.07, 1]],
                      ["easeInExpo", [0.95, 0.05, 0.795, 0.035]],
                      ["easeOutExpo", [0.19, 1, 0.22, 1]],
                      ["easeInOutExpo", [1, 0, 0, 1]],
                      ["easeInCirc", [0.6, 0.04, 0.98, 0.335]],
                      ["easeOutCirc", [0.075, 0.82, 0.165, 1]],
                      ["easeInOutCirc", [0.785, 0.135, 0.15, 0.86]],
                    ],
                    function (e, t) {
                      g.Easings[t[0]] = k.apply(null, t[1]);
                    }
                  );
                var y = (g.CSS = {
                  RegEx: {
                    isHex: /^#([A-f\d]{3}){1,2}$/i,
                    valueUnwrap: /^[A-z]+\((.*)\)$/i,
                    wrappedValueAlreadyExtracted:
                      /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                    valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi,
                  },
                  Lists: {
                    colors: [
                      "fill",
                      "stroke",
                      "stopColor",
                      "color",
                      "backgroundColor",
                      "borderColor",
                      "borderTopColor",
                      "borderRightColor",
                      "borderBottomColor",
                      "borderLeftColor",
                      "outlineColor",
                    ],
                    transformsBase: [
                      "translateX",
                      "translateY",
                      "scale",
                      "scaleX",
                      "scaleY",
                      "skewX",
                      "skewY",
                      "rotateZ",
                    ],
                    transforms3D: [
                      "transformPerspective",
                      "translateZ",
                      "scaleZ",
                      "rotateX",
                      "rotateY",
                    ],
                    units: [
                      "%",
                      "em",
                      "ex",
                      "ch",
                      "rem",
                      "vw",
                      "vh",
                      "vmin",
                      "vmax",
                      "cm",
                      "mm",
                      "Q",
                      "in",
                      "pc",
                      "pt",
                      "px",
                      "deg",
                      "grad",
                      "rad",
                      "turn",
                      "s",
                      "ms",
                    ],
                    colorNames: {
                      aliceblue: "240,248,255",
                      antiquewhite: "250,235,215",
                      aquamarine: "127,255,212",
                      aqua: "0,255,255",
                      azure: "240,255,255",
                      beige: "245,245,220",
                      bisque: "255,228,196",
                      black: "0,0,0",
                      blanchedalmond: "255,235,205",
                      blueviolet: "138,43,226",
                      blue: "0,0,255",
                      brown: "165,42,42",
                      burlywood: "222,184,135",
                      cadetblue: "95,158,160",
                      chartreuse: "127,255,0",
                      chocolate: "210,105,30",
                      coral: "255,127,80",
                      cornflowerblue: "100,149,237",
                      cornsilk: "255,248,220",
                      crimson: "220,20,60",
                      cyan: "0,255,255",
                      darkblue: "0,0,139",
                      darkcyan: "0,139,139",
                      darkgoldenrod: "184,134,11",
                      darkgray: "169,169,169",
                      darkgrey: "169,169,169",
                      darkgreen: "0,100,0",
                      darkkhaki: "189,183,107",
                      darkmagenta: "139,0,139",
                      darkolivegreen: "85,107,47",
                      darkorange: "255,140,0",
                      darkorchid: "153,50,204",
                      darkred: "139,0,0",
                      darksalmon: "233,150,122",
                      darkseagreen: "143,188,143",
                      darkslateblue: "72,61,139",
                      darkslategray: "47,79,79",
                      darkturquoise: "0,206,209",
                      darkviolet: "148,0,211",
                      deeppink: "255,20,147",
                      deepskyblue: "0,191,255",
                      dimgray: "105,105,105",
                      dimgrey: "105,105,105",
                      dodgerblue: "30,144,255",
                      firebrick: "178,34,34",
                      floralwhite: "255,250,240",
                      forestgreen: "34,139,34",
                      fuchsia: "255,0,255",
                      gainsboro: "220,220,220",
                      ghostwhite: "248,248,255",
                      gold: "255,215,0",
                      goldenrod: "218,165,32",
                      gray: "128,128,128",
                      grey: "128,128,128",
                      greenyellow: "173,255,47",
                      green: "0,128,0",
                      honeydew: "240,255,240",
                      hotpink: "255,105,180",
                      indianred: "205,92,92",
                      indigo: "75,0,130",
                      ivory: "255,255,240",
                      khaki: "240,230,140",
                      lavenderblush: "255,240,245",
                      lavender: "230,230,250",
                      lawngreen: "124,252,0",
                      lemonchiffon: "255,250,205",
                      lightblue: "173,216,230",
                      lightcoral: "240,128,128",
                      lightcyan: "224,255,255",
                      lightgoldenrodyellow: "250,250,210",
                      lightgray: "211,211,211",
                      lightgrey: "211,211,211",
                      lightgreen: "144,238,144",
                      lightpink: "255,182,193",
                      lightsalmon: "255,160,122",
                      lightseagreen: "32,178,170",
                      lightskyblue: "135,206,250",
                      lightslategray: "119,136,153",
                      lightsteelblue: "176,196,222",
                      lightyellow: "255,255,224",
                      limegreen: "50,205,50",
                      lime: "0,255,0",
                      linen: "250,240,230",
                      magenta: "255,0,255",
                      maroon: "128,0,0",
                      mediumaquamarine: "102,205,170",
                      mediumblue: "0,0,205",
                      mediumorchid: "186,85,211",
                      mediumpurple: "147,112,219",
                      mediumseagreen: "60,179,113",
                      mediumslateblue: "123,104,238",
                      mediumspringgreen: "0,250,154",
                      mediumturquoise: "72,209,204",
                      mediumvioletred: "199,21,133",
                      midnightblue: "25,25,112",
                      mintcream: "245,255,250",
                      mistyrose: "255,228,225",
                      moccasin: "255,228,181",
                      navajowhite: "255,222,173",
                      navy: "0,0,128",
                      oldlace: "253,245,230",
                      olivedrab: "107,142,35",
                      olive: "128,128,0",
                      orangered: "255,69,0",
                      orange: "255,165,0",
                      orchid: "218,112,214",
                      palegoldenrod: "238,232,170",
                      palegreen: "152,251,152",
                      paleturquoise: "175,238,238",
                      palevioletred: "219,112,147",
                      papayawhip: "255,239,213",
                      peachpuff: "255,218,185",
                      peru: "205,133,63",
                      pink: "255,192,203",
                      plum: "221,160,221",
                      powderblue: "176,224,230",
                      purple: "128,0,128",
                      red: "255,0,0",
                      rosybrown: "188,143,143",
                      royalblue: "65,105,225",
                      saddlebrown: "139,69,19",
                      salmon: "250,128,114",
                      sandybrown: "244,164,96",
                      seagreen: "46,139,87",
                      seashell: "255,245,238",
                      sienna: "160,82,45",
                      silver: "192,192,192",
                      skyblue: "135,206,235",
                      slateblue: "106,90,205",
                      slategray: "112,128,144",
                      snow: "255,250,250",
                      springgreen: "0,255,127",
                      steelblue: "70,130,180",
                      tan: "210,180,140",
                      teal: "0,128,128",
                      thistle: "216,191,216",
                      tomato: "255,99,71",
                      turquoise: "64,224,208",
                      violet: "238,130,238",
                      wheat: "245,222,179",
                      whitesmoke: "245,245,245",
                      white: "255,255,255",
                      yellowgreen: "154,205,50",
                      yellow: "255,255,0",
                    },
                  },
                  Hooks: {
                    templates: {
                      textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                      boxShadow: [
                        "Color X Y Blur Spread",
                        "black 0px 0px 0px 0px",
                      ],
                      clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                      backgroundPosition: ["X Y", "0% 0%"],
                      transformOrigin: ["X Y Z", "50% 50% 0px"],
                      perspectiveOrigin: ["X Y", "50% 50%"],
                    },
                    registered: {},
                    register: function () {
                      for (var e = 0; e < y.Lists.colors.length; e++) {
                        var t =
                          "color" === y.Lists.colors[e]
                            ? "0 0 0 1"
                            : "255 255 255 1";
                        y.Hooks.templates[y.Lists.colors[e]] = [
                          "Red Green Blue Alpha",
                          t,
                        ];
                      }
                      var i, n, r;
                      if (o)
                        for (i in y.Hooks.templates)
                          if (y.Hooks.templates.hasOwnProperty(i)) {
                            r = (n = y.Hooks.templates[i])[0].split(" ");
                            var s = n[1].match(y.RegEx.valueSplit);
                            "Color" === r[0] &&
                              (r.push(r.shift()),
                              s.push(s.shift()),
                              (y.Hooks.templates[i] = [
                                r.join(" "),
                                s.join(" "),
                              ]));
                          }
                      for (i in y.Hooks.templates)
                        if (y.Hooks.templates.hasOwnProperty(i))
                          for (var a in (r = (n =
                            y.Hooks.templates[i])[0].split(" ")))
                            if (r.hasOwnProperty(a)) {
                              var l = i + r[a],
                                c = a;
                              y.Hooks.registered[l] = [i, c];
                            }
                    },
                    getRoot: function (e) {
                      var t = y.Hooks.registered[e];
                      return t ? t[0] : e;
                    },
                    getUnit: function (e, t) {
                      var i =
                        (e.substr(t || 0, 5).match(/^[a-z%]+/) || [])[0] || "";
                      return i && c(y.Lists.units) ? i : "";
                    },
                    fixColors: function (e) {
                      return e.replace(
                        /(rgba?\(\s*)?(\b[a-z]+\b)/g,
                        function (e, t, i) {
                          return y.Lists.colorNames.hasOwnProperty(i)
                            ? (t || "rgba(") +
                                y.Lists.colorNames[i] +
                                (t ? "" : ",1)")
                            : t + i;
                        }
                      );
                    },
                    cleanRootPropertyValue: function (e, t) {
                      return (
                        y.RegEx.valueUnwrap.test(t) &&
                          (t = t.match(y.RegEx.valueUnwrap)[1]),
                        y.Values.isCSSNullValue(t) &&
                          (t = y.Hooks.templates[e][1]),
                        t
                      );
                    },
                    extractValue: function (e, t) {
                      var i = y.Hooks.registered[e];
                      if (i) {
                        var n = i[0],
                          r = i[1];
                        return (t = y.Hooks.cleanRootPropertyValue(n, t))
                          .toString()
                          .match(y.RegEx.valueSplit)[r];
                      }
                      return t;
                    },
                    injectValue: function (e, t, i) {
                      var n = y.Hooks.registered[e];
                      if (n) {
                        var r,
                          o = n[0],
                          s = n[1];
                        return (
                          ((r = (i = y.Hooks.cleanRootPropertyValue(o, i))
                            .toString()
                            .match(y.RegEx.valueSplit))[s] = t),
                          r.join(" ")
                        );
                      }
                      return i;
                    },
                  },
                  Normalizations: {
                    registered: {
                      clip: function (e, t, i) {
                        switch (e) {
                          case "name":
                            return "clip";
                          case "extract":
                            var n;
                            return y.RegEx.wrappedValueAlreadyExtracted.test(i)
                              ? i
                              : (n = i.toString().match(y.RegEx.valueUnwrap))
                              ? n[1].replace(/,(\s+)?/g, " ")
                              : i;
                          case "inject":
                            return "rect(" + i + ")";
                        }
                      },
                      blur: function (e, t, i) {
                        switch (e) {
                          case "name":
                            return g.State.isFirefox
                              ? "filter"
                              : "-webkit-filter";
                          case "extract":
                            var n = parseFloat(i);
                            if (!n && 0 !== n) {
                              var r = i
                                .toString()
                                .match(/blur\(([0-9]+[A-z]+)\)/i);
                              n = r ? r[1] : 0;
                            }
                            return n;
                          case "inject":
                            return parseFloat(i) ? "blur(" + i + ")" : "none";
                        }
                      },
                      opacity: function (e, t, i) {
                        if (o <= 8)
                          switch (e) {
                            case "name":
                              return "filter";
                            case "extract":
                              var n = i
                                .toString()
                                .match(/alpha\(opacity=(.*)\)/i);
                              return n ? n[1] / 100 : 1;
                            case "inject":
                              return (
                                (t.style.zoom = 1),
                                parseFloat(i) >= 1
                                  ? ""
                                  : "alpha(opacity=" +
                                    parseInt(100 * parseFloat(i), 10) +
                                    ")"
                              );
                          }
                        else
                          switch (e) {
                            case "name":
                              return "opacity";
                            case "extract":
                            case "inject":
                              return i;
                          }
                      },
                    },
                    register: function () {
                      (o && !(o > 9)) ||
                        g.State.isGingerbread ||
                        (y.Lists.transformsBase = y.Lists.transformsBase.concat(
                          y.Lists.transforms3D
                        ));
                      for (var e = 0; e < y.Lists.transformsBase.length; e++)
                        !(function () {
                          var t = y.Lists.transformsBase[e];
                          y.Normalizations.registered[t] = function (e, i, r) {
                            switch (e) {
                              case "name":
                                return "transform";
                              case "extract":
                                return x(i) === n ||
                                  x(i).transformCache[t] === n
                                  ? /^scale/i.test(t)
                                    ? 1
                                    : 0
                                  : x(i).transformCache[t].replace(/[()]/g, "");
                              case "inject":
                                var o = !1;
                                switch (t.substr(0, t.length - 1)) {
                                  case "translate":
                                    o = !/(%|px|em|rem|vw|vh|\d)$/i.test(r);
                                    break;
                                  case "scal":
                                  case "scale":
                                    g.State.isAndroid &&
                                      x(i).transformCache[t] === n &&
                                      r < 1 &&
                                      (r = 1),
                                      (o = !/(\d)$/i.test(r));
                                    break;
                                  case "skew":
                                  case "rotate":
                                    o = !/(deg|\d)$/i.test(r);
                                }
                                return (
                                  o || (x(i).transformCache[t] = "(" + r + ")"),
                                  x(i).transformCache[t]
                                );
                            }
                          };
                        })();
                      for (var t = 0; t < y.Lists.colors.length; t++)
                        !(function () {
                          var e = y.Lists.colors[t];
                          y.Normalizations.registered[e] = function (t, i, r) {
                            switch (t) {
                              case "name":
                                return e;
                              case "extract":
                                var s;
                                if (
                                  y.RegEx.wrappedValueAlreadyExtracted.test(r)
                                )
                                  s = r;
                                else {
                                  var a,
                                    l = {
                                      black: "rgb(0, 0, 0)",
                                      blue: "rgb(0, 0, 255)",
                                      gray: "rgb(128, 128, 128)",
                                      green: "rgb(0, 128, 0)",
                                      red: "rgb(255, 0, 0)",
                                      white: "rgb(255, 255, 255)",
                                    };
                                  /^[A-z]+$/i.test(r)
                                    ? (a = l[r] !== n ? l[r] : l.black)
                                    : y.RegEx.isHex.test(r)
                                    ? (a =
                                        "rgb(" +
                                        y.Values.hexToRgb(r).join(" ") +
                                        ")")
                                    : /^rgba?\(/i.test(r) || (a = l.black),
                                    (s = (a || r)
                                      .toString()
                                      .match(y.RegEx.valueUnwrap)[1]
                                      .replace(/,(\s+)?/g, " "));
                                }
                                return (
                                  (!o || o > 8) &&
                                    3 === s.split(" ").length &&
                                    (s += " 1"),
                                  s
                                );
                              case "inject":
                                return /^rgb/.test(r)
                                  ? r
                                  : (o <= 8
                                      ? 4 === r.split(" ").length &&
                                        (r = r
                                          .split(/\s+/)
                                          .slice(0, 3)
                                          .join(" "))
                                      : 3 === r.split(" ").length &&
                                        (r += " 1"),
                                    (o <= 8 ? "rgb" : "rgba") +
                                      "(" +
                                      r
                                        .replace(/\s+/g, ",")
                                        .replace(/\.(\d)+(?=,)/g, "") +
                                      ")");
                            }
                          };
                        })();
                      function i(e, t, i) {
                        if (
                          ("border-box" ===
                            y
                              .getPropertyValue(t, "boxSizing")
                              .toString()
                              .toLowerCase()) ===
                          (i || !1)
                        ) {
                          var n,
                            r,
                            o = 0,
                            s =
                              "width" === e
                                ? ["Left", "Right"]
                                : ["Top", "Bottom"],
                            a = [
                              "padding" + s[0],
                              "padding" + s[1],
                              "border" + s[0] + "Width",
                              "border" + s[1] + "Width",
                            ];
                          for (n = 0; n < a.length; n++)
                            (r = parseFloat(y.getPropertyValue(t, a[n]))),
                              isNaN(r) || (o += r);
                          return i ? -o : o;
                        }
                        return 0;
                      }
                      function r(e, t) {
                        return function (n, r, o) {
                          switch (n) {
                            case "name":
                              return e;
                            case "extract":
                              return parseFloat(o) + i(e, r, t);
                            case "inject":
                              return parseFloat(o) - i(e, r, t) + "px";
                          }
                        };
                      }
                      (y.Normalizations.registered.innerWidth = r("width", !0)),
                        (y.Normalizations.registered.innerHeight = r(
                          "height",
                          !0
                        )),
                        (y.Normalizations.registered.outerWidth = r("width")),
                        (y.Normalizations.registered.outerHeight = r("height"));
                    },
                  },
                  Names: {
                    camelCase: function (e) {
                      return e.replace(/-(\w)/g, function (e, t) {
                        return t.toUpperCase();
                      });
                    },
                    SVGAttribute: function (e) {
                      var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                      return (
                        (o || (g.State.isAndroid && !g.State.isChrome)) &&
                          (t += "|transform"),
                        new RegExp("^(" + t + ")$", "i").test(e)
                      );
                    },
                    prefixCheck: function (e) {
                      if (g.State.prefixMatches[e])
                        return [g.State.prefixMatches[e], !0];
                      for (
                        var t = ["", "Webkit", "Moz", "ms", "O"],
                          i = 0,
                          n = t.length;
                        i < n;
                        i++
                      ) {
                        var r;
                        if (
                          ((r =
                            0 === i
                              ? e
                              : t[i] +
                                e.replace(/^\w/, function (e) {
                                  return e.toUpperCase();
                                })),
                          d.isString(g.State.prefixElement.style[r]))
                        )
                          return (g.State.prefixMatches[e] = r), [r, !0];
                      }
                      return [e, !1];
                    },
                  },
                  Values: {
                    hexToRgb: function (e) {
                      var t;
                      return (
                        (e = e.replace(
                          /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                          function (e, t, i, n) {
                            return t + t + i + i + n + n;
                          }
                        )),
                        (t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
                          e
                        ))
                          ? [
                              parseInt(t[1], 16),
                              parseInt(t[2], 16),
                              parseInt(t[3], 16),
                            ]
                          : [0, 0, 0]
                      );
                    },
                    isCSSNullValue: function (e) {
                      return (
                        !e ||
                        /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(
                          e
                        )
                      );
                    },
                    getUnitType: function (e) {
                      return /^(rotate|skew)/i.test(e)
                        ? "deg"
                        : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(
                            e
                          )
                        ? ""
                        : "px";
                    },
                    getDisplayType: function (e) {
                      var t = e && e.tagName.toString().toLowerCase();
                      return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(
                        t
                      )
                        ? "inline"
                        : /^(li)$/i.test(t)
                        ? "list-item"
                        : /^(tr)$/i.test(t)
                        ? "table-row"
                        : /^(table)$/i.test(t)
                        ? "table"
                        : /^(tbody)$/i.test(t)
                        ? "table-row-group"
                        : "block";
                    },
                    addClass: function (e, t) {
                      if (e)
                        if (e.classList) e.classList.add(t);
                        else if (d.isString(e.className))
                          e.className += (e.className.length ? " " : "") + t;
                        else {
                          var i =
                            e.getAttribute(o <= 7 ? "className" : "class") ||
                            "";
                          e.setAttribute("class", i + (i ? " " : "") + t);
                        }
                    },
                    removeClass: function (e, t) {
                      if (e)
                        if (e.classList) e.classList.remove(t);
                        else if (d.isString(e.className))
                          e.className = e.className
                            .toString()
                            .replace(
                              new RegExp(
                                "(^|\\s)" + t.split(" ").join("|") + "(\\s|$)",
                                "gi"
                              ),
                              " "
                            );
                        else {
                          var i =
                            e.getAttribute(o <= 7 ? "className" : "class") ||
                            "";
                          e.setAttribute(
                            "class",
                            i.replace(
                              new RegExp(
                                "(^|s)" + t.split(" ").join("|") + "(s|$)",
                                "gi"
                              ),
                              " "
                            )
                          );
                        }
                    },
                  },
                  getPropertyValue: function (e, i, r, s) {
                    function a(e, i) {
                      var r = 0;
                      if (o <= 8) r = h.css(e, i);
                      else {
                        var l = !1;
                        /^(width|height)$/.test(i) &&
                          0 === y.getPropertyValue(e, "display") &&
                          ((l = !0),
                          y.setPropertyValue(
                            e,
                            "display",
                            y.Values.getDisplayType(e)
                          ));
                        var c,
                          u = function () {
                            l && y.setPropertyValue(e, "display", "none");
                          };
                        if (!s) {
                          if (
                            "height" === i &&
                            "border-box" !==
                              y
                                .getPropertyValue(e, "boxSizing")
                                .toString()
                                .toLowerCase()
                          ) {
                            var d =
                              e.offsetHeight -
                              (parseFloat(
                                y.getPropertyValue(e, "borderTopWidth")
                              ) || 0) -
                              (parseFloat(
                                y.getPropertyValue(e, "borderBottomWidth")
                              ) || 0) -
                              (parseFloat(
                                y.getPropertyValue(e, "paddingTop")
                              ) || 0) -
                              (parseFloat(
                                y.getPropertyValue(e, "paddingBottom")
                              ) || 0);
                            return u(), d;
                          }
                          if (
                            "width" === i &&
                            "border-box" !==
                              y
                                .getPropertyValue(e, "boxSizing")
                                .toString()
                                .toLowerCase()
                          ) {
                            var p =
                              e.offsetWidth -
                              (parseFloat(
                                y.getPropertyValue(e, "borderLeftWidth")
                              ) || 0) -
                              (parseFloat(
                                y.getPropertyValue(e, "borderRightWidth")
                              ) || 0) -
                              (parseFloat(
                                y.getPropertyValue(e, "paddingLeft")
                              ) || 0) -
                              (parseFloat(
                                y.getPropertyValue(e, "paddingRight")
                              ) || 0);
                            return u(), p;
                          }
                        }
                        (c =
                          x(e) === n
                            ? t.getComputedStyle(e, null)
                            : x(e).computedStyle
                            ? x(e).computedStyle
                            : (x(e).computedStyle = t.getComputedStyle(
                                e,
                                null
                              ))),
                          "borderColor" === i && (i = "borderTopColor"),
                          ("" !==
                            (r =
                              9 === o && "filter" === i
                                ? c.getPropertyValue(i)
                                : c[i]) &&
                            null !== r) ||
                            (r = e.style[i]),
                          u();
                      }
                      if (
                        "auto" === r &&
                        /^(top|right|bottom|left)$/i.test(i)
                      ) {
                        var f = a(e, "position");
                        ("fixed" === f ||
                          ("absolute" === f && /top|left/i.test(i))) &&
                          (r = h(e).position()[i] + "px");
                      }
                      return r;
                    }
                    var l;
                    if (y.Hooks.registered[i]) {
                      var c = i,
                        u = y.Hooks.getRoot(c);
                      r === n &&
                        (r = y.getPropertyValue(e, y.Names.prefixCheck(u)[0])),
                        y.Normalizations.registered[u] &&
                          (r = y.Normalizations.registered[u]("extract", e, r)),
                        (l = y.Hooks.extractValue(c, r));
                    } else if (y.Normalizations.registered[i]) {
                      var d, p;
                      "transform" !==
                        (d = y.Normalizations.registered[i]("name", e)) &&
                        ((p = a(e, y.Names.prefixCheck(d)[0])),
                        y.Values.isCSSNullValue(p) &&
                          y.Hooks.templates[i] &&
                          (p = y.Hooks.templates[i][1])),
                        (l = y.Normalizations.registered[i]("extract", e, p));
                    }
                    if (!/^[\d-]/.test(l)) {
                      var f = x(e);
                      if (f && f.isSVG && y.Names.SVGAttribute(i))
                        if (/^(height|width)$/i.test(i))
                          try {
                            l = e.getBBox()[i];
                          } catch (e) {
                            l = 0;
                          }
                        else l = e.getAttribute(i);
                      else l = a(e, y.Names.prefixCheck(i)[0]);
                    }
                    return (
                      y.Values.isCSSNullValue(l) && (l = 0),
                      g.debug >= 2 && console.log("Get " + i + ": " + l),
                      l
                    );
                  },
                  setPropertyValue: function (e, i, n, r, s) {
                    var a = i;
                    if ("scroll" === i)
                      s.container
                        ? (s.container["scroll" + s.direction] = n)
                        : "Left" === s.direction
                        ? t.scrollTo(n, s.alternateValue)
                        : t.scrollTo(s.alternateValue, n);
                    else if (
                      y.Normalizations.registered[i] &&
                      "transform" === y.Normalizations.registered[i]("name", e)
                    )
                      y.Normalizations.registered[i]("inject", e, n),
                        (a = "transform"),
                        (n = x(e).transformCache[i]);
                    else {
                      if (y.Hooks.registered[i]) {
                        var l = i,
                          c = y.Hooks.getRoot(i);
                        (r = r || y.getPropertyValue(e, c)),
                          (n = y.Hooks.injectValue(l, n, r)),
                          (i = c);
                      }
                      if (
                        (y.Normalizations.registered[i] &&
                          ((n = y.Normalizations.registered[i]("inject", e, n)),
                          (i = y.Normalizations.registered[i]("name", e))),
                        (a = y.Names.prefixCheck(i)[0]),
                        o <= 8)
                      )
                        try {
                          e.style[a] = n;
                        } catch (e) {
                          g.debug &&
                            console.log(
                              "Browser does not support [" +
                                n +
                                "] for [" +
                                a +
                                "]"
                            );
                        }
                      else {
                        var u = x(e);
                        u && u.isSVG && y.Names.SVGAttribute(i)
                          ? e.setAttribute(i, n)
                          : (e.style[a] = n);
                      }
                      g.debug >= 2 &&
                        console.log("Set " + i + " (" + a + "): " + n);
                    }
                    return [a, n];
                  },
                  flushTransformCache: function (e) {
                    var t = "",
                      i = x(e);
                    if (
                      (o || (g.State.isAndroid && !g.State.isChrome)) &&
                      i &&
                      i.isSVG
                    ) {
                      var n = function (t) {
                          return parseFloat(y.getPropertyValue(e, t));
                        },
                        r = {
                          translate: [n("translateX"), n("translateY")],
                          skewX: [n("skewX")],
                          skewY: [n("skewY")],
                          scale:
                            1 !== n("scale")
                              ? [n("scale"), n("scale")]
                              : [n("scaleX"), n("scaleY")],
                          rotate: [n("rotateZ"), 0, 0],
                        };
                      h.each(x(e).transformCache, function (e) {
                        /^translate/i.test(e)
                          ? (e = "translate")
                          : /^scale/i.test(e)
                          ? (e = "scale")
                          : /^rotate/i.test(e) && (e = "rotate"),
                          r[e] &&
                            ((t += e + "(" + r[e].join(" ") + ") "),
                            delete r[e]);
                      });
                    } else {
                      var s, a;
                      h.each(x(e).transformCache, function (i) {
                        if (
                          ((s = x(e).transformCache[i]),
                          "transformPerspective" === i)
                        )
                          return (a = s), !0;
                        9 === o && "rotateZ" === i && (i = "rotate"),
                          (t += i + s + " ");
                      }),
                        a && (t = "perspective" + a + " " + t);
                    }
                    y.setPropertyValue(e, "transform", t);
                  },
                });
                y.Hooks.register(),
                  y.Normalizations.register(),
                  (g.hook = function (e, t, i) {
                    var r;
                    return (
                      (e = u(e)),
                      h.each(e, function (e, o) {
                        if ((x(o) === n && g.init(o), i === n))
                          r === n && (r = y.getPropertyValue(o, t));
                        else {
                          var s = y.setPropertyValue(o, t, i);
                          "transform" === s[0] && g.CSS.flushTransformCache(o),
                            (r = s);
                        }
                      }),
                      r
                    );
                  });
                var _ = function e() {
                  var r;
                  function o() {
                    return s ? b.promise || null : a;
                  }
                  var s,
                    a,
                    l,
                    p,
                    m,
                    v,
                    _ =
                      arguments[0] &&
                      (arguments[0].p ||
                        (h.isPlainObject(arguments[0].properties) &&
                          !arguments[0].properties.names) ||
                        d.isString(arguments[0].properties));
                  d.isWrapped(this)
                    ? ((s = !1), (l = 0), (p = this), (a = this))
                    : ((s = !0),
                      (l = 1),
                      (p = _
                        ? arguments[0].elements || arguments[0].e
                        : arguments[0]));
                  var b = { promise: null, resolver: null, rejecter: null };
                  if (
                    (s &&
                      g.Promise &&
                      (b.promise = new g.Promise(function (e, t) {
                        (b.resolver = e), (b.rejecter = t);
                      })),
                    _
                      ? ((m = arguments[0].properties || arguments[0].p),
                        (v = arguments[0].options || arguments[0].o))
                      : ((m = arguments[l]), (v = arguments[l + 1])),
                    (p = u(p)))
                  ) {
                    var w,
                      T = p.length,
                      k = 0;
                    if (
                      !/^(stop|finish|finishAll|pause|resume)$/i.test(m) &&
                      !h.isPlainObject(v)
                    ) {
                      var O = l + 1;
                      v = {};
                      for (var P = O; P < arguments.length; P++)
                        d.isArray(arguments[P]) ||
                        (!/^(fast|normal|slow)$/i.test(arguments[P]) &&
                          !/^\d/.test(arguments[P]))
                          ? d.isString(arguments[P]) || d.isArray(arguments[P])
                            ? (v.easing = arguments[P])
                            : d.isFunction(arguments[P]) &&
                              (v.complete = arguments[P])
                          : (v.duration = arguments[P]);
                    }
                    switch (m) {
                      case "scroll":
                        w = "scroll";
                        break;
                      case "reverse":
                        w = "reverse";
                        break;
                      case "pause":
                        var D = new Date().getTime();
                        return (
                          h.each(p, function (e, t) {
                            S(t, D);
                          }),
                          h.each(g.State.calls, function (e, t) {
                            var i = !1;
                            t &&
                              h.each(t[1], function (e, r) {
                                var o = v === n ? "" : v;
                                return (
                                  (!0 !== o &&
                                    t[2].queue !== o &&
                                    (v !== n || !1 !== t[2].queue)) ||
                                  (h.each(p, function (e, n) {
                                    if (n === r)
                                      return (
                                        (t[5] = { resume: !1 }), (i = !0), !1
                                      );
                                  }),
                                  !i && void 0)
                                );
                              });
                          }),
                          o()
                        );
                      case "resume":
                        return (
                          h.each(p, function (e, t) {
                            C(t);
                          }),
                          h.each(g.State.calls, function (e, t) {
                            var i = !1;
                            t &&
                              h.each(t[1], function (e, r) {
                                var o = v === n ? "" : v;
                                return (
                                  (!0 !== o &&
                                    t[2].queue !== o &&
                                    (v !== n || !1 !== t[2].queue)) ||
                                  !t[5] ||
                                  (h.each(p, function (e, n) {
                                    if (n === r)
                                      return (t[5].resume = !0), (i = !0), !1;
                                  }),
                                  !i && void 0)
                                );
                              });
                          }),
                          o()
                        );
                      case "finish":
                      case "finishAll":
                      case "stop":
                        h.each(p, function (e, t) {
                          x(t) &&
                            x(t).delayTimer &&
                            (clearTimeout(x(t).delayTimer.setTimeout),
                            x(t).delayTimer.next && x(t).delayTimer.next(),
                            delete x(t).delayTimer),
                            "finishAll" !== m ||
                              (!0 !== v && !d.isString(v)) ||
                              (h.each(
                                h.queue(t, d.isString(v) ? v : ""),
                                function (e, t) {
                                  d.isFunction(t) && t();
                                }
                              ),
                              h.queue(t, d.isString(v) ? v : "", []));
                        });
                        var j = [];
                        return (
                          h.each(g.State.calls, function (e, t) {
                            t &&
                              h.each(t[1], function (i, r) {
                                var o = v === n ? "" : v;
                                if (
                                  !0 !== o &&
                                  t[2].queue !== o &&
                                  (v !== n || !1 !== t[2].queue)
                                )
                                  return !0;
                                h.each(p, function (i, n) {
                                  if (n === r)
                                    if (
                                      ((!0 === v || d.isString(v)) &&
                                        (h.each(
                                          h.queue(n, d.isString(v) ? v : ""),
                                          function (e, t) {
                                            d.isFunction(t) && t(null, !0);
                                          }
                                        ),
                                        h.queue(n, d.isString(v) ? v : "", [])),
                                      "stop" === m)
                                    ) {
                                      var s = x(n);
                                      s &&
                                        s.tweensContainer &&
                                        !1 !== o &&
                                        h.each(
                                          s.tweensContainer,
                                          function (e, t) {
                                            t.endValue = t.currentValue;
                                          }
                                        ),
                                        j.push(e);
                                    } else
                                      ("finish" !== m && "finishAll" !== m) ||
                                        (t[2].duration = 1);
                                });
                              });
                          }),
                          "stop" === m &&
                            (h.each(j, function (e, t) {
                              I(t, !0);
                            }),
                            b.promise && b.resolver(p)),
                          o()
                        );
                      default:
                        if (!h.isPlainObject(m) || d.isEmptyObject(m)) {
                          if (d.isString(m) && g.Redirects[m]) {
                            var N = (r = h.extend({}, v)).duration,
                              B = r.delay || 0;
                            return (
                              !0 === r.backwards &&
                                (p = h.extend(!0, [], p).reverse()),
                              h.each(p, function (e, t) {
                                parseFloat(r.stagger)
                                  ? (r.delay = B + parseFloat(r.stagger) * e)
                                  : d.isFunction(r.stagger) &&
                                    (r.delay = B + r.stagger.call(t, e, T)),
                                  r.drag &&
                                    ((r.duration =
                                      parseFloat(N) ||
                                      (/^(callout|transition)/.test(m)
                                        ? 1e3
                                        : f)),
                                    (r.duration = Math.max(
                                      r.duration *
                                        (r.backwards ? 1 - e / T : (e + 1) / T),
                                      0.75 * r.duration,
                                      200
                                    ))),
                                  g.Redirects[m].call(
                                    t,
                                    t,
                                    r || {},
                                    e,
                                    T,
                                    p,
                                    b.promise ? b : n
                                  );
                              }),
                              o()
                            );
                          }
                          var L =
                            "Velocity: First argument (" +
                            m +
                            ") was not a property map, a known action, or a registered redirect. Aborting.";
                          return (
                            b.promise
                              ? b.rejecter(new Error(L))
                              : t.console && console.log(L),
                            o()
                          );
                        }
                        w = "start";
                    }
                    var F = {
                        lastParent: null,
                        lastPosition: null,
                        lastFontSize: null,
                        lastPercentToPxWidth: null,
                        lastPercentToPxHeight: null,
                        lastEmToPx: null,
                        remToPx: null,
                        vwToPx: null,
                        vhToPx: null,
                      },
                      $ = [];
                    h.each(p, function (e, t) {
                      d.isNode(t) && V(t, e);
                    }),
                      ((r = h.extend({}, g.defaults, v)).loop = parseInt(
                        r.loop,
                        10
                      ));
                    var z = 2 * r.loop - 1;
                    if (r.loop)
                      for (var H = 0; H < z; H++) {
                        var M = { delay: r.delay, progress: r.progress };
                        H === z - 1 &&
                          ((M.display = r.display),
                          (M.visibility = r.visibility),
                          (M.complete = r.complete)),
                          e(p, "reverse", M);
                      }
                    return o();
                  }
                  function V(e, r) {
                    var o,
                      s,
                      a = h.extend({}, g.defaults, v),
                      l = {};
                    switch (
                      (x(e) === n && g.init(e),
                      parseFloat(a.delay) &&
                        !1 !== a.queue &&
                        h.queue(e, a.queue, function (t) {
                          g.velocityQueueEntryFlag = !0;
                          var i = g.State.delayedElements.count++;
                          g.State.delayedElements[i] = e;
                          var n,
                            r =
                              ((n = i),
                              function () {
                                (g.State.delayedElements[n] = !1), t();
                              });
                          (x(e).delayBegin = new Date().getTime()),
                            (x(e).delay = parseFloat(a.delay)),
                            (x(e).delayTimer = {
                              setTimeout: setTimeout(t, parseFloat(a.delay)),
                              next: r,
                            });
                        }),
                      a.duration.toString().toLowerCase())
                    ) {
                      case "fast":
                        a.duration = 200;
                        break;
                      case "normal":
                        a.duration = f;
                        break;
                      case "slow":
                        a.duration = 600;
                        break;
                      default:
                        a.duration = parseFloat(a.duration) || 1;
                    }
                    function u(s) {
                      var u, f;
                      if (a.begin && 0 === k)
                        try {
                          a.begin.call(p, p);
                        } catch (e) {
                          setTimeout(function () {
                            throw e;
                          }, 1);
                        }
                      if ("scroll" === w) {
                        var _,
                          S,
                          C,
                          I = /^x$/i.test(a.axis) ? "Left" : "Top",
                          O = parseFloat(a.offset) || 0;
                        a.container
                          ? d.isWrapped(a.container) || d.isNode(a.container)
                            ? ((a.container = a.container[0] || a.container),
                              (C =
                                (_ = a.container["scroll" + I]) +
                                h(e).position()[I.toLowerCase()] +
                                O))
                            : (a.container = null)
                          : ((_ =
                              g.State.scrollAnchor[
                                g.State["scrollProperty" + I]
                              ]),
                            (S =
                              g.State.scrollAnchor[
                                g.State[
                                  "scrollProperty" +
                                    ("Left" === I ? "Top" : "Left")
                                ]
                              ]),
                            (C = h(e).offset()[I.toLowerCase()] + O)),
                          (l = {
                            scroll: {
                              rootPropertyValue: !1,
                              startValue: _,
                              currentValue: _,
                              endValue: C,
                              unitType: "",
                              easing: a.easing,
                              scrollData: {
                                container: a.container,
                                direction: I,
                                alternateValue: S,
                              },
                            },
                            element: e,
                          }),
                          g.debug &&
                            console.log(
                              "tweensContainer (scroll): ",
                              l.scroll,
                              e
                            );
                      } else if ("reverse" === w) {
                        if (!(u = x(e))) return;
                        if (!u.tweensContainer)
                          return void h.dequeue(e, a.queue);
                        for (var P in ("none" === u.opts.display &&
                          (u.opts.display = "auto"),
                        "hidden" === u.opts.visibility &&
                          (u.opts.visibility = "visible"),
                        (u.opts.loop = !1),
                        (u.opts.begin = null),
                        (u.opts.complete = null),
                        v.easing || delete a.easing,
                        v.duration || delete a.duration,
                        (a = h.extend({}, u.opts, a)),
                        (f = h.extend(!0, {}, u ? u.tweensContainer : null))))
                          if (f.hasOwnProperty(P) && "element" !== P) {
                            var D = f[P].startValue;
                            (f[P].startValue = f[P].currentValue =
                              f[P].endValue),
                              (f[P].endValue = D),
                              d.isEmptyObject(v) || (f[P].easing = a.easing),
                              g.debug &&
                                console.log(
                                  "reverse tweensContainer (" +
                                    P +
                                    "): " +
                                    JSON.stringify(f[P]),
                                  e
                                );
                          }
                        l = f;
                      } else if ("start" === w) {
                        (u = x(e)) &&
                          u.tweensContainer &&
                          !0 === u.isAnimating &&
                          (f = u.tweensContainer);
                        var j = function (t, i) {
                            var n, o, s;
                            return (
                              d.isFunction(t) && (t = t.call(e, r, T)),
                              d.isArray(t)
                                ? ((n = t[0]),
                                  (!d.isArray(t[1]) && /^[\d-]/.test(t[1])) ||
                                  d.isFunction(t[1]) ||
                                  y.RegEx.isHex.test(t[1])
                                    ? (s = t[1])
                                    : (d.isString(t[1]) &&
                                        !y.RegEx.isHex.test(t[1]) &&
                                        g.Easings[t[1]]) ||
                                      d.isArray(t[1])
                                    ? ((o = i ? t[1] : E(t[1], a.duration)),
                                      (s = t[2]))
                                    : (s = t[1] || t[2]))
                                : (n = t),
                              i || (o = o || a.easing),
                              d.isFunction(n) && (n = n.call(e, r, T)),
                              d.isFunction(s) && (s = s.call(e, r, T)),
                              [n || 0, o, s]
                            );
                          },
                          N = function (r, s) {
                            var c,
                              p = y.Hooks.getRoot(r),
                              m = !1,
                              v = s[0],
                              _ = s[1],
                              b = s[2];
                            if (
                              (u && u.isSVG) ||
                              "tween" === p ||
                              !1 !== y.Names.prefixCheck(p)[1] ||
                              y.Normalizations.registered[p] !== n
                            ) {
                              ((a.display !== n &&
                                null !== a.display &&
                                "none" !== a.display) ||
                                (a.visibility !== n &&
                                  "hidden" !== a.visibility)) &&
                                /opacity|filter/.test(r) &&
                                !b &&
                                0 !== v &&
                                (b = 0),
                                a._cacheValues && f && f[r]
                                  ? (b === n &&
                                      (b = f[r].endValue + f[r].unitType),
                                    (m = u.rootPropertyValueCache[p]))
                                  : y.Hooks.registered[r]
                                  ? b === n
                                    ? ((m = y.getPropertyValue(e, p)),
                                      (b = y.getPropertyValue(e, r, m)))
                                    : (m = y.Hooks.templates[p][1])
                                  : b === n && (b = y.getPropertyValue(e, r));
                              var w,
                                x,
                                S,
                                C = !1,
                                T = function (e, t) {
                                  var i, n;
                                  return (
                                    (n = (t || "0")
                                      .toString()
                                      .toLowerCase()
                                      .replace(/[%A-z]+$/, function (e) {
                                        return (i = e), "";
                                      })),
                                    i || (i = y.Values.getUnitType(e)),
                                    [n, i]
                                  );
                                };
                              if (b !== v && d.isString(b) && d.isString(v)) {
                                c = "";
                                var k = 0,
                                  E = 0,
                                  A = [],
                                  I = [],
                                  O = 0,
                                  P = 0,
                                  D = 0;
                                for (
                                  b = y.Hooks.fixColors(b),
                                    v = y.Hooks.fixColors(v);
                                  k < b.length && E < v.length;

                                ) {
                                  var j = b[k],
                                    N = v[E];
                                  if (/[\d\.-]/.test(j) && /[\d\.-]/.test(N)) {
                                    for (
                                      var B = j, L = N, $ = ".", z = ".";
                                      ++k < b.length;

                                    ) {
                                      if ((j = b[k]) === $) $ = "..";
                                      else if (!/\d/.test(j)) break;
                                      B += j;
                                    }
                                    for (; ++E < v.length; ) {
                                      if ((N = v[E]) === z) z = "..";
                                      else if (!/\d/.test(N)) break;
                                      L += N;
                                    }
                                    var H = y.Hooks.getUnit(b, k),
                                      M = y.Hooks.getUnit(v, E);
                                    if (
                                      ((k += H.length),
                                      (E += M.length),
                                      H === M)
                                    )
                                      B === L
                                        ? (c += B + H)
                                        : ((c +=
                                            "{" +
                                            A.length +
                                            (P ? "!" : "") +
                                            "}" +
                                            H),
                                          A.push(parseFloat(B)),
                                          I.push(parseFloat(L)));
                                    else {
                                      var V = parseFloat(B),
                                        R = parseFloat(L);
                                      (c +=
                                        (O < 5 ? "calc" : "") +
                                        "(" +
                                        (V
                                          ? "{" +
                                            A.length +
                                            (P ? "!" : "") +
                                            "}"
                                          : "0") +
                                        H +
                                        " + " +
                                        (R
                                          ? "{" +
                                            (A.length + (V ? 1 : 0)) +
                                            (P ? "!" : "") +
                                            "}"
                                          : "0") +
                                        M +
                                        ")"),
                                        V && (A.push(V), I.push(0)),
                                        R && (A.push(0), I.push(R));
                                    }
                                  } else {
                                    if (j !== N) {
                                      O = 0;
                                      break;
                                    }
                                    (c += j),
                                      k++,
                                      E++,
                                      (0 === O && "c" === j) ||
                                      (1 === O && "a" === j) ||
                                      (2 === O && "l" === j) ||
                                      (3 === O && "c" === j) ||
                                      (O >= 4 && "(" === j)
                                        ? O++
                                        : ((O && O < 5) ||
                                            (O >= 4 && ")" === j && --O < 5)) &&
                                          (O = 0),
                                      (0 === P && "r" === j) ||
                                      (1 === P && "g" === j) ||
                                      (2 === P && "b" === j) ||
                                      (3 === P && "a" === j) ||
                                      (P >= 3 && "(" === j)
                                        ? (3 === P && "a" === j && (D = 1), P++)
                                        : D && "," === j
                                        ? ++D > 3 && (P = D = 0)
                                        : ((D && P < (D ? 5 : 4)) ||
                                            (P >= (D ? 4 : 3) &&
                                              ")" === j &&
                                              --P < (D ? 5 : 4))) &&
                                          (P = D = 0);
                                  }
                                }
                                (k === b.length && E === v.length) ||
                                  (g.debug &&
                                    console.error(
                                      'Trying to pattern match mis-matched strings ["' +
                                        v +
                                        '", "' +
                                        b +
                                        '"]'
                                    ),
                                  (c = n)),
                                  c &&
                                    (A.length
                                      ? (g.debug &&
                                          console.log(
                                            'Pattern found "' + c + '" -> ',
                                            A,
                                            I,
                                            "[" + b + "," + v + "]"
                                          ),
                                        (b = A),
                                        (v = I),
                                        (x = S = ""))
                                      : (c = n));
                              }
                              if (
                                (c ||
                                  ((b = (w = T(r, b))[0]),
                                  (S = w[1]),
                                  (v = (w = T(r, v))[0].replace(
                                    /^([+-\/*])=/,
                                    function (e, t) {
                                      return (C = t), "";
                                    }
                                  )),
                                  (x = w[1]),
                                  (b = parseFloat(b) || 0),
                                  (v = parseFloat(v) || 0),
                                  "%" === x &&
                                    (/^(fontSize|lineHeight)$/.test(r)
                                      ? ((v /= 100), (x = "em"))
                                      : /^scale/.test(r)
                                      ? ((v /= 100), (x = ""))
                                      : /(Red|Green|Blue)$/i.test(r) &&
                                        ((v = (v / 100) * 255), (x = "")))),
                                /[\/*]/.test(C))
                              )
                                x = S;
                              else if (S !== x && 0 !== b)
                                if (0 === v) x = S;
                                else {
                                  o =
                                    o ||
                                    (function () {
                                      var n = {
                                          myParent: e.parentNode || i.body,
                                          position: y.getPropertyValue(
                                            e,
                                            "position"
                                          ),
                                          fontSize: y.getPropertyValue(
                                            e,
                                            "fontSize"
                                          ),
                                        },
                                        r =
                                          n.position === F.lastPosition &&
                                          n.myParent === F.lastParent,
                                        o = n.fontSize === F.lastFontSize;
                                      (F.lastParent = n.myParent),
                                        (F.lastPosition = n.position),
                                        (F.lastFontSize = n.fontSize);
                                      var s = {};
                                      if (o && r)
                                        (s.emToPx = F.lastEmToPx),
                                          (s.percentToPxWidth =
                                            F.lastPercentToPxWidth),
                                          (s.percentToPxHeight =
                                            F.lastPercentToPxHeight);
                                      else {
                                        var a =
                                          u && u.isSVG
                                            ? i.createElementNS(
                                                "http://www.w3.org/2000/svg",
                                                "rect"
                                              )
                                            : i.createElement("div");
                                        g.init(a),
                                          n.myParent.appendChild(a),
                                          h.each(
                                            [
                                              "overflow",
                                              "overflowX",
                                              "overflowY",
                                            ],
                                            function (e, t) {
                                              g.CSS.setPropertyValue(
                                                a,
                                                t,
                                                "hidden"
                                              );
                                            }
                                          ),
                                          g.CSS.setPropertyValue(
                                            a,
                                            "position",
                                            n.position
                                          ),
                                          g.CSS.setPropertyValue(
                                            a,
                                            "fontSize",
                                            n.fontSize
                                          ),
                                          g.CSS.setPropertyValue(
                                            a,
                                            "boxSizing",
                                            "content-box"
                                          ),
                                          h.each(
                                            [
                                              "minWidth",
                                              "maxWidth",
                                              "width",
                                              "minHeight",
                                              "maxHeight",
                                              "height",
                                            ],
                                            function (e, t) {
                                              g.CSS.setPropertyValue(
                                                a,
                                                t,
                                                "100%"
                                              );
                                            }
                                          ),
                                          g.CSS.setPropertyValue(
                                            a,
                                            "paddingLeft",
                                            "100em"
                                          ),
                                          (s.percentToPxWidth =
                                            F.lastPercentToPxWidth =
                                              (parseFloat(
                                                y.getPropertyValue(
                                                  a,
                                                  "width",
                                                  null,
                                                  !0
                                                )
                                              ) || 1) / 100),
                                          (s.percentToPxHeight =
                                            F.lastPercentToPxHeight =
                                              (parseFloat(
                                                y.getPropertyValue(
                                                  a,
                                                  "height",
                                                  null,
                                                  !0
                                                )
                                              ) || 1) / 100),
                                          (s.emToPx = F.lastEmToPx =
                                            (parseFloat(
                                              y.getPropertyValue(
                                                a,
                                                "paddingLeft"
                                              )
                                            ) || 1) / 100),
                                          n.myParent.removeChild(a);
                                      }
                                      return (
                                        null === F.remToPx &&
                                          (F.remToPx =
                                            parseFloat(
                                              y.getPropertyValue(
                                                i.body,
                                                "fontSize"
                                              )
                                            ) || 16),
                                        null === F.vwToPx &&
                                          ((F.vwToPx =
                                            parseFloat(t.innerWidth) / 100),
                                          (F.vhToPx =
                                            parseFloat(t.innerHeight) / 100)),
                                        (s.remToPx = F.remToPx),
                                        (s.vwToPx = F.vwToPx),
                                        (s.vhToPx = F.vhToPx),
                                        g.debug >= 1 &&
                                          console.log(
                                            "Unit ratios: " + JSON.stringify(s),
                                            e
                                          ),
                                        s
                                      );
                                    })();
                                  var W =
                                    /margin|padding|left|right|width|text|word|letter/i.test(
                                      r
                                    ) ||
                                    /X$/.test(r) ||
                                    "x" === r
                                      ? "x"
                                      : "y";
                                  switch (S) {
                                    case "%":
                                      b *=
                                        "x" === W
                                          ? o.percentToPxWidth
                                          : o.percentToPxHeight;
                                      break;
                                    case "px":
                                      break;
                                    default:
                                      b *= o[S + "ToPx"];
                                  }
                                  switch (x) {
                                    case "%":
                                      b *=
                                        1 /
                                        ("x" === W
                                          ? o.percentToPxWidth
                                          : o.percentToPxHeight);
                                      break;
                                    case "px":
                                      break;
                                    default:
                                      b *= 1 / o[x + "ToPx"];
                                  }
                                }
                              switch (C) {
                                case "+":
                                  v = b + v;
                                  break;
                                case "-":
                                  v = b - v;
                                  break;
                                case "*":
                                  v *= b;
                                  break;
                                case "/":
                                  v = b / v;
                              }
                              (l[r] = {
                                rootPropertyValue: m,
                                startValue: b,
                                currentValue: b,
                                endValue: v,
                                unitType: x,
                                easing: _,
                              }),
                                c && (l[r].pattern = c),
                                g.debug &&
                                  console.log(
                                    "tweensContainer (" +
                                      r +
                                      "): " +
                                      JSON.stringify(l[r]),
                                    e
                                  );
                            } else
                              g.debug &&
                                console.log(
                                  "Skipping [" +
                                    p +
                                    "] due to a lack of browser support."
                                );
                          };
                        for (var B in m)
                          if (m.hasOwnProperty(B)) {
                            var L = y.Names.camelCase(B),
                              z = j(m[B]);
                            if (c(y.Lists.colors)) {
                              var H = z[0],
                                M = z[1],
                                V = z[2];
                              if (y.RegEx.isHex.test(H)) {
                                for (
                                  var R = ["Red", "Green", "Blue"],
                                    W = y.Values.hexToRgb(H),
                                    q = V ? y.Values.hexToRgb(V) : n,
                                    Q = 0;
                                  Q < R.length;
                                  Q++
                                ) {
                                  var U = [W[Q]];
                                  M && U.push(M),
                                    q !== n && U.push(q[Q]),
                                    N(L + R[Q], U);
                                }
                                continue;
                              }
                            }
                            N(L, z);
                          }
                        l.element = e;
                      }
                      l.element &&
                        (y.Values.addClass(e, "velocity-animating"),
                        $.push(l),
                        (u = x(e)) &&
                          ("" === a.queue &&
                            ((u.tweensContainer = l), (u.opts = a)),
                          (u.isAnimating = !0)),
                        k === T - 1
                          ? (g.State.calls.push([
                              $,
                              p,
                              a,
                              null,
                              b.resolver,
                              null,
                              0,
                            ]),
                            !1 === g.State.isTicking &&
                              ((g.State.isTicking = !0), A()))
                          : k++);
                    }
                    if (
                      (!1 !== g.mock &&
                        (!0 === g.mock
                          ? (a.duration = a.delay = 1)
                          : ((a.duration *= parseFloat(g.mock) || 1),
                            (a.delay *= parseFloat(g.mock) || 1))),
                      (a.easing = E(a.easing, a.duration)),
                      a.begin && !d.isFunction(a.begin) && (a.begin = null),
                      a.progress &&
                        !d.isFunction(a.progress) &&
                        (a.progress = null),
                      a.complete &&
                        !d.isFunction(a.complete) &&
                        (a.complete = null),
                      a.display !== n &&
                        null !== a.display &&
                        ((a.display = a.display.toString().toLowerCase()),
                        "auto" === a.display &&
                          (a.display = g.CSS.Values.getDisplayType(e))),
                      a.visibility !== n &&
                        null !== a.visibility &&
                        (a.visibility = a.visibility.toString().toLowerCase()),
                      (a.mobileHA =
                        a.mobileHA &&
                        g.State.isMobile &&
                        !g.State.isGingerbread),
                      !1 === a.queue)
                    )
                      if (a.delay) {
                        var _ = g.State.delayedElements.count++;
                        g.State.delayedElements[_] = e;
                        var S =
                          ((s = _),
                          function () {
                            (g.State.delayedElements[s] = !1), u();
                          });
                        (x(e).delayBegin = new Date().getTime()),
                          (x(e).delay = parseFloat(a.delay)),
                          (x(e).delayTimer = {
                            setTimeout: setTimeout(u, parseFloat(a.delay)),
                            next: S,
                          });
                      } else u();
                    else
                      h.queue(e, a.queue, function (e, t) {
                        if (!0 === t) return b.promise && b.resolver(p), !0;
                        (g.velocityQueueEntryFlag = !0), u();
                      });
                    ("" !== a.queue && "fx" !== a.queue) ||
                      "inprogress" === h.queue(e)[0] ||
                      h.dequeue(e);
                  }
                  b.promise &&
                    (m && v && !1 === v.promiseRejectEmpty
                      ? b.resolver()
                      : b.rejecter());
                };
                (g = h.extend(_, g)).animate = _;
                var b = t.requestAnimationFrame || s;
                if (!g.State.isMobile && i.hidden !== n) {
                  var w = function () {
                    i.hidden
                      ? ((b = function (e) {
                          return setTimeout(function () {
                            e(!0);
                          }, 16);
                        }),
                        A())
                      : (b = t.requestAnimationFrame || s);
                  };
                  w(), i.addEventListener("visibilitychange", w);
                }
                return (
                  (e.Velocity = g),
                  e !== t &&
                    ((e.fn.velocity = _),
                    (e.fn.velocity.defaults = g.defaults)),
                  h.each(["Down", "Up"], function (e, t) {
                    g.Redirects["slide" + t] = function (e, i, r, o, s, a) {
                      var l = h.extend({}, i),
                        c = l.begin,
                        u = l.complete,
                        d = {},
                        p = {
                          height: "",
                          marginTop: "",
                          marginBottom: "",
                          paddingTop: "",
                          paddingBottom: "",
                        };
                      l.display === n &&
                        (l.display =
                          "Down" === t
                            ? "inline" === g.CSS.Values.getDisplayType(e)
                              ? "inline-block"
                              : "block"
                            : "none"),
                        (l.begin = function () {
                          for (var i in (0 === r && c && c.call(s, s), p))
                            if (p.hasOwnProperty(i)) {
                              d[i] = e.style[i];
                              var n = y.getPropertyValue(e, i);
                              p[i] = "Down" === t ? [n, 0] : [0, n];
                            }
                          (d.overflow = e.style.overflow),
                            (e.style.overflow = "hidden");
                        }),
                        (l.complete = function () {
                          for (var t in d)
                            d.hasOwnProperty(t) && (e.style[t] = d[t]);
                          r === o - 1 &&
                            (u && u.call(s, s), a && a.resolver(s));
                        }),
                        g(e, p, l);
                    };
                  }),
                  h.each(["In", "Out"], function (e, t) {
                    g.Redirects["fade" + t] = function (e, i, r, o, s, a) {
                      var l = h.extend({}, i),
                        c = l.complete,
                        u = { opacity: "In" === t ? 1 : 0 };
                      0 !== r && (l.begin = null),
                        (l.complete =
                          r !== o - 1
                            ? null
                            : function () {
                                c && c.call(s, s), a && a.resolver(s);
                              }),
                        l.display === n &&
                          (l.display = "In" === t ? "auto" : "none"),
                        g(this, u, l);
                    };
                  }),
                  g
                );
              }
              function x(e) {
                var t = h.data(e, "velocity");
                return null === t ? n : t;
              }
              function S(e, t) {
                var i = x(e);
                i &&
                  i.delayTimer &&
                  !i.delayPaused &&
                  ((i.delayRemaining = i.delay - t + i.delayBegin),
                  (i.delayPaused = !0),
                  clearTimeout(i.delayTimer.setTimeout));
              }
              function C(e, t) {
                var i = x(e);
                i &&
                  i.delayTimer &&
                  i.delayPaused &&
                  ((i.delayPaused = !1),
                  (i.delayTimer.setTimeout = setTimeout(
                    i.delayTimer.next,
                    i.delayRemaining
                  )));
              }
              function T(e) {
                return function (t) {
                  return Math.round(t * e) * (1 / e);
                };
              }
              function k(e, i, n, r) {
                var o = 4,
                  s = 0.001,
                  a = 1e-7,
                  l = 10,
                  c = 11,
                  u = 1 / (c - 1),
                  h = "Float32Array" in t;
                if (4 !== arguments.length) return !1;
                for (var d = 0; d < 4; ++d)
                  if (
                    "number" != typeof arguments[d] ||
                    isNaN(arguments[d]) ||
                    !isFinite(arguments[d])
                  )
                    return !1;
                (e = Math.min(e, 1)),
                  (n = Math.min(n, 1)),
                  (e = Math.max(e, 0)),
                  (n = Math.max(n, 0));
                var p = h ? new Float32Array(c) : new Array(c);
                function f(e, t) {
                  return 1 - 3 * t + 3 * e;
                }
                function m(e, t) {
                  return 3 * t - 6 * e;
                }
                function g(e) {
                  return 3 * e;
                }
                function v(e, t, i) {
                  return ((f(t, i) * e + m(t, i)) * e + g(t)) * e;
                }
                function y(e, t, i) {
                  return 3 * f(t, i) * e * e + 2 * m(t, i) * e + g(t);
                }
                function _(t, i) {
                  for (var r = 0; r < o; ++r) {
                    var s = y(i, e, n);
                    if (0 === s) return i;
                    i -= (v(i, e, n) - t) / s;
                  }
                  return i;
                }
                function b() {
                  for (var t = 0; t < c; ++t) p[t] = v(t * u, e, n);
                }
                function w(t, i, r) {
                  var o,
                    s,
                    c = 0;
                  do {
                    (o = v((s = i + (r - i) / 2), e, n) - t) > 0
                      ? (r = s)
                      : (i = s);
                  } while (Math.abs(o) > a && ++c < l);
                  return s;
                }
                function x(t) {
                  for (var i = 0, r = 1, o = c - 1; r !== o && p[r] <= t; ++r)
                    i += u;
                  --r;
                  var a = i + ((t - p[r]) / (p[r + 1] - p[r])) * u,
                    l = y(a, e, n);
                  return l >= s ? _(t, a) : 0 === l ? a : w(t, i, i + u);
                }
                var S = !1;
                function C() {
                  (S = !0), (e === i && n === r) || b();
                }
                var T = function (t) {
                  return (
                    S || C(),
                    e === i && n === r
                      ? t
                      : 0 === t
                      ? 0
                      : 1 === t
                      ? 1
                      : v(x(t), i, r)
                  );
                };
                T.getControlPoints = function () {
                  return [
                    { x: e, y: i },
                    { x: n, y: r },
                  ];
                };
                var k = "generateBezier(" + [e, i, n, r] + ")";
                return (
                  (T.toString = function () {
                    return k;
                  }),
                  T
                );
              }
              function E(e, t) {
                var i = e;
                return (
                  d.isString(e)
                    ? g.Easings[e] || (i = !1)
                    : (i =
                        d.isArray(e) && 1 === e.length
                          ? T.apply(null, e)
                          : d.isArray(e) && 2 === e.length
                          ? v.apply(null, e.concat([t]))
                          : !(!d.isArray(e) || 4 !== e.length) &&
                            k.apply(null, e)),
                  !1 === i &&
                    (i = g.Easings[g.defaults.easing] ? g.defaults.easing : m),
                  i
                );
              }
              function A(e) {
                if (e) {
                  var t = g.timestamp && !0 !== e ? e : a.now(),
                    i = g.State.calls.length;
                  i > 1e4 &&
                    ((g.State.calls = (function (e) {
                      for (
                        var t = -1, i = e ? e.length : 0, n = [];
                        ++t < i;

                      ) {
                        var r = e[t];
                        r && n.push(r);
                      }
                      return n;
                    })(g.State.calls)),
                    (i = g.State.calls.length));
                  for (var r = 0; r < i; r++)
                    if (g.State.calls[r]) {
                      var s = g.State.calls[r],
                        l = s[0],
                        c = s[2],
                        u = s[3],
                        p = !!u,
                        f = null,
                        m = s[5],
                        v = s[6];
                      if ((u || (u = g.State.calls[r][3] = t - 16), m)) {
                        if (!0 !== m.resume) continue;
                        (u = s[3] = Math.round(t - v - 16)), (s[5] = null);
                      }
                      v = s[6] = t - u;
                      for (
                        var _ = Math.min(v / c.duration, 1),
                          w = 0,
                          S = l.length;
                        w < S;
                        w++
                      ) {
                        var C = l[w],
                          T = C.element;
                        if (x(T)) {
                          var k = !1;
                          for (var E in (c.display !== n &&
                            null !== c.display &&
                            "none" !== c.display &&
                            ("flex" === c.display &&
                              h.each(
                                [
                                  "-webkit-box",
                                  "-moz-box",
                                  "-ms-flexbox",
                                  "-webkit-flex",
                                ],
                                function (e, t) {
                                  y.setPropertyValue(T, "display", t);
                                }
                              ),
                            y.setPropertyValue(T, "display", c.display)),
                          c.visibility !== n &&
                            "hidden" !== c.visibility &&
                            y.setPropertyValue(T, "visibility", c.visibility),
                          C))
                            if (C.hasOwnProperty(E) && "element" !== E) {
                              var O,
                                P = C[E],
                                D = d.isString(P.easing)
                                  ? g.Easings[P.easing]
                                  : P.easing;
                              if (d.isString(P.pattern)) {
                                var j =
                                  1 === _
                                    ? function (e, t, i) {
                                        var n = P.endValue[t];
                                        return i ? Math.round(n) : n;
                                      }
                                    : function (e, t, i) {
                                        var n = P.startValue[t],
                                          r = P.endValue[t] - n,
                                          o = n + r * D(_, c, r);
                                        return i ? Math.round(o) : o;
                                      };
                                O = P.pattern.replace(/{(\d+)(!)?}/g, j);
                              } else if (1 === _) O = P.endValue;
                              else {
                                var N = P.endValue - P.startValue;
                                O = P.startValue + N * D(_, c, N);
                              }
                              if (!p && O === P.currentValue) continue;
                              if (((P.currentValue = O), "tween" === E)) f = O;
                              else {
                                var B;
                                if (y.Hooks.registered[E]) {
                                  B = y.Hooks.getRoot(E);
                                  var L = x(T).rootPropertyValueCache[B];
                                  L && (P.rootPropertyValue = L);
                                }
                                var F = y.setPropertyValue(
                                  T,
                                  E,
                                  P.currentValue +
                                    (o < 9 && 0 === parseFloat(O)
                                      ? ""
                                      : P.unitType),
                                  P.rootPropertyValue,
                                  P.scrollData
                                );
                                y.Hooks.registered[E] &&
                                  (y.Normalizations.registered[B]
                                    ? (x(T).rootPropertyValueCache[B] =
                                        y.Normalizations.registered[B](
                                          "extract",
                                          null,
                                          F[1]
                                        ))
                                    : (x(T).rootPropertyValueCache[B] = F[1])),
                                  "transform" === F[0] && (k = !0);
                              }
                            }
                          c.mobileHA &&
                            x(T).transformCache.translate3d === n &&
                            ((x(T).transformCache.translate3d =
                              "(0px, 0px, 0px)"),
                            (k = !0)),
                            k && y.flushTransformCache(T);
                        }
                      }
                      c.display !== n &&
                        "none" !== c.display &&
                        (g.State.calls[r][2].display = !1),
                        c.visibility !== n &&
                          "hidden" !== c.visibility &&
                          (g.State.calls[r][2].visibility = !1),
                        c.progress &&
                          c.progress.call(
                            s[1],
                            s[1],
                            _,
                            Math.max(0, u + c.duration - t),
                            u,
                            f
                          ),
                        1 === _ && I(r);
                    }
                }
                g.State.isTicking && b(A);
              }
              function I(e, t) {
                if (!g.State.calls[e]) return !1;
                for (
                  var i = g.State.calls[e][0],
                    r = g.State.calls[e][1],
                    o = g.State.calls[e][2],
                    s = g.State.calls[e][4],
                    a = !1,
                    l = 0,
                    c = i.length;
                  l < c;
                  l++
                ) {
                  var u = i[l].element;
                  t ||
                    o.loop ||
                    ("none" === o.display &&
                      y.setPropertyValue(u, "display", o.display),
                    "hidden" === o.visibility &&
                      y.setPropertyValue(u, "visibility", o.visibility));
                  var d = x(u);
                  if (
                    !0 !== o.loop &&
                    (h.queue(u)[1] === n ||
                      !/\.velocityQueueEntryFlag/i.test(h.queue(u)[1])) &&
                    d
                  ) {
                    (d.isAnimating = !1), (d.rootPropertyValueCache = {});
                    var p = !1;
                    h.each(y.Lists.transforms3D, function (e, t) {
                      var i = /^scale/.test(t) ? 1 : 0,
                        r = d.transformCache[t];
                      d.transformCache[t] !== n &&
                        new RegExp("^\\(" + i + "[^.]").test(r) &&
                        ((p = !0), delete d.transformCache[t]);
                    }),
                      o.mobileHA &&
                        ((p = !0), delete d.transformCache.translate3d),
                      p && y.flushTransformCache(u),
                      y.Values.removeClass(u, "velocity-animating");
                  }
                  if (!t && o.complete && !o.loop && l === c - 1)
                    try {
                      o.complete.call(r, r);
                    } catch (e) {
                      setTimeout(function () {
                        throw e;
                      }, 1);
                    }
                  s && !0 !== o.loop && s(r),
                    d &&
                      !0 === o.loop &&
                      !t &&
                      (h.each(d.tweensContainer, function (e, t) {
                        if (
                          /^rotate/.test(e) &&
                          (parseFloat(t.startValue) - parseFloat(t.endValue)) %
                            360 ==
                            0
                        ) {
                          var i = t.startValue;
                          (t.startValue = t.endValue), (t.endValue = i);
                        }
                        /^backgroundPosition/.test(e) &&
                          100 === parseFloat(t.endValue) &&
                          "%" === t.unitType &&
                          ((t.endValue = 0), (t.startValue = 100));
                      }),
                      g(u, "reverse", { loop: !0, delay: o.delay })),
                    !1 !== o.queue && h.dequeue(u, o.queue);
                }
                g.State.calls[e] = !1;
                for (var f = 0, m = g.State.calls.length; f < m; f++)
                  if (!1 !== g.State.calls[f]) {
                    a = !0;
                    break;
                  }
                !1 === a &&
                  ((g.State.isTicking = !1),
                  delete g.State.calls,
                  (g.State.calls = []));
              }
              jQuery.fn.velocity = jQuery.fn.animate;
            })(
              window.jQuery || window.Zepto || window,
              window,
              window ? window.document : void 0
            );
          });
      },
      609: (e) => {
        "use strict";
        e.exports = jQuery;
      },
    },
    i = {};
  function n(t) {
    var r = i[t];
    if (void 0 !== r) return r.exports;
    var o = (i[t] = { id: t, loaded: !1, exports: {} });
    return e[t](o, o.exports, n), (o.loaded = !0), o.exports;
  }
  (n.amdO = {}),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (n.d = (e, t) => {
      for (var i in t)
        n.o(t, i) &&
          !n.o(e, i) &&
          Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      "use strict";
      n(249), n(144), n(344), n(650), n(653);
      const e = prestashop;
      var t = n.n(e),
        i = n(609),
        r = n.n(i);
      function o(e, t) {
        var i = t.children().detach();
        t.empty().append(e.children().detach()), e.append(i);
      }
      function s() {
        t().responsive.mobile
          ? r()("*[id^='_desktop_']").each(function (e, t) {
              var i = r()("#".concat(t.id.replace("_desktop_", "_mobile_")));
              i.length && o(r()(t), i);
            })
          : r()("*[id^='_mobile_']").each(function (e, t) {
              var i = r()("#".concat(t.id.replace("_mobile_", "_desktop_")));
              i.length && o(r()(t), i);
            }),
          t().emit("responsive update", { mobile: t().responsive.mobile });
      }
      function a(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      (t().themeSelectors = {
        product: {
          tabs: ".tabs .nav-link",
          activeNavClass: "js-product-nav-active",
          activeTabClass: "js-product-tab-active",
          activeTabs: ".tabs .nav-link.active, .js-product-nav-active",
          imagesModal: ".js-product-images-modal",
          thumb: ".js-thumb",
          thumbContainer: ".thumb-container, .js-thumb-container",
          arrows: ".js-arrows",
          selected: ".selected, .js-thumb-selected",
          modalProductCover: ".js-modal-product-cover",
          cover: ".js-qv-product-cover",
        },
        listing: {
          searchFilterToggler: "#search_filter_toggler, .js-search-toggler",
          searchFiltersWrapper: "#search_filters_wrapper",
          searchFilterControls: "#search_filter_controls",
          searchFilters: "#search_filters",
          activeSearchFilters: "#js-active-search-filters",
          listTop: "#js-product-list-top",
          product: ".js-product",
          list: "#js-product-list",
          listBottom: "#js-product-list-bottom",
          listHeader: "#js-product-list-header",
          searchFiltersClearAll: ".js-search-filters-clear-all",
          searchLink: ".js-search-link",
        },
        order: { returnForm: "#order-return-form, .js-order-return-form" },
        arrowDown: ".arrow-down, .js-arrow-down",
        arrowUp: ".arrow-up, .js-arrow-up",
        clear: ".clear",
        fileInput: ".js-file-input",
        contentWrapper: "#content-wrapper, .js-content-wrapper",
        footer: "#footer, .js-footer",
        modalContent: ".js-modal-content",
        modal: "#modal, .js-checkout-modal",
        touchspin: ".js-touchspin",
        checkout: {
          termsLink: ".js-terms a",
          giftCheckbox: ".js-gift-checkbox",
          imagesLink:
            ".card-block .cart-summary-products p a, .js-show-details",
          carrierExtraContent:
            ".carrier-extra-content, .js-carrier-extra-content",
        },
      }),
        r()(document).ready(function () {
          t().emit("themeSelectorsInit");
        }),
        n(930),
        n(751),
        (t().responsive = t().responsive || {}),
        (t().responsive.current_width = window.innerWidth),
        (t().responsive.min_width = 992),
        (t().responsive.mobile =
          t().responsive.current_width < t().responsive.min_width),
        r()(window).on("resize", function () {
          var e = t().responsive.current_width,
            i = t().responsive.min_width,
            n = window.innerWidth,
            r = (e >= i && n < i) || (e < i && n >= i);
          (t().responsive.current_width = n),
            (t().responsive.mobile =
              t().responsive.current_width < t().responsive.min_width),
            r && s();
        }),
        r()(document).ready(function () {
          t().responsive.mobile && s();
        }),
        r()(document).ready(function () {
          1 === r()("body#checkout").length &&
            (r()(t().themeSelectors.checkout.termsLink).on(
              "click",
              function (e) {
                e.preventDefault();
                var i = r()(e.target).attr("href");
                i &&
                  ((i += "?content_only=1"),
                  r()
                    .get(i, function (e) {
                      r()(t().themeSelectors.modal)
                        .find(t().themeSelectors.modalContent)
                        .html(r()(e).find(".page-cms").contents());
                    })
                    .fail(function (e) {
                      t().emit("handleError", {
                        eventType: "clickTerms",
                        resp: e,
                      });
                    })),
                  r()(t().themeSelectors.modal).modal("show");
              }
            ),
            r()(t().themeSelectors.checkout.giftCheckbox).on(
              "click",
              function () {
                r()("#gift").collapse("toggle");
              }
            ),
            r()(t().themeSelectors.checkout.imagesLink).on(
              "click",
              function () {
                var e = r()(this).find("i.material-icons");
                "expand_more" === e.text()
                  ? e.text("expand_less")
                  : e.text("expand_more");
              }
            )),
            t().on("updatedDeliveryForm", function (e) {
              void 0 !== e.deliveryOption &&
                0 !== e.deliveryOption.length &&
                (r()(t().themeSelectors.checkout.carrierExtraContent).hide(),
                e.deliveryOption
                  .next(t().themeSelectors.checkout.carrierExtraContent)
                  .slideDown());
            });
        }),
        r()(document).ready(function () {
          r()("body#order-detail") &&
            r()(
              "".concat(
                t().themeSelectors.order.returnForm,
                " table thead input[type=checkbox]"
              )
            ).on("click", function () {
              var e = r()(this).prop("checked");
              r()(
                "".concat(
                  t().themeSelectors.order.returnForm,
                  " table tbody input[type=checkbox]"
                )
              ).each(function (t, i) {
                r()(i).prop("checked", e);
              });
            });
        }),
        n(225);
      var l = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
        }
        var t, i;
        return (
          (t = e),
          (i = [
            {
              key: "init",
              value: function () {
                r()(".js-product-miniature").each(function (e, t) {
                  if (r()(t).find(".color").length > 5) {
                    var i = 0;
                    r()(t)
                      .find(".color")
                      .each(function (e, t) {
                        e > 4 && (r()(t).hide(), (i += 1));
                      }),
                      r()(t).find(".js-count").append("+".concat(i));
                  }
                });
              },
            },
          ]) && a(t.prototype, i),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e
        );
      })();
      function c(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      r()(document).ready(function () {
        t().on("clickQuickView", function (i) {
          var n = {
            action: "quickview",
            id_product: i.dataset.idProduct,
            id_product_attribute: i.dataset.idProductAttribute,
          };
          r()
            .post(t().urls.pages.product, n, null, "json")
            .then(function (t) {
              r()("body").append(t.quickview_html);
              var i = r()(
                "#quickview-modal-"
                  .concat(t.product.id, "-")
                  .concat(t.product.id_product_attribute)
              );
              i.modal("show"),
                e(i),
                i.on("hidden.bs.modal", function () {
                  r()("body").removeAttr("style"), i.remove();
                }),
                r()(".qv-carousel").owlCarousel({
                  nav: !0,
                  margin: 15,
                  loop: !1,
                  dots: !1,
                  rewind: !0,
                  rtl: !!r()("body").hasClass("lang-rtl"),
                  navText: [
                    "<i class='material-icons'></i>",
                    "<i class='material-icons'></i>",
                  ],
                  responsive: {
                    0: { items: 2 },
                    443: { items: 3 },
                    544: { items: 4 },
                    768: { items: 3 },
                    992: { items: 3 },
                    1200: { items: 4 },
                  },
                }),
                r()(".qv-carousel").css("position", "relative");
            })
            .fail(function (e) {
              t().emit("handleError", { eventType: "clickQuickView", resp: e });
            });
        });
        var e = function (e) {
            var t = r()(".js-arrows"),
              n = e.find(".js-qv-product-images");
            r()(".js-thumb").on("click", function (e) {
              r()(".js-thumb").hasClass("selected") &&
                r()(".js-thumb").removeClass("selected"),
                r()(e.currentTarget).addClass("selected"),
                r()(".js-qv-product-cover").attr(
                  "src",
                  r()(e.target).data("image-large-src")
                );
            }),
              n.find("li").length <= 3
                ? t.hide()
                : t.on("click", function (e) {
                    r()(e.target).hasClass("arrow-up") &&
                    r()(".js-qv-product-images").position().top < 0
                      ? (i("up"), r()(".arrow-down").css("opacity", "1"))
                      : r()(e.target).hasClass("arrow-down") &&
                        n.position().top + n.height() >
                          r()(".js-qv-mask").height() &&
                        (i("down"), r()(".arrow-up").css("opacity", "1"));
                  }),
              e
                .find("#quantity_wanted")
                .TouchSpin({
                  verticalbuttons: !0,
                  verticalupclass: "material-icons touchspin-up",
                  verticaldownclass: "material-icons touchspin-down",
                  buttondown_class: "btn btn-touchspin js-touchspin",
                  buttonup_class: "btn btn-touchspin js-touchspin",
                  min: 1,
                  max: 1e6,
                });
          },
          i = function (e) {
            var t = r()(".js-qv-product-images"),
              i = r()(".js-qv-product-images li img").height() + 20,
              n = t.position().top;
            t.velocity({ translateY: "up" === e ? n + i : n - i }, function () {
              t.position().top >= 0
                ? r()(".arrow-up").css("opacity", ".2")
                : t.position().top + t.height() <=
                    r()(".js-qv-mask").height() &&
                  r()(".arrow-down").css("opacity", ".2");
            });
          };
        r()("body").on("click", "#search_filter_toggler", function () {
          r()("#search_filters_wrapper").removeClass("hidden-md-down"),
            r()("#content-wrapper").addClass("hidden-md-down");
        }),
          r()("#search_filter_controls .clear").on("click", function () {
            r()("#search_filters_wrapper").addClass("hidden-md-down"),
              r()("#content-wrapper").removeClass("hidden-md-down");
          }),
          r()("#search_filter_controls .ok").on("click", function () {
            r()("#search_filters_wrapper").addClass("hidden-md-down"),
              r()("#content-wrapper").removeClass("hidden-md-down");
          });
        var n = function (e) {
          if (void 0 !== e.target.dataset.searchUrl)
            return e.target.dataset.searchUrl;
          if (void 0 === r()(e.target).parent()[0].dataset.searchUrl)
            throw new Error("Can not parse search URL");
          return r()(e.target).parent()[0].dataset.searchUrl;
        };
        r()("body").on(
          "change",
          "#search_filters input[data-search-url]",
          function (e) {
            t().emit("updateFacets", n(e));
          }
        ),
          r()("body").on("click", ".js-search-filters-clear-all", function (e) {
            t().emit("updateFacets", n(e));
          }),
          r()("body").on("click", ".js-search-link", function (e) {
            e.preventDefault(),
              t().emit("updateFacets", r()(e.target).closest("a").get(0).href);
          }),
          r()("body").on("change", "#search_filters select", function (e) {
            var i = r()(e.target).closest("form");
            t().emit("updateFacets", "?" + i.serialize());
          }),
          t().on("updateProductList", function (e) {
            !(function (e) {
              r()("#search_filters").replaceWith(e.rendered_facets),
                r()("#js-active-search-filters").replaceWith(
                  e.rendered_active_filters
                ),
                r()("#js-product-list-top").replaceWith(
                  e.rendered_products_top
                ),
                r()("#js-product-list").replaceWith(e.rendered_products),
                r()("#js-product-list-bottom").replaceWith(
                  e.rendered_products_bottom
                ),
                e.rendered_products_header &&
                  r()("#js-product-list-header").replaceWith(
                    e.rendered_products_header
                  ),
                new l().init();
            })(e),
              window.scrollTo(0, 0);
            var t = r().totalStorage("productLayout");
            setProductLayout(t);
          });
      });
      var u = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
        }
        var t, i;
        return (
          (t = e),
          (i = [
            {
              key: "init",
              value: function () {
                var e = this,
                  t = r()(".js-modal-arrows"),
                  i = r()(".js-modal-product-images");
                r()("body")
                  .on("click", ".js-modal-thumb", function (e) {
                    r()(".js-modal-thumb").hasClass("selected") &&
                      r()(".js-modal-thumb").removeClass("selected"),
                      r()(e.currentTarget).addClass("selected"),
                      r()(".js-modal-product-cover").attr(
                        "src",
                        r()(e.target).data("image-large-src")
                      ),
                      r()(".js-modal-product-cover").attr(
                        "title",
                        r()(e.target).attr("title")
                      ),
                      r()(".js-modal-product-cover").attr(
                        "alt",
                        r()(e.target).attr("alt")
                      );
                  })
                  .on("click", "aside#thumbnails", function (e) {
                    "thumbnails" === e.target.id &&
                      r()("#product-modal").modal("hide");
                  }),
                  r()(".js-modal-product-images li").length <= 5
                    ? t.css("opacity", ".2")
                    : t.on("click", function (t) {
                        r()(t.target).hasClass("arrow-up") &&
                        i.position().top < 0
                          ? (e.move("up"),
                            r()(".js-modal-arrow-down").css("opacity", "1"))
                          : r()(t.target).hasClass("arrow-down") &&
                            i.position().top + i.height() >
                              r()(".js-modal-mask").height() &&
                            (e.move("down"),
                            r()(".js-modal-arrow-up").css("opacity", "1"));
                      });
              },
            },
            {
              key: "move",
              value: function (e) {
                var t = r()(".js-modal-product-images"),
                  i = r()(".js-modal-product-images li img").height() + 10,
                  n = t.position().top;
                t.velocity(
                  { translateY: "up" === e ? n + i : n - i },
                  function () {
                    t.position().top >= 0
                      ? r()(".js-modal-arrow-up").css("opacity", ".2")
                      : t.position().top + t.height() <=
                          r()(".js-modal-mask").height() &&
                        r()(".js-modal-arrow-down").css("opacity", ".2");
                  }
                );
              },
            },
          ]) && c(t.prototype, i),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e
        );
      })();
      r()(document).ready(function () {
        var e;
        function i() {
          r()(".js-thumb").on("click", function (e) {
            r()(".js-modal-product-cover").attr(
              "src",
              r()(e.target).data("image-large-src")
            ),
              r()("#product-zoom .zoomImg").remove(),
              t().responsive.mobile ||
                r()("#product-zoom").zoom({
                  url: r()(e.target).data("image-large-src"),
                }),
              r()(".selected").removeClass("selected"),
              r()(e.target).addClass("selected"),
              r()(".js-qv-product-cover").prop(
                "src",
                r()(e.currentTarget).data("image-large-src")
              );
          });
        }
        function n() {
          r()("#main .js-qv-product-images li").length > 2
            ? (r()("#main .js-qv-mask").addClass("scroll"),
              r()(".scroll-box-arrows").addClass("scroll"),
              r()("#main .js-qv-mask").scrollbox({
                direction: "h",
                distance: 113,
                autoPlay: !1,
              }),
              r()(".scroll-box-arrows .left").click(function () {
                r()("#main .js-qv-mask").trigger("backward");
              }),
              r()(".scroll-box-arrows .right").click(function () {
                r()("#main .js-qv-mask").trigger("forward");
              }))
            : (r()("#main .js-qv-mask").removeClass("scroll"),
              r()(".scroll-box-arrows").removeClass("scroll"));
        }
        function o() {
          r()(".js-file-input").on("change", function (e) {
            var t, i;
            (t = r()(e.currentTarget)[0]) &&
              (i = t.files[0]) &&
              r()(t).prev().text(i.name);
          });
        }
        (e = r()("#quantity_wanted")).TouchSpin({
          verticalbuttons: !0,
          verticalupclass: "material-icons touchspin-up",
          verticaldownclass: "material-icons touchspin-down",
          buttondown_class: "btn btn-touchspin js-touchspin",
          buttonup_class: "btn btn-touchspin js-touchspin",
          min: parseInt(e.attr("min"), 10),
          max: 1e6,
        }),
          r()("body").on("change keyup", "#quantity_wanted", function (e) {
            r()(e.currentTarget).trigger("touchspin.stopspin"),
              t().emit("updateProduct", {
                eventType: "updatedProductQuantity",
                event,
              });
          }),
          o(),
          i(),
          n(),
          t().on("updatedProduct", function (e) {
            if ((o(), i(), e && e.product_minimal_quantity)) {
              var t = parseInt(e.product_minimal_quantity, 10);
              r()("#quantity_wanted").trigger("touchspin.updatesettings", {
                min: t,
              });
            }
            n(),
              r()(r()(".tabs .nav-link.active").attr("href"))
                .addClass("active")
                .removeClass("fade"),
              r()(".js-product-images-modal").replaceWith(
                e.product_images_modal
              ),
              r()(".js-qv-loader").hide(0),
              r()(".qv-carousel").owlCarousel({
                nav: !0,
                margin: 15,
                dots: !1,
                loop: !1,
                rewind: !0,
                rtl: !!r()("body").hasClass("lang-rtl"),
                navText: [
                  "<i class='material-icons'></i>",
                  "<i class='material-icons'></i>",
                ],
                responsive: {
                  0: { items: 2 },
                  443: { items: 3 },
                  544: { items: 4 },
                  768: { items: 3 },
                  992: { items: 3 },
                  1200: { items: 4 },
                },
              }),
              new u().init();
          });
      }),
        (t().cart = t().cart || {}),
        (t().cart.active_inputs = null);
      var h = 'input[name="product-quantity-spin"]',
        d = !1,
        p = !1,
        f = "";
      function m() {
        r().each(r()(h), function (e, t) {
          r()(t).TouchSpin({
            verticalbuttons: !0,
            verticalupclass: "material-icons touchspin-up",
            verticaldownclass: "material-icons touchspin-down",
            buttondown_class:
              "btn btn-touchspin js-touchspin js-increase-product-quantity",
            buttonup_class:
              "btn btn-touchspin js-touchspin js-decrease-product-quantity",
            min: parseInt(r()(t).attr("min"), 10),
            max: 1e6,
          });
        }),
          r()(t().themeSelectors.touchspin).off("touchstart.touchspin"),
          g.switchErrorStat();
      }
      r()(document).ready(function () {
        var e = ".js-cart-line-product-quantity",
          i = [];
        t().on("updateCart", function () {
          r()(".quickview").modal("hide");
        }),
          t().on("updatedCart", function () {
            m();
          }),
          m();
        var n = r()("body");
        function o(e) {
          var t,
            i,
            n = e.split("-"),
            r = "";
          for (t = 0; t < n.length; t += 1)
            (i = n[t]),
              0 !== t && (i = i.substring(0, 1).toUpperCase() + i.substring(1)),
              (r += i);
          return r;
        }
        var s = function () {
            for (; i.length > 0; ) i.pop().abort();
          },
          a = function (n) {
            n.preventDefault();
            var a = r()(n.currentTarget),
              l = n.currentTarget.dataset,
              c = (function (t, i) {
                if (
                  !(function (e) {
                    return "on.startupspin" === e || "on.startdownspin" === e;
                  })(i)
                )
                  return {
                    url: t.attr("href"),
                    type: o(t.data("link-action")),
                  };
                var n = (function (t) {
                  var i = t.parents(".bootstrap-touchspin").find(e);
                  return i.is(":focus") ? null : i;
                })(t);
                return (
                  !!n &&
                  ((function (e) {
                    return "on.startupspin" === e;
                  })(i)
                    ? { url: n.data("up-url"), type: "increaseProductQuantity" }
                    : {
                        url: n.data("down-url"),
                        type: "decreaseProductQuantity",
                      })
                );
              })(a, n.namespace);
            c &&
              (s(),
              r()
                .ajax({
                  url: c.url,
                  method: "POST",
                  data: { ajax: "1", action: "update" },
                  dataType: "json",
                  beforeSend: function (e) {
                    i.push(e);
                  },
                })
                .then(function (e) {
                  var i;
                  g.checkUpdateOpertation(e),
                    ((i = a),
                    r()(i.parents(".bootstrap-touchspin").find("input"))).val(
                      e.quantity
                    ),
                    t().emit("updateCart", { reason: l, resp: e });
                })
                .fail(function (e) {
                  t().emit("handleError", {
                    eventType: "updateProductInCart",
                    resp: e,
                    cartAction: c.type,
                  });
                }));
          };
        function l(e) {
          var n = r()(e.currentTarget),
            o = n.data("update-url"),
            a = n.attr("value"),
            l = n.val();
          if (l != parseInt(l, 10) || l < 0 || isNaN(l)) n.val(a);
          else {
            var c,
              u,
              h = l - a;
            0 !== h &&
              (n.attr("value", l),
              (function (e, n, o) {
                s(),
                  r()
                    .ajax({
                      url: e,
                      method: "POST",
                      data: n,
                      dataType: "json",
                      beforeSend: function (e) {
                        i.push(e);
                      },
                    })
                    .then(function (e) {
                      var i;
                      g.checkUpdateOpertation(e),
                        o.val(e.quantity),
                        (i = o && o.dataset ? o.dataset : e),
                        t().emit("updateCart", { reason: i, resp: e });
                    })
                    .fail(function (e) {
                      t().emit("handleError", {
                        eventType: "updateProductQuantityInCart",
                        resp: e,
                      });
                    });
              })(
                o,
                ((c = h),
                {
                  ajax: "1",
                  qty: Math.abs(c),
                  action: "update",
                  op: ((u = c), u > 0 ? "up" : "down"),
                }),
                n
              ));
          }
        }
        n.on(
          "click",
          '[data-link-action="delete-from-cart"], [data-link-action="remove-voucher"]',
          a
        ),
          n.on("touchspin.on.startdownspin", h, a),
          n.on("touchspin.on.startupspin", h, a),
          n.on("focusout keyup", e, function (e) {
            return "keyup" === e.type
              ? (13 === e.keyCode && l(e), !1)
              : (l(e), !1);
          }),
          n.on("hidden.bs.collapse", "#promo-code", function () {
            r()(".display-promo").show(400);
          }),
          n.on("click", ".promo-code-button", function (e) {
            e.preventDefault(), r()("#promo-code").collapse("toggle");
          }),
          n.on("click", ".display-promo", function (e) {
            r()(e.currentTarget).hide(400);
          }),
          n.on("click", ".js-discount .code", function (e) {
            e.stopPropagation();
            var t = r()(e.currentTarget);
            return (
              r()("[name=discount_name]").val(t.text()),
              r()("#promo-code").collapse("show"),
              r()(".display-promo").hide(400),
              !1
            );
          });
      });
      var g = {
          switchErrorStat: function () {
            var e = r()(".checkout a");
            if (
              ((r()("#notifications article.alert-danger").length ||
                ("" !== f && !d)) &&
                e.addClass("disabled"),
              "" !== f)
            ) {
              var t =
                ' <article class="alert alert-danger" role="alert" data-alert="danger"><ul><li>'.concat(
                  f,
                  "</li></ul></article>"
                );
              r()("#notifications .container").html(t),
                (f = ""),
                (p = !1),
                d && e.removeClass("disabled");
            } else
              !d &&
                p &&
                ((d = !1),
                (p = !1),
                r()("#notifications .container").html(""),
                e.removeClass("disabled"));
          },
          checkUpdateOpertation: function (e) {
            d = e.hasOwnProperty("hasError");
            var t = e.errors || "";
            (f = t instanceof Array ? t.join(" ") : t), (p = !0);
          },
        },
        v = n(291),
        y = n.n(v);
      function _(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      var b = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.el = t);
        }
        var t, i;
        return (
          (t = e),
          (i = [
            {
              key: "init",
              value: function () {
                this.el.on("show.bs.dropdown", function (e, t) {
                  t
                    ? r()("#".concat(t))
                        .find(".dropdown-menu")
                        .first()
                        .stop(!0, !0)
                        .slideDown()
                    : r()(e.target)
                        .find(".dropdown-menu")
                        .first()
                        .stop(!0, !0)
                        .slideDown();
                }),
                  this.el.on("hide.bs.dropdown", function (e, t) {
                    t
                      ? r()("#".concat(t))
                          .find(".dropdown-menu")
                          .first()
                          .stop(!0, !0)
                          .slideUp()
                      : r()(e.target)
                          .find(".dropdown-menu")
                          .first()
                          .stop(!0, !0)
                          .slideUp();
                  }),
                  this.el.find("select.link").each(function (e, t) {
                    r()(t).on("change", function (e) {
                      window.location = r()(this).val();
                    });
                  });
              },
            },
          ]) && _(t.prototype, i),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e
        );
      })();
      function w(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      var x = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
        }
        var t, i;
        return (
          (t = e),
          (i = [
            {
              key: "init",
              value: function () {
                this.parentFocus(), this.togglePasswordVisibility();
              },
            },
            {
              key: "parentFocus",
              value: function () {
                r()(".js-child-focus").focus(function () {
                  r()(this).closest(".js-parent-focus").addClass("focus");
                }),
                  r()(".js-child-focus").focusout(function () {
                    r()(this).closest(".js-parent-focus").removeClass("focus");
                  });
              },
            },
            {
              key: "togglePasswordVisibility",
              value: function () {
                r()('button[data-action="show-password"]').on(
                  "click",
                  function () {
                    var e = r()(this)
                      .closest(".input-group")
                      .children("input.js-visible-password");
                    "password" === e.attr("type")
                      ? (e.attr("type", "text"),
                        r()(this).text(r()(this).data("textHide")))
                      : (e.attr("type", "password"),
                        r()(this).text(r()(this).data("textShow")));
                  }
                );
              },
            },
          ]) && w(t.prototype, i),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e
        );
      })();
      function S(e) {
        return (S =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function C(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function T(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function k() {
        return (k =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, i) {
                var n = E(e, t);
                if (n) {
                  var r = Object.getOwnPropertyDescriptor(n, t);
                  return r.get
                    ? r.get.call(arguments.length < 3 ? e : i)
                    : r.value;
                }
              }).apply(this, arguments);
      }
      function E(e, t) {
        for (
          ;
          !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = O(e));

        );
        return e;
      }
      function A(e, t) {
        return (A =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function I(e, t) {
        if (t && ("object" === S(t) || "function" == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      }
      function O(e) {
        return (O = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var P = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && A(e, t);
        })(l, e);
        var i,
          n,
          o,
          s,
          a =
            ((o = l),
            (s = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                t = O(o);
              if (s) {
                var i = O(this).constructor;
                e = Reflect.construct(t, arguments, i);
              } else e = t.apply(this, arguments);
              return I(this, e);
            });
        function l() {
          return C(this, l), a.apply(this, arguments);
        }
        return (
          (i = l),
          (n = [
            {
              key: "init",
              value: function () {
                var e,
                  i = this,
                  n = this;
                this.el.find("li").hover(function (t) {
                  if (!i.el.parent().hasClass("mobile")) {
                    var n = r()(t.currentTarget).attr("class");
                    if (e !== n) {
                      var o = Array.prototype.slice
                        .call(t.currentTarget.classList)
                        .map(function (e) {
                          return "string" == typeof e && ".".concat(e);
                        });
                      e = o.join("");
                    }
                  }
                }),
                  r()("#menu-icon").on("click", function () {
                    r()("body").hasClass("lang-rtl")
                      ? r()("#mobile_top_menu_wrapper").toggle(
                          "slide",
                          { direction: "right" },
                          400
                        )
                      : r()("#mobile_top_menu_wrapper").toggle("slide"),
                      r()(".mobile-menu-overlay").toggleClass("active"),
                      n.toggleMobileMenu();
                  }),
                  r()("#top_menu_closer i").on("click", function () {
                    r()("body").hasClass("lang-rtl")
                      ? r()("#mobile_top_menu_wrapper").toggle(
                          "slide",
                          { direction: "right" },
                          400
                        )
                      : r()("#mobile_top_menu_wrapper").toggle("slide"),
                      r()(".mobile-menu-overlay").toggleClass("active");
                  }),
                  r()(".mobile-menu-overlay").on("click", function () {
                    r()("#mobile_top_menu_wrapper").animate({
                      width: "toggle",
                    }),
                      r()(".mobile-menu-overlay").toggleClass("active");
                  }),
                  this.el.on("click", function (e) {
                    i.el.parent().hasClass("mobile") || e.stopPropagation();
                  }),
                  t().on("responsive update", function () {
                    r()(".js-sub-menu").removeAttr("style"),
                      n.toggleMobileMenu();
                  }),
                  k(O(l.prototype), "init", this).call(this);
              },
            },
            { key: "toggleMobileMenu", value: function () {} },
          ]) && T(i.prototype, n),
          Object.defineProperty(i, "prototype", { writable: !1 }),
          l
        );
      })(b);
      for (var D in (n(46),
      n(356),
      (t().blockcart = t().blockcart || {}),
      (t().blockcart.showModal = function (e) {
        function i() {
          return r()("#blockcart-modal");
        }
        var n = i();
        n.length && n.remove(),
          r()("body").append(e),
          (n = i()).modal("show").on("hidden.bs.modal", function (e) {
            r()("body").removeAttr("style"),
              t().emit("updateProduct", {
                reason: e.currentTarget.dataset,
                event: e,
              });
          });
      }),
      y().prototype))
        t()[D] = y().prototype[D];
      r()(document).ready(function () {
        var e = r()(".js-dropdown"),
          i = new x(),
          n = r()('.js-top-menu ul[data-depth="0"]'),
          o = new b(e),
          s = new P(n),
          a = new l(),
          c = new u();
        t().responsive.mobile || r()("#product-zoom").zoom(),
          o.init(),
          i.init(),
          s.init(),
          a.init(),
          c.init();
      });
    })();
})();
