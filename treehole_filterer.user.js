// ==UserScript==
// @name         树洞关键词筛选
// @namespace    https://greasyfork.org/users/471937
// @version      0.1
// @description  糊掉树洞里所有不含关键词的条目
// @author       油油
// @match        pkuhelper.pku.edu.cn/hole/
// @grant        none
// ==/UserScript==

(function () {
    var KEYWORD = 'PF'

    setInterval(bind_page, 500)

    function bind_page() {
        var targets = document.querySelectorAll('.flow-chunk > div:not([blurred="true"])')
        Array.prototype.forEach.call(targets, bind_blurring)
    }

    function bind_blurring(div) {
        var text_pool = div.querySelector('.flow-item pre'),
            text = text_pool && text_pool.innerText.toUpperCase()
        if (typeof text == 'string') {
            div.setAttribute('blurred', 'true')
            if (text.indexOf(KEYWORD) < 0) {
                Object.assign(div.style, {
                    transition: '1s all',
                    filter: 'blur(5px)',
                    opacity: 0,
                })
                div.addEventListener('mouseenter', () => {
                    Object.assign(div.style, {
                        filter: '',
                        opacity: 1,
                    })
                })
                div.addEventListener('mouseleave', () => {
                    Object.assign(div.style, {
                        filter: 'blur(5px)',
                        opacity: 0,
                    })
                })
            }
        }
    }
})();