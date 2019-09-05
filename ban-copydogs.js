// ==UserScript==
// @name         Ban copydogs
// @namespace    https://lyc.xuming.studio/
// @version      0.1
// @description  Ban bubuko mamicode dongcoder and other assholes.
// @author       TooYoungTooSimp
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
    "use strict";
    let fucksites = [
        "bubuko",
        "mamicode",
        "dongcoder",
        "bbsmax",
        "codetd",
        "manongjc",
        "kfbiji",
        "codeleading",
        "易学教程",
        "itxueyuan",
        "wandouip",
        "itdaan",
        "serengeseba",
        "icode9",
        "copyfuture",
        "morecoder",
        "okcode",
        "ishenping"
    ];
    if (window.location.href.includes("bing.com")) {
        setInterval(() =>
            [...document.querySelectorAll("#b_results > li > div > div")]
                .filter(item => fucksites.reduce((r, x) => r || item.innerText.includes(x), false))
                .forEach(item => item.parentElement.parentElement.remove())
            , 100);
    }
    if (window.location.href.includes("baidu.com")) {
        setInterval(() =>
            [...document.querySelectorAll("div.f13 > a.c-showurl")]
                .filter(item => fucksites.reduce((r, x) => r || item.innerText.includes(x), false))
                .forEach(item => item.parentElement.parentElement.remove())
            , 100);
    }
    if (window.location.href.includes("google.com")) {
        setInterval(() =>
            [...document.querySelectorAll("#rso > div > div > div > div > div > div.r > a > div > cite")]
                .filter(item => fucksites.reduce((r, x) => r || item.innerText.includes(x), false))
                .forEach(item => item.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove())
            , 100);
    }
})();
