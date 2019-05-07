!function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function(e) {
    e.extend({
        highlight: function(t, a, i, n, o, c) {
            if (3 === t.nodeType) {
                var r = c ? e.removeDiacritcs(t.data) : t.data
                  , l = r.match(a);
                if (l) {
                    var s = document.createElement(i || "span");
                    s.className = n || "highlight";
                    var d = t.data.indexOf(l[1], l.index)
                      , u = t.splitText(d);
                    u.splitText(l[1].length);
                    var h = u.cloneNode(!0);
                    return s.appendChild(h),
                    u.parentNode.replaceChild(s, u),
                    "function" == typeof o && o(s),
                    1
                }
            } else if (1 === t.nodeType && t.childNodes && !/(script|style)/i.test(t.tagName) && (t.tagName !== i.toUpperCase() || t.className !== n))
                for (var _ = 0; _ < t.childNodes.length; _++)
                    _ += e.highlight(t.childNodes[_], a, i, n, o, c);
            return 0
        },
        removeDiacritcs: function(e) {
            return e.replace(/[\u00c0-\u00c6]/g, "A").replace(/[\u00e0-\u00e6]/g, "a").replace(/[\u00c7]/g, "C").replace(/[\u00e7]/g, "c").replace(/[\u00c8-\u00cb]/g, "E").replace(/[\u00e8-\u00eb]/g, "e").replace(/[\u00cc-\u00cf]/g, "I").replace(/[\u00ec-\u00ef]/g, "i").replace(/[\u00d1|\u0147]/g, "N").replace(/[\u00f1|\u0148]/g, "n").replace(/[\u00d2-\u00d8|\u0150]/g, "O").replace(/[\u00f2-\u00f8|\u0151]/g, "o").replace(/[\u0160]/g, "S").replace(/[\u0161]/g, "s").replace(/[\u00d9-\u00dc]/g, "U").replace(/[\u00f9-\u00fc]/g, "u").replace(/[\u00dd]/g, "Y").replace(/[\u00fd]/g, "y")
        }
    }),
    e.fn.unhighlight = function(t) {
        var a = {
            className: "highlight",
            element: "span"
        };
        return e.extend(a, t),
        this.find(a.element + "." + a.className).each(function() {
            var e = this.parentNode;
            e.replaceChild(this.firstChild, this),
            e.normalize()
        }).end()
    }
    ,
    e.fn.highlight = function(t, a, i) {
        var n = {
            className: "highlight",
            element: "span",
            caseSensitive: !1,
            wordsOnly: !1,
            wordsBoundary: "\\b",
            ignoreDiacritics: !1
        };
        if (e.extend(n, a),
        "string" == typeof t && (t = [t]),
        t = e.grep(t, function(e) {
            return "" != e
        }),
        t = e.map(t, function(t) {
            return n.ignoreDiacritics && (t = e.removeDiacritcs(t)),
            t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
        }),
        0 === t.length)
            return this;
        var o = n.caseSensitive ? "" : "i"
          , c = "(" + t.join("|") + ")";
        n.wordsOnly && (c = (n.wordsBoundaryStart || n.wordsBoundary) + c + (n.wordsBoundaryEnd || n.wordsBoundary));
        var r = new RegExp(c,o);
        return this.each(function() {
            e.highlight(this, r, n.element, n.className, i, n.ignoreDiacritics)
        })
    }
}),
function(e) {
    var t = !1;
    if ("function" == typeof define && define.amd && (define(e),
    t = !0),
    "object" == typeof exports && (module.exports = e(),
    t = !0),
    !t) {
        var a = window.Cookies
          , i = window.Cookies = e();
        i.noConflict = function() {
            return window.Cookies = a,
            i
        }
    }
}(function() {
    function e() {
        for (var e = 0, t = {}; e < arguments.length; e++) {
            var a = arguments[e];
            for (var i in a)
                t[i] = a[i]
        }
        return t
    }
    function t(a) {
        function i(t, n, o) {
            var c;
            if ("undefined" != typeof document) {
                if (arguments.length > 1) {
                    if (o = e({
                        path: "/"
                    }, i.defaults, o),
                    "number" == typeof o.expires) {
                        var r = new Date;
                        r.setMilliseconds(r.getMilliseconds() + 864e5 * o.expires),
                        o.expires = r
                    }
                    o.expires = o.expires ? o.expires.toUTCString() : "";
                    try {
                        c = JSON.stringify(n),
                        /^[\{\[]/.test(c) && (n = c)
                    } catch (l) {}
                    n = a.write ? a.write(n, t) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                    t = encodeURIComponent(String(t)),
                    t = t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent),
                    t = t.replace(/[\(\)]/g, escape);
                    var s = "";
                    for (var d in o)
                        o[d] && (s += "; " + d,
                        o[d] !== !0 && (s += "=" + o[d]));
                    return document.cookie = t + "=" + n + s
                }
                t || (c = {});
                for (var u = document.cookie ? document.cookie.split("; ") : [], h = /(%[0-9A-Z]{2})+/g, _ = 0; _ < u.length; _++) {
                    var f = u[_].split("=")
                      , p = f.slice(1).join("=");
                    this.json || '"' !== p.charAt(0) || (p = p.slice(1, -1));
                    try {
                        var k = f[0].replace(h, decodeURIComponent);
                        if (p = a.read ? a.read(p, k) : a(p, k) || p.replace(h, decodeURIComponent),
                        this.json)
                            try {
                                p = JSON.parse(p)
                            } catch (l) {}
                        if (t === k) {
                            c = p;
                            break
                        }
                        t || (c[k] = p)
                    } catch (l) {}
                }
                return c
            }
        }
        return i.set = i,
        i.get = function(e) {
            return i.call(i, e)
        }
        ,
        i.getJSON = function() {
            return i.apply({
                json: !0
            }, [].slice.call(arguments))
        }
        ,
        i.defaults = {},
        i.remove = function(t, a) {
            i(t, "", e(a, {
                expires: -1
            }))
        }
        ,
        i.withConverter = t,
        i
    }
    return t(function() {})
}),
function() {
    function e() {
        $(".article_body img").each(function() {
            var e = $(this).closest(".tabs").length;
            !e && $(this).width() < 20 && $(this).addClass("small")
        }),
        s._isArticle() && s._sideBySideSameHeight()
    }
    function t() {
        if (s._nativeAdminBar = [],
        s.$header = $("header"),
        s.$footer = $(".c-nav--footer"),
        s.$dd = null,
        s.$dd_clone = null,
        s._bumpArticleRoles(),
        s._readCookies(),
        s._buildMetaDataMap(),
        s._addBreadcrumbTitles(),
        s._addHierarchyTags(),
        s._setCategoryDetails(),
        s._isHome() ? (s.$header_clone = s.$header.clone().addClass("header_white").hide(),
        s.$header.before(s.$header_clone)) : (s.$header.addClass("header_white"),
        s.$header_clone = s.$header),
        $(".search #query").on("focus", function() {
            $(this).parent().addClass("focused")
        }).on("focusout", function() {
            $(this).parent().removeClass("focused")
        }),
        s._isSearchResults()) {
            $(".header_search").hide();
            var e = $(".query_val").text()
              , t = $(".count_val").text()
              , i = $(".search_result")
              , n = i.html().replace("{num}", t).replace("{term}", l(e));
            i.html(n),
            i.removeClass("invisible"),
            $(".search_container #query").val(e),
            $(".search_results_container .sorry b.highlight").text(e),
            s._cleanUpMeta(),
            s._highlightSearchResults()
        }
        if (s._isArticle() && (s._fixArticleBreadCrumbs(),
        s._swapArticleTableChars(),
        s._makeFilesClickable(),
        s._localizeNextPrev()),
        s._isHome()) {
            s._makeResourcesClickable(),
            $(".search #query").focus();
            var o = function(e, t) {
                var a = $('*[data-clog-ui-element="' + e + '"]').get(0).href.replace(/categories\/\d+/gi, "categories/" + t + "/");
                $('*[data-clog-ui-element="' + e + '"]').attr("href", a)
            };
            s._isSandbox() && (o("link_getting_started", 360000049103),
            o("link_using_slack", 360000047266),
            o("link_profile_preferences", 360000049123),
            o("link_add_tools", 360000049143),
            o("link_team_administration", 360000048443),
            o("link_tips_tricks", 360000049163))
        }
        s._disableHoverIfMobile(),
        s._prepareTabs(),
        a(),
        s._setupAdminBarObserver()
    }
    function a() {
        var e = $(document).scrollTop();
        if (s.$header_clone) {
            if (s._isHome()) {
                var t = !1;
                if (e >= 50 ? s.$header_clone.is(":visible") || (s.$header_clone.css({
                    "margin-top": "-70px"
                }).show().stop().animate({
                    "margin-top": "0px"
                }, 150),
                t = !0) : s.searchOpen || d || !s.$header_clone.is(":visible") || (d = !0,
                s.$header_clone.stop().css({
                    "margin-top": "0px"
                }).animate({
                    "margin-top": "-70px"
                }, 110, function() {
                    s.$header_clone.hide(),
                    d = !1,
                    s._cancelResponsiveSearch()
                }),
                t = !0),
                t && s.$dd && s.$dd_clone) {
                    var a = s.$dd.data("contents")
                      , i = s.$dd_clone.data("contents");
                    a.hasClass("shown") ? (a.removeClass("shown").hide(),
                    i.addClass("shown").show()) : i.hasClass("shown") && (a.addClass("shown").show(),
                    i.removeClass("shown").hide())
                }
            }
            s._offsetHeaderBar()
        }
    }
    function i() {
        return !window.HelpCenter || "end_user" == window.HelpCenter.user.role || "anonymous" == window.HelpCenter.user.role
    }
    function n() {
        return -1 != location.href.indexOf("slack.zendesk") || -1 != location.href.indexOf("slack.help")
    }
    function o() {
        var e = document.URL;
        i() && (e.search("/requests") > 1 || e.search("%2Frequests") > 1 || e.search("/contributions") > 1 || e.search("/subscriptions") > 1) && (window.location.href = "https://slack.com/help/")
    }
    function c() {
        (s._isLocalHost() || s._isSandbox() || s._isLiveHC()) && document.getElementsByTagName("html")[0].classList.add("slackhc")
    }
    function r(e) {
        return function(t) {
            return null == e ? void 0 : e[t]
        }
    }
    function l(e) {
        var t = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }
          , a = r(t)
          , i = /[&<>"']/g
          , n = RegExp(i.source);
        return e && n.test(e) ? e.replace(i, a) : e
    }
    var s = {};
    s._util = {
        getTimezoneOffset: function() {
            return (new Date).getTimezoneOffset()
        }
    },
    o(),
    s.$header = null,
    s.$footer = null,
    s.$header_clone = null,
    s.content_offset = 90,
    s.adminBarClosedClass = "zd-hc-2SvfmqVmH_e2q9XklRH2xH",
    s.sandboxSubdomain = "slack1447178842",
    s.const_metadata = {},
    $(document).ready(t),
    $(window).on("scroll", a),
    $(window).on("load", e);
    var d = !1;
    s._setupAdminBarObserver = function() {
        $("body").on("DOMSubtreeModified.dom", function(e) {
            if (e.target && e.target.id && "navbar-container" == e.target.id && e.target.firstChild && "zd-hc-navbar" == e.target.firstChild.localName) {
                $("body").off(".dom"),
                s._nativeAdminBar = $("body").find("zd-hc-navbar"),
                s._offsetHeaderBar();
                var t = new MutationObserver(function(e) {
                    e.forEach(function(e) {
                        "class" === e.attributeName && s._offsetHeaderBar()
                    })
                }
                );
                t.observe(s._nativeAdminBar[0], {
                    attributes: !0
                })
            }
        })
    }
    ,
    s._offsetHeaderBar = function() {
        s._nativeAdminBar.length && (s._nativeAdminBar.hasClass(s.adminBarClosedClass) ? s.$header_clone.removeClass("offset") : s.$header_clone.addClass("offset"))
    }
    ,
    s._bumpArticleRoles = function() {
        if (s._isArticle()) {
            var e = $(".boxed.roles");
            e.length && e.parent().prepend(e)
        }
    }
    ,
    s._enrichCreateWorkspaceCTA = function() {
        $("a.enrich_create_workspace_cta").each(function() {
            var e = $(this).attr("href");
            s.permaCookie.visitorCookie && (e += "&hid=" + s.permaCookie.visitorCookie),
            e += "&src=" + s._getPageType(),
            s._getPageID() && (e += "&aid=" + s._getPageID()),
            $.isEmptyObject(s.utmCookie) || (e += "&" + $.param(s.utmCookie)),
            $(this).attr("href", e)
        })
    }
    ,
    s._enrichContactUsCTA = function() {
        $('a[data-clog-ui-element="btn_contact_us"]').each(function() {
            var e = $(this).attr("href");
            s._isArticle() && (e += "?from_hc=1&src=article",
            s.permaCookie.visitorCookie && (e += "&hid=" + s.permaCookie.visitorCookie),
            e += "&aid=" + s._getPageID()),
            $(this).attr("href", e)
        })
    }
    ,
    s._buildMetaDataMap = function() {
        var e = $("#category_details");
        if (e.length)
            for (var t = 0; t < e.children().length; t++) {
                var a = e.children().eq(t);
                if (a.attr("data-id")) {
                    var i = a.attr("data-id")
                      , n = {
                        title: a.find("option").text(),
                        desc: a.find("span").text().trim()
                    };
                    s.const_metadata[i] = n
                } else {
                    var o = a.find("option").text()
                      , c = a.find("span").text().trim();
                    s.const_metadata[o] = c
                }
            }
        var r = $("#next_prev");
        if (r.length)
            for (var l = 0; l < r.children().length; l++) {
                var d = r.children().eq(l)
                  , u = d.val().trim()
                  , h = d.text().trim();
                s.const_metadata[u] = h
            }
        var _ = $("#search_meta");
        if (_.length)
            for (var f = 0; f < _.children().length; f++) {
                var p = _.children().eq(f)
                  , k = p.val().trim()
                  , g = p.text().trim();
                s.const_metadata[k] = g
            }
    }
    ,
    s._setCategoryDetails = function() {
        var e, t;
        if (s._isCategory())
            e = $(".banner_title").text(),
            t = $(".banner_desc").text();
        else if (s._isSection() || s._isArticle()) {
            var a = $(".breadcrumbs");
            if (!a.length || !s.const_metadata)
                return;
            e = a.children().eq(1).text().trim();
            var i = s._getPageID(a.children().eq(1).find("a").attr("href"))
              , n = s.const_metadata[i];
            n && n.desc ? (t = n.desc,
            e = n.title) : t = s.const_metadata[e],
            $(".banner_title").text(e),
            $(".banner_desc").text(t)
        }
        return !0
    }
    ,
    s._setGuideDescriptions = function() {
        (s._isCategory() || s._isGuidesSection()) && $(".guides_page h2").each(function() {
            var e = $(this)
              , t = e.attr("data-id")
              , a = s.const_metadata[t] || s.const_metadata[e.text().trim()] || "";
            e.attr("data-desc", a.desc || a || ""),
            e.attr("title", a.title || e.text().trim())
        })
    }
    ,
    s._addBreadcrumbTitles = function() {
        var e = $(".breadcrumbs li");
        e.each(function() {
            var e = $(this).text().trim();
            $(this).attr("title", e)
        })
    }
    ,
    s._addHierarchyTags = function() {
        s._isGuidesSection() && $(".section_container").addClass("guides_page"),
        s._isGuideArticle() && $(".article_page").addClass("guide_page"),
        s._isVideoArticle() && $(".article_page").addClass("videos_page")
    }
    ,
    s._highlightSearchResults = function() {
        var e = {
            wordsOnly: !0,
            caseSensitive: !1,
            element: "mark",
            className: "highlight"
        }
          , t = $(".search_terms").text()
          , a = t.split(" ");
        $(".search-result-link").highlight(a, e),
        $(".search-result-description").highlight(a, e)
    }
    ,
    s._sideBySideSameHeight = function() {
        $(".side_by_side").each(function() {
            var e = $(this).children().first()
              , t = $(this).children().last()
              , a = e.find("img").length && e.find("kbd").length && t.find("img").length && t.find("kbd").length;
            if (a) {
                var i = Math.max(e.outerHeight(), t.outerHeight());
                e.css({
                    "min-height": i
                }).addClass("flexfit"),
                t.css({
                    "min-height": i
                }).addClass("flexfit")
            }
        })
    }
    ,
    s._cleanUpMeta = function() {
        var e = $(".search-result-meta");
        e.each(function() {
            var t = $(this)
              , a = t.children("a").detach();
            t.empty(),
            a.each(function() {
                var e = $(this)
                  , a = e.attr("href").indexOf("categories") >= 0;
                a && t.append(e),
                -1 != this.href.toLowerCase().indexOf("202622897") && $(this).addClass("video"),
                -1 != this.href.toLowerCase().indexOf("115000487248") && $(this).addClass("grid")
            }),
            e.css({
                color: "#BABBBF"
            })
        })
    }
    ,
    s._fixArticleBreadCrumbs = function() {
        $("ol.breadcrumbs").find("a[href*=115000736243]").closest("li").hide(),
        $(".article_breadcrumbs_container li:nth-child(3) a").each(function() {
            if (s._isVideoArticle())
                $(this).parent().hide();
            else if (s._isGridArticle())
                $(this).parent().hide();
            else {
                var e = s._convertToSlug($(this).text().trim())
                  , t = $(this).parent().prev().children("a").attr("href")
                  , a = t + "#" + e;
                $(this).attr("href", a)
            }
        }),
        $(".article_breadcrumbs_container").css("visibility", "visible")
    }
    ,
    s._swapArticleTableChars = function() {
        $(".article_body td:contains(✓)").css({
            "font-family": "Slack"
        }).text(""),
        $(".article_body td:contains(✷)").css({
            "font-family": "Slack"
        }).text(""),
        $(".article_body td:contains(✦)").css({
            "font-family": "Slack",
            "font-size": "10px",
            "line-height": "18px"
        }).text(""),
        $(".article_body p:contains(✷)").each(function() {
            var e = $(this).html();
            e = e.replace("✷", '<i class="ts_icon ts_icon_star sm_icon padded"></i>'),
            e = e.replace("✦", '<i class="ts_icon ts_icon_presence_ra_online"></i>'),
            $(this).html(e)
        })
    }
    ,
    s._makeResourcesClickable = function() {
        $(".resource_categories .rc_category").click(function() {
            var e = $(this).find("a");
            e.length && e.attr("href") && (top.location = e.attr("href"))
        })
    }
    ,
    s._makeFilesClickable = function() {
        $(".article_body p.file a").click(function(e) {
            e.preventDefault()
        }),
        $(".article_body p.file").click(function(e) {
            e.preventDefault();
            var t = $(this).find("a");
            t.length && t.attr("href") && window.open(t.attr("href"))
        })
    }
    ,
    s._convertToSlug = function(e, t) {
        if (!e)
            return "";
        var a = e.toLowerCase().replace(/[#&']+/g, "");
        if (a = a.replace(/\u00a0/g, "-"),
        a = a.replace(/\//g, "-"),
        a = a.toLowerCase().replace(/[ ]+/g, "-"),
        t)
            return a;
        var i = a.match(/[^\w-]+/g);
        if (i && i.length)
            for (var n = 0; n < i.length; n++) {
                for (var o = i[n], c = "", r = 0, l = o.length; l > r; r++)
                    c += "u" + o.charCodeAt(r);
                a = a.replace(o, c)
            }
        return a
    }
    ,
    s._disableHoverIfMobile = function() {
        try {
            if ("ontouchstart"in document.documentElement)
                for (var e = document.styleSheets.length - 1; e >= 0; e--) {
                    var t = document.styleSheets[e];
                    if (t.cssRules)
                        for (var a = t.cssRules.length - 1; a >= 0; a--) {
                            var i = t.cssRules[a];
                            i.selectorText && (i.selectorText = i.selectorText.replace(":hover", ":active"))
                        }
                }
        } catch (n) {}
    }
    ,
    s._setAudience = function(e) {
        s._getAudience() !== e && (s.permaCookie.tabAudience = e,
        s._writeCookies())
    }
    ,
    s._getAudience = function() {
        return s.permaCookie.tabAudience || "windows"
    }
    ,
    s._prepareTabs = function() {
        $(".article_body .tabs").each(function(e) {
            var t = e + 1
              , a = $(this)
              , i = a.find(".option")
              , n = a.find("section");
            i.attr("scope", "col"),
            n.attr("scope", "row"),
            i.click(function() {
                var e = $(this).attr("title")
                  , t = a.data("active")
                  , i = $(this);
                s._setAudience($(this).data("audience")),
                a.find(".option[title=" + t + "]").removeClass("active"),
                a.find("section[title=" + t + "]").removeClass("active"),
                t = e,
                a.data("active", t),
                a.find(".option[title=" + t + "]").addClass("active"),
                a.find("section[title=" + t + "]").addClass("active"),
                s._sideBySideSameHeight(),
                window.history.pushState ? window.history.pushState(null, null, i.attr("data-anchor")) : window.location.hash = i.attr("data-anchor")
            }),
            i.each(function() {
                var e = $(this).text()
                  , a = "#" + s._convertToSlug(e, !0) + "-" + t;
                $(this).attr("data-anchor", a),
                $(this).attr("data-audience", s._convertToSlug(e, !0));
                var i = $(this).width();
                i = i + 1 + 30 + 30 + 1,
                i > 240 && $(this).addClass("large_tab")
            });
            var o = function(e) {
                var t = !1;
                i.each(function() {
                    e == $(this).data("audience") && (a.data("active", $(this).attr("title")),
                    a.find("section[title='" + $(this).attr("title") + "']").addClass("active"),
                    $(this).addClass("active first_content"),
                    t = !0)
                }),
                t || (a.data("active", i.first().attr("title")),
                i.first().addClass("active"),
                n.first().addClass("active first_content"))
            };
            o(s._getAudience())
        })
    }
    ,
    s._localizeNextPrev = function() {
        s._isVideoArticle() ? ($("a.previous").attr("data-title", s.const_metadata.prevvideo),
        $("a.next").attr("data-title", s.const_metadata.nextvideo)) : s._isArticle() && ($("a.previous").attr("data-title", s.const_metadata.prev),
        $("a.next").attr("data-title", s.const_metadata.next))
    }
    ,
    s._embedChatWidget = function() {
        window.zEmbed || function(e, t) {
            var a, i, n, o, c, r = [], l = document.createElement("iframe");
            window.zEmbed = function() {
                r.push(arguments)
            }
            ,
            window.zE = window.zE || window.zEmbed,
            l.src = "javascript:false",
            l.title = "",
            l.role = "presentation",
            (l.frameElement || l).style.cssText = "display: none",
            n = document.getElementsByTagName("script"),
            n = n[n.length - 1],
            n.parentNode.insertBefore(l, n),
            o = l.contentWindow,
            c = o.document;
            try {
                i = c
            } catch (e) {
                a = document.domain,
                l.src = 'javascript:var d=document.open();d.domain="' + a + '";void(0);',
                i = c
            }
            i.open()._l = function() {
                var i = this.createElement("script");
                a && (this.domain = a),
                i.id = "js-iframe-async",
                i.src = e,
                this.t = +new Date,
                this.zendeskHost = t,
                this.zEQueue = r,
                this.body.appendChild(i)
            }
            ,
            i.write('<body onload="document._l();">'),
            i.close()
        }("https://assets.zendesk.com/embeddable_framework/main.js", "slack.zendesk.com")
    }
    ,
    s._getPageID = function(e) {
        var t = 0;
        if (s._isArticle() && !e)
            t = $("input[name=article_id]").val() || 0;
        else {
            var a = window.location.pathname;
            e && (a = e);
            var i = a.match(/\d{9,12}/);
            t = i ? i[0] : 0
        }
        return t
    }
    ,
    s._isLocalHost = function() {
        return -1 != location.href.indexOf("localhost")
    }
    ,
    s._isSandbox = function() {
        return -1 != location.href.indexOf(s.sandboxSubdomain)
    }
    ,
    s._isLiveHC = function() {
        return n()
    }
    ,
    s._isEndUser = function() {
        return i()
    }
    ,
    s._isAuthUser = function() {
        return !s._isEndUser()
    }
    ,
    s._isHome = function() {
        return $(".hero_banner").length
    }
    ,
    s._isCategory = function() {
        return $(".category_page").length
    }
    ,
    s._isGuidesCategory = function() {
        return $(".guides_page").length
    }
    ,
    s._isSection = function() {
        return $(".section_page").length
    }
    ,
    s._is404 = function() {
        return $(".error_page").length
    }
    ,
    s._getPageType = function() {
        return s._isHome() ? "home" : s._isCategory() ? "category" : s._isSection() ? "section" : s._isArticle() ? "article" : s._is404() ? "error" : s._isSearchResults() ? "search" : void 0
    }
    ,
    s._isGuidesSection = function() {
        return s._isSection() && ($(".breadcrumbs li a[href*=207008087]").length || $(".breadcrumbs li a[href*=202622877]").length)
    }
    ,
    s._isArticle = function() {
        return $(".article_page").length
    }
    ,
    s._isVideoArticle = function() {
        return s._isArticle() && ($('.breadcrumbs li[title="Video Guides"]').length || $(".breadcrumbs li a[href*=202622897]").length || $(".breadcrumbs li a[href*=204395988]").length)
    }
    ,
    s._isGridArticle = function() {
        return s._isArticle() && ($(".breadcrumbs li a[href*=115000443588]").length || $(".breadcrumbs li a[href*=115000487248]").length)
    }
    ,
    s._isGuideArticle = function() {
        return s._isArticle() && ($('.breadcrumbs li[title="Slack Guides"]').length || $(".breadcrumbs li a[href*=202622877]").length || $(".breadcrumbs li a[href*=204395968]").length)
    }
    ,
    s._isGlossaryArticle = function() {
        return s._isArticle() && $(location).attr("href").includes("213817348")
    }
    ,
    s._getParentCategoryID = function() {
        return s._isCategory() ? s._getPageID() : s._isArticle() || s._isSection() ? s._getPageID($(".breadcrumbs li").eq(1).find("a").attr("href")) : 0
    }
    ,
    s._isUsingSlackCategory = function() {
        var e = 360000047266 == s._getParentCategoryID()
          , t = e || 200111606 == s._getParentCategoryID();
        return t
    }
    ,
    s._isAdminCategory = function() {
        return 200122103 == s._getParentCategoryID() || 360000048443 == s._getParentCategoryID()
    }
    ,
    s._isGettingStartedCategory = function() {
        return 360000049043 == s._getParentCategoryID() || 360000049103 == s._getParentCategoryID()
    }
    ,
    s._isProfileCategory = function() {
        return 360000047906 == s._getParentCategoryID() || 360000049123 == s._getParentCategoryID()
    }
    ,
    s._isAddToolsCategory = function() {
        return 360000047926 == s._getParentCategoryID() || 360000049143 == s._getParentCategoryID()
    }
    ,
    s._isTipsTricksCategory = function() {
        return 360000049063 == s._getParentCategoryID() || 360000049163 == s._getParentCategoryID()
    }
    ,
    s._isGridCategory = function() {
        return 115000487248 == s._getParentCategoryID()
    }
    ,
    s._isSlackGuidesCategory = function() {
        return 202622877 == s._getParentCategoryID()
    }
    ,
    s._hasStickyNav = function() {
        return $(".guides_page").length ? !1 : $("#nav_list").children().length || $("h1.anchor").length
    }
    ,
    s._isSearchResults = function() {
        return $(".search_results").length
    }
    ,
    s._scrollTo = function(e, t) {
        $(e).length && (void 0 == t && (t = 0),
        $("html, body").animate({
            scrollTop: $(e).offset().top - s.content_offset + 25 + t
        }, 200))
    }
    ,
    s._getParameterByName = function(e, t) {
        t || (t = window.location.href),
        e = e.replace(/[[\]]/g, "\\$&");
        var a = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)")
          , i = a.exec(t);
        return i ? i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "" : null
    }
    ,
    s._removeParameterFromURL = function(e, t) {
        t || (t = window.location.href);
        var a = s._getParameterByName(e, t);
        if (!a)
            return t;
        var i = e + "=" + a
          , n = t.replace(i, "");
        return (-1 != n.indexOf("?#") || "?" == n.charAt(n.length - 1)) && (n = n.replace("?", "")),
        n = n.replace("?&", "?"),
        n = n.replace("&&", "&"),
        n = n.replace("&#", "&")
    }
    ,
    s._addParameterToAllURLs = function(e) {
        const t = "&" + e
          , a = "?" + e;
        $("a").attr("href", function(e, i) {
            return i ? i + (-1 != i.indexOf("?") ? t : a) : void 0
        })
    }
    ,
    s._isDateAfter = function(e, t, a) {
        return (new Date).getTime() > new Date(e,t - 1,a)
    }
    ,
    s._isDateBefore = function(e, t, a) {
        return (new Date).getTime() < new Date(e,t - 1,a)
    }
    ,
    s._handleArticleRedirects = function() {
        var e = s._getPageID();
        if (window.redirectMap && window.redirectMap[e]) {
            var t = window.redirectMap[e];
            top.location.href = t
        }
    }
    ,
    s._isEMEA = function() {
        var e = s._util.getTimezoneOffset();
        return !!(0 >= e && e >= -120)
    }
    ,
    s._isEEST = function() {
        var e = s._util.getTimezoneOffset();
        return !!(-120 >= e && e >= -180)
    }
    ,
    s._isAMER = function() {
        var e = s._util.getTimezoneOffset();
        return !!(600 >= e && e >= 240)
    }
    ,
    c(),
    this.ZDSlack = s
}
.call(this),
$(document).ready(function() {
    $(".share a").click(function(e) {
        e.preventDefault(),
        window.open(this.href, "", "height = 500, width = 500")
    }),
    $(".share-label").on("click", function(e) {
        e.stopPropagation();
        var t = "true" == this.getAttribute("aria-selected");
        this.setAttribute("aria-selected", !t),
        $(".share-label").not(this).attr("aria-selected", "false")
    }),
    $(document).on("click", function() {
        $(".share-label").attr("aria-selected", "false")
    }),
    $(".answer-body textarea").one("focus", function() {
        $(".answer-form-controls").show()
    }),
    $(".comment-container textarea").one("focus", function() {
        $(".comment-form-controls").show()
    })
}),
$("#gifdiv").click(function() {
    "static" == $(this).find("img").attr("data-state") ? $(this).find("img").attr("src", "https://dl.dropboxusercontent.com/u/7776914/Authy-GIF.gif") : $(this).find("img").attr("src", "https://dl.dropboxusercontent.com/u/7776914/Screen%20Shot%202015-03-31%20at%2011.34.05%20AM.png")
}),
function() {
    function e() {
        ZDSlack._readCookies(),
        ZDSlack._writeCookies(),
        ZDSlack._maybeExtractUTMparamsFromURL(),
        ZDSlack._enrichCreateWorkspaceCTA(),
        ZDSlack._enrichContactUsCTA(),
        ZDSlack._maybeExtractSIDparamsFromURL()
    }
    ZDSlack.permaCookie = {
        welcomeDismissed: !1,
        i18nSurveyDismissed: !1,
        slackBotDismissed: !1,
        loc_bannerDismissed: !1,
        visitorCookie: !1,
        sid_tid: 0,
        sid_uid: 0,
        sid_paid: 0,
        sid_role: 0,
        tabAudience: "windows"
    },
    ZDSlack.sessionCookie = {
        loc_httpLangChecked: !1
    },
    ZDSlack.utmCookie = {},
    ZDSlack.permaCookieName = "ZDSlack",
    ZDSlack.sessionCookieName = "ZDSlackSession",
    ZDSlack.utmCookieName = "ZDSlackUtm",
    ZDSlack.permaCookieDeath = 3650,
    ZDSlack.freshSession = !0,
    ZDSlack.firstTime = !0,
    ZDSlack.isUserOwner = !1,
    ZDSlack.isUserAdmin = !1,
    ZDSlack.isTeamPaid = !1,
    $(document).ready(e),
    ZDSlack._readCookies = function() {
        var e = {}
          , t = {}
          , a = {};
        if (window.readCookie(ZDSlack.permaCookieName)) {
            try {
                e = JSON.parse(window.readCookie(ZDSlack.permaCookieName))
            } catch (i) {
                e = JSON.parse(Cookies.get(ZDSlack.permaCookieName))
            }
            ZDSlack.firstTime = !1
        }
        if (window.readCookie(ZDSlack.sessionCookieName)) {
            try {
                t = JSON.parse(window.readCookie(ZDSlack.sessionCookieName))
            } catch (i) {
                t = JSON.parse(Cookies.get(ZDSlack.sessionCookieName))
            }
            ZDSlack.freshSession = !1
        }
        if (window.readCookie(ZDSlack.utmCookieName))
            try {
                a = JSON.parse(window.readCookie(ZDSlack.utmCookieName))
            } catch (i) {
                a = JSON.parse(Cookies.get(ZDSlack.utmCookieName))
            }
        window.readCookie("surveyWelcomeDismissed") && (e.welcomeDismissed = !0,
        window.eraseCookie("surveyWelcomeDismissed")),
        window.readCookie("slackBotDismissed") && (e.slackBotDismissed = !0,
        window.eraseCookie("slackBotDismissed")),
        ZDSlack.permaCookie = ZDSlack._mergeParams(ZDSlack.permaCookie, e),
        ZDSlack.sessionCookie = ZDSlack._mergeParams(ZDSlack.sessionCookie, t),
        ZDSlack.utmCookie = ZDSlack._mergeParams(ZDSlack.utmCookie, a)
    }
    ,
    ZDSlack._writeCookies = function() {
        ZDSlack.permaCookie.visitorCookie || (ZDSlack.permaCookie.visitorCookie = ZDSlack._generateVisitorCookie()),
        window.createCookie(ZDSlack.permaCookieName, JSON.stringify(ZDSlack.permaCookie), ZDSlack.permaCookieDeath),
        window.createCookie(ZDSlack.sessionCookieName, JSON.stringify(ZDSlack.sessionCookie), 0)
    }
    ,
    ZDSlack._mergeParams = function(e, t) {
        var a = {};
        for (var i in e)
            a[i] = e[i];
        for (var i in t)
            a[i] = t[i];
        return a
    }
    ,
    ZDSlack._generateVisitorCookie = function() {
        function e() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        var t = "HC-" + e() + "-" + e() + "-" + e() + "-" + e();
        return t = t.toUpperCase()
    }
    ,
    ZDSlack._maybeExtractUTMparamsFromURL = function() {
        for (var e = !1, t = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"], a = {}, i = 0; i < t.length; i++) {
            var n = ZDSlack._getParameterByName(t[i]);
            n && (e = !0,
            a[t[i]] = n)
        }
        e && (window.createCookie(ZDSlack.utmCookieName, JSON.stringify(a), ZDSlack.permaCookieDeath),
        ZDSlack.utmCookie = a)
    }
    ,
    ZDSlack._maybeExtractSIDparamsFromURL = function() {
        var e = ZDSlack._getParameterByName("sid");
        if (e) {
            var t = ZDSlack._removeParameterFromURL("sid");
            try {
                window.history.replaceState(null, null, t)
            } catch (a) {}
            var i = e.split("-");
            if (4 == i.length) {
                ZDSlack.permaCookie.sid_role = 0,
                ZDSlack.permaCookie.sid_paid = 0,
                ZDSlack.permaCookie.sid_tid = 0,
                ZDSlack.permaCookie.sid_uid = 0;
                try {
                    if ("zd" != i[0])
                        return;
                    var n = i[1];
                    "o" == n.charAt(0) ? (ZDSlack.isUserOwner = !0,
                    ZDSlack.isUserAdmin = !0,
                    ZDSlack.permaCookie.sid_role = "owner") : "a" == n.charAt(0) ? (ZDSlack.isUserAdmin = !0,
                    ZDSlack.permaCookie.sid_role = "admin") : ZDSlack.permaCookie.sid_role = "user",
                    "p" == n.charAt(1) && (ZDSlack.isTeamPaid = !0,
                    ZDSlack.permaCookie.sid_paid = !0);
                    var o = i[2];
                    ZDSlack.permaCookie.sid_tid = o.toUpperCase();
                    var c = i[3];
                    ZDSlack.permaCookie.sid_uid = c.toUpperCase()
                } catch (a) {}
                ZDSlack._writeCookies()
            }
        }
    }
}
.call(this),
window.createCookie = function(e, t, a, i) {
    if (a) {
        var n = new Date;
        n.setTime(n.getTime() + 24 * a * 60 * 60 * 1e3);
        var o = "; expires=" + n.toGMTString()
    } else
        var o = "";
    var i = i ? "; domain=" + i : "";
    document.cookie = e + "=" + t + o + i + "; path=/"
}
,
window.readCookie = function(e) {
    for (var t = e + "=", a = document.cookie.split(";"), i = 0; i < a.length; i++) {
        for (var n = a[i]; " " == n.charAt(0); )
            n = n.substring(1, n.length);
        if (0 == n.indexOf(t))
            return n.substring(t.length, n.length)
    }
    return null
}
,
window.eraseCookie = function(e, t) {
    var t = t ? "; domain=" + t : "";
    window.createCookie(e, "", -1, t)
}
,
function() {
    function e() {
        ZDSlack._getSupportedLocales(),
        ZDSlack._getCurrentLocale(),
        ZDSlack._getBestLocaleFromHeaders(),
        ZDSlack._bootBadLocales(),
        ZDSlack._setLocaleOnLinks(),
        ZDSlack._setLocaleOnSearch(),
        ZDSlack._createLocaleDropDown(),
        ZDSlack._attempt404Fix(),
        ZDSlack._showLocaleSpecificContent(),
        ZDSlack._maybeShowDriftWidget()
    }
    ZDSlack.locale = "en-us",
    ZDSlack.defaultLocale = "en-us",
    ZDSlack.supportedLocales = [],
    ZDSlack.enabledLocales = ["en-us", "fr-fr", "de", "ja", "es"],
    ZDSlack.testingLocales = ["es-419", "pt-br", "en-gb"],
    ZDSlack.changeURLs = {},
    ZDSlack.bestSupportedLocaleFromHeaders = "",
    ZDSlack.didShowLocaleBanner = !1,
    ZDSlack.didShowGuidesBanner = !1,
    ZDSlack.didShowi18nSurveyBanner = !1,
    ZDSlack.intlTranslation = {
        de: "de-de",
        "en-us": "en-us",
        es: "es-es",
        "fr-fr": "fr-fr",
        ja: "ja-jp"
    },
    $(document).ready(e),
    ZDSlack._getBestLocaleFromHeaders = function() {
        ZDSlack.sessionCookie.loc_httpLangChecked || (ZDSlack.sessionCookie.loc_httpLangChecked = "en-us",
        ZDSlack._writeCookies()),
        ZDSlack.bestSupportedLocaleFromHeaders = ZDSlack.sessionCookie.loc_httpLangChecked,
        ZDSlack._maybeShowPurpleBanners()
    }
    ,
    ZDSlack._isEnglish = function() {
        return "en-us" == ZDSlack.locale
    }
    ,
    ZDSlack._isJapanese = function() {
        return "ja" == ZDSlack.locale
    }
    ,
    ZDSlack._maybeShowPurpleBanners = function() {
        var e, t = !ZDSlack.permaCookie.welcomeDismissed && !ZDSlack._isGettingStartedCategory() && (ZDSlack._isCategory() || ZDSlack._isSection()), a = !ZDSlack.permaCookie.show_slack_101_jp_bannerCookie && ZDSlack._isJapanese(), i = !ZDSlack.permaCookie.frontiers_bannerCookie && (ZDSlack._isHome() || ZDSlack._isAdminCategory()) && ZDSlack._isEnglish(), n = !ZDSlack.permaCookie.webinar1BannerCookie && (ZDSlack._isGettingStartedCategory() || ZDSlack._isUsingSlackCategory()) && ZDSlack._isEnglish();
        i ? e = {
            name: "frontiers_banner",
            copy: "Join us at Frontiers, where we’ll explore the future of work | April 24-25 in San Francisco",
            link: "https://www.slackfrontiers.com/?cvosrc=display.hppromo.hppromo_FY20Q1_Frontiers_2019_Flagship&cvo_creative=help_center&utm_medium=display&utm_source=hppromo&utm_campaign=d_display_hppromo_all_en_all_ob-null_cr-help_center_ym-201902",
            cta: "Register Today"
        } : n ? (e = {
            name: "webinar1Banner",
            cta: "Sign Up Today"
        },
        ZDSlack._isDateBefore(2019, 3, 21) ? (e.copy = "<strong>New to Slack?</strong> Join us on March 21 at 10am PT to learn the ins-and-outs of working in Slack.",
        e.link = "https://workinginslack032119.splashthat.com/help-center") : ZDSlack._isDateAfter(2019, 3, 21) && ZDSlack._isDateBefore(2019, 4, 4) ? (e.copy = "<strong>New to Slack?</strong>  Join us on April 4 at 10am PT to learn the ins-and-outs of working in Slack.",
        e.link = "https://workinginslack040419.splashthat.com/help-center") : ZDSlack._isDateAfter(2019, 4, 4) && ZDSlack._isDateBefore(2019, 4, 16) && (e.copy = "<strong>New to Slack?</strong> Join us on April 16 at 10am PT to learn the ins-and-outs of working in Slack.",
        e.link = "https://workinginslack041619.splashthat.com/help-center")) : a ? e = {
            name: "slack_101_jp_banner",
            copy: "<strong>Slack オンライントレーニング</strong><span>〜 Slackの基本をひと通り学ぼう！〜 (Slack 101 日本語でライブ配信!)</span>",
            link: "https://slackjapan101.splashthat.com/",
            cta: "登録する"
        } : t && ZDSlack._showPurpleBanner("purple_banner", "welcomeDismissed"),
        e && ZDSlack._createBanner(e)
    }
    ,
    ZDSlack._maybeShowDriftWidget = function() {
        var e = ZDSlack._isEnglish() && ZDSlack._isAMER() && ("360001761607" == ZDSlack._getPageID() || "360000561566" == ZDSlack._getPageID());
        if (e) {
            if (!window.drift)
                return;
            window.drift.on("ready", function(e) {
                e.widget.hide(),
                window.drift.on("message", function(t) {
                    t.data.sidebarOpen || e.widget.show()
                }),
                window.drift.on("sidebarClose", function(t) {
                    t.data.widgetVisible && e.widget.hide()
                })
            })
        }
    }
    ,
    ZDSlack._getCurrentLocale = function() {
        var e = ZDSlack.defaultLocale;
        return window.HelpCenter && window.HelpCenter.user && window.HelpCenter.user.locale ? e = window.HelpCenter.user.locale : -1 !== window.location.href.indexOf("/hc") && (e = window.location.href.split("/hc/")[1].split("/")[0]),
        -1 == ZDSlack.supportedLocales.indexOf(e) && (e = ZDSlack.defaultLocale),
        ZDSlack.locale = e,
        ZDSlack.bestSupportedLocaleFromHeaders = e,
        ZDSlack.locale
    }
    ,
    ZDSlack._getSupportedLocales = function() {
        var e = $(".language_switcher");
        0 != e.length && e.each(function() {
            var t = e.find("option");
            ZDSlack.supportedLocales = [],
            t.each(function() {
                var e = $(this).data("url").split("/change_language/")[1].split("?")[0];
                $(this).attr("data-locale", e),
                -1 == ZDSlack.supportedLocales.indexOf(e) && ZDSlack.supportedLocales.push(e),
                ZDSlack.changeURLs[e] = $(this).data("url")
            })
        })
    }
    ,
    ZDSlack._bootBadLocales = function() {
        if (ZDSlack._isEndUser() && -1 !== window.location.href.indexOf("/hc")) {
            var e = (window.location.href.split("/hc/")[1] ? window.location.href.split("/hc/")[1] : "").split("/")[0].split("?")[0]
              , t = -1 !== window.location.href.indexOf("review=1") || -1 !== window.location.search.indexOf("review=1");
            if (-1 == ZDSlack.enabledLocales.indexOf(e) && 0 == t || -1 == ZDSlack.testingLocales.indexOf(e) && 1 == t) {
                var a = window.location.href
                  , i = a.replace("hc/" + e, "hc/en-us");
                i != a && (window.location.href = i)
            }
            1 == t && -1 != ZDSlack.testingLocales.indexOf(e) && ZDSlack._addParameterToAllURLs("review=1")
        }
    }
    ,
    ZDSlack._maybeShowLocaleBanner = function() {
        if (!ZDSlack.permaCookie.loc_bannerDismissed) {
            var e = ZDSlack.locale != ZDSlack.bestSupportedLocaleFromHeaders;
            if (e && -1 != ZDSlack.enabledLocales.indexOf(ZDSlack.bestSupportedLocaleFromHeaders)) {
                var t = $(".locale_banner")
                  , a = t.find(".lang." + ZDSlack.bestSupportedLocaleFromHeaders).removeClass("hidden");
                a.length && ZDSlack.changeURLs[ZDSlack.bestSupportedLocaleFromHeaders] && ($(".loc_banner_container").append(t.detach()),
                t.find("button").off("click").on("click", function() {
                    t.addClass("hidden"),
                    ZDSlack._clogLocaleBanner("click", "banner_cta_dismiss"),
                    ZDSlack.permaCookie.loc_bannerDismissed = !0,
                    ZDSlack._writeCookies()
                }),
                t.off("click").on("click", function(e) {
                    $(e.target).closest(".close_loc").length || (window.top.location.href = ZDSlack.changeURLs[ZDSlack.bestSupportedLocaleFromHeaders],
                    ZDSlack._clogLocaleBanner("click", "banner_cta"))
                }),
                t.removeClass("hidden"),
                ZDSlack.didShowLocaleBanner = !0,
                ZDSlack._clogLocaleBanner("impression", null))
            }
        }
    }
    ,
    ZDSlack._setLocaleOnLinks = function() {
        -1 != ZDSlack.supportedLocales.indexOf(ZDSlack.locale) && $("a").each(function() {
            var e = $(this).attr("href");
            if (e)
                if (-1 != e.indexOf("/hc")) {
                    for (var t = 0; t < ZDSlack.supportedLocales.length; t++)
                        if (-1 != e.indexOf("/" + ZDSlack.supportedLocales[t]))
                            return;
                    e = e.replace("/hc", "/hc/" + ZDSlack.locale),
                    $(this).attr("href", e)
                } else {
                    if (ZDSlack.locale == ZDSlack.defaultLocale)
                        return;
                    if ($(this).parent().prop("className").indexOf("c-nav--footer__listitem") > -1 || $(this).prop("className").indexOf("submit-a-request") > -1 || $(this).prop("className").indexOf("create-workspace ") > -1 || "https://slackdemo.com/" === e) {
                        for (var a = 0; a < ZDSlack.supportedLocales.length; a++)
                            if (-1 != e.indexOf("/" + ZDSlack.supportedLocales[a]))
                                return;
                        e = e.replace("https://slack.com/", "https://slack.com/intl/" + ZDSlack.intlTranslation[ZDSlack.locale] + "/"),
                        e = e.replace("https://slackdemo.com/", "https://slackdemo.com/intl/" + ZDSlack.intlTranslation[ZDSlack.locale] + "/"),
                        $(this).attr("href", e)
                    }
                }
        })
    }
    ,
    ZDSlack._setLocaleOnSearch = function() {
        $("form.search").each(function() {
            var e = $(this).attr("action").replace("hc/search", "hc/" + ZDSlack.locale + "/search");
            $(this).attr("action", e)
        })
    }
    ,
    ZDSlack._showLocaleSpecificContent = function() {
        if (ZDSlack._isArticle()) {
            var e = $(".article_body").find("[data-show-locales]");
            e.each(function() {
                var e = $(this);
                e.removeClass("show");
                var t = e.attr("data-show-locales").split(",")
                  , a = -1 != t.indexOf(ZDSlack.locale);
                a && e.addClass("show")
            })
        }
    }
    ,
    ZDSlack._attempt404Fix = function() {}
    ,
    ZDSlack._createLocaleDropDown = function() {
        var e = $(".language_switcher");
        0 != e.length && e.each(function() {
            var e = $(this)
              , t = e.find("option[selected]")
              , a = t.data("url").split("/change_language/")[1].split("?")[0];
            e.hide();
            var i = $('<dl class="dd_switcher dropdown"></dl>');
            e.parent().append(i),
            i.append('<dt><a href="#" data-url="' + t.data("url") + '" data-locale="' + a + '">' + t.text() + "</a></dt>");
            var n = $('<div class="items"><ul></ul><div class="close"></div></div>');
            i.append(n);
            var o = e.find("option", e);
            o.sort(function(e, t) {
                return e.text == t.text ? 0 : e.text < t.text ? -1 : 1
            }),
            o.each(function() {
                var e = $(this).attr("data-locale");
                if (!ZDSlack._isLiveHC() && !ZDSlack._isSandbox() || !ZDSlack._isEndUser() || ZDSlack.enabledLocales.indexOf(e) > -1) {
                    var t = $(this).text().replace("(GB)", "(UK)");
                    n.find("ul").append('<li><a href="#" data-url="' + $(this).data("url") + '" data-locale="' + e + '">' + t + "</a></li>")
                }
            }),
            i.find("dt").on("click", function(e) {
                e.preventDefault();
                var t = ZDSlack.locale;
                n.find("a").removeClass("selected"),
                n.find("a[data-locale=" + t + "]").addClass("selected"),
                n.hasClass("shown") ? (n.hide(),
                n.removeClass("shown")) : (n.show(),
                n.addClass("shown"),
                $("body").addClass("dd_open"))
            }),
            $(document).on("click", function(e) {
                var t = $(e.target);
                t.is("a") && t.parents().hasClass("dropdown") || (n.hide(),
                n.removeClass("shown"),
                $("body").removeClass("dd_open"))
            }),
            i.find(".items ul li").click(function(t) {
                t.preventDefault();
                var a = $(this).find("a")
                  , i = a.data("locale")
                  , o = a.html()
                  , c = a.data("url");
                e.find(".dropdown dt a").attr("data-url", c).attr("data-locale", i).html(o),
                n.hide(),
                $("body").removeClass("dd_open"),
                e.val(i),
                ZDSlack.sessionCookie.loc_httpLangChecked = !1,
                ZDSlack.permaCookie.loc_bannerDismissed = !1,
                ZDSlack._writeCookies(),
                ZDSlack._clogLocaleSwitcher(i),
                ZDSlack.locale = i,
                top.location.href = c
            }),
            i.parent().removeClass("hidden"),
            i.data("contents", n),
            e.closest(".header_white").length ? ZDSlack.$dd_clone = i : ZDSlack.$dd = i
        })
    }
}
.call(this),
function() {
    window.client_logger = {
        onStart: function() {
            var e = 5e3
              , t = 3e3
              , a = Math.floor(Math.random() * t);
            setInterval(u, e + a),
            $(window).on("beforeunload pagehide", u),
            $("body").on("click", "[data-clog-click]", _),
            p(),
            ZDSlack && (ZDSlack._isLocalHost() || ZDSlack._isSandbox()) && (r = !0,
            l = !0),
            window.client_logger.flush()
        },
        track: function(e, t) {
            d(e, t)
        },
        flush: function() {
            u()
        },
        test: function() {
            return {
                createLogURLs: h,
                sendDataAndEmptyQueue: u,
                getLogs: function() {
                    return c
                },
                reset: function() {
                    c = []
                }
            }
        },
        parseParams: function(e) {
            if (!e)
                return {};
            e = e.split(",");
            var t, a = {}, i = 0, n = e.length;
            for (i; n > i; i++)
                t = e[i].split("="),
                a[t[0]] = t[1];
            return a
        },
        setUser: function(e) {
            a = e
        },
        setTeam: function(e) {
            t = e
        },
        setLocale: function(e) {
            i = e
        },
        setHCVisitorID: function(e) {
            n = e
        },
        toggleDebugMode: function() {
            l = !l,
            console.log("DEBUG:", l)
        }
    };
    var e, t, a, i, n, o = 2e3, c = [], r = !1, l = !1, s = function() {
        e = r ? "https://dev107.slack.com/clog/track/" : "https://slack.com/clog/track/"
    }, d = function(e, o) {
        o || (o = null);
        try {
            var s = o ? o.contexts : {};
            if (s && s.ui_context) {
                var d = s.ui_context
                  , u = d.action.toLowerCase();
                if ("click" == u) {
                    if (!d.ui_element && !d.step)
                        throw new SyntaxError("Malformed Click Clog. ui-element or step missing")
                } else if ("impression" == u) {
                    if (!d.step)
                        throw new SyntaxError("Malformed Impression Clog. step missing")
                } else if ("" == u)
                    throw new SyntaxError("Malformed Clog. action missing")
            }
        } catch (h) {
            console.error(h, o)
        }
        var _ = {
            tstamp: Date.now(),
            event: e,
            args: o
        };
        p(),
        t && (_.team_id = t),
        a && (_.user_id = a),
        n && (_.args.zd_visitor_uid = n),
        i && (_.args.locale = i);
        var f = ZDSlack._getPageType()
          , k = ZDSlack._getPageID()
          , g = k;
        ("home" == f || "error" == f || "search" == f) && (g = f),
        o.step || (o.step = g),
        _.args.page_url = window.location.href,
        "article" != f || o.zd_article_url || (_.args.zd_article_url = window.location.href),
        c.push(_),
        (r || l) && console.log(_)
    }, u = function() {
        if (0 !== c.length) {
            for (var e, t = h(c), a = 0; a < t.length; a++) {
                e = t[a];
                var i = new Image;
                i.src = e
            }
            c = []
        }
    }, h = function(t) {
        e || s();
        for (var a, i = [], n = [], c = "", r = function(t) {
            return e + "?logs=" + encodeURIComponent(JSON.stringify(t))
        }, l = 0; l < t.length; l++)
            a = t[l],
            n.push(a),
            c = r(n),
            c.length > o && (n.pop(),
            i.push(r(n)),
            n = [a]);
        return i.push(r(n)),
        i
    }, _ = function() {
        var e = $(this)
          , t = {}
          , a = ZDSlack._getPageType()
          , i = e.data("clogEvent") || "HELP_CENTER_CLICK"
          , n = window.client_logger.parseParams(e.data("clogParams"));
        t = {
            contexts: {
                ui_context: {
                    ui_element: e.data("clogUiElement") || !1,
                    ui_component: e.data("clogUiComponent") || !1,
                    action: e.data("clogUiAction") || "click",
                    step: e.data("clogUiStep") || "hc_page_" + a
                }
            }
        },
        t = f(n, t),
        window.client_logger.track(i, t)
    }, f = function(e, t) {
        var a = {};
        return Object.keys(e).forEach(function(t) {
            a[t] = e[t]
        }),
        Object.keys(t).forEach(function(e) {
            a[e] = t[e]
        }),
        a
    }, p = function() {
        ZDSlack && (ZDSlack.locale && window.client_logger.setLocale(ZDSlack.locale),
        ZDSlack.permaCookie && ZDSlack.permaCookie.visitorCookie && window.client_logger.setHCVisitorID(ZDSlack.permaCookie.visitorCookie),
        ZDSlack.permaCookie.sid_tid && window.client_logger.setTeam(ZDSlack.permaCookie.sid_tid),
        ZDSlack.permaCookie.sid_uid && window.client_logger.setUser(ZDSlack.permaCookie.sid_uid))
    };
    $(window).load(function() {
        window.client_logger.onStart()
    })
}(),
function() {
    function e() {
        ZDSlack._maybeJumpToArea()
    }
    function t() {
        ZDSlack._initScrollCache(),
        ZDSlack._buildNameToIDMap(),
        ZDSlack._setupCategoryAnchors(),
        ZDSlack._initNewCategoryJumper(),
        ZDSlack._cleanUpAttributes(),
        ZDSlack._setupCategoryJump(),
        ZDSlack._setupSectionQuickJump(),
        ZDSlack._setupSectionLinksAndIDs(),
        ZDSlack._setGuideDescriptions(),
        ZDSlack._processArticleJumpAnchors(),
        ZDSlack._buildGuidesColumns(),
        ZDSlack._setupAutoLoadSections(),
        ZDSlack._highlightCategoryWords(),
        u.length && (c.length || r.length) && ($(window).on("scroll", i),
        $(window).on("resize", a)),
        $("body").click(function() {
            c.hasClass("open") && c.removeClass("open"),
            r.hasClass("open") && r.removeClass("open")
        }),
        ZDSlack._setMenuMode(r),
        ZDSlack._setMenuMode(c)
    }
    function a() {
        h = $("body").height(),
        f = ZDSlack.$footer.height(),
        ZDSlack._setMenuMode(r),
        ZDSlack._setMenuMode(c),
        i()
    }
    function i() {
        u.length && (n(c),
        n(r))
    }
    function n(e) {
        if (e.length) {
            var t = $(document).scrollTop()
              , a = t + _;
            d = u.offset().top,
            e.hasClass("compact") && t > s ? e.addClass("stick").css({
                top: "0px"
            }) : !e.hasClass("compact") && a > d ? e.addClass("stick").css({
                top: _ + 10 + "px"
            }) : e.removeClass("stick").css({
                top: ""
            });
            var i = h - f - a - e.height();
            0 > i && e.hasClass("stick") ? e.removeClass("stick").addClass("stick-off") : i >= 0 && e.hasClass("stick-off") && e.removeClass("stick-off").addClass("stick")
        }
    }
    var o, c = null, r = null, l = null;
    ZDSlack._clickpath = !1,
    ZDSlack.name_to_id_map = {},
    ZDSlack.id_to_name_map = {};
    var s, d, u, h, _, f, p = 30, k = 800;
    $(document).ready(t),
    $(window).load(e),
    ZDSlack._initScrollCache = function() {
        return u = $("#nav_holder"),
        c = $("#nav_list"),
        r = $("#cat_list"),
        l = $("#global_menu"),
        h = $("body").height(),
        _ = ZDSlack.$header.height() + ZDSlack.content_offset,
        f = ZDSlack.$footer.height(),
        ZDSlack._isArticle() ? s = $(".article_page").offset().top : ZDSlack._isSection() ? s = $(".section_page").offset().top : ZDSlack._isCategory() ? s = $(".category_page").offset().top : ZDSlack._isSearchResults() ? s = $(".search_page").offset().top : ZDSlack._is404() && (s = $(".error_page").offset().top),
        s
    }
    ,
    ZDSlack._setupCategoryAnchors = function() {
        var e, t;
        ZDSlack._isArticle() ? (e = $(".article_body"),
        t = ".anchor") : (e = $(".section-tree-with-article"),
        t = ".section h2"),
        e.find(t).each(function() {
            var e, t, a;
            if (ZDSlack._isArticle()) {
                e = $(this).attr("title"),
                e || (e = $(this).text()),
                t = ZDSlack._convertToSlug(e),
                a = ZDSlack._convertToSlug(e, !0);
                var i = $('<a class="zd_anchor"></a>').insertBefore($(this));
                i.attr("id", t),
                i.attr("name", t),
                i.attr("prettyslug", a),
                $(this).hasClass("sep") ? c.append('<li class="sep"></li>') : c.append('<li><a href="#' + e + '">' + e + "</a></li>")
            } else
                e = $(this).text(),
                t = ZDSlack._convertToSlug(e),
                a = ZDSlack._convertToSlug(e, !0),
                $(this).attr("title", e),
                $(this).attr("prettyslug", a),
                $(this).parent().prepend('<a class="zd_anchor"></a>'),
                $(this).parent().attr("id", t),
                $(this).parent().find("a.zd_anchor").attr("name", t)
        }),
        c.append('<div class="close"></div>'),
        r.append('<div class="close"></div>'),
        ZDSlack._isArticle() && ZDSlack._hasStickyNav() && $(".article_page").addClass("has_sidenav")
    }
    ,
    ZDSlack._initNewCategoryJumper = function() {
        l.find("> ul").children().each(function() {
            var e, t = $(this), a = $(this).children().first(), i = a.attr("href"), n = ZDSlack._getPageID(i), o = a.text().trim(), c = ZDSlack._convertToSlug(o, !0), l = ZDSlack._getParentCategoryID() == n;
            t.find("> a").attr("data-id", n),
            t.find("> a").attr("prettyslug", c),
            t.find("> ul li a").each(function() {
                var e = $(this).text().trim()
                  , t = ZDSlack._convertToSlug(e, !0)
                  , a = ZDSlack._getPageID($(this).attr("href"))
                  , n = i + "#" + a;
                $(this).attr("data-id", a),
                $(this).attr("prettyslug", t),
                l && ZDSlack._isCategory() || $(this).attr("href", n)
            }),
            r.length && (e = $('<li><a href="' + i + '">' + o + "</a></li>"),
            r.append(e),
            e.find("a").attr("data-id", n),
            e.find("a").attr("prettyslug", c)),
            l && (t.addClass("selected"),
            e.find("a").addClass("active"))
        }),
        ZDSlack._isCategory() && l.find("li.selected").find("ul li a").each(function() {
            var e = $(this)
              , t = ZDSlack._getPageID(e.attr("href"))
              , a = ZDSlack.id_to_name_map[t]
              , i = "#" + a;
            e.attr("href", i),
            e.attr("prettyslug", a),
            e.on("click", function(e) {
                e.preventDefault(),
                e.stopPropagation();
                var t = $(this).attr("href");
                window.history.pushState ? window.history.pushState(null, null, t) : window.location.hash = t,
                ZDSlack._clickpath = !1,
                ZDSlack._scrollToHelper(this.hash, null, -1 * p)
            })
        })
    }
    ,
    ZDSlack._cleanUpAttributes = function() {
        $(".article-list li a").each(function(e, t) {
            if (ZDSlack._isSandbox())
                $(t).attr("data-resource-id", "218406877");
            else {
                var a = "204092246";
                try {
                    a = $(t).attr("href").split("articles/")[1].split("-")[0]
                } catch (i) {}
                $(t).attr("data-resource-id", a)
            }
        }),
        $(".article-list li").off("click").on("click", function(e) {
            e.preventDefault();
            var t = $(this).find("a").attr("href");
            e.shiftKey || e.ctrlKey || e.metaKey ? window.top.open(t, "_blank") : window.top.location = t
        }),
        $(".article-list li article").remove()
    }
    ,
    ZDSlack._buildNameToIDMap = function() {
        for (var e = $("#section_map li"), t = e.children(), a = 0; a < t.length; a++) {
            var i = t[a]
              , n = $(i).attr("href")
              , o = $(i).attr("data-sectionid");
            n = ZDSlack._convertToSlug(n),
            ZDSlack.name_to_id_map[n] = o,
            ZDSlack.id_to_name_map[o] = n
        }
    }
    ,
    ZDSlack._setupAutoLoadSections = function() {
        var e = $(".autoload");
        e.addClass("invisible"),
        e.each(function() {
            $('<a class="load_more">Load More...</a>').insertBefore($(this)),
            $("a.load_more").on("click", function() {
                $(this).next().addClass("loaded").removeClass("invisible"),
                $(this).remove()
            })
        }),
        e.eq(0).removeClass("invisible").addClass("loaded").prev(".load_more").remove(),
        $(window).scroll(function() {
            ZDSlack._doLoadScroll(e)
        }),
        ZDSlack._doLoadScroll(e)
    }
    ,
    ZDSlack._doLoadScroll = function(e) {
        for (var t = $(window).scrollTop(), a = t + $(window).height(), i = Math.round(.2 * $(window).height()), n = 0; n < e.length; n++) {
            var o = e.eq(n);
            if (!o.hasClass("loaded")) {
                var c = o.offset().top;
                a >= c + i && (o.removeClass("invisible"),
                o.addClass("loaded"),
                o.prev(".load_more").remove())
            }
        }
    }
    ,
    ZDSlack._setupCategoryJump = function() {
        var e = r.find("a")
          , t = r.find(".close");
        t.on("click", function(e) {
            $(this).blur(),
            e.preventDefault(),
            e.stopPropagation(),
            r.toggleClass("open")
        }),
        e.on("click", function(e) {
            if ($(this).blur(),
            e.preventDefault(),
            e.stopPropagation(),
            !r.hasClass("compact") || (r.toggleClass("open"),
            !r.hasClass("open"))) {
                var t = $(this).attr("href");
                window.top.location.href = t
            }
        }),
        r.find("a.active").length || e.eq(0).addClass("active"),
        ZDSlack.$header.addClass("category_header")
    }
    ,
    ZDSlack._setupSectionQuickJump = function() {
        if (ZDSlack._isArticle()) {
            var e = c.find("a")
              , t = c.find(".close");
            if (t.on("click", function(e) {
                $(this).blur(),
                e.preventDefault(),
                e.stopPropagation(),
                $("#nav_list").toggleClass("open")
            }),
            e.on("click", function(e) {
                if ($(this).blur(),
                e.preventDefault(),
                e.stopPropagation(),
                !c.hasClass("compact") || (c.toggleClass("open"),
                !c.hasClass("open"))) {
                    var t = "#" + $(this).attr("prettyslug");
                    window.history.pushState ? window.history.pushState(null, null, t) : window.location.hash = t,
                    ZDSlack._clickpath = !0,
                    ZDSlack._scrollToHelper(this.hash, $(this), -1 * p)
                }
            }),
            ZDSlack._hasStickyNav()) {
                ZDSlack.$header.addClass("category_header"),
                o = c.find("a.active"),
                o.length || (o = e.eq(0).addClass("active"));
                for (var a = c.find("li"), i = a.children(), n = [], r = 0; r < i.length; r++) {
                    var l = i[r]
                      , s = $(l).attr("href")
                      , d = ZDSlack._convertToSlug(s)
                      , u = ZDSlack._convertToSlug(s, !0);
                    "" != d && (d = "#" + d,
                    $(l).attr("href", d),
                    $(l).attr("prettyslug", u),
                    n.push(d))
                }
                $(window).scroll(function() {
                    for (var e = $(window).scrollTop(), t = $(window).height(), a = $(document).height(), i = 0; i < n.length; i++) {
                        var c = n[i]
                          , r = $(".section-tree-with-article").find(c);
                        if (ZDSlack._isArticle() && (r = $(".article_body").find(c)),
                        !r.offset())
                            return;
                        var l = r.offset().top
                          , s = r.height()
                          , d = e + ZDSlack.content_offset < l + s;
                        ZDSlack._isArticle() && (d = !0),
                        e + ZDSlack.content_offset + p >= l && d && (o && o.removeClass("active"),
                        o = $('a[href="' + c + '"]').addClass("active").blur())
                    }
                    ZDSlack._clickpath || e + t != a || $("#nav_list li:last-child a").hasClass("active") || (o && o.removeClass("active"),
                    o = $("#nav_list li:last-child a").addClass("active"))
                })
            }
        }
    }
    ,
    ZDSlack._processArticleJumpAnchors = function() {
        ZDSlack._isArticle() && $(".article_body").find("a[href^='#']:not([href='#'])").click(function() {
            if (window.location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && window.location.hostname == this.hostname) {
                var e = $(this.hash);
                if (e.length || (e = $("[name=" + this.hash.slice(1) + "]")),
                e.length)
                    return ZDSlack._scrollTo(e),
                    window.history.pushState ? window.history.pushState(null, null, this.hash) : window.location.hash = this.hash,
                    !1;
                this.hash && ZDSlack._maybeJumpToArea(this.hash)
            }
        })
    }
    ,
    ZDSlack._maybeJumpToArea = function(e) {
        window.setTimeout(function() {
            var t = e;
            if (t || (t = window.location.hash),
            t = decodeURIComponent(t)) {
                var a = $(t);
                if (a.length || (a = $("#" + ZDSlack._convertToSlug(t))),
                !a.length) {
                    var i = "#" + ZDSlack.id_to_name_map[t.replace("#", "")];
                    a = $(i),
                    a.length && window.history.pushState && window.history.pushState(null, null, i)
                }
                if (!a.length) {
                    var n = t.match(/.+-([0-9])+/);
                    if (n) {
                        var o = $(".article_body .tabs").eq(n[1] - 1)
                          , c = o.find('p[data-anchor="' + t + '"]');
                        c.click(),
                        a = o
                    }
                }
                ZDSlack._scrollTo(a, -1 * p)
            }
        }, 300)
    }
    ,
    ZDSlack._highlightCategoryWords = function() {
        var e = $(".recent-articles li a, .article-list li a, .promoted-articles li a, .related-articles li a")
          , t = $("#highlighting_words")
          , a = {
            element: "b",
            wordsOnly: !0
        };
        t.length && (e.each(function() {
            var e = $(this).text();
            e = e.replace("(", "!po").replace(")", "!pc"),
            $(this).text(e)
        }),
        t = $("#highlighting_words").children().first().text().split(","),
        t.forEach(function(t) {
            t = t.trim(),
            e.highlight(t, a)
        }),
        e.highlight(["@mentions"], {
            element: "b",
            wordsOnly: !1
        }),
        e.each(function() {
            var e = $(this).html();
            e = e.replace("!po", "(").replace("!pc", ")"),
            $(this).html(e)
        }))
    }
    ,
    ZDSlack._setupSectionLinksAndIDs = function() {
        $(".section-tree-with-article, .section-tree").find(".section h2").each(function() {
            var e = $(this).attr("title")
              , t = ZDSlack._convertToSlug(e)
              , a = ZDSlack.name_to_id_map[t];
            a && $(this).attr("data-id", a)
        })
    }
    ,
    ZDSlack._buildGuidesColumns = function() {
        if (ZDSlack._isGuidesSection() || ZDSlack._isGuidesCategory()) {
            var e = $("ul.article-list");
            e.each(function(e, t) {
                var a = $(t)
                  , i = a.children().length
                  , n = i / 2
                  , o = $('<ul class="article-list"></ul>').insertAfter(a);
                a.children().each(function(e, t) {
                    e >= n && $(t).detach().appendTo(o)
                }),
                $("ul.article-list").addClass("columned")
            })
        }
    }
    ,
    ZDSlack._setMenuMode = function(e) {
        e.length && ($(document).width() <= k ? e.addClass("compact") : e.removeClass("compact"))
    }
    ,
    ZDSlack._scrollToHelper = function(e, t, a) {
        void 0 == a && (a = 0),
        ZDSlack._scrollTo(e, a),
        setTimeout(function() {
            ZDSlack._clickpath = !1,
            void 0 != t && (o && o.removeClass("active"),
            o = t.addClass("active"))
        }, 250)
    }
}
.call(this),
function() {
    function e() {
        (ZDSlack._isHome() || ZDSlack._isSearchResults()) && ZDSlack._doAutoComplete(),
        ZDSlack._bindFormSubmit()
    }
    $(document).ready(e),
    ZDSlack._articleAPI = function(e) {
        e || (e = 1);
        var t = "/api/v2/help_center/" + ZDSlack.locale + "/articles.json?per_page=100&page=" + e;
        return -1 == location.hostname.indexOf("slack") && (t = "https://slack.zendesk.com" + t),
        t
    }
    ,
    ZDSlack._mergeIntoArray = function(e, t) {
        return $.each(t.articles, function(t, a) {
            e.push({
                label: a.title,
                value: a.id,
                url: a.html_url.replace("fayaztest", "slackv2"),
                draft: a.draft
            })
        }),
        e
    }
    ,
    ZDSlack._bindFormSubmit = function() {
        $("form.search").on("submit", function() {
            var e = $(this)
              , t = e.attr("data-clog-ui-component")
              , a = e.find("#query").val();
            ZDSlack._clogSearchTermsEntered(t, a)
        })
    }
    ,
    ZDSlack._doAutoComplete = function() {
        var e = []
          , t = ZDSlack._articleAPI(1)
          , a = ZDSlack._articleAPI(2)
          , i = ZDSlack._articleAPI(3);
        $.get(t).done(function(t) {
            e = ZDSlack._mergeIntoArray(e, t),
            $.get(a).done(function(t) {
                e = ZDSlack._mergeIntoArray(e, t),
                $.get(i).done(function(t) {
                    e = ZDSlack._mergeIntoArray(e, t),
                    ZDSlack._buildAutoComplete(e)
                })
            })
        })
    }
    ,
    ZDSlack._buildAutoComplete = function(e) {
        ZDSlack._articlesFetched = e;
        var t = ZDSlack.const_metadata.search_for
          , a = ZDSlack.const_metadata.see_n_results;
        $(".search_container #query").autocomplete({
            source: function(i, n) {
                var o = $.ui.autocomplete.filter(e, i.term)
                  , c = o.length;
                c > 20 && (c = 20),
                o = o.slice(0, 7),
                3 > c ? o.push({
                    label: t.replace("{term}", i.term).replace("{n}", c),
                    value: i.term
                }) : o.push({
                    label: a.replace("{term}", i.term).replace("{n}", c),
                    value: i.term
                }),
                n(o)
            },
            focus: function(e, t) {
                e.preventDefault(),
                $(this).data("original_terms") || $(this).data("original_terms", $(this).val()),
                t.item.url ? $(this).val(t.item.label) : $(this).val(t.item.value)
            },
            open: function() {
                var e = $(".ui-autocomplete");
                e.css("top", parseFloat(e.css("top")) + 1 + "px")
            },
            select: function(e, t) {
                e.preventDefault(),
                t.item.url ? (ZDSlack._clogSearchAutoComplete($(this).data("original_terms"), t.item.value, t.item.url),
                top.location.href = t.item.url) : $(".search_container form").submit()
            }
        }).data("ui-autocomplete")._renderItem = function(e, t) {
            var a = $("<a></a>").text(t.label);
            return t.draft && a.addClass("draft"),
            ZDSlack._highlightAutoComplete(this.term, a),
            $("<li></li>").append(a).appendTo(e)
        }
    }
    ,
    ZDSlack._highlightAutoComplete = function(e, t) {
        var a = $.trim(e);
        t.highlight(a, a)
    }
}
.call(this),
function() {
    function e() {
        ZDSlack._clogPageImpression(),
        $(".search_topics a").on("click", function() {
            var e = window.location.origin + $(this).attr("href");
            ZDSlack._clogSearchQuickLinks(ZDSlack._getPageID(e), e)
        }),
        $(".rc_category.guides a").on("click", function() {
            ZDSlack._clogHomeSecondaryCards("link_guides")
        }),
        $(".rc_category.enterprise a").on("click", function() {
            ZDSlack._clogHomeSecondaryCards("link_enterprise")
        }),
        $("a.search-result-link").on("click", function() {
            var e = $(this)
              , t = e.text()
              , a = $('form[data-clog-ui-component="hc_search_results_header"]').find("#query").val();
            if (ZDSlack._articlesFetched && ZDSlack._articlesFetched.length > 0) {
                var i = ZDSlack._articlesFetched.find(function(e) {
                    return e.label == t
                });
                i && ZDSlack._clogSearchResultLink(a, i.value, i.url)
            }
        }),
        $(".promoted-articles").find("a").on("click", function() {
            var e = $(this)
              , t = window.location.origin + e.attr("href")
              , a = ZDSlack._getPageID(t);
            ZDSlack._clogPromotedArticles("hc_featured_articles", a, t)
        }),
        $(".related-articles").find("a").on("click", function() {
            var e = $(this)
              , t = window.location.origin + e.attr("href")
              , a = ZDSlack._getPageID(t);
            ZDSlack._clogPromotedArticles("hc_related_articles", a, t)
        }),
        $(".recent-articles").find("a").on("click", function() {
            var e = $(this)
              , t = window.location.origin + e.attr("href")
              , a = ZDSlack._getPageID(t);
            ZDSlack._clogPromotedArticles("hc_recent_articles", a, t)
        }),
        $(".category_page .category_trees .article-list").find("a").on("click", function() {
            var e = $(this)
              , t = window.location.origin + e.attr("href")
              , a = ZDSlack._getPageID(t);
            ZDSlack._clogCategoryPageLinks(a, t)
        }),
        $(".category_list #cat_list").find("a").on("click", function() {
            var e = $(this).attr("data-id")
              , t = $(this).attr("prettyslug");
            ZDSlack._clogGlobalJump(e, t, !1)
        }),
        $("#global_menu > ul > li > a").on("click", function() {
            var e = $(this).attr("data-id")
              , t = $(this).attr("prettyslug");
            ZDSlack._clogGlobalJump(e, t, !0)
        }),
        $("#global_menu > ul > li > ul > li > a").on("click", function() {
            var e = $(this).attr("data-id")
              , t = $(this).attr("prettyslug");
            ZDSlack._clogGlobalSectionJump(e, t)
        }),
        $(".section_page .section_trees .article-list").find("a").on("click", function() {
            var e = $(this)
              , t = window.location.origin + e.attr("href")
              , a = ZDSlack._getPageID(t);
            ZDSlack._clogSectionPageLinks(a, t)
        }),
        $(".breadcrumbs li").find("a").on("click", function() {
            var e = $(this)
              , t = window.location.origin + e.attr("href")
              , a = ZDSlack._getPageID(t);
            ZDSlack._clogBreadCrumb(a)
        }),
        $(".article_page .category_list #nav_list").find("a").on("click", function() {
            var e = ZDSlack._getPageID()
              , t = $(this).attr("prettyslug");
            ZDSlack._clogSectionJump(e, t)
        }),
        $('.article_page .article_body a[href*="/hc"]').on("click", function() {
            var e = $(this)
              , t = e.attr("href")
              , a = ZDSlack._getPageID(t);
            ZDSlack._clogArticleLink(!0, a, t)
        }),
        $('.article_page .article_body a[href*="slack.com/"]').on("click", function() {
            var e = $(this)
              , t = e.attr("href");
            ZDSlack._clogArticleLink(!1, t, t)
        })
    }
    $(document).ready(e),
    ZDSlack._clogPageImpression = function() {
        var e = ZDSlack._getPageType()
          , t = {
            contexts: {
                ui_context: {
                    action: "impression",
                    step: "hc_page_" + e
                }
            }
        };
        window.client_logger.track("HELP_CENTER_IMPRESSION", t)
    }
    ,
    ZDSlack._clogPurpleBanner = function(e, t, a) {
        var i = ZDSlack._getPageType()
          , n = {
            trigger: e || "purple_banner_unknown",
            contexts: {
                ui_context: {
                    action: t || "",
                    step: "hc_page_" + i,
                    ui_component: "hc_purple_banner",
                    ui_element: a || ""
                }
            }
        };
        window.client_logger.track("HELP_CENTER_BANNER", n)
    }
    ,
    ZDSlack._clogLocaleBanner = function(e, t) {
        var a = ZDSlack._getPageType()
          , i = {
            trigger: ZDSlack.bestSupportedLocaleFromHeaders,
            contexts: {
                ui_context: {
                    action: e || "",
                    step: "hc_page_" + a,
                    ui_component: "hc_locale_banner",
                    ui_element: t || ""
                }
            }
        };
        window.client_logger.track("HELP_CENTER_BANNER", i)
    }
    ,
    ZDSlack._clogLocaleSwitcher = function(e) {
        var t = ZDSlack._getPageType()
          , a = {
            trigger: e,
            contexts: {
                ui_context: {
                    action: "locale_select",
                    step: "hc_page_" + t,
                    ui_component: "hc_locale_banner",
                    ui_element: "link_locale_trigger"
                }
            }
        };
        window.client_logger.track("HELP_CENTER_ACTION", a)
    }
    ,
    ZDSlack._clogArticleUpDownVotes = function(e) {
        var t = {
            contexts: {
                ui_context: {
                    action: e,
                    step: "hc_page_article",
                    ui_component: "hc_feedback_form",
                    ui_element: "btn_" + e
                }
            }
        };
        window.client_logger.track("HELP_CENTER_VOTE", t)
    }
    ,
    ZDSlack._clogArticleFeedback = function(e, t) {
        var a = {
            feedback_message: e,
            contexts: {
                ui_context: {
                    action: "submit_feedback_" + t,
                    step: "hc_page_article",
                    ui_component: "hc_feedback_form",
                    ui_element: "btn_submit_feedback"
                }
            }
        };
        window.client_logger.track("HELP_CENTER_FEEDBACK", a)
    }
    ,
    ZDSlack._clogSearchTermsEntered = function(e, t) {
        var a = ZDSlack._getPageType()
          , i = {
            search_terms: t,
            contexts: {
                ui_context: {
                    action: "search",
                    step: "hc_page_" + a,
                    ui_component: e,
                    ui_element: "hc_search_input"
                }
            }
        };
        window.client_logger.track("HELP_CENTER_ACTION", i)
    }
    ,
    ZDSlack._clogSearchAutoComplete = function(e, t, a) {
        var i = ZDSlack._getPageType()
          , n = {
            trigger: t,
            search_terms: e,
            zd_article_url: a,
            contexts: {
                ui_context: {
                    action: "click",
                    step: "hc_page_" + i,
                    ui_component: "hc_search_autocomplete",
                    ui_element: "link_hc_article"
                }
            }
        };
        window.client_logger.track("HELP_CENTER_CLICK", n)
    }
    ,
    ZDSlack._clogSearchResultLink = function(e, t, a) {
        var i = {
            trigger: t,
            search_terms: e,
            zd_article_url: a,
            contexts: {
                ui_context: {
                    action: "click",
                    step: "hc_page_search",
                    ui_component: "hc_search_results",
                    ui_element: "link_hc_article"
                }
            }
        };
        window.client_logger.track("HELP_CENTER_CLICK", i)
    }
    ,
    ZDSlack._clogSearchQuickLinks = function(e, t) {
        var a = {
            trigger: e,
            zd_article_url: t,
            contexts: {
                ui_context: {
                    action: "click",
                    step: "hc_page_home",
                    ui_component: "hc_search_quicklinks",
                    ui_element: "link_hc_article"
                }
            }
        };
        window.client_logger.track("HELP_CENTER_CLICK", a)
    }
    ,
    ZDSlack._clogHomeSecondaryCards = function(e) {
        var t = {
            contexts: {
                ui_context: {
                    action: "click",
                    step: "hc_page_home",
                    ui_component: "hc_secondary_card",
                    ui_element: e
                }
            }
        };
        window.client_logger.track("HELP_CENTER_CLICK", t)
    }
    ,
    ZDSlack._clogPromotedArticles = function(e, t, a) {
        var i = ZDSlack._getPageType()
          , n = {
            trigger: t,
            zd_article_url: a,
            contexts: {
                ui_context: {
                    action: "click",
                    step: "hc_page_" + i,
                    ui_component: e,
                    ui_element: "link_hc_article"
                }
            }
        };
        window.client_logger.track("HELP_CENTER_CLICK", n)
    }
    ,
    ZDSlack._clogCategoryPageLinks = function(e, t) {
        var a = {
            trigger: e,
            zd_article_url: t,
            contexts: {
                ui_context: {
                    action: "click",
                    step: "hc_page_category",
                    ui_component: "hc_section_tree",
                    ui_element: "link_hc_article"
                }
            }
        };
        window.client_logger.track("HELP_CENTER_CLICK", a)
    }
    ,
    ZDSlack._clogSectionJump = function(e, t) {
        var a = ZDSlack._getPageType()
          , i = "category" == a ? "link_quickjump_section" : "link_quickjump_article"
          , n = {
            trigger: e,
            click_target: t,
            contexts: {
                ui_context: {
                    action: "click",
                    step: "hc_page_" + a,
                    ui_component: "hc_section_list",
                    ui_element: i
                }
            }
        };
        window.client_logger.track("HELP_CENTER_CLICK", n)
    }
    ,
    ZDSlack._clogGlobalJump = function(e, t, a) {
        var i = ZDSlack._getPageType()
          , n = a ? "link_hc_category" : "link_quickjump_category"
          , o = {
            trigger: e,
            click_target: t,
            contexts: {
                ui_context: {
                    action: "click",
                    step: "hc_page_" + i,
                    ui_component: "hc_global_nav",
                    ui_element: n
                }
            }
        };
        window.client_logger.track("HELP_CENTER_CLICK", o)
    }
    ,
    ZDSlack._clogGlobalSectionJump = function(e, t) {
        var a = ZDSlack._getPageType()
          , i = {
            trigger: e,
            click_target: t,
            contexts: {
                ui_context: {
                    action: "click",
                    step: "hc_page_" + a,
                    ui_component: "hc_global_nav",
                    ui_element: "link_hc_section"
                }
            }
        };
        window.client_logger.track("HELP_CENTER_CLICK", i)
    }
    ,
    ZDSlack._clogSectionPageLinks = function(e, t) {
        var a = {
            trigger: e,
            zd_article_url: t,
            contexts: {
                ui_context: {
                    action: "click",
                    step: "hc_page_section",
                    ui_component: "hc_section_tree",
                    ui_element: "link_hc_article"
                }
            }
        };
        window.client_logger.track("HELP_CENTER_CLICK", a)
    }
    ,
    ZDSlack._clogBreadCrumb = function(e) {
        var t = ZDSlack._getPageType()
          , a = {
            trigger: e,
            contexts: {
                ui_context: {
                    action: "click",
                    step: "hc_page_" + t,
                    ui_component: "hc_breadcrumb",
                    ui_element: "link_hc_category"
                }
            }
        };
        window.client_logger.track("HELP_CENTER_CLICK", a)
    }
    ,
    ZDSlack._clogArticleLink = function(e, t, a) {
        var i = e ? "link_hc_article" : "link_web_slack"
          , n = {
            trigger: t,
            contexts: {
                ui_context: {
                    action: "click",
                    step: "hc_page_article",
                    ui_component: "hc_article_body",
                    ui_element: i
                }
            }
        };
        e && (n.zd_article_url = a),
        window.client_logger.track("HELP_CENTER_CLICK", n)
    }
}
.call(this),
!function() {
    var e;
    return e = window.driftt = window.drift = window.driftt || [],
    e.init ? void 0 : e.invoked ? void (window.console && console.error && console.error("Drift snippet included twice.")) : (e.invoked = !0,
    e.methods = ["identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on"],
    e.factory = function(t) {
        return function() {
            var a;
            return a = Array.prototype.slice.call(arguments),
            a.unshift(t),
            e.push(a),
            e
        }
    }
    ,
    e.methods.forEach(function(t) {
        e[t] = e.factory(t)
    }),
    e.load = function(e) {
        var t, a, i, n;
        t = 3e5,
        n = Math.ceil(new Date / t) * t,
        i = document.createElement("script"),
        i.type = "text/javascript",
        i.async = !0,
        i.crossorigin = "anonymous",
        i.src = "https://js.driftt.com/include/" + n + "/" + e + ".js",
        a = document.getElementsByTagName("script")[0],
        a.parentNode.insertBefore(i, a)
    }
    )
}(),
drift.SNIPPET_VERSION = "0.3.1",
drift.load("a6yri4b82zv7"),
function() {
    function e() {
        ZDSlack._isGlossaryArticle() && ZDSlack._sortArticleParagraphs()
    }
    $(document).ready(e),
    ZDSlack._sortArticleParagraphs = function() {
        var e = {
            br: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            de: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "en-gb": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            es: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "es-416": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "fr-fr": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "pt-br": "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        }
          , t = e[ZDSlack.locale];
        if (t) {
            var a = []
              , i = !1
              , n = $(".article_body p:has(strong)").sort(function(e, t) {
                return $(e).find("strong").text().localeCompare($(t).find("strong").text())
            });
            for (a.push(Array.prototype.reverse.call($(".article_body h2:first").prevAll())),
            a.push(ZDSlack._glossaryAlphabetTitle(t[0])),
            $.each(n, function(e, n) {
                ZDSlack._normalizeCharacter($(n).find("strong").text()[0].toUpperCase()) == t[0] ? (a.push(n),
                i = !0) : (i || a.push(ZDSlack._noGlossaryItem()),
                t = t.substr(1),
                i = !1,
                a.push(ZDSlack._nonBreakingSpace()),
                a.push(ZDSlack._glossaryAlphabetTitle(t[0])))
            }),
            i || a.push(ZDSlack._noGlossaryItem()); t.length > 1; )
                t = t.substr(1),
                a.push(ZDSlack._nonBreakingSpace()),
                a.push(ZDSlack._glossaryAlphabetTitle(t[0])),
                a.push(ZDSlack._noGlossaryItem());
            $(".article_body").html(a),
            ZDSlack._processArticleJumpAnchors()
        }
    }
    ,
    ZDSlack._noGlossaryItem = function() {
        var e = {
            br: "Nenhum item de glossário.",
            de: "Keine Glossareinträge.",
            es: "No hay entradas del glosario.",
            "fr-fr": "Aucun terme.",
            ja: "用語集の項目がありません"
        };
        return $.parseHTML("<p>" + e[ZDSlack.locale] + "</p>")[0]
    }
    ,
    ZDSlack._glossaryAlphabetTitle = function(e) {
        return $.parseHTML("<h2><a name=" + e + "><strong>" + e + "</strong></h2>")[0]
    }
    ,
    ZDSlack._nonBreakingSpace = function() {
        return $.parseHTML("<p>&nbsp;</p>")[0]
    }
    ,
    ZDSlack._normalizeCharacter = function(e) {
        return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase()
    }
}
.call(this),
$(function() {
    var e = {
        $window: $(window),
        $document: $(document),
        $banner: null,
        $emoji_hand: null,
        $close_btns: null,
        $go_btns: null,
        is_visible: !1,
        scroll_deb: null,
        cookieKey: "",
        name: "",
        init: function(e, t) {
            var a = this;
            "string" == typeof e ? (a.$banner = $("." + e),
            a.name = e) : (a.$banner = e.insertBefore(".c-nav--footer"),
            a.name = e.id),
            a.$emoji_hand = a.$banner.find(".wave"),
            a.$close_btns = a.$banner.find(".close_purple"),
            a.$go_btns = a.$banner.find(".btn"),
            a.$banner.addClass("purple_banner_style"),
            a.$go_btns.click(function() {
                ZDSlack._clogPurpleBanner(a.name, "click", "banner_cta"),
                a.dismissBanner()
            }),
            a.$close_btns.click(function() {
                ZDSlack._clogPurpleBanner(a.name, "click", "banner_cta_dismiss"),
                a.dismissBanner()
            }),
            a.$window.on("scroll", function() {
                a.winScroll()
            }),
            a.setCookieKey(t)
        },
        winScroll: function() {
            var e = this;
            clearTimeout(e.scroll_deb),
            e.scroll_deb = setTimeout(function() {
                e.isAtBottom() ? e.hideBanner() : e.showBanner(20)
            }, 200)
        },
        isAtBottom: function() {
            var e = this;
            return e.$window.scrollTop() + e.$window.height() == e.$document.height()
        },
        setCookieKey: function(e) {
            var t = this;
            t.cookieKey = e
        },
        showBanner: function(e) {
            var t = this;
            e || (e = 1e3),
            t.is_visible || t.checkCookie() || (t.is_visible = !0,
            setTimeout(function() {
                t.isAtBottom() || t.$banner.slideDown(400, function() {
                    t.animateHand(),
                    ZDSlack._clogPurpleBanner(t.name, "impression", null)
                })
            }, e))
        },
        animateHand: function() {
            var e = this;
            e.$emoji_hand.stop().delay(200).queue(function(e) {
                $(this).addClass("rotated"),
                e()
            }).delay(200).queue(function(e) {
                $(this).removeClass("rotated"),
                e()
            }).delay(200).queue(function(e) {
                $(this).addClass("rotated"),
                e()
            }).delay(200).queue(function(e) {
                $(this).removeClass("rotated"),
                e()
            })
        },
        hideBanner: function() {
            var e = this;
            e.$banner.slideUp(180, function() {
                e.is_visible = !1
            })
        },
        dismissBanner: function() {
            var e = this;
            ZDSlack.permaCookie[e.cookieKey] = !0,
            ZDSlack._writeCookies(),
            e.hideBanner()
        },
        checkCookie: function() {
            var e = this;
            return ZDSlack.permaCookie[e.cookieKey]
        }
    };
    $(document).ready(function() {}),
    ZDSlack._showPurpleBanner = function(t, a) {
        e.init(t, a),
        e.showBanner()
    }
    ,
    ZDSlack._createBanner = function(t) {
        if (Object.keys(t).sort().toString() === ["name", "copy", "link", "cta"].sort().toString()) {
            var a = ['<div id="' + t.name + '">', '<div class="first_row">', '<i class="wave"></i><span>' + t.copy + "</span>", "</div>", '<div class="second_row">', '<a class="btn" href="' + t.link + '" target="_blank">' + t.cta + "</a>", '</div><button class="close_purple ts_icon ts_icon_times"/>', "</div>"];
            e.init($(a.join("\n")), t.name + "Cookie"),
            e.showBanner()
        }
    }
}()),
function() {
    function e() {
        ZDSlack.responsiveMenu = $(".fs_menu"),
        ZDSlack.responsiveSearch = $(".fs_search"),
        $(".open_menu").click(ZDSlack._openResponsiveMenu),
        $(".close_menu").on("click touchend", function() {
            ZDSlack._closeResponsiveMenu()
        }),
        $(".open_search").click(ZDSlack._openResponsiveSearch),
        $(".close_search").click(ZDSlack._closeResponsiveSearch),
        $(".header_search #query").blur(function() {
            ZDSlack._closeResponsiveSearch()
        }),
        $(".header_search #query").on("focus", function() {
            ZDSlack.searchOpen = !0
        }),
        ZDSlack._setSearchPlaceholders()
    }
    function t() {
        clearTimeout(a),
        a = setTimeout(function() {
            "search" !== $(document.activeElement).prop("type") && ZDSlack._cancelResponsiveSearch(null);
        }, 200)
    }
    ZDSlack.responsiveMenu = null,
    ZDSlack.responsiveSearch = null,
    ZDSlack.searchOpen = !1,
    ZDSlack.menuOpen = !1;
    var a = null;
    $(document).ready(e),
    $(window).resize(t),
    ZDSlack._setSearchPlaceholders = function() {
        var e = $(".search_container #query")
          , t = e.attr("data-smallplaceholder");
        e.width() < 410 && e.attr("placeholder", t)
    }
    ,
    ZDSlack._openResponsiveMenu = function(e) {
        e && e.preventDefault(),
        $("body").addClass("no_scroll"),
        $(".logo_holder").fadeOut(100);
        var t = ZDSlack.responsiveMenu.find("ul");
        t.hide().css({
            "margin-top": "145px"
        }),
        ZDSlack.responsiveMenu.fadeIn(100),
        $(".close_menu").addClass("rotated"),
        ZDSlack.menuOpen = !0,
        t.fadeIn().animate({
            "margin-top": "125px"
        }, {
            queue: !1,
            duration: 300
        })
    }
    ,
    ZDSlack._closeResponsiveMenu = function(e) {
        e && e.preventDefault(),
        $("body").removeClass("no_scroll"),
        $(".logo_holder").fadeIn(100);
        var t = ZDSlack.responsiveMenu.find("ul");
        ZDSlack.responsiveMenu.fadeOut(100),
        $(".close_menu").removeClass("rotated"),
        t.fadeOut().animate({
            "margin-top": "165px"
        }, {
            queue: !1,
            duration: 300
        }),
        ZDSlack.menuOpen = !1
    }
    ,
    ZDSlack._openResponsiveSearch = function(e) {
        e && (e.preventDefault(),
        e.stopPropagation()),
        $("#logo_b").fadeOut(100),
        $(".header_loc").fadeOut(100),
        $(".menu_nav").fadeOut(100, function() {
            $(".header_search").addClass("fs_search"),
            $("header").addClass("fs_search");
            var e = $(document).width() - 100;
            $(".header_search #query").css({
                width: e
            }),
            $(".header_search").fadeIn(100),
            $(".header_white .close_search").removeClass("hidden").fadeIn(100),
            ZDSlack.searchOpen = !0,
            $(".header_search #query").val(""),
            $(".header_search #query").focus()
        })
    }
    ,
    ZDSlack._closeResponsiveSearch = function(e, t) {
        if (ZDSlack.searchOpen) {
            e && e.preventDefault(),
            ZDSlack.searchOpen = !1;
            var a = t ? 0 : 100
              , i = $("header").hasClass("fs_search");
            $(".header_white .close_search").fadeOut(a).addClass("hidden"),
            i && ($(".header_search").fadeOut(a, function() {
                $("header").removeClass("fs_search"),
                $(this).hide().removeClass("fs_search").css({
                    display: ""
                }),
                $(this).find("#query").css({
                    width: ""
                })
            }),
            $("#logo_b").fadeIn(a),
            $(".header_loc").fadeIn(a),
            $(".menu_nav").fadeIn(a, function() {
                $(this).css({
                    display: ""
                })
            }))
        }
    }
    ,
    ZDSlack._cancelResponsiveSearch = function(e) {
        ZDSlack._closeResponsiveSearch(e, !0),
        ZDSlack._setSearchPlaceholders()
    }
}
.call(this),
function() {
    function e() {
        a = $(".article-vote-controls"),
        i = $(".vote-thanks"),
        n = $(".article-vote-controls a"),
        o = $(".vote-err"),
        c = $(".article-feedback-form"),
        r = $(".article-send-feedback"),
        l = $(".vote_feedback_up"),
        s = $(".vote_feedback_down"),
        d = $(".feedback-thanks"),
        u = $("#char_num span"),
        n.click(ZDSlack._submitVote),
        r.click(ZDSlack._submitFeedback),
        l.on("input propertychange keyup", ZDSlack._monitorTextArea),
        s.on("input propertychange keyup", ZDSlack._monitorTextArea),
        ZDSlack._isVideoArticle() && $(".article-vote-question").text($(".article-vote-question").attr("data-video")),
        ZDSlack._isGuideArticle() && $(".article-vote-question").text($(".article-vote-question").attr("data-guide")),
        $(".article-vote-question").css("opacity", 1),
        i.hide(),
        d.hide(),
        o.hide(),
        c.hide(),
        l.hide(),
        s.hide()
    }
    var t, a, i, n, o, c, r, l, s, d, u, h = !1, _ = !1;
    $(document).ready(e),
    ZDSlack._submitVote = function() {
        if (!h) {
            var e = $(this);
            t = e.attr("id"),
            o.hide(),
            ZDSlack._monitorTextArea(),
            "up" == t ? (l.show(),
            s.hide()) : (s.show(),
            l.hide()),
            n.removeClass("article-voted"),
            c.slideDown(300),
            e.addClass("article-voted"),
            h = !0,
            ZDSlack._clogArticleUpDownVotes(t + "_vote"),
            h = !1
        }
    }
    ,
    ZDSlack._submitFeedback = function() {
        if (!_) {
            var e = "up" == t ? l.val() : s.val()
              , r = $("h1.article_title").text().trim()
              , u = "up" == t ? "good" : "danger"
              , h = ZDSlack.locale
              , f = ZDSlack._getEmojiForLocale(h)
              , p = Date.now() / 1e3
              , k = "https://analytics.tinyspeck.com/v2/dashboard/249650500758?locale=" + h
              , g = $("ol.breadcrumbs li:eq(2)").attr("title")
              , m = "en-us" == ZDSlack.locale ? g : f + " " + g;
            if (o.hide(),
            _ = !0,
            !ZDSlack._isEmpty(e)) {
                ZDSlack._clogArticleFeedback(e, t);
                var S = "https://hooks.slack.com/services/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";
                ZDSlack._isLiveHC() && (S = "https://hooks.slack.com/services/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");
                try {
                    $.ajax({
                        type: "POST",
                        url: S,
                        data: JSON.stringify({
                            attachments: [{
                                fallback: e,
                                color: u,
                                title: r,
                                title_link: location.href,
                                text: e,
                                fields: [{
                                    value: "<" + k + "|See Dashboard>",
                                    "short": !1
                                }],
                                footer: m,
                                ts: p
                            }]
                        }),
                        success: function() {},
                        dataType: "json"
                    })
                } catch (D) {}
            }
            n.removeClass("article-voted"),
            "up" == t ? i.show() : d.show(),
            a.hide(),
            c.slideUp(300),
            _ = !1
        }
    }
    ,
    ZDSlack._isEmpty = function(e) {
        return /^\s*$/g.test(e)
    }
    ,
    ZDSlack._monitorTextArea = function() {
        var e = "up" == t ? l.val() : s.val();
        ZDSlack._isEmpty(e) ? r.removeClass("allowed") : r.addClass("allowed"),
        ZDSlack._countChars()
    }
    ,
    ZDSlack._countChars = function() {
        var e = 600
          , a = "up" == t ? l : s
          , i = a.val()
          , n = i.length;
        return n > e ? $current_feedback_contents.val(i.substring(0, e)) : u.text(n),
        n
    }
    ,
    ZDSlack._getEmojiForLocale = function(e) {
        e || (e = ZDSlack.locale);
        var t = e.slice(-2);
        "ja" == t && (t = "jp");
        var a = ":flag-" + t + ":";
        return a
    }
}
.call(this);
