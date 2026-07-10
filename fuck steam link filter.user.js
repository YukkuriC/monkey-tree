// ==UserScript==
// @name         fuck steam link filter
// @namespace    https://github.com/YukkuriC
// @version      2024-07-14
// @description  fuck steam link filter
// @author       YukkuriC
// @match        https://steamcommunity.com/linkfilter/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=steamcommunity.com
// @grant        none
// ==/UserScript==

;(function () {
    'use strict'

    let args = new Map(
        location.search
            .substr(1)
            .split('&')
            .map(x => x.split('=')),
    )
    let link = decodeURIComponent(args.get('u'))
    location = link
})()
