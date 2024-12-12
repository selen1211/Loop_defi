(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3185],
  {
    63097: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 64404)),
        Promise.resolve().then(r.bind(r, 27640)),
        Promise.resolve().then(r.bind(r, 90239)),
        Promise.resolve().then(r.t.bind(r, 84080, 23)),
        Promise.resolve().then(r.t.bind(r, 91541, 23)),
        Promise.resolve().then(r.t.bind(r, 58488, 23)),
        Promise.resolve().then(r.bind(r, 93999)),
        Promise.resolve().then(r.t.bind(r, 44193, 23)),
        Promise.resolve().then(r.bind(r, 78119)),
        Promise.resolve().then(r.bind(r, 47583)),
        Promise.resolve().then(r.t.bind(r, 53054, 23)),
        Promise.resolve().then(r.bind(r, 57046));
    },
    85020: function (e, t, r) {
      "use strict";
      r.d(t, {
        g: function () {
          return o;
        },
      });
      let o = {
        LAUNCH_APP_URL: "https://poolloop-defi-0000.vercel.app/",
        BETA_TESTING_URL: "https://beta.loopfi.xyz/",
        HEADER_URL: "https://app.galxe.com/quest/Loop",
        PAGES: {
          DOCS: "https://maxims-organization-22.gitbook.io/loof_defi/",
          TERMS: "/terms",
          PRIVACY: "/privacy-policy",
        },
        SOCIALS: {
          TELEGRAM: "https://t.me/Loop_defiC",
          X: "https://x.com/Loop_defix",
        },
      };
    },
    78119: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return x;
        },
      });
      var o = r(57437),
        l = r(60019),
        n = r(49582),
        i = r(87520),
        s = r(2265),
        a = r(47722),
        c = r(85020),
        d = r(66648),
        m = r(87138),
        u = r(27269),
        h = r(76287),
        f = r.n(h),
        p = function (e) {
          let { className: t = "" } = e,
            r = [
              { icon: "telegram", url: c.g.SOCIALS.TELEGRAM },
              { icon: "x", url: c.g.SOCIALS.X },
            ];
          return (0, o.jsx)("div", {
            className: "social-icons flex items-center gap-4 ".concat(t),
            children: (0, o.jsx)(u.l, {
              of: r,
              render: (e) =>
                (0, o.jsx)(m.default, {
                  className:
                    "min-w-8 h-8 bg-white/5 hover:bg-white/10 hover:scale-105 hover:transition-transform transition-transform rounded-full grid place-content-center",
                  href: e.url,
                  target: "_blank",
                  title: f()(e.icon),
                  children: (0, o.jsx)(d.default, {
                    src: "/icons/icon-".concat(e.icon, ".svg"),
                    alt: f()(e.icon),
                    width: 16,
                    height: 16,
                  }),
                }),
            }),
          });
        };
      n.ZP.registerPlugin(l.V);
      var x = function () {
        let e = n.ZP.timeline({ delay: 1 }),
          t = (0, s.useRef)(null);
        return (
          (0, l.V)(
            () => {
              var r;
              let o =
                null === (r = t.current) || void 0 === r
                  ? void 0
                  : r.querySelector(".top");
              (0, i.j)(o, () => {
                var r, o, l, n;
                e.fromTo(
                  null === (r = t.current) || void 0 === r
                    ? void 0
                    : r.querySelector(".info"),
                  { y: 30, opacity: 0 },
                  { y: 0, opacity: 1, duration: 1, ease: "power2.inOut" }
                )
                  .fromTo(
                    null === (o = t.current) || void 0 === o
                      ? void 0
                      : o.querySelectorAll("ul li"),
                    { y: 30, opacity: 0, stagger: 0.1 },
                    {
                      y: 0,
                      opacity: 1,
                      duration: 1,
                      stagger: 0.1,
                      ease: "power2.inOut",
                    },
                    "-=.7"
                  )
                  .fromTo(
                    null === (l = t.current) || void 0 === l
                      ? void 0
                      : l.querySelectorAll(".actions .btn-action"),
                    { y: 30, opacity: 0, stagger: 0.1 },
                    {
                      y: 0,
                      opacity: 1,
                      stagger: 0.1,
                      duration: 1,
                      ease: "power2.inOut",
                    },
                    "-=.7"
                  )
                  .fromTo(
                    null === (n = t.current) || void 0 === n
                      ? void 0
                      : n.querySelector(".bottom"),
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1, ease: "power2.inOut" },
                    "-=.7"
                  );
              });
            },
            { scope: t }
          ),
          (0, o.jsxs)("footer", {
            ref: t,
            className:
              "relative z-1 footer w-full -mt-20 px-4 sm:px-6 max-w-[76em] mx-auto",
            children: [
              (0, o.jsxs)("div", {
                className:
                  "top flex flex-col justify-between md:grid md:grid-cols-3 gap-4 items-center pb-12",
                children: [
                  (0, o.jsxs)("div", {
                    className:
                      "info flex flex-col items-center lg:block text-center lg:text-left",
                    children: [
                      (0, o.jsx)(d.default, {
                        src: "/img/logo/loop-white.svg",
                        alt: "Logo",
                        width: 100,
                        height: 24,
                      }),
                      (0, o.jsx)(p, { className: "mt-6 mb-6 md:mb-12" }),
                    ],
                  }),
                  (0, o.jsx)("ul", {
                    className:
                      "flex flex-col items-center justify-center my-8 lg:my-0 gap-6 text-center",
                    children: (0, o.jsx)(u.l, {
                      of: [
                        { url: "#explore", title: "Explore" },
                        { url: "#how-it-works", title: "How it Works" },
                        { url: "#smart-collateral", title: "Smart Collateral" },
                        { url: "#building-blocks", title: "Building Blocks" },
                        { url: "#ecosystem", title: "Ecosystem" },
                      ],
                      render: (e) =>
                        (0, o.jsx)("li", {
                          className: "text-white/70 font-light",
                          children: (0, o.jsx)(m.default, {
                            href: e.url,
                            children: e.title,
                          }),
                        }),
                    }),
                  }),
                  (0, o.jsxs)("div", {
                    className:
                      "actions max-w-[400px] lg:max-w-[250px] md:ml-auto",
                    children: [
                      (0, o.jsx)("a", {
                        href: c.g.LAUNCH_APP_URL,
                        target: "_blank",
                        role: "button",
                        "aria-label":
                          "A button that on click connects you with the wallet",
                        id: "connect-wallet",
                        className: "btn-action launch-app w-full mb-8 ".concat(
                          (0, a.L)({ size: "lg", color: "primary" })
                        ),
                        children: "Launch App",
                      }),
                      (0, o.jsxs)("a", {
                        href: c.g.PAGES.DOCS,
                        target: "_blank",
                        className:
                          "btn-action docs-button w-full shadow-btn ".concat(
                            (0, a.L)({
                              size: "lg",
                              color: "outlineb",
                              icon: "md",
                            }),
                            " text-white"
                          ),
                        children: [
                          "Read Documentation",
                          (0, o.jsx)("svg", {
                            className: "icon-docs fill-white",
                            width: 24,
                            height: 24,
                            children: (0, o.jsx)("use", {
                              href: "/icons/icons.svg#icon-docs",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, o.jsx)("div", {
                className:
                  "bottom text-center text-sm opacity-70 py-10 border-t border-t-border-line",
                children: "\xa9 Loop, Inc. All rights reserved.",
              }),
            ],
          })
        );
      };
    },
    47583: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return f;
        },
      });
      var o = r(57437),
        l = r(66648),
        n = r(87138),
        i = r(2265),
        s = r(27269),
        a = r(49582),
        c = r(60019),
        d = r(85020),
        m = r(96164);
      let u =
        "before:bg-top-banner-prize before:bg-no-repeat before:w-[40px] before:h-full before:inset-0 before:bg-contain before:block after:block after:bg-contain after:bg-top-banner-prize-bottom after:bg-no-repeat after:w-[32px] after:h-full after:inset-0";
      var h = function (e) {
          let { className: t = "" } = e;
          return (0, o.jsxs)("a", {
            href: d.g.HEADER_URL,
            target: "_blank",
            className: (0, m.m6)(
              "loop-banner p-2 sm:p-0 flex flex-col sm:flex-row justify-center items-center flex-wrap gap-0.5 md:gap-5 bg-top-banner-gradient absolute top-0 inset-x-0 z-50 min-h-10 text-white text-sm sm:text-base before:bg-top-banner-bg before:bg-no-repeat before:bg-center before:bg-[length:200%_2000%] sm:before:bg-[length:100%_2000%] before:opacity-20 before:absolute before:w-full before:h-full before:inset-0",
              t
            ),
            children: [
              (0, o.jsxs)("div", {
                className:
                  "prizes w-full max-w-6xl mx-auto absolute inset-0 hidden md:flex justify-between h-10 overflow-hidden",
                children: [
                  (0, o.jsx)("div", {
                    className:
                      "prize-left flex flex-row-reverse gap-14 ".concat(
                        u,
                        " after:mt-5"
                      ),
                  }),
                  (0, o.jsx)("div", {
                    className: "prize-right flex gap-14 ".concat(
                      u,
                      " after:mt-2"
                    ),
                  }),
                ],
              }),
              (0, o.jsxs)("a", {
                href: "#",
                target: "_blank",
                rel: "noreferrer",
                "aria-label": "A button that on click navigates external link",
                className:
                  "relative flex items-center gap-2 pointer-events-none",
                children: [
                  (0, o.jsxs)("span", {
                    className: "flex items-center gap-1",
                    children: [
                      (0, o.jsx)(l.default, {
                        src: "/img/loop-olympics.svg",
                        alt: "Logo",
                        width: 51,
                        height: 38,
                      }),
                      (0, o.jsx)("h2", {
                        className: "text-[#e4ffe4] opacity-70",
                        style: { textShadow: "0 0 7px #abe3bd" },
                        children: "Loop Olympics",
                      }),
                    ],
                  }),
                  "|",
                  (0, o.jsx)("h2", {
                    className: "text-[#e4ffe4]",
                    style: { textShadow: "0 0 7px #abe3bd" },
                    children: "Free Points for off-chain Tasks",
                  }),
                ],
              }),
            ],
          });
        },
        f = function () {
          let [e, t] = (0, i.useState)(!1),
            [r, m] = (0, i.useState)(!1),
            u = (0, i.useRef)(0),
            f = a.ZP.timeline({ delay: 1 }),
            p = (0, i.useRef)(null);
          (0, c.V)(
            () => {
              var e, t, r;
              f.fromTo(
                null === (e = p.current) || void 0 === e
                  ? void 0
                  : e.querySelector(".logo"),
                { y: -100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power2.inOut" }
              )
                .fromTo(
                  null === (t = p.current) || void 0 === t
                    ? void 0
                    : t.querySelectorAll("ul li"),
                  { y: -100, opacity: 0, stagger: 0.1 },
                  {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power2.inOut",
                  },
                  "-=1"
                )
                .fromTo(
                  null === (r = p.current) || void 0 === r
                    ? void 0
                    : r.querySelectorAll(".actions .btn-action"),
                  { y: -100, opacity: 0, stagger: 0.1 },
                  {
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 1,
                    ease: "power2.inOut",
                  },
                  "-=1"
                );
            },
            { scope: p }
          );
          let x = [{ url: d.g.PAGES.DOCS, title: "Docs", target: "_blank" }];
          return (
            (0, i.useEffect)(() => {
              let e = (e) => {
                let t = e.target.documentElement.scrollTop;
                m(!(t > u.current)), (u.current = t), t <= 0 && m(!1);
              };
              return (
                window.addEventListener("scroll", e),
                () => window.removeEventListener("scroll", e)
              );
            }, [u.current]),
            (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsx)(h, { className: r ? "sm:fixed" : "" }),
                (0, o.jsxs)("header", {
                  ref: p,
                  className:
                    "navbar overflow-x-clip w-full z-999 border-b ".concat(
                      r
                        ? "fixed bg-primary/30 border-b-border-line/20 backdrop-blur-2xl sm:top-8"
                        : "absolute border-b-border-line/5 top-14 sm:top-8",
                      " transition-all"
                    ),
                  children: [
                    (0, o.jsxs)("nav", {
                      className:
                        "nav-items flex justify-between items-center px-4 sm:px-6 max-w-7xl mx-auto ".concat(
                          r ? "min-h-20" : "min-h-32",
                          " transition-all"
                        ),
                      children: [
                        (0, o.jsx)(l.default, {
                          src: "/img/logo/".concat(
                            r ? "loop-white.svg" : "logo-black.svg"
                          ),
                          alt: "Logo",
                          className: "logo lg:mx-8",
                          style: { opacity: 0 },
                          width: 100,
                          height: 24,
                          priority: !0,
                        }),
                        (0, o.jsxs)("div", {
                          className: "actions flex items-center gap-2 sm:gap-4",
                          children: [
                            (0, o.jsx)("ul", {
                              className:
                                "items-center justify-center gap-6 lg:gap-10 md:col-span-3 flex mr-2",
                              children: (0, o.jsx)(s.l, {
                                of: x,
                                render: (e) =>
                                  (0, o.jsx)("li", {
                                    style: { opacity: 0 },
                                    className: "".concat(
                                      r ? "text-white" : "text-black",
                                      " font-normal"
                                    ),
                                    children: (0, o.jsx)("a", {
                                      href: e.url,
                                      target: e.target,
                                      children: e.title,
                                    }),
                                  }),
                              }),
                            }),
                            (0, o.jsx)("a", {
                              style: { opacity: 0 },
                              href: d.g.LAUNCH_APP_URL,
                              target: "_blank",
                              role: "button",
                              className:
                                "btn-action w-[160px] sm:w-[200px] h-[48px] font-medium inline-flex items-center justify-center p-1 rounded-3xl bg-white text-black shadow shadow-black/5 hover:shadow-md transition duration-300 ease-in-out",
                              children: "Launch App",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, o.jsx)("div", {
                      className: "".concat(
                        e ? "w-full" : "w-0",
                        " aside-backdrop z-[99] h-full fixed inset-0 transition backdrop-blur-sm bg-black-opacity-2"
                      ),
                      onClick: () => t(!1),
                    }),
                    (0, o.jsxs)("aside", {
                      className: "".concat(
                        e ? "translate-x-[0]" : "translate-x-[100%]",
                        " sidebar  z-[100] bg-black/90 backdrop:blur-2xl text-white w-full min-h-screen md:w-[350px] p-2.5 fixed inset-y-0 right-0 transform transition duration-500 ease-in-out overflow-y-auto"
                      ),
                      children: [
                        (0, o.jsx)("button", {
                          className:
                            "svg-hover w-[50px] h-[50px] bg-black/5 shadow-inner rounded-full grid place-items-center m-2",
                          onClick: () => t(!1),
                          children: (0, o.jsx)("svg", {
                            className: "icon-nav-close",
                            width: 24,
                            height: 24,
                            children: (0, o.jsx)("use", {
                              href: "/icons/icon-.svg#icon-nav-close",
                            }),
                          }),
                        }),
                        (0, o.jsx)("hr", {
                          className: "nav mt-10 mb-10 opacity-10",
                        }),
                        (0, o.jsx)("ul", {
                          className:
                            "flex flex-col h-[calc(100%-20em)] items-center justify-center gap-6",
                          children: (0, o.jsx)(s.l, {
                            of: x,
                            render: (e) =>
                              (0, o.jsx)("li", {
                                className: "text-white text-xl font-light",
                                children: (0, o.jsx)(n.default, {
                                  href: e.url,
                                  onClick: () => t(!1),
                                  children: e.title,
                                }),
                              }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        };
    },
    27269: function (e, t, r) {
      "use strict";
      r.d(t, {
        l: function () {
          return l;
        },
      });
      var o = r(2265);
      let l = (e) => {
        let { render: t, of: r } = e;
        return o.Children.toArray(r.map((e, r) => t(e, r)));
      };
    },
    47722: function (e, t, r) {
      "use strict";
      r.d(t, {
        L: function () {
          return o;
        },
      });
      let o = (0, r(43310).tv)({
        base: "active:scale-99 font-medium inline-flex items-center justify-center select-none transition-shadow focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
        variants: {
          color: {
            primary: "bg-primary-gradient hover:shadow-lg text-white",
            green: "bg-green-gradient hover:shadow-lg text-white",
            secondary: "bg-white hover:shadow-lg text-black",
            outline:
              "bg-white/20 hover:bg-white/30 hover:shadow-md border border-white/50 text-black rounded-40",
            outlineb:
              "bg-white/20 hover:bg-white/30 hover:shadow-md border border-white/50 text-black rounded-40",
            social:
              "bg-white rounded-28 hover:shadow-md shadow-social border border-social-border",
          },
          size: {
            sm: "text-sm px-2 sm:px-4 md:px-6 min-h-btn-sm min-w-btn-sm rounded-20",
            md: "text-base px-2 sm:px-4 md:px-6 min-h-btn-md min-w-btn-md rounded-3xl",
            lg: "text-base px-2 sm:px-4 md:px-6 min-h-btn-slg min-h-btn-lg min-w-btn-lg rounded-28",
            lgx: "text-base px-2 sm:px-4 md:px-6 min-h-btn-slg min-h-btn-lg rounded-28",
          },
          icon: { sm: "gap-1", md: "gap-1.5", lg: "gap-2" },
        },
        defaultVariants: { size: "md", color: "primary" },
      });
    },
    57046: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return S;
        },
      });
      var o = r(57437),
        l = r(16909),
        n = r(62655),
        i = r(40181),
        s = r(66094),
        a = r(93191),
        c = r(62536),
        d = r(8483),
        m = r(16491),
        u = r(60152),
        h = r(78118),
        f = r(27641),
        p = r(16537),
        x = r(73035),
        b = r(78574),
        g = r(21477),
        w = r(95422),
        v = r(56300);
      let y = { ...m.R, iconUrl: "/icons/logo-ethereum.svg" },
        j = (0, n.vX)({
          appName: "LoopFi",
          projectId: "c7a1c889a",
          chains: [y, d.F],
          wallets: [
            {
              groupName: "Suggested",
              wallets: [h.U, f.u, p.D, x.P, b.D, g.p, w.a, v.l],
            },
          ],
          ssr: !0,
          transports: { [y.id]: (0, c.d)(), [d.F.id]: (0, c.d)() },
        });
      (0, u.v)({ chain: m.R, transport: (0, c.d)() });
      let N = (0, l.W)({
          accentColor: "rgb(78, 183, 0)",
          borderRadius: "large",
          fontStack: "system",
        }),
        k = new s.S();
      var S = (e) => {
        let { children: t } = e;
        return (0, o.jsx)(i.F, {
          config: j,
          children: (0, o.jsx)(a.aH, {
            client: k,
            children: (0, o.jsx)(n.pj, { theme: N, children: t }),
          }),
        });
      };
    },
    53054: function () {},
  },
  function (e) {
    e.O(0, [9757, 9141, 922, 9472, 1639, 8962, 2971, 7023, 1744], function () {
      return e((e.s = 63097));
    }),
      (_N_E = e.O());
  },
]);
