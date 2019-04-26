// ==UserScript==
// @name         Warn on github if hotfix not on master
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Spendesk
// @match        *github.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const baseElement = document.querySelector('.commit-ref.css-truncate.user-select-contain.expandable.base-ref');
    const headElement = document.querySelector('.commit-ref.css-truncate.user-select-contain.expandable.head-ref');

    const isHeadHotfix = headElement.innerText.includes('fix');
    const isBaseMaster = baseElement.innerText === 'master';

    if (isHeadHotfix && !isBaseMaster) {
        const mergeMessageElement = document.querySelector('.merge-message');
        mergeMessageElement.style.background = '#ef9a9a';
    }
})();
