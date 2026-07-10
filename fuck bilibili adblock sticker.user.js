// ==UserScript==
// @name         fuck bilibili adblock sticker
// @namespace    https://github.com/YukkuriC
// @version      2024-07-15
// @description  李旎我日你血妈
// @author       YukkuriC
// @match        https://www.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// ==/UserScript==

;(function () {
    'use strict'
    let target = [...document.head.getElementsByTagName('style')]
        .map(x => x.innerText)
        .find(x => x.indexOf('AdBlock') >= 0)
    if (target) {
        let fuckers = new Set([...target.matchAll(/(?<=\.)\w+/g)].map(x => x[0]))
        console.log(fuckers)

        function fuck() {
            for (let f of fuckers)
                for (let ff of document.getElementsByClassName(f)) {
                    let tt = ff.parentNode
                    if (tt.parentNode.classList.contains('feed-card')) tt = tt.parentNode
                    tt.remove()
                }
            for (let ff of document.getElementsByClassName('bili-live-card')) {
                ff.remove()
            }
        }

        let cont = document.querySelector('.container')
        cont.style = 'grid-template-columns: repeat(6, 1fr)!important;'
        let hh = 0

        function autoFuck(force = false) {
            if (!force) {
                let newH = cont.offsetHeight
                if (hh == newH) return
                hh = newH
            }
            fuck()

            let cnt = 0
            let rep = setInterval(() => {
                console.log('fuck')
                fuck()
                if (cnt++ > 4) {
                    clearInterval(rep)
                }
                tryAddFucker()
            }, 500)
        }
        setInterval(autoFuck, 5000)
        autoFuck()

        let added = false
        function tryAddFucker() {
            if (added) return
            let tt = document.querySelector('button.roll-btn')
            console.log(tt)
            if (!tt) return
            tt.addEventListener('click', () => autoFuck(true))
            added = true
        }
    }
})()

/**
附：adblock灭杀b站广告推广规则集
可能包含旧版内容

bilibili.com###reportFirst2
bilibili.com###reportFirst3
bilibili.com#?#.bili-grid:has(div[data-report="high_energy.content"])
bilibili.com##.adblock-tips
bilibili.com##.trending
bilibili.com#?#.bili-grid>.eva-extension-area:has(span:has-text(推广))
bilibili.com#?#.bili-grid>.eva-extension-area:has(span:has-text(赛事))
bilibili.com##.pop-live-small-mode.part-undefined
bilibili.com##.ad-report
bilibili.com##.battle-area
bilibili.com##.video-page-special-card-small
bilibili.com##.floor-single-card
bilibili.com##.desktop-download-tip
bilibili.com##.recommended-swipe.grid-anchor
bilibili.com##.pop-live-small-mode.part-1
bilibili.com##.recommended-swipe
bilibili.com##.vcd
bilibili.com##.video-page-game-card-small
bilibili.com##.pop-live-small-mode
bilibili.com##.video-page-operator-card-small
bilibili.com##.eva-extension-area
bilibili.com##.live-card-list
bilibili.com##.ad-floor-cover
bilibili.com##.extension-tips-v2
bilibili.com#@#.is-rcmd.enable-no-interest
bilibili.com##.vip-wrap
 */