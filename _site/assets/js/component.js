(window.webpackJsonp = window.webpackJsonp || []).push([[23], {
    146: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n(0)
          , a = n.n(r)
          , i = n(159)
          , o = n(178)
          , s = n(177)
          , l = n(176)
          , c = i.a.div.withConfig({
            displayName: "level-2-product-banner__StyledLevel2ProductBanner",
            componentId: "nra6nl-0"
        })(["height:38.75rem;"])
          , d = i.a.div.withConfig({
            displayName: "level-2-product-banner__ProductDescriptionContainer",
            componentId: "nra6nl-1"
        })(["display:flex;flex-direction:column;align-items:flex-start;justify-content:center;"])
          , u = i.a.div.withConfig({
            displayName: "level-2-product-banner__ProductImageContainer",
            componentId: "nra6nl-2"
        })(["display:flex;align-items:flex-end;justify-content:center;background-color:#b7b0b0;"])
          , m = i.a.div.withConfig({
            displayName: "level-2-product-banner__ProductName",
            componentId: "nra6nl-3"
        })(["font-size:3.25rem;font-weight:900;margin-bottom:1.875rem;text-transform:uppercase;"])
          , f = i.a.div.withConfig({
            displayName: "level-2-product-banner__ProductDescription",
            componentId: "nra6nl-4"
        })(["font-size:1.125rem;line-height:1.33;"])
          , p = i.a.img.withConfig({
            displayName: "level-2-product-banner__ProductImage",
            componentId: "nra6nl-5"
        })(["width:55%;max-height:100%;"])
          , g = function(e) {
            var t = e.data;
            return a.a.createElement(c, {
                className: "row"
            }, a.a.createElement(d, {
                className: "col-lg-5 col-md-5 col-sm-5 hidden-xs"
            }, a.a.createElement(m, null, t.product_name.text), a.a.createElement(f, {
                className: "row"
            }, a.a.createElement("div", {
                className: "col-lg-7 col-md-7 col-sm-7"
            }, t.cover_description.text))), a.a.createElement(u, {
                className: "col-lg-7 col-md-7 col-sm-7 col-xs-12"
            }, a.a.createElement(p, {
                src: t.cover_image.url
            })))
        }
          , h = i.a.div.withConfig({
            displayName: "product-specifications__StyledProductSpecifications",
            componentId: "sc-1ws6kbu-0"
        })([""])
          , v = i.a.div.withConfig({
            displayName: "product-specifications__Title",
            componentId: "sc-1ws6kbu-1"
        })(["font-size:1.5rem;font-weight:bold;margin-bottom:1.875rem;@media only screen and (max-width:767px){font-size:1.875rem;margin-bottom:2.8125rem;}"])
          , y = i.a.div.withConfig({
            displayName: "product-specifications__SpecificationContainer",
            componentId: "sc-1ws6kbu-2"
        })(["margin-bottom:1.875rem;padding-bottom:1.875rem;&:not(:last-child){border-bottom:0.0625rem solid rgba(11,9,12,0.2);}@media only screen and (max-width:767px){border-bottom:none!important;}"])
          , w = i.a.div.withConfig({
            displayName: "product-specifications__SpecificationHeading",
            componentId: "sc-1ws6kbu-3"
        })(["font-size:1.5rem;margin-bottom:1.25rem;@media only screen and (max-width:767px){font-size:1.875rem;margin-bottom:1.875rem;font-weight:600;}"])
          , b = i.a.div.withConfig({
            displayName: "product-specifications__SpecificationText",
            componentId: "sc-1ws6kbu-4"
        })(["font-size:1.125rem;@media only screen and (max-width:767px){font-size:1.75rem;}"])
          , x = function(e) {
            var t = e.specs;
            return a.a.createElement(h, null, a.a.createElement(v, null, "Specifications"), t.map(function(e, t) {
                return a.a.createElement(y, {
                    key: t
                }, a.a.createElement(w, null, e.specification_title.text), a.a.createElement("div", {
                    className: "row"
                }, a.a.createElement("div", {
                    className: "col-lg-10 col-md-10 col-sm-10 col-xs-12"
                }, a.a.createElement(b, null, e.specification_text.text))))
            }))
        }
          , _ = (n(223),
        n(396))
          , P = n.n(_)
          , C = i.a.div.withConfig({
            displayName: "product-rotation__StyledProductRotation",
            componentId: "sc-17f7n2j-0"
        })(["align-self:flex-start;"])
          , E = i.a.img.withConfig({
            displayName: "product-rotation__ProductImage",
            componentId: "sc-17f7n2j-1"
        })([""])
          , I = function(e) {
            var t = e.uid
              , n = e.imagesCount
              , r = void 0 === n ? 72 : n
              , i = e.autoPlayTime
              , o = void 0 === i ? 100 : i;
            return a.a.createElement(C, null, a.a.createElement(P.a, {
                cycle: !0,
                autoPlay: o
            }, function(e, t) {
                return Array.apply(null, {
                    length: t
                }).map(Number.call, Number).map(function(t, n) {
                    return "https://res.cloudinary.com/dq7cjqb1g/image/upload/" + e + "/untitled." + (n + 1) + ".jpg"
                })
            }(t, r).map(function(e, t) {
                return a.a.createElement(E, {
                    key: t,
                    src: e
                })
            })))
        }
          , S = n(163)
          , N = n(291)
          , O = n.n(N)
          , k = i.a.div.withConfig({
            displayName: "other-products__StyledOtherProducts",
            componentId: "sc-1yka3z5-0"
        })(["margin-top:7.8125rem;"])
          , W = i.a.div.withConfig({
            displayName: "other-products__Title",
            componentId: "sc-1yka3z5-1"
        })(["font-size:3.25rem;font-weight:900;text-transform:uppercase;margin-bottom:4.0625rem;@media only screen and (max-width:767px){text-align:center;}"])
          , A = i.a.div.withConfig({
            displayName: "other-products__ProductContainer",
            componentId: "sc-1yka3z5-2"
        })(["cursor:pointer;text-align:center;display:inline;margin-bottom:4.0625rem;&:hover{color:#0486ff;}"])
          , T = i.a.div.withConfig({
            displayName: "other-products__ProductImageContainer",
            componentId: "sc-1yka3z5-3"
        })(["height:18.75rem;width:18.75rem;margin-bottom:1.875rem;display:flex;align-items:flex-end;justify-content:center;"])
          , j = i.a.img.withConfig({
            displayName: "other-products__ProductImage",
            componentId: "sc-1yka3z5-4"
        })(["width:75%;transition:width 0.2s linear;", ":hover &{width:77%;}"], T)
          , D = i.a.div.withConfig({
            displayName: "other-products__ProductName",
            componentId: "sc-1yka3z5-5"
        })(["font-size:1.5rem;font-weight:bold;"])
          , L = function(e) {
            var t = e.product
              , n = e.productName
              , r = e.productImage;
            return a.a.createElement(A, {
                onClick: function() {
                    return Object(S.navigate)("/" + t.node.data.l3_tag.uid + "/" + t.node.uid)
                }
            }, a.a.createElement(T, null, a.a.createElement(j, {
                draggable: !1,
                src: r
            })), a.a.createElement(D, null, n))
        }
          , M = function(e) {
            return e.map(function(e) {
                return a.a.createElement(L, {
                    key: e.node.uid,
                    product: e,
                    productName: e.node.data.product_name.text,
                    productImage: e.node.data.cover_image.url
                })
            })
        }
          , R = function(e) {
            var t = e.products
              , n = e.l2Name;
            return a.a.createElement(k, {
                className: "row"
            }, a.a.createElement("div", {
                className: "col-lg-offset-1 col-lg-10  col-md-offset-1 col-md-10  col-sm-offset-1 col-sm-10 col-xs-offset-1 col-xs-10"
            }, a.a.createElement(W, null, "Other ", n, " Products")), a.a.createElement("div", {
                className: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
            }, a.a.createElement(O.a, {
                data: M(t),
                clickWhenDrag: !1
            })))
        }
          , V = n(7)
          , z = n.n(V)
          , F = i.a.div.withConfig({
            displayName: "products-slider__StyledProductsSlider",
            componentId: "h4weiy-0"
        })(["border-bottom:0.03125rem solid rgba(0,0,0,0.6);"])
          , U = (i.a.div.withConfig({
            displayName: "products-slider__ProductTabsContainer",
            componentId: "h4weiy-1"
        })([""]),
        i.a.div.withConfig({
            displayName: "products-slider__ProductTabContainer",
            componentId: "h4weiy-2"
        })(["min-width:15rem;border-right:0.03125rem solid rgba(0,0,0,0.4);border-left:0.03125rem solid rgba(0,0,0,0.4);:hover{color:#0486ff;}&.active{box-shadow:0 0.9375rem 2.25rem 0.25rem rgba(0,0,0,0.15);border:none;color:#0486ff;}"]))
          , q = i.a.div.withConfig({
            displayName: "products-slider__ProductTab",
            componentId: "h4weiy-3"
        })(["cursor:pointer;padding:0 1.875rem;height:10.625rem;font-size:1.5rem;font-weight:bold;display:flex;align-items:center;justify-content:center;text-align:center;word-break:break-all;"])
          , B = i.a.div.withConfig({
            displayName: "products-slider__Navigation",
            componentId: "h4weiy-4"
        })(["height:10.625rem;width:15rem;display:flex;align-items:center;justify-content:center;font-size:2.5rem;cursor:pointer;:hover{color:#0486ff;}"])
          , H = Object(i.a)(B).withConfig({
            displayName: "products-slider__LeftNavigation",
            componentId: "h4weiy-5"
        })(["border-right:0.03125rem solid rgba(0,0,0,0.4);"])
          , X = Object(i.a)(B).withConfig({
            displayName: "products-slider__RightNavigation",
            componentId: "h4weiy-6"
        })(["border-left:0.03125rem solid rgba(0,0,0,0.4);"])
          , Y = function(e) {
            var t = e.text
              , n = e.selected;
            return a.a.createElement(U, {
                className: n && "active"
            }, a.a.createElement(q, null, t))
        }
          , J = function(e) {
            return e.map(function(e) {
                return a.a.createElement(Y, {
                    text: e.node.data.product_name.text,
                    key: e.node.uid
                })
            })
        }
          , K = function(e) {
            var t = e.type;
            return a.a.createElement("div", null, "left" == t && a.a.createElement(H, null, a.a.createElement("i", {
                className: "icon icon-less-than"
            })), "right" == t && a.a.createElement(X, null, a.a.createElement("i", {
                className: "icon icon-greater-than"
            })))
        }
          , Q = K({
            type: "left"
        })
          , G = K({
            type: "right"
        })
          , Z = function(e) {
            function t(t) {
                var n;
                return (n = e.call(this, t) || this).state = {
                    selected: n.props.selectedProductUid
                },
                n
            }
            return z()(t, e),
            t.prototype.render = function() {
                var e = this;
                return a.a.createElement(F, null, !this.props.withoutArrows && a.a.createElement(O.a, {
                    data: J(this.props.products),
                    selected: this.state.selected,
                    arrowLeft: Q,
                    arrowRight: G,
                    onSelect: function(t) {
                        Object(S.navigate)("/" + e.props.l3Uid + "/" + t)
                    }
                }), this.props.withoutArrows && a.a.createElement(O.a, {
                    data: J(this.props.products),
                    selected: this.state.selected,
                    onSelect: function(t) {
                        Object(S.navigate)("/" + e.props.l3Uid + "/" + t)
                    }
                }))
            }
            ,
            t
        }(a.a.Component)
          , $ = n(183)
          , ee = n(180);
        n.d(t, "pageQuery", function() {
            return de
        });
        var te = i.a.div.withConfig({
            displayName: "product-detail__Page",
            componentId: "sc-16x6wf2-0"
        })(["font-size:1.125rem;@media only screen and (max-width:767px){font-size:1.75rem;}"])
          , ne = i.a.div.withConfig({
            displayName: "product-detail__Heading",
            componentId: "sc-16x6wf2-1"
        })(["font-size:1.5rem;font-weight:bold;margin-bottom:0.9375rem;@media only screen and (max-width:767px){font-size:2.5rem;margin-bottom:2.5rem;}"])
          , re = i.a.div.withConfig({
            displayName: "product-detail__ProductDescription",
            componentId: "sc-16x6wf2-2"
        })(["@media only screen and (max-width:767px){font-size:1.75rem;line-height:1.29;}"])
          , ae = i.a.div.withConfig({
            displayName: "product-detail__ProductNameContainer",
            componentId: "sc-16x6wf2-3"
        })(["margin-top:4.0625rem;margin-bottom:2.8125rem;"])
          , ie = i.a.div.withConfig({
            displayName: "product-detail__PageTitleContainer",
            componentId: "sc-16x6wf2-4"
        })(["padding:2.1875rem 0;border-bottom:0.0625rem solid rgba(0,0,0,0.4);"])
          , oe = i.a.div.withConfig({
            displayName: "product-detail__ProductRotationContainer",
            componentId: "sc-16x6wf2-5"
        })(["display:flex;align-items:center;"])
          , se = i.a.div.withConfig({
            displayName: "product-detail__PageTitle",
            componentId: "sc-16x6wf2-6"
        })(["font-size:2.5rem;font-weight:900;text-transform:uppercase;@media only screen and (max-width:767px){font-size:3.25rem;margin-bottom:1.25rem;}"])
          , le = i.a.div.withConfig({
            displayName: "product-detail__EnquiryTitle",
            componentId: "sc-16x6wf2-7"
        })(["font-size:2.5rem;font-weight:bold;margin-bottom:1.25rem;@media only screen and (max-width:767px){text-transform:uppercase;margin-bottom:1.875rem;}"])
          , ce = i.a.div.withConfig({
            displayName: "product-detail__EnquiryText",
            componentId: "sc-16x6wf2-8"
        })(["font-size:1.5rem;margin-bottom:3.75rem;@media only screen and (max-width:767px){font-size:1.75rem;}"])
          , de = (t.default = function(e) {
            var t = e.data
              , n = e.pageContext;
            return a.a.createElement(o.a, null, a.a.createElement(ee.a, {
                title: t.prismicL4Product.data.meta_title.text,
                description: t.prismicL4Product.data.meta_description.text
            }), a.a.createElement(l.a, {
                className: "sticky hidden-xs"
            }), a.a.createElement(s.a, {
                className: "sticky visible-xs"
            }), a.a.createElement(te, {
                className: "row page-content"
            }, a.a.createElement(ie, {
                className: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
            }, a.a.createElement("div", {
                className: "row"
            }, a.a.createElement("div", {
                className: "col-lg-offset-1 col-lg-10 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10 col-xs-offset-1 col-xs-10"
            }, a.a.createElement(se, null, "PRODUCT DETAIL")))), t.products_from_same_category && a.a.createElement("div", {
                className: "col-xs-12 hidden-lg hidden-md hidden-sm"
            }, a.a.createElement(Z, {
                withoutArrows: !0,
                l3Uid: n.l3_uid,
                selectedProductUid: t.prismicL4Product.uid,
                products: t.products_from_same_category.edges
            })), a.a.createElement("div", {
                className: "col-lg-offset-1 col-lg-11 col-md-offset-1 col-md-11 col-sm-offset-1 col-sm-11 col-xs-12"
            }, a.a.createElement(g, {
                data: t.prismicL4Product.data
            })), t.products_from_same_category && a.a.createElement("div", {
                className: "col-lg-12 col-sm-12 col-xs-12 hidden-xs"
            }, a.a.createElement(Z, {
                l3Uid: n.l3_uid,
                selectedProductUid: t.prismicL4Product.uid,
                products: t.products_from_same_category.edges
            })), a.a.createElement("div", {
                className: "col-lg-offset-1 col-lg-10 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10 col-xs-offset-1 col-xs-10"
            }, a.a.createElement(ae, {
                className: "row"
            }, a.a.createElement("div", {
                className: "col-lg-8 col-md-8 col-sm-8 col-xs-12"
            }, a.a.createElement(ne, null, t.prismicL4Product.data.product_name.text), a.a.createElement(re, null, t.prismicL4Product.data.description_2.text))), t.prismicL4Product.data.rotation_images_count && a.a.createElement("div", {
                className: "row"
            }, a.a.createElement(oe, {
                className: "hidden-lg hidden-md hidden-sm col-lg-offset-1 col-lg-5 col-md-offset-1 col-md-5 col-sm-offset-1 col-sm-5 col-xs-offset-2 col-xs-8"
            }, a.a.createElement(I, {
                uid: t.prismicL4Product.uid,
                imagesCount: t.prismicL4Product.data.rotation_images_count,
                autoPlayTime: t.prismicL4Product.data.rotation_play_time
            }))), a.a.createElement("div", {
                className: "row"
            }, a.a.createElement("div", {
                className: "col-lg-5 col-md-5 col-sm-5 col-xs-12"
            }, a.a.createElement(x, {
                specs: t.prismicL4Product.data.specifications
            })), t.prismicL4Product.data.rotation_images_count && a.a.createElement(oe, {
                className: "hidden-xs col-lg-offset-1 col-lg-5 col-md-offset-1 col-md-5 col-sm-offset-1 col-sm-5 col-xs-12"
            }, a.a.createElement(I, {
                uid: t.prismicL4Product.uid,
                imagesCount: t.prismicL4Product.data.rotation_images_count,
                autoPlayTime: t.prismicL4Product.data.rotation_play_time
            }))), a.a.createElement("div", {
                className: "row"
            }, a.a.createElement("div", {
                className: "col-lg-9 col-md-9 col-sm-9 col-xs-10"
            }, a.a.createElement(le, null, "Need help choosing the right packaging solution?"), a.a.createElement(ce, null, "Tell us your requirements and we'll take care of the rest.", (t.prismicL4Product.data.minimum_order_quantity.text || t.prismicL4Product.data.l3_tag.document[0].data.minimum_order_quantity.text) && a.a.createElement("span", null, "Minimum Order Quantity - ", t.prismicL4Product.data.minimum_order_quantity.text || t.prismicL4Product.data.l3_tag.document[0].data.minimum_order_quantity.text, " ", t.prismicL4Product.data.product_name.text))), a.a.createElement("div", {
                className: "col-lg-8 col-md-8 col-sm-8 col-xs-12"
            }, a.a.createElement($.a, null)))), t.other_products && a.a.createElement("div", {
                className: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
            }, a.a.createElement(R, {
                l2Name: t.prismicL4Product.data.l2_tag.document[0].data.l2_product_name.text,
                products: t.other_products.edges
            }))))
        }
        ,
        "1452222961")
    },
    180: function(e, t, n) {
        "use strict";
        var r = n(0)
          , a = n.n(r)
          , i = n(179)
          , o = n.n(i);
        t.a = function(e) {
            var t = e.title
              , n = e.description;
            e.keywords;
            return a.a.createElement(o.a, null, a.a.createElement("title", null, t), a.a.createElement("meta", {
                name: "description",
                content: n
            }))
        }
    },
    182: function(e, t, n) {
        e.exports = n.p + "static/enquiry-man-9f4b5da733e58a7b5c7159f28efba72f.png"
    },
    183: function(e, t, n) {
        "use strict";
        var r = n(7)
          , a = n.n(r)
          , i = n(0)
          , o = n.n(i)
          , s = n(159)
          , l = n(182)
          , c = n.n(l)
          , d = n(194)
          , u = n(195)
          , m = s.a.div.withConfig({
            displayName: "page-enquiry__StyledPageEnquiry",
            componentId: "sc-13uj1qz-0"
        })(["position:relative;box-shadow:0 0.9375rem 2.5rem 0.625rem rgba(0,0,0,0.15);padding:5rem;padding-right:7.5rem;@media only screen and (max-width:767px){box-shadow:none;padding:0;}"])
          , f = s.a.img.withConfig({
            displayName: "page-enquiry__EnquiryManImage",
            componentId: "sc-13uj1qz-1"
        })(["position:absolute;bottom:0;right:0;transform:translateX(15%);width:20.125rem;@media only screen and (max-width:767px){display:none;}"])
          , p = function(e) {
            function t(t) {
                var n;
                return (n = e.call(this, t) || this).handleSubmit = function(e) {
                    fetch("https://bizongo.in/api/prospects", {
                        method: "POST",
                        mode: "cors",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json; charset=utf-8",
                            "Secret-Token": "8d982c7d594576d617b32e1a2ac79a960ed63c40352bf24a2098cdb3049ce10714bf6a6e5e79344b33f80dec440ea8d46a2c36c1284367655712d9bf8ec79133"
                        },
                        body: JSON.stringify(e)
                    }).then(function(e) {
                        n.setState({
                            submittedSuccess: !0
                        })
                    })
                }
                ,
                n.state = {
                    submittedSuccess: !1
                },
                n
            }
            return a()(t, e),
            t.prototype.render = function() {
                return o.a.createElement(m, null, this.state.submittedSuccess ? o.a.createElement(u.a, null) : o.a.createElement(d.a, {
                    onSubmit: this.handleSubmit
                }), !this.state.submittedSuccess && o.a.createElement(f, {
                    src: c.a
                }))
            }
            ,
            t
        }(o.a.Component);
        t.a = p
    },
    291: function(e, t, n) {
        e.exports = function(e) {
            var t = {};
            function n(r) {
                if (t[r])
                    return t[r].exports;
                var a = t[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return e[r].call(a.exports, a, a.exports, n),
                a.l = !0,
                a.exports
            }
            return n.m = e,
            n.c = t,
            n.d = function(e, t, r) {
                n.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: r
                })
            }
            ,
            n.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }
            ,
            n.t = function(e, t) {
                if (1 & t && (e = n(e)),
                8 & t)
                    return e;
                if (4 & t && "object" == typeof e && e && e.__esModule)
                    return e;
                var r = Object.create(null);
                if (n.r(r),
                Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }),
                2 & t && "string" != typeof e)
                    for (var a in e)
                        n.d(r, a, function(t) {
                            return e[t]
                        }
                        .bind(null, a));
                return r
            }
            ,
            n.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                }
                : function() {
                    return e
                }
                ;
                return n.d(t, "a", t),
                t
            }
            ,
            n.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            ,
            n.p = "",
            n(n.s = 0)
        }([function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(1));
            t.default = r.default
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.propTypes = t.ScrollMenu = t.InnerWrapper = t.innerStyle = t.ArrowWrapper = void 0;
            var r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
              , a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                        "value"in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n),
                    r && e(t, r),
                    t
                }
            }()
              , i = c(n(2))
              , o = c(n(3))
              , s = n(6)
              , l = n(7);
            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            function d(e, t) {
                var n = {};
                for (var r in e)
                    t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }
            function u(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function m(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }
            function f(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            var p = t.ArrowWrapper = function(e) {
                var t = e.className
                  , n = e.onClick
                  , r = e.children
                  , a = e.isDisabled
                  , o = t + " " + (e.hideArrows && a ? t + "--disabled" : "");
                return i.default.createElement("div", {
                    className: o,
                    onClick: n
                }, r)
            }
            ;
            p.propTypes = {
                className: o.default.string,
                onClick: o.default.func.isRequired,
                children: o.default.object.isRequired,
                isDisabled: o.default.bool,
                hideArrows: o.default.bool
            };
            var g = t.innerStyle = function(e) {
                var t = e.translate
                  , n = e.dragging
                  , r = e.mounted
                  , a = e.transition;
                return {
                    width: "9900px",
                    transform: "translate3d(" + t + "px, 0px, 0px)",
                    transition: "transform " + (n || !r ? "0" : a) + "s",
                    whiteSpace: "nowrap",
                    textAlign: "left",
                    userSelect: "none"
                }
            }
              , h = t.InnerWrapper = function(e) {
                function t(e) {
                    u(this, t);
                    var n = m(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.setRef = function(e, t) {
                        var r = n.props.setRef;
                        n.ref[e] = t,
                        r(n.ref)
                    }
                    ,
                    n.ref = {},
                    n
                }
                return f(t, i.default.Component),
                a(t, [{
                    key: "render",
                    value: function() {
                        var e = this
                          , t = this.props
                          , n = t.data
                          , r = t.translate
                          , a = t.dragging
                          , o = t.mounted
                          , s = t.transition
                          , l = t.selected
                          , c = t.innerWrapperClass
                          , d = t.itemClass
                          , u = t.onClick
                          , m = t.itemClassActive
                          , f = function(e, t) {
                            return String(e) === String(t)
                        }
                          , p = n.map(function(e) {
                            return i.default.cloneElement(e, {
                                selected: f(e.key, l)
                            })
                        });
                        return i.default.createElement("div", {
                            className: c,
                            style: g({
                                translate: r,
                                dragging: a,
                                mounted: o,
                                transition: s
                            }),
                            ref: function(t) {
                                return e.setRef("menuInner", t)
                            }
                        }, p.map(function(t, n) {
                            return i.default.createElement("div", {
                                ref: function(t) {
                                    return e.setRef("menuitem-" + n, t)
                                },
                                className: d + " " + (f(t.key, l) ? m : ""),
                                key: "menuItem-" + t.key,
                                style: {
                                    display: "inline-block"
                                },
                                onClick: function() {
                                    return u(t.key)
                                }
                            }, t)
                        }))
                    }
                }]),
                t
            }();
            h.propTypes = {
                data: o.default.arrayOf(o.default.object).isRequired,
                setRef: o.default.func.isRequired,
                onClick: o.default.func.isRequired,
                translate: o.default.number,
                dragging: o.default.bool,
                mounted: o.default.bool,
                transition: o.default.number,
                selected: o.default.oneOfType([o.default.string, o.default.number]),
                innerWrapperClass: o.default.string,
                itemClass: o.default.string,
                itemClassActive: o.default.string
            },
            h.defaultProps = {
                data: [],
                translate: l.defaultSetting.translate,
                dragging: !0,
                mounted: !1,
                transition: l.defaultSetting.transition,
                selected: l.defaultSetting.selected
            };
            var v = t.ScrollMenu = function(e) {
                function t(e) {
                    u(this, t);
                    var n = m(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.state = {
                        dragging: !1,
                        xPoint: l.defaultSetting.xPoint,
                        translate: n.props.translate,
                        startDragTranslate: null,
                        xDraggedDistance: null,
                        leftArrowVisible: !0,
                        rightArrowVisible: !0
                    },
                    n.setRef = function(e) {
                        n.ref = e
                    }
                    ,
                    n.setWrapperRef = function(e) {
                        n.ref.menuWrapper = e
                    }
                    ,
                    n.checkSingleArrowVisibility = function(e) {
                        var t = e.translate
                          , r = void 0 === t ? n.state.translate : t
                          , a = n.props.hideSingleArrow
                          , i = !0
                          , o = !0
                          , s = n.menuItems;
                        if (a && s) {
                            var l = n.getVisibleItems({
                                offset: r
                            });
                            i = !l.includes(s[0]),
                            o = !l.includes(s.slice(-1)[0])
                        }
                        return {
                            leftArrowVisible: i,
                            rightArrowVisible: o
                        }
                    }
                    ,
                    n.setSingleArrowVisibility = function() {
                        var e = n.state
                          , t = e.leftArrowVisible
                          , r = e.rightArrowVisible
                          , a = n.checkSingleArrowVisibility({})
                          , i = a.leftArrowVisible
                          , o = a.rightArrowVisible;
                        t === i && r === o || n.setState({
                            leftArrowVisible: i,
                            rightArrowVisible: o
                        })
                    }
                    ,
                    n.onLoad = function() {
                        n.mounted = !0,
                        n.setInitial()
                    }
                    ,
                    n.setInitial = function() {
                        var e = n.props
                          , t = e.selected
                          , r = e.data
                          , a = n.state.translate;
                        if (!r || !r.length)
                            return !1;
                        var i = n.getMenuItems(r.length)
                          , o = r.find(function(e) {
                            return e.key === t
                        })
                          , s = {
                            menuItems: i,
                            selected: o && -1 !== o ? o.key : l.defaultSetting.selected
                        };
                        for (var c in s)
                            n[c] = s[c];
                        var u = n.updateWidth({
                            items: i,
                            offset: 0,
                            translate: 0
                        })
                          , m = (u.translate,
                        d(u, ["translate"]));
                        for (var f in m)
                            n[f] = m[f];
                        var p = n.getAlignItemsOffset()
                          , g = "number" == typeof p && +p.toFixed(3)
                          , h = n.checkSingleArrowVisibility({
                            translate: g
                        })
                          , v = h.leftArrowVisible
                          , y = h.rightArrowVisible;
                        "number" == typeof g && a !== g && n.setState({
                            translate: g,
                            leftArrowVisible: v,
                            rightArrowVisible: y
                        }, function() {
                            return n.onUpdate({
                                translate: g
                            })
                        })
                    }
                    ,
                    n.getMenuItems = function(e) {
                        return Object.entries(n.ref).filter(function(e) {
                            return e[0].includes("menuitem")
                        }).slice(0, e).filter(Boolean)
                    }
                    ,
                    n.getItemsWidth = function(e) {
                        var t = e.items
                          , r = void 0 === t ? n.menuItems : t;
                        return (r && r.items || r).map(function(e) {
                            return e[1]
                        }).filter(Boolean).reduce(function(e, t) {
                            return e + (0,
                            s.getClientRect)(t).width
                        }, 0)
                    }
                    ,
                    n.getWidth = function(e) {
                        var t = e.items
                          , r = window && window.innerWidth
                          , a = (0,
                        s.getClientRect)(n.ref.menuWrapper);
                        return {
                            wWidth: r,
                            menuPos: a.x,
                            menuWidth: a.width,
                            allItemsWidth: n.getItemsWidth({
                                items: t
                            })
                        }
                    }
                    ,
                    n.updateWidth = function(e) {
                        var t = e.items
                          , a = void 0 === t ? n.menuItems : t
                          , i = d(e, ["items"])
                          , o = n.props.alignCenter
                          , s = n.getWidth({
                            items: a
                        });
                        return r({}, s, o ? n.getPagesOffsets(r({
                            items: a
                        }, s, i)) : {})
                    }
                    ,
                    n.getPagesOffsets = function(e) {
                        var t = e.items
                          , r = void 0 === t ? n.menuItems : t
                          , a = e.allItemsWidth
                          , i = void 0 === a ? n.allItemsWidth : a
                          , o = e.wWidth
                          , s = void 0 === o ? n.wWidth : o
                          , l = e.menuPos
                          , c = void 0 === l ? n.menuPos : l
                          , d = e.menuWidth
                          , u = void 0 === d ? n.menuWidth : d
                          , m = e.translate
                          , f = void 0 === m ? n.state.translate : m
                          , p = e.offset
                          , g = void 0 === p ? n.state.translate : p
                          , h = n.props.alignCenter
                          , v = n.getVisibleItems({
                            offset: g,
                            items: r,
                            wWidth: s,
                            menuPos: c,
                            menuWidth: u
                        })
                          , y = +n.getCenterOffset({
                            items: v,
                            menuWidth: u
                        }).toFixed(3)
                          , w = n.getVisibleItems({
                            items: r,
                            offset: -i + u,
                            wWidth: s,
                            menuPos: c,
                            menuWidth: u
                        })
                          , b = +n.getCenterOffset({
                            items: w,
                            menuWidth: u
                        }).toFixed(3)
                          , x = h ? y : f;
                        return n.firstPageOffset = y,
                        n.lastPageOffset = b,
                        {
                            firstPageOffset: y,
                            lastPageOffset: b,
                            translate: +x.toFixed(3)
                        }
                    }
                    ,
                    n.onItemClick = function(e) {
                        var t = n.props
                          , r = t.clickWhenDrag
                          , a = t.onSelect;
                        if (n.state.xDraggedDistance > 5 && !r)
                            return !1;
                        n.selected = e,
                        a && a(e)
                    }
                    ,
                    n.getVisibleItems = function(e) {
                        var t = e.items
                          , r = void 0 === t ? n.menuItems : t
                          , a = e.wWidth
                          , i = void 0 === a ? n.wWidth : a
                          , o = e.menuPos
                          , l = void 0 === o ? n.menuPos : o
                          , c = e.menuWidth
                          , d = void 0 === c ? n.menuWidth : c
                          , u = e.offset
                          , m = void 0 === u ? n.state.translate : u
                          , f = e.translate
                          , p = void 0 === f ? n.state.translate : f;
                        return (r.items || r).filter(function(e) {
                            var t = (0,
                            s.getClientRect)(e[1]).width
                              , a = n.getItemInd(r, e)
                              , o = n.getOffsetToItem({
                                itemId: a,
                                menuItems: r,
                                translate: p
                            });
                            return n.elemVisible({
                                x: o,
                                elWidth: t,
                                wWidth: i,
                                menuPos: l,
                                menuWidth: d,
                                offset: m
                            })
                        })
                    }
                    ,
                    n.elemVisible = function(e) {
                        var t = e.x
                          , r = e.offset
                          , a = void 0 === r ? 0 : r
                          , i = e.elWidth
                          , o = e.wWidth
                          , s = void 0 === o ? n.wWidth : o
                          , l = e.menuPos
                          , c = void 0 === l ? n.menuPos : l
                          , d = e.menuWidth
                          , u = void 0 === d ? n.menuWidth : d
                          , m = t + a;
                        return m >= c - 1 && m + i <= s - (s - (c + u)) + 1
                    }
                    ,
                    n.getItemInd = function(e, t) {
                        return e && t ? e.findIndex(function(e) {
                            return e[0] === t[0]
                        }) : 0
                    }
                    ,
                    n.getNextItemInd = function(e, t) {
                        var r = n.menuItems;
                        if (e) {
                            if (!t.length)
                                return 0
                        } else if (!t.length)
                            return r.length;
                        var a = e ? n.getItemInd(r, t[0]) - 1 : n.getItemInd(r, t.slice(-1)[0]) + 1;
                        return a < 0 ? 0 : a
                    }
                    ,
                    n.getOffsetToItem = function(e) {
                        var t = e.itemId
                          , r = e.menuItems
                          , a = void 0 === r ? n.menuItems : r
                          , i = e.translate
                          , o = void 0 === i ? n.state.translate : i;
                        if (!a.length)
                            return 0;
                        var l = t >= a.length ? a.length - 1 : t;
                        return +(0,
                        s.getClientRect)(a[l][1]).x - o
                    }
                    ,
                    n.getScrollRightOffset = function(e, t) {
                        var r = n.props.alignCenter
                          , a = n.menuPos
                          , i = n.lastPageOffset
                          , o = n.getNextItem(e && e.slice(-1)[0] ? e.slice(-1)[0][0] : t.slice(-1)[0][0])
                          , s = t.findIndex(function(e) {
                            return e[0] === o[0]
                        })
                          , l = n.getOffsetToItem({
                            itemId: s,
                            menuItems: t
                        }) - a
                          , c = n.getVisibleItems({
                            items: t,
                            offset: -l
                        });
                        return c.includes(t.slice(-1)[0]) ? r ? l + i : l : r ? l - n.getCenterOffset({
                            items: c
                        }) : l
                    }
                    ,
                    n.getScrollLeftOffset = function(e, t) {
                        var r = n.props.alignCenter
                          , a = n.menuPos
                          , i = n.menuWidth
                          , o = n.firstPageOffset
                          , s = n.getPrevItem(e && e[0] ? e[0][0] : t[0][0])
                          , l = t.findIndex(function(e) {
                            return e[0] === s[0]
                        })
                          , c = n.getOffsetToItem({
                            itemId: l,
                            menuItems: t
                        }) - a - (i - n.getItemsWidth({
                            items: [s]
                        }))
                          , d = n.getVisibleItems({
                            items: t,
                            offset: -c
                        });
                        return d.includes(t[0]) ? r ? -o : 0 : r ? c + n.getCenterOffset({
                            items: d
                        }) : c
                    }
                    ,
                    n.getAlignItemsOffset = function() {
                        var e = n.menuWidth
                          , t = n.allItemsWidth
                          , r = n.menuItems
                          , a = n.firstPageOffset
                          , i = n.lastPageOffset
                          , o = n.props.alignCenter
                          , s = n.state.translate;
                        if (t < e)
                            return n.handleArrowClick(!o);
                        var c = n.getVisibleItems({
                            offset: 0
                        }) || []
                          , d = c.includes(r[0])
                          , u = c.includes(r.slice(-1)[0]);
                        if (!d && !u)
                            return +s.toFixed(3);
                        if (d)
                            return +(o ? a : l.defaultSetting.translate).toFixed(3);
                        var m = t - e;
                        return +(o ? -m - i : -m).toFixed(3)
                    }
                    ,
                    n.getNextItem = function(e) {
                        var t = n.menuItems;
                        return t[t.findIndex(function(t) {
                            return t[0] === e
                        }) + 1] || t.slice(-1)[0]
                    }
                    ,
                    n.getPrevItem = function(e) {
                        var t = n.menuItems;
                        return t[t.findIndex(function(t) {
                            return t[0] === e
                        }) - 1] || t[0]
                    }
                    ,
                    n.getOffset = function(e) {
                        var t = n.menuItems
                          , r = n.getVisibleItems({
                            items: t
                        });
                        return e ? n.getScrollLeftOffset(r, t) : n.getScrollRightOffset(r, t)
                    }
                    ,
                    n.getCenterOffset = function(e) {
                        var t = e.items
                          , r = void 0 === t ? n.menuItems : t
                          , a = e.menuWidth
                          , i = void 0 === a ? n.menuWidth : a;
                        return r.length ? +((i - n.getItemsWidth({
                            items: r
                        })) / 2).toFixed(3) : 0
                    }
                    ,
                    n.handleWheel = function(e) {
                        if (!n.props.wheel)
                            return !1;
                        e.deltaY < 0 ? n.handleArrowClick() : n.handleArrowClick(!1)
                    }
                    ,
                    n.handleArrowClickRight = function() {
                        n.handleArrowClick(!1)
                    }
                    ,
                    n.handleArrowClick = function() {
                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
                          , t = n.props.alignCenter
                          , r = n.allItemsWidth
                          , a = n.menuWidth
                          , i = n.firstPageOffset
                          , o = n.lastPageOffset
                          , s = n.state.translate;
                        if (!t && !e && a > r)
                            return !1;
                        var c = -n.getOffset(e);
                        if (e && n.itBeforeStart(c) && (c = t ? i : l.defaultSetting.translate),
                        !e && n.itAfterEnd(c)) {
                            var d = r - a;
                            c = t ? -d - o : -d
                        }
                        var u = +c.toFixed(3);
                        n.setState({
                            translate: u,
                            xPoint: l.defaultSetting.xPoint,
                            startDragTranslate: null,
                            xDraggedDistance: null
                        }, function() {
                            s !== u && n.onUpdate({})
                        })
                    }
                    ,
                    n.itBeforeStart = function(e) {
                        var t = n.props.alignCenter
                          , r = n.firstPageOffset;
                        return t ? e > r : e > l.defaultSetting.translate
                    }
                    ,
                    n.itAfterEnd = function(e) {
                        var t = n.props.alignCenter
                          , r = n.menuWidth
                          , a = n.allItemsWidth
                          , i = n.lastPageOffset;
                        return t ? e < l.defaultSetting.translate && Math.abs(e) > a - r + i : e < l.defaultSetting.translate && Math.abs(e) > a - r
                    }
                    ,
                    n.getPoint = function(e) {
                        return e.touches && e.touches.length ? e.touches[0].clientX : e.clientX
                    }
                    ,
                    n.handleDragStart = function(e) {
                        if (e && 2 === e.buttons)
                            return !1;
                        if (!n.props.dragging)
                            return !1;
                        var t = n.state.translate;
                        n.setState({
                            dragging: !0,
                            xPoint: 0,
                            startDragTranslate: t,
                            xDraggedDistance: 0
                        })
                    }
                    ,
                    n.handleDrag = function(e) {
                        var t = n.props.dragging
                          , r = n.state
                          , a = r.translate
                          , i = r.dragging
                          , o = r.xPoint
                          , s = r.xDraggedDistance;
                        if (!t || !i)
                            return !1;
                        var c = n.getPoint(e)
                          , d = o === l.defaultSetting.xPoint ? l.defaultSetting.xPoint : o - c
                          , u = a - d;
                        n.itBeforeStart(u) && (u -= Math.abs(d) / 2),
                        n.itAfterEnd(u) && (u += Math.abs(d) / 2);
                        var m = +u.toFixed(3);
                        n.setState({
                            xPoint: c,
                            translate: m,
                            xDraggedDistance: s + Math.abs(d)
                        })
                    }
                    ,
                    n.handleDragStop = function(e) {
                        var t = n.allItemsWidth
                          , r = n.menuWidth
                          , a = n.firstPageOffset
                          , i = n.lastPageOffset
                          , o = n.startDragTranslate
                          , s = n.state
                          , c = s.dragging
                          , d = s.xPoint
                          , u = void 0 === d ? n.getPoint(e) : d
                          , m = s.translate
                          , f = n.props
                          , p = f.dragging
                          , g = f.alignCenter;
                        if (!p || !c)
                            return !1;
                        var h = m;
                        if (n.itBeforeStart(m) && (h = g ? a : 0,
                        u = l.defaultSetting.xPoint),
                        n.itAfterEnd(m)) {
                            var v = t - r;
                            h = g ? -v - i : -v,
                            u = l.defaultSetting.xPoint
                        }
                        !g && r >= t && (h = 0,
                        u = l.defaultSetting.xPoint),
                        n.setState({
                            dragging: !1,
                            xPoint: u,
                            translate: +h.toFixed(3)
                        }, function() {
                            o !== h && n.onUpdate({})
                        })
                    }
                    ,
                    n.isArrowsVisible = function() {
                        var e = n.allItemsWidth
                          , t = n.menuWidth
                          , r = n.props.hideArrows;
                        return !Boolean(r && e <= t)
                    }
                    ,
                    n.onUpdate = function(e) {
                        var t = e.translate
                          , r = void 0 === t ? n.state.translate : t
                          , a = n.props.onUpdate;
                        a && a({
                            translate: r
                        })
                    }
                    ,
                    n.ref = {},
                    n.mounted = !1,
                    n.needUpdate = !1,
                    n.allItemsWidth = 0,
                    n.menuPos = 0,
                    n.menuWidth = 0,
                    n.wWidth = 0,
                    n.firstPageOffset = 0,
                    n.lastPageOffset = 0,
                    n
                }
                return f(t, i.default.Component),
                a(t, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        this.setInitial(),
                        window.requestAnimationFrame = window.requestAnimationFrame || function() {}
                        ;
                        var t = (0,
                        s.testPassiveEventSupport)()
                          , n = !t || {
                            passive: !0,
                            capture: !0
                        }
                          , r = !!t && {
                            passive: !0,
                            capture: !1
                        };
                        window.addEventListener("load", this.onLoad, r),
                        window.addEventListener("resize", this.setInitial, r),
                        document.addEventListener("mousemove", this.handleDrag, n),
                        document.addEventListener("mouseup", this.handleDragStop, n),
                        setTimeout(function() {
                            return e.onLoad()
                        }, 0)
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(e, t) {
                        var n = this.state
                          , r = n.translate
                          , a = n.dragging
                          , i = n.leftArrowVisible
                          , o = n.rightArrowVisible
                          , l = t.translate
                          , c = t.dragging
                          , d = t.leftArrowVisible
                          , u = t.rightArrowVisible
                          , m = this.props
                          , f = m.translate
                          , p = m.selected
                          , g = e.translate
                          , h = e.selected
                          , v = (0,
                        s.notUndefOrNull)(g) && f !== g
                          , y = (0,
                        s.notUndefOrNull)(h) && p !== h
                          , w = v || y
                          , b = i !== d
                          , x = o !== u
                          , _ = !1;
                        return this.props.data === e.data && this.props.data.length === e.data.length || (_ = !0,
                        this.needUpdate = !0),
                        w && (y && (this.selected = h),
                        isNaN(g) || !v || _ || this.setState({
                            translate: +g.toFixed(3)
                        })),
                        _ || r !== l || a !== c || w || b || x
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        this.needUpdate && (this.needUpdate = !1,
                        this.onLoad()),
                        this.props.hideSingleArrow && window.requestAnimationFrame(this.setSingleArrowVisibility())
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        window.removeEventListener("resize", this.setInitial),
                        document.removeEventListener("mousemove", this.handleDrag),
                        document.removeEventListener("mouseup", this.handleDragStop)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props
                          , t = e.arrowClass
                          , n = e.arrowLeft
                          , a = e.arrowRight
                          , o = e.data
                          , s = e.innerWrapperClass
                          , c = e.itemClass
                          , d = e.itemClassActive
                          , u = e.hideArrows
                          , m = e.menuStyle
                          , f = e.menuClass
                          , g = e.transition
                          , v = e.wrapperClass
                          , y = e.wrapperStyle
                          , w = this.state
                          , b = w.translate
                          , x = w.dragging
                          , _ = w.leftArrowVisible
                          , P = w.rightArrowVisible
                          , C = this.selected
                          , E = this.mounted;
                        if (!o || !o.length)
                            return null;
                        var I = !E || this.isArrowsVisible()
                          , S = r({}, l.defaultMenuStyle, m)
                          , N = r({}, l.defaultWrapperStyle, y);
                        return i.default.createElement("div", {
                            className: f,
                            style: S,
                            onWheel: this.handleWheel
                        }, n && i.default.createElement(p, {
                            className: t,
                            isDisabled: !I || !_,
                            hideArrows: u,
                            onClick: this.handleArrowClick
                        }, n), i.default.createElement("div", {
                            className: v,
                            style: N,
                            ref: this.setWrapperRef,
                            onMouseDown: this.handleDragStart,
                            onTouchStart: this.handleDragStart,
                            onTouchEnd: this.handleDragStop,
                            onMouseMove: this.handleDrag,
                            onTouchMove: this.handleDrag
                        }, i.default.createElement(h, {
                            data: o,
                            translate: b,
                            dragging: x,
                            mounted: E,
                            transition: g,
                            selected: C,
                            setRef: this.setRef,
                            onClick: this.onItemClick,
                            innerWrapperClass: s,
                            itemClass: c,
                            itemClassActive: d
                        })), a && i.default.createElement(p, {
                            className: t,
                            isDisabled: !I || !P,
                            hideArrows: u,
                            onClick: this.handleArrowClickRight
                        }, a))
                    }
                }]),
                t
            }()
              , y = t.propTypes = {
                alignCenter: o.default.bool,
                arrowClass: o.default.string,
                arrowLeft: o.default.object,
                arrowRight: o.default.object,
                clickWhenDrag: o.default.bool,
                data: o.default.array.isRequired,
                dragging: o.default.bool,
                innerWrapperClass: o.default.string,
                itemClass: o.default.string,
                itemClassActive: o.default.string,
                hideArrows: o.default.bool,
                hideSingleArrow: o.default.bool,
                onSelect: o.default.func,
                onClick: o.default.func,
                selected: o.default.oneOfType([o.default.number, o.default.string]),
                translate: o.default.number,
                transition: o.default.number,
                onUpdate: o.default.func,
                menuClass: o.default.string,
                menuStyle: o.default.object,
                wrapperStyle: o.default.object,
                wheel: o.default.bool,
                wrapperClass: o.default.string
            };
            v.defaultProps = l.defaultProps,
            v.propTypes = y,
            t.default = v
        }
        , function(e, t) {
            e.exports = n(0)
        }
        , function(e, t, n) {
            e.exports = n(4)()
        }
        , function(e, t, n) {
            "use strict";
            var r = n(5);
            function a() {}
            e.exports = function() {
                function e(e, t, n, a, i, o) {
                    if (o !== r) {
                        var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw s.name = "Invariant Violation",
                        s
                    }
                }
                function t() {
                    return e
                }
                e.isRequired = e;
                var n = {
                    array: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t
                };
                return n.checkPropTypes = a,
                n.PropTypes = n,
                n
            }
        }
        , function(e, t, n) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.notUndefOrNull = function(e) {
                return null != e
            }
            ,
            t.getClientRect = function(e) {
                var t = e.getBoundingClientRect()
                  , n = t.x
                  , r = t.left;
                return {
                    width: t.width,
                    x: isNaN(n) ? +r : +n
                }
            }
            ,
            t.testPassiveEventSupport = function() {
                var e = !1;
                try {
                    var t = {
                        get passive() {
                            return e = !0,
                            !1
                        }
                    };
                    window.addEventListener("testPassiveEventSupport", t, t),
                    window.removeEventListener("testPassiveEventSupport", t, t)
                } catch (t) {
                    e = !1
                }
                return e
            }
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = {
                alignCenter: !0,
                arrowClass: "scroll-menu-arrow",
                clickWhenDrag: !1,
                dragging: !0,
                data: [],
                firstPageOffset: 0,
                innerWrapperClass: "menu-wrapper--inner",
                itemClass: "menu-item-wrapper",
                itemClassActive: "active",
                hideArrows: !1,
                hideSingleArrow: !1,
                lastPageOffset: 0,
                menuItems: [],
                menuPos: 0,
                menuWidth: 0,
                menuClass: "horizontal-menu",
                selected: 0,
                translate: 0,
                transition: .4,
                wrapperClass: "menu-wrapper",
                wheel: !0,
                xPoint: 0
            }
              , a = {
                alignCenter: r.alignCenter,
                arrowClass: r.arrowClass,
                innerWrapperClass: r.innerWrapperClass,
                itemClass: r.itemClass,
                itemClassActive: r.itemClassActive,
                hideArrows: r.hideArrows,
                hideSingleArrow: r.hideSingleArrow,
                clickWhenDrag: r.clickWhenDrag,
                data: r.data,
                dragging: r.dragging,
                selected: r.selected,
                transition: r.transition,
                translate: r.translate,
                menuClass: r.menuClass,
                wheel: r.wheel,
                wrapperClass: r.wrapperClass
            };
            t.defaultSetting = r,
            t.defaultProps = a,
            t.defaultMenuStyle = {
                display: "flex",
                alignItems: "center",
                userSelect: "none"
            },
            t.defaultWrapperStyle = {
                overflow: "hidden",
                userSelect: "none"
            }
        }
        ])
    },
    396: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }()
          , a = n(0)
          , i = s(a)
          , o = s(n(4));
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function l(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        var c = function(e) {
            function t() {
                var e, n, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var a = arguments.length, i = Array(a), o = 0; o < a; o++)
                    i[o] = arguments[o];
                return n = r = l(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))),
                r.hovered = !1,
                r.state = {
                    current: 0
                },
                r.hover = function(e) {
                    r.hovered = !0
                }
                ,
                r.unhover = function(e) {
                    r.hovered = !1
                }
                ,
                r.wheelMove = function(e) {
                    e.preventDefault();
                    var t = e.deltaY
                      , n = r.props.reverse
                      , a = r.state.current
                      , i = 0 === t ? 0 : t / Math.abs(t);
                    r.stop(),
                    r.setCurrentFrame(n ? a - i : a + i)
                }
                ,
                r.touchStart = function(e) {
                    e.preventDefault(),
                    r.pointerPosition = r.calculatePointerPosition(e),
                    r.startFrame = r.state.current,
                    r.stop()
                }
                ,
                r.touchMove = function(e) {
                    var t = "number" != typeof r.pointerPosition;
                    if (e.preventDefault(),
                    !t) {
                        var n = r.props
                          , a = n.vertical
                          , i = n.children
                          , o = n.reverse
                          , s = e.currentTarget
                          , l = s.offsetWidth
                          , c = s.offsetHeight
                          , d = a ? c : l
                          , u = r.calculatePointerPosition(e) - r.pointerPosition
                          , m = Math.floor(u / d * i.length);
                        r.setCurrentFrame(o ? r.startFrame - m : r.startFrame + m)
                    }
                }
                ,
                r.touchEnd = function(e) {
                    e.preventDefault(),
                    r.pointerPosition = null,
                    r.startFrame = null
                }
                ,
                r.pressKey = function(e) {
                    if (!e.target.tagName.match("TEXTAREA|INPUT|SELECT")) {
                        var t = r.state.current
                          , n = r.props
                          , a = n.vertical
                          , i = n.reverse
                          , o = a ? 38 : 37
                          , s = a ? 40 : 39;
                        r.stop(),
                        e.keyCode === o ? r.setCurrentFrame(i ? t + 1 : t - 1) : e.keyCode === s && r.setCurrentFrame(i ? t - 1 : t + 1)
                    }
                }
                ,
                l(r, n)
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, a.Component),
            r(t, [{
                key: "componentDidMount",
                value: function() {
                    document.addEventListener("mouseup", this.touchEnd, !1),
                    this.props.autoPlay && this.nextFrame()
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(e) {
                    var t = e.autoPlay;
                    t !== this.props.autoPlay && (t ? this.nextFrame() : this.stop())
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    document.removeEventListener("mouseup", this.touchEnd, !1),
                    this.stop()
                }
            }, {
                key: "setCurrentFrame",
                value: function(e) {
                    var t = this.props
                      , n = t.cycle
                      , r = t.children
                      , a = t.onChange
                      , i = r.length
                      , o = e;
                    o < 0 && (o = n ? o + i : 0),
                    o > i - 1 && (o = n ? o - i : i - 1),
                    o !== this.state.current ? (this.setState({
                        current: o
                    }),
                    a(o)) : this.props.autoPlay && this.stop()
                }
            }, {
                key: "nextFrame",
                value: function() {
                    var e = this
                      , t = this.state.current
                      , n = this.props
                      , r = n.reverse
                      , a = n.autoPlay
                      , i = n.pauseOnHover
                      , o = !0 === a ? 75 : a;
                    this.hovered && i || this.setCurrentFrame(r ? t - 1 : t + 1),
                    this.nextTimeout = setTimeout(function() {
                        e.nextFrame()
                    }, o)
                }
            }, {
                key: "stop",
                value: function() {
                    clearTimeout(this.nextTimeout)
                }
            }, {
                key: "calculatePointerPosition",
                value: function(e) {
                    var t = 0 === e.type.indexOf("touch") ? e.changedTouches[0] : e
                      , n = t.clientX
                      , r = t.clientY
                      , a = e.currentTarget
                      , i = a.offsetTop
                      , o = a.offsetLeft;
                    return this.props.vertical ? r - i : n - o
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.state.current
                      , t = this.props
                      , n = t.children
                      , r = t.className
                      , o = t.tabIndex
                      , s = t.scroll
                      , l = t.pauseOnHover;
                    return i.default.createElement("div", {
                        tabIndex: o,
                        onTouchStart: this.touchStart,
                        onTouchMove: this.touchMove,
                        onTouchEnd: this.touchEnd,
                        onMouseDown: this.touchStart,
                        onMouseMove: this.touchMove,
                        onWheel: s ? this.wheelMove : null,
                        onMouseEnter: l ? this.hover : null,
                        onMouseLeave: l ? this.unhover : null,
                        onKeyDown: o >= 0 ? this.pressKey : null,
                        className: r,
                        style: {
                            position: "relative"
                        }
                    }, a.Children.map(n, function(t, n) {
                        return (0,
                        a.cloneElement)(t, {
                            style: {
                                width: "100%",
                                display: e === n ? "block" : "none"
                            }
                        })
                    }))
                }
            }]),
            t
        }();
        c.propTypes = {
            className: o.default.string,
            cycle: o.default.bool,
            scroll: o.default.bool,
            vertical: o.default.bool,
            reverse: o.default.bool,
            autoPlay: o.default.oneOfType([o.default.bool, o.default.number]),
            onChange: o.default.func,
            children: o.default.arrayOf(o.default.element).isRequired,
            tabIndex: o.default.oneOfType([o.default.string, o.default.number]),
            pauseOnHover: o.default.bool
        },
        c.defaultProps = {
            cycle: !1,
            scroll: !0,
            vertical: !1,
            tabIndex: 0,
            autoPlay: !1,
            pauseOnHover: !1,
            onChange: function() {}
        },
        t.default = c
    }
}]);
//# sourceMappingURL=component---src-templates-product-detail-js-85fa6a2bef89334e359f.js.map
