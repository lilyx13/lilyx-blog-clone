(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    259: function (t, n, l) {
      var content = l(261);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, l(83).default)("cac9f63c", content, !0, { sourceMap: !1 });
    },
    260: function (t, n, l) {
      "use strict";
      l(259);
    },
    261: function (t, n, l) {
      var e = l(82)(function (i) {
        return i[1];
      });
      e.push([t.i, "/*purgecss start ignore*/\n\n/*purgecss end ignore*/", ""]),
        (e.locals = {}),
        (t.exports = e);
    },
    262: function (t, n, l) {
      "use strict";
      l.r(n);
      l(260);
      var e = l(33),
        component = Object(e.a)(
          {},
          function () {
            var t = this,
              n = t.$createElement,
              l = t._self._c || n;
            return l("nav", [
              l(
                "div",
                [l("nuxt-link", { attrs: { to: "/" } }, [t._v("Home")])],
                1
              ),
              l("ul", [
                l(
                  "li",
                  [
                    l(
                      "nuxt-link",
                      { staticClass: "sitelink", attrs: { to: "/blog" } },
                      [t._v("Blog")]
                    ),
                  ],
                  1
                ),
                l(
                  "li",
                  [
                    l(
                      "nuxt-link",
                      { staticClass: "sitelink", attrs: { to: "/labs" } },
                      [t._v("Labs")]
                    ),
                  ],
                  1
                ),
                l(
                  "li",
                  [
                    l(
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
  },
]);
