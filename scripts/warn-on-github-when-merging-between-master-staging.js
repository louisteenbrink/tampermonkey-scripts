// ==UserScript==
// @name         Warn on github when merging between staging <> master
// @namespace    http://tampermonkey.net/
// @updateURL    https://raw.githubusercontent.com/Spendesk/tampermonkey-scripts/master/scripts/warn-on-github-when-merging-between-master-staging.js
// @downloadURL  https://raw.githubusercontent.com/Spendesk/tampermonkey-scripts/master/scripts/warn-on-github-when-merging-between-master-staging.js
// @version      0.2
// @description  try to take over the world!
// @author       Spendesk
// @match        *github.com/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  const baseElement = document.querySelector('.commit-ref.css-truncate.user-select-contain.expandable.base-ref');
  const headElement = document.querySelector('.commit-ref.css-truncate.user-select-contain.expandable.head-ref');

  const isStagingToMaster = baseElement.innerText === 'master' && headElement.innerText === 'staging';
  const isMasterToStaging = baseElement.innerText === 'staging' && headElement.innerText === 'master';

  if (isStagingToMaster || isMasterToStaging) {
      const mergeMessageElement = document.querySelector('.merge-message');
      mergeMessageElement.style.background = '#ef9a9a';
      const warningEl = document.createElement('span')
      const warningText = document.createTextNode('Use only the "Create a merge commit" option');
      warningEl.appendChild(warningText);
      warningEl.style.fontWeight = 'bold';
      warningEl.style.color = '#b90a19';
      mergeMessageElement.append(warningEl);
  }
})();
