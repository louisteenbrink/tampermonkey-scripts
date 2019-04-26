# Tampermonkey scripts

This repository holds custom user scripts for [Tampermonkey](https://tampermonkey.net/) that we use at Spendesk.

## What's that?

Tampermonkey is a browser extension that allows you to inject custom JavaScript into webpages to customise/enhance their behaviour. For ex., we have some scripts that add extra warnings on GitHub's website when merging Pull Requests.

## How to use

Get the Tampermonkey extension for your browser:
- [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo/)
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)

Then, in the extension's options page (on Chrome this is accessible by right-clicking on the icon of the extension in the toolbar), click on the __+__ button and paste the script you want to use. You can do that multiple times to add different scripts.

## Contributing

Create a new custom user script directly in the Tampermonkey options, paste an existing one in the editor and start hacking. You can check if it works correctly by visiting a page where your script is supposed to run and reload that page every time you save a change.

Once you're satisfied, simply copy your code and paste it in a new file in the `scripts/` directory of this repository, then create a Pull Request on GitHub 🤓
