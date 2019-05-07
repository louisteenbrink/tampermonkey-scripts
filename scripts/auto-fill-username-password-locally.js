// ==UserScript==
// @name         Autofill for Spendesk login
// @namespace    https://spendesk.com
// @version      0.1
// @description  Autofill username and password field for spendesk login
// @author       Gabriel
// @match        *://*.spendesk.com/auth/login*
// @match        *://*.spendesk.spx/auth/login*
// @grant        none
// ==/UserScript==

// 1. Change name
// 2. Change password
// 3. It will autocomplete "name+ao@spendesk.com" on spendesk.spx, "name+ao+staging@spendesk.com" on staging, etc.
// 3b. This has no point with prod db forks

(function() {
    'use strict';

    const name = 'gabriel';
    const defaultMatch = 'ao';
    const password = 'Hello123';

    const findReactFromDOMNode = function(dom) {
        let key = Object.keys(dom).find(key=>key.startsWith("__reactInternalInstance$"));
        let internalInstance = dom[key];
        if (internalInstance == null) return null;

        if (internalInstance.return) { // react 16+
            return internalInstance._debugOwner
                ? internalInstance._debugOwner.stateNode
            : internalInstance.return.stateNode;
        } else { // react <16
            return internalInstance._currentElement._owner._instance;
        }
    }

    const mailInput = document.querySelector('input[placeholder="Email"]');
    const form = document.querySelector('.LoginPasswordForm');

    let automatch = '';
    if (location.host === 'staging.spendesk.com') {
        automatch = 'staging';
    } else if (location.host === 'dev.spendesk.com') {
        automatch = 'dev'
    } else {
        automatch = defaultMatch;
    }

    findReactFromDOMNode(form).setState({
        email: `${name}+${automatch}@spendesk.com`,
        password
    });

    mailInput.setSelectionRange(name.length + 1, name.length + 1 + automatch.length);

    mailInput.focus();
})();
