(window.webpackJsonp = window.webpackJsonp || []).push([
  [8, 3],
  {
    259: function (t, n, e) {
      var content = e(261);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, e(83).default)("cac9f63c", content, !0, { sourceMap: !1 });
    },
    260: function (t, n, e) {
      "use strict";
      e(259);
    },
    261: function (t, n, e) {
      var l = e(82)(function (i) {
        return i[1];
      });
      l.push([t.i, "/*purgecss start ignore*/\n\n/*purgecss end ignore*/", ""]),
        (l.locals = {}),
        (t.exports = l);
    },
    262: function (t, n, e) {
      "use strict";
      e.r(n);
      e(260);
      var l = e(33),
        component = Object(l.a)(
          {},
          function () {
            var t = this,
              n = t.$createElement,
              e = t._self._c || n;
            return e("nav", [
              e(
                "div",
                [e("nuxt-link", { attrs: { to: "/" } }, [t._v("Home")])],
                1
              ),
              e("ul", [
                e(
                  "li",
                  [
                    e(
                      "nuxt-link",
                      { staticClass: "sitelink", attrs: { to: "/blog" } },
                      [t._v("Blog")]
                    ),
                  ],
                  1
                ),
                e(
                  "li",
                  [
                    e(
                      "nuxt-link",
                      { staticClass: "sitelink", attrs: { to: "/labs" } },
                      [t._v("Labs")]
                    ),
                  ],
                  1
                ),
                e(
                  "li",
                  [
                    e(
                      "nuxt-link",
                      { staticClass: "sitelink", attrs: { to: "contact" } },
                      [t._v("Contact")]
                    ),
                  ],
                  1
                ),
              ]),
            ]);
          },
          [],
          !1,
          null,
          "1304c194",
          null
        );
      n.default = component.exports;
    },
    281: function (t, n, e) {
      "use strict";
      e.r(n);
      var l = {
          data: function () {
            return {
              info: { tm: "Lilyx Web Consulting", name: "Ashlyn Knox" },
            };
          },
          head: function () {
            return {
              script: [
                {
                  src: "https://identity.netlify.com/v1/netlify-identity-widget.js",
                },
              ],
            };
          },
        },
        o = e(33),
        component = Object(o.a)(
          l,
          function () {
            var t = this,
              n = t.$createElement,
              e = t._self._c || n;
            return e(
              "div",
              { staticClass: "app" },
              [
                e("Navigation"),
                e("header", [
                  e("h1", [t._v(t._s(t.info.tm))]),
                  e("p", [t._v("by " + t._s(t.info.name))]),
                ]),
                t._m(0),
              ],
              1
            );
          },
          [
            function () {
              var t = this,
                n = t.$createElement,
                e = t._self._c || n;
              return e("main", [
                e("div", [
                  e("p", [
                    t._v(
                      "Hey, I'm Ashlyn Knox. I am a web developer and teacher from Calgary Canada."
                    ),
                  ]),
                ]),
              ]);
            },
          ],
          !1,
          null,
          null,
          null
        );
      n.default = component.exports;
      installComponents(component, { Navigation: e(262).default });
    },
  },
]);
