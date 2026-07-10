// ==UserScript==
// @name         fuck adblock sticker
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
