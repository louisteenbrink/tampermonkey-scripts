// ==UserScript==
// @name         Warn on github if hotfix not on master
// @namespace    http://tampermonkey.net/
// @updateURL    https://raw.githubusercontent.com/Spendesk/tampermonkey-scripts/master/scripts/warn-on-github-if-hotfix-not-on-master.js
// @downloadURL  https://raw.githubusercontent.com/Spendesk/tampermonkey-scripts/master/scripts/warn-on-github-if-hotfix-not-on-master.js
// @version      0.3
// @description  try to take over the world!
// @author       Spendesk
// @match        *github.com/*
// @grant        none
// @icon         https://www.spendesk.com/favicon-32x32.png
// ==/UserScript==

(function() {
    'use strict';
    const baseElement = document.querySelector('.commit-ref.css-truncate.user-select-contain.expandable.base-ref');
    const headElement = document.querySelector('.commit-ref.css-truncate.user-select-contain.expandable.head-ref');

    const isOnPullRequest = baseElement && headElement;
    if (!isOnPullRequest) return;

    const isHeadHotfix = headElement.innerText.includes('fix');
    const isBaseMaster = baseElement.innerText === 'master';

    if (isHeadHotfix && !isBaseMaster) {
        const mergeMessageElement = document.querySelector('.merge-message');
        mergeMessageElement.style.background = '#ef9a9a';
    }
})();
