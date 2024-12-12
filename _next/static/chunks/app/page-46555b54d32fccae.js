(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1931],
  {
    27463: function (e, t, l) {
      Promise.resolve().then(l.bind(l, 31638)),
        Promise.resolve().then(l.bind(l, 55129)),
        Promise.resolve().then(l.bind(l, 77542)),
        Promise.resolve().then(l.bind(l, 43860)),
        Promise.resolve().then(l.bind(l, 10039)),
        Promise.resolve().then(l.bind(l, 35255));
    },
    85020: function (e, t, l) {
      "use strict";
      l.d(t, {
        g: function () {
          return i;
        },
      });
      let i = {
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
    31638: function (e, t, l) {
      "use strict";
      var i = l(57437),
        a = l(66648),
        s = l(27269),
        o = l(49582),
        r = l(60019),
        n = l(2265),
        c = l(87520);
      o.ZP.registerPlugin(r.V),
        (t.default = function () {
          let e = o.ZP.timeline({ delay: 1 }),
            t = (0, n.useRef)(null);
          return (
            (0, r.V)(
              () => {
                var l;
                let i =
                  null === (l = t.current) || void 0 === l
                    ? void 0
                    : l.querySelector("h2");
                o.ZP.set(i, { y: 50, opacity: 0 }),
                  (0, c.j)(i, () => {
                    var l;
                    e.to(i, {
                      y: 0,
                      opacity: 1,
                      duration: 1,
                      ease: "power2.inOut",
                    }).fromTo(
                      null === (l = t.current) || void 0 === l
                        ? void 0
                        : l.querySelectorAll(".body .card"),
                      { y: 30, opacity: 0, stagger: 0.1 },
                      {
                        y: 0,
                        opacity: 1,
                        stagger: 0.1,
                        duration: 1,
                        ease: "power2.inOut",
                      },
                      "-=.5"
                    );
                  });
              },
              { scope: t }
            ),
            (0, i.jsxs)("section", {
              ref: t,
              id: "building-blocks",
              className:
                "relative overflow-hidden innovations pt-16 pb-8 md:pt-36",
              children: [
                (0, i.jsx)("div", {
                  className:
                    "title px-2 text-center translate-y-3 md:translate-y-5 xl:translate-y-8",
                  children: (0, i.jsx)("h2", {
                    className:
                      "text-3xl md:text-7xl xl:text-9xl font-medium text-white",
                    children: "Building Blocks",
                  }),
                }),
                (0, i.jsx)("div", {
                  className:
                    "relative body grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[1310px] mx-auto px-4",
                  children: (0, i.jsx)(s.l, {
                    of: [
                      {
                        img: "LS",
                        title: "Looped LP Strategies",
                        desc: "Increase your LP exposure and start looping yield and points.",
                      },
                      {
                        img: "YMD",
                        title: "Yield Meta Derivative (lpETH)",
                        desc: "Stake lpETH and earn diversified real yield from multiple leveraged LP strategies.",
                      },
                      {
                        img: "DLV",
                        title: "Dynamic Liquidity Vault",
                        desc: "Pair LOOP with lpETH and lock for governance, boosted emissions and revenue share.",
                      },
                    ],
                    render: (e, t) =>
                      (0, i.jsxs)("div", {
                        className:
                          "relative card card-loop w-full max-w-[410px] mx-auto px-6 pt-6 pb-10 2xl:p-12 rounded-40 text-center",
                        children: [
                          (0, i.jsx)("div", {
                            className: "relative aspect-boxsm sm:aspect-box",
                            children: (0, i.jsx)(a.default, {
                              src: "/img/new/".concat(e.img, ".svg"),
                              alt: "innovations ".concat(t),
                              className: "object-contain",
                              fill: !0,
                            }),
                          }),
                          (0, i.jsx)("h2", {
                            "data-text": e.title,
                            className: "relative mt-4 ".concat(
                              1 === t
                                ? "text-2xl"
                                : 2 === t
                                ? "text-2xl sm:text-3xl"
                                : "text-2xl sm:text-3xl xl:text-3.5xl",
                              " font-medium !leading-tight bg-text-linear bg-text-clip text-reflection"
                            ),
                            children: e.title,
                          }),
                          (0, i.jsx)("p", {
                            className:
                              "mt-5 text-base sm:text-lg leading-tight max-w-[310px] mx-auto opacity-70",
                            children: e.desc,
                          }),
                        ],
                      }),
                  }),
                }),
              ],
            })
          );
        });
    },
    55129: function (e, t, l) {
      "use strict";
      l.d(t, {
        default: function () {
          return g;
        },
      });
      var i = l(57437),
        a = l(60019),
        s = l(49582),
        o = l(90035),
        r = l.n(o),
        n = l(87520),
        c = l(2265),
        d = l(96164);
      function m(e) {
        let { children: t, className: l } = e;
        return (0, i.jsxs)("div", {
          className: (0, d.m6)(
            "h-[50rem] w-full bg-white bg-grid-black/[0.2] relative",
            l || ""
          ),
          children: [
            (0, i.jsx)("div", {
              className:
                "absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]",
            }),
            t,
          ],
        });
      }
      var x = l(66648),
        u = l(27269);
      l(4250);
      var p = function (e) {
        let { data: t, isReverse: l } = e,
          a =
            "marquee-item relative aspect-square m-2 min-w-[100px] sm:min-w-[120px] md:min-w-[160px] h-[100px] sm:h-[120px] md:h-[160px] marquee-img-circle";
        return (0, i.jsx)("div", {
          className: "marquee",
          children: (0, i.jsxs)("div", {
            className: "marquee-content gap-20 ".concat(l ? "reverse" : ""),
            children: [
              (0, i.jsx)(u.l, {
                of: t,
                render: (e) =>
                  (0, i.jsx)("div", {
                    className: a,
                    children: (0, i.jsx)(x.default, {
                      src: "/img/ecosystem/".concat(e.img),
                      alt: "Logo",
                      className: "object-contain rounded-full",
                      fill: !0,
                      title: e.title,
                    }),
                  }),
              }),
              (0, i.jsx)(u.l, {
                of: t,
                render: (e) =>
                  (0, i.jsx)("div", {
                    className: a,
                    children: (0, i.jsx)(x.default, {
                      src: "/img/ecosystem/".concat(e.img),
                      alt: "Logo",
                      className: "object-contain rounded-full",
                      fill: !0,
                      title: e.title,
                    }),
                  }),
              }),
            ],
          }),
        });
      };
      s.ZP.registerPlugin(a.V);
      var g = function () {
        let e = s.ZP.timeline({ delay: 1 }),
          t = (0, c.useRef)(null);
        (0, a.V)(
          () => {
            var l;
            let i =
              null === (l = t.current) || void 0 === l
                ? void 0
                : l.querySelector("h2");
            s.ZP.set(i, { y: 50, opacity: 0 }),
              (0, n.j)(i, () => {
                e.to(i, {
                  y: 0,
                  opacity: 1,
                  duration: 1,
                  ease: "power2.inOut",
                });
              });
          },
          { scope: t }
        );
        let l = [
          { img: "pendle.svg", title: "Pendle" },
          { img: "renzoFinance.svg", title: "Renzo Finance" },
          { img: "etherfi.svg", title: "EtherFi" },
          { img: "kelpDAO.svg", title: "Kelp DAO" },
          { img: "pufferFinance.svg", title: "Puffer Finance" },
          { img: "eigenlayer.svg", title: "Eigenlayer" },
          { img: "ethereum.svg", title: "Ethereum" },
          { img: "renzoFinance.svg", title: "Renzo Finance" },
          { img: "scroll.svg", title: "Scroll" },
          { img: "stoneETH.svg", title: "Stone ETH" },
          { img: "bedrock.svg", title: "Bedrock" },
          { img: "symbiotic.svg", title: "Symbiotic" },
          { img: "turtleQuaaloops.svg", title: "Turtle Quaaloops" },
          { img: "turtleScroll.svg", title: "Turtle Scroll" },
          { img: "turtleSwell.svg", title: "Turtle Swell" },
          { img: "turtleKelp.svg", title: "Turtle Kelp" },
        ];
        return (0, i.jsx)("section", {
          ref: t,
          id: "ecosystem",
          className: "ecosystem overflow-hidden pt-16 md:pt-36",
          children: (0, i.jsxs)(m, {
            className:
              "h-[34rem] sm:h-[38rem] md:h-[50rem] bg-transparent bg-grid-white/[0.05]",
            children: [
              (0, i.jsx)("div", {
                className:
                  "title px-2 text-center translate-y-4 md:translate-y-10",
                children: (0, i.jsx)("h2", {
                  className:
                    "text-3xl md:text-4xl lg:text-9xl font-medium text-white",
                  children: "Ecosystem",
                }),
              }),
              (0, i.jsxs)("div", {
                className: "relative body flex flex-col gap-8",
                children: [
                  (0, i.jsx)(p, { data: l }),
                  (0, i.jsx)(p, { isReverse: !0, data: r()(l) }),
                  (0, i.jsxs)("div", {
                    className: "bubbles",
                    children: [
                      (0, i.jsx)("div", { className: "bubble md" }),
                      (0, i.jsx)("div", { className: "bubble md" }),
                      (0, i.jsx)("div", {
                        className: "bubble md hidden sm:block",
                      }),
                      (0, i.jsx)("div", {
                        className: "bubble md hidden sm:block",
                      }),
                      (0, i.jsx)("div", { className: "bubble sm" }),
                      (0, i.jsx)("div", { className: "bubble sm" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    43860: function (e, t, l) {
      "use strict";
      var i = l(57437),
        a = l(66648),
        s = l(27269),
        o = l(49582),
        r = l(60019),
        n = l(2265),
        c = l(87520);
      o.ZP.registerPlugin(r.V),
        (t.default = function () {
          let e = o.ZP.timeline({ delay: 1 }),
            t = (0, n.useRef)(null);
          return (
            (0, r.V)(
              () => {
                var l;
                let i =
                  null === (l = t.current) || void 0 === l
                    ? void 0
                    : l.querySelector("h2");
                o.ZP.set(i, { y: 50, opacity: 0 }),
                  (0, c.j)(i, () => {
                    var l;
                    e.to(i, {
                      y: 0,
                      opacity: 1,
                      duration: 1,
                      ease: "power2.inOut",
                    }).fromTo(
                      null === (l = t.current) || void 0 === l
                        ? void 0
                        : l.querySelectorAll(".body .card"),
                      { y: 30, opacity: 0, stagger: 0.1 },
                      {
                        y: 0,
                        opacity: 1,
                        stagger: 0.1,
                        duration: 1,
                        ease: "power2.inOut",
                      },
                      "-=.5"
                    );
                  });
              },
              { scope: t }
            ),
            (0, i.jsxs)("section", {
              ref: t,
              id: "how-it-works",
              className:
                "relative overflow-hidden innovations pt-16 pb-8 md:pt-36",
              children: [
                (0, i.jsx)("div", {
                  className:
                    "title px-2 text-center translate-y-3 md:translate-y-5 xl:translate-y-8",
                  children: (0, i.jsx)("h2", {
                    className:
                      "text-3xl md:text-7xl xl:text-9xl font-medium text-white",
                    children: "How it works",
                  }),
                }),
                (0, i.jsx)("div", {
                  className:
                    "relative body grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[1310px] mx-auto px-4",
                  children: (0, i.jsx)(s.l, {
                    of: [
                      {
                        title: "LOCKER",
                        desc: "Lockers qualify for emissions and protocol revenue",
                      },
                      {
                        title: "LOOPER",
                        desc: "Loopers pay interest for leveraged yield + points",
                      },
                      {
                        title: "LENDER",
                        desc: "Lenders receive the interest of all Loopers",
                      },
                    ],
                    render: (e, t) =>
                      (0, i.jsxs)("div", {
                        className:
                          "relative card card-loop w-full max-w-[410px] mx-auto px-6 pt-6 pb-10 2xl:p-12 rounded-40 text-center",
                        children: [
                          (0, i.jsx)("div", {
                            className: "relative aspect-boxsm sm:aspect-box",
                            children: (0, i.jsx)(a.default, {
                              src: "/img/new/".concat(e.title, ".svg"),
                              alt: "innovations ".concat(t),
                              className: "object-contain",
                              fill: !0,
                            }),
                          }),
                          (0, i.jsx)("h2", {
                            "data-text": e.title,
                            className:
                              "relative mt-4 text-3xl xl:text-4.5xl font-medium !leading-tight bg-text-linear bg-text-clip text-reflection",
                            children: e.title,
                          }),
                          (0, i.jsx)("p", {
                            className:
                              "mt-5 text-base sm:text-lg leading-tight max-w-[310px] mx-auto opacity-70",
                            children: e.desc,
                          }),
                        ],
                      }),
                  }),
                }),
              ],
            })
          );
        });
    },
    77542: function (e, t, l) {
      "use strict";
      l.d(t, {
        default: function () {
          return m;
        },
      });
      var i = l(57437),
        a = l(47722),
        s = l(66648),
        o = l(49582),
        r = l(60019),
        n = l(2265),
        c = l(85020),
        d = () =>
          (0, i.jsx)("section", {
            className: "quaaloops w-full px-4 mt-20",
            children: (0, i.jsxs)("div", {
              className:
                "quaaloops-body shadow-hcard relative overflow-x-hidden px-4 sm:px-16 py-10 md:py-4 bg-white/70 border border-border-new shadow-shadow-new min-h-56 sm:min-h-48 max-w-7xl mx-auto rounded-28 overflow-hidden flex items-center",
              children: [
                (0, i.jsx)("div", {
                  className:
                    "absolute inset-0 bg-quaaloops bg-cover rounded-2xl after:bg-quaaloops-gradient after:bg-cover after:absolute after:inset-0 after:size-full",
                }),
                (0, i.jsxs)("div", {
                  className:
                    "mint-content w-full relative z-1 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12",
                  children: [
                    (0, i.jsxs)("div", {
                      className:
                        "groups flex flex-col gap-4 z-1 text-center md:text-left",
                      children: [
                        (0, i.jsx)("h2", {
                          className:
                            "text-3xl lg:text-3.5xl font-medium text-white",
                          children: "Bootstrap the Loop protocol",
                        }),
                        (0, i.jsx)("p", {
                          className:
                            "text-sm opacity-50 max-w-[432px] pb-6 md:pb-0 text-white",
                          children:
                            "Deposit ETH and LRTs to bootstrap borrowing liquidity for the Loop protocol. You earn points for the upcoming Airdrop",
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className:
                        "q-action w-full md:w-auto flex justify-center md:justify-end items-center lg:mr-9",
                      children: [
                        (0, i.jsx)(s.default, {
                          src: "/img/new/nft-chilling.svg",
                          className:
                            "absolute right-[-12%] sm:right-[16%] lg:right-[28%]",
                          alt: "NFT BG",
                          width: 285,
                          height: 208,
                        }),
                        // (0, i.jsx)("a", {
                        //   type: "button",
                        //   href: "https://poolparty.loopfi.xyz/",
                        //   target: "_blank",
                        //   "aria-label":
                        //     "A button that on click navigates to point program",
                        //   id: "point-program",
                        //   className: "point-program z-1 ".concat(
                        //     (0, a.L)({ size: "lg", color: "secondary" }),
                        //     " font-medium w-full sm:max-w-[288px]"
                        //   ),
                        //   children: "Start earning Quaaloops",
                        // }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
      o.ZP.registerPlugin(r.V);
      var m = function () {
        let e = o.ZP.timeline({ delay: 2 }),
          t = (0, n.useRef)(null);
        return (
          (0, r.V)(
            () => {
              var l, i, a, s, o, r, n, c;
              null === (i = document.body) ||
                void 0 === i ||
                null === (l = i.classList) ||
                void 0 === l ||
                l.add("overflow-x-hidden"),
                e
                  .fromTo(
                    null === (a = t.current) || void 0 === a
                      ? void 0
                      : a.querySelectorAll("h1"),
                    { y: -20, opacity: 0, stagger: 0.1 },
                    {
                      y: 0,
                      opacity: 1,
                      duration: 1,
                      stagger: 0.1,
                      ease: "power2.inOut",
                    },
                    "-=.5"
                  )
                  .fromTo(
                    null === (s = document) || void 0 === s
                      ? void 0
                      : s.querySelector(".lines-bg"),
                    { scale: 1.2, opacity: 0 },
                    {
                      scale: 1,
                      opacity: 1,
                      duration: 1,
                      ease: "power2.inOut",
                      onComplete: () => {
                        var e, t;
                        null === (t = document.body) ||
                          void 0 === t ||
                          null === (e = t.classList) ||
                          void 0 === e ||
                          e.remove("overflow-x-hidden");
                      },
                    }
                  )
                  .fromTo(
                    null === (o = t.current) || void 0 === o
                      ? void 0
                      : o.querySelector(".main-star"),
                    { scale: 0.8, y: 30, opacity: 0 },
                    {
                      scale: 1,
                      y: 0,
                      opacity: 1,
                      duration: 1,
                      ease: "power2.inOut",
                    },
                    "-=.5"
                  )
                  .fromTo(
                    null === (r = t.current) || void 0 === r
                      ? void 0
                      : r.querySelectorAll("p"),
                    { y: 50, opacity: 0, stagger: 0.1 },
                    {
                      y: 0,
                      opacity: 1,
                      duration: 1,
                      stagger: 0.1,
                      ease: "power2.inOut",
                    },
                    "-=.5"
                  )
                  .fromTo(
                    null === (n = t.current) || void 0 === n
                      ? void 0
                      : n.querySelectorAll(".actions .btn-action"),
                    { y: 30, opacity: 0, stagger: 0.1 },
                    {
                      y: 0,
                      opacity: 1,
                      stagger: 0.1,
                      duration: 1,
                      ease: "power2.inOut",
                    },
                    "-=.5"
                  )
                  .fromTo(
                    null === (c = t.current) || void 0 === c
                      ? void 0
                      : c.querySelector(".quaaloops"),
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1, ease: "power2.inOut" },
                    "-=.5"
                  );
            },
            { scope: t }
          ),
          (0, i.jsxs)("div", {
            ref: t,
            children: [
              (0, i.jsx)(s.default, {
                style: { opacity: 0 },
                src: "/img/new/bg-loop-circles.svg",
                alt: "Star",
                className:
                  "main-star absolute inset-x-0 mx-auto top-36 lg:top-32 -z-1",
                width: 1440,
                height: 621,
                priority: !0,
              }),
              (0, i.jsx)("h1", {
                className:
                  "flex flex-col items-center gap-4 lg:gap-5 text-4.5xl md:text-6xl lg:text-7.5xl text-text-new header-title-shadow font-steradian leading-tight text-center max-w-[600px] mx-auto",
                children: "Yield Leverage Restaking",
              }),
              (0, i.jsx)("p", {
                style: { opacity: 0 },
                className:
                  "mt-8 flex justify-center text-center text-xl sm:text-2xl opacity-70 text-white",
                children:
                  "Max leverage, max points, max yield with LP tokens as smart collateral.",
              }),
              (0, i.jsxs)("div", {
                className:
                  "actions mt-24 sm:mt-48 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mx-4 sm:mx-0",
                children: [
                //   (0, i.jsx)("a", {
                //     href: c.g.BETA_TESTING_URL,
                //     target: "_blank",
                //     role: "button",
                //     style: { opacity: 0 },
                //     "aria-label":
                //       "A button that on click connects you with the wallet",
                //     id: "connect-wallet",
                //     className: "btn-action launch-app w-full sm:w-auto ".concat(
                //       (0, a.L)({ size: "lg", color: "primary" })
                //     ),
                //     children: "Access Beta Testing \uD83D\uDD25",
                //   }),
                  (0, i.jsxs)("a", {
                    href: c.g.PAGES.DOCS,
                    target: "_blank",
                    style: { opacity: 0 },
                    className:
                      "btn-action docs-button w-full sm:w-auto ".concat(
                        (0, a.L)({ size: "lg", color: "secondary", icon: "md" })
                      ),
                    children: [
                      "Read Documentation",
                      (0, i.jsx)("svg", {
                        className: "icon-docs",
                        width: 24,
                        height: 24,
                        children: (0, i.jsx)("use", {
                          href: "/icons/icons.svg#icon-docs",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)(d, {}),
            ],
          })
        );
      };
    },
    10039: function (e, t, l) {
      "use strict";
      var i = l(57437),
        a = l(60019),
        s = l(49582),
        o = l(2265);
      s.ZP.registerPlugin(a.V),
        (t.default = function () {
          let e = (0, o.useRef)(null);
          return (
            (0, a.V)(
              () => {
                let t = e.current;
                s.ZP.set(t, { y: 50, opacity: 0 }),
                  s.ZP.to(t, {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 5,
                    ease: "power2.inOut",
                  });
              },
              { scope: e }
            ),
            (0, i.jsx)("div", {
              ref: e,
              className:
                "mt-36 sm:mt-48 px-4 text-white opacity-70 text-2xl max-w-[960px] mx-auto text-center",
              style: { textShadow: "4px 0px 8px #ffffffb5" },
              children:
                "Loop is a money market utilizing smart collateral with automated leverage to maximize capital efficiency and returns of Restaking products.",
            })
          );
        });
    },
    35255: function (e, t, l) {
      "use strict";
      var i = l(57437),
        a = l(66648),
        s = l(49582),
        o = l(60019),
        r = l(2265),
        n = l(87520);
      s.ZP.registerPlugin(o.V),
        (t.default = function () {
          let e = s.ZP.timeline({ delay: 1 }),
            t = (0, r.useRef)(null);
          return (
            (0, o.V)(
              () => {
                var l;
                let i =
                  null === (l = t.current) || void 0 === l
                    ? void 0
                    : l.querySelector("h2");
                s.ZP.set(i, { y: 50, opacity: 0 }),
                  (0, n.j)(i, () => {
                    var l;
                    e.to(i, {
                      y: 0,
                      opacity: 1,
                      duration: 1,
                      ease: "power2.inOut",
                    }).fromTo(
                      null === (l = t.current) || void 0 === l
                        ? void 0
                        : l.querySelector(".body .card"),
                      { y: 30, opacity: 0 },
                      { y: 0, opacity: 1, duration: 1, ease: "power2.inOut" },
                      "-=.5"
                    );
                  });
              },
              { scope: t }
            ),
            (0, i.jsxs)("section", {
              ref: t,
              id: "smart-collateral",
              className:
                "relative overflow-hidden innovations pt-16 pb-8 md:pt-36",
              children: [
                (0, i.jsx)("div", {
                  className:
                    "title px-2 text-center translate-y-3 md:translate-y-5 xl:translate-y-8",
                  children: (0, i.jsx)("h2", {
                    className:
                      "text-3xl md:text-7xl xl:text-9xl font-medium text-white",
                    children: "Smart Collateral",
                  }),
                }),
                (0, i.jsx)("div", {
                  className: "relative body max-w-[1310px] mx-auto",
                  children: (0, i.jsxs)("div", {
                    className:
                      "relative card card-loop flex justify-center aspect-smartc sm:aspect-video w-full max-h-[635px] px-6 pt-6 pb-6 sm:pb-10 2xl:p-12 rounded-40 text-center",
                    children: [
                      (0, i.jsx)(a.default, {
                        src: "/img/new/SMART_COLLATERAL.svg",
                        alt: "smart collateral",
                        className:
                          "object-contain sm:max-w-[1000px] sm:mx-auto pb-12 sm:pb-20 lg:pb-0",
                        fill: !0,
                      }),
                      (0, i.jsx)("p", {
                        className:
                          "text-sm sm:text-base lg:text-lg mt-auto text-center opacity-70 leading-normal",
                        children:
                          "Utilize your liquidity pool tokens or lending receipt tokens as collateral for maximum capital efficiency.",
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        });
    },
    27269: function (e, t, l) {
      "use strict";
      l.d(t, {
        l: function () {
          return a;
        },
      });
      var i = l(2265);
      let a = (e) => {
        let { render: t, of: l } = e;
        return i.Children.toArray(l.map((e, l) => t(e, l)));
      };
    },
    47722: function (e, t, l) {
      "use strict";
      l.d(t, {
        L: function () {
          return i;
        },
      });
      let i = (0, l(43310).tv)({
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
    4250: function () {},
  },
  function (e) {
    e.O(0, [1034, 922, 1639, 35, 2971, 7023, 1744], function () {
      return e((e.s = 27463));
    }),
      (_N_E = e.O());
  },
]);
