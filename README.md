# Tampermonkey scripts

This repository holds custom user scripts for [Tampermonkey](https://tampermonkey.net/) that we use at Spendesk.

## What's that?

Tampermonkey is a browser extension that allows you to inject custom JavaScript into webpages to customise/enhance their behaviour. For ex., we have some scripts that add extra warnings on GitHub's website when merging Pull Requests.

## How to use

Get the Tampermonkey extension for your browser:
- [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo/)
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)

Then click the extensions's options page on the topbar of your browser:

![Screenshot](https://raw.githubusercontent.com/Spendesk/tampermonkey-scripts/master/screenshots/tampermonkey-in-topbar.png)

Click on the ➕ button to add a new script

![Screenshot](https://raw.githubusercontent.com/Spendesk/tampermonkey-scripts/master/screenshots/tampermonkey-add-new-script.png)

And paste the script you want to use, then hit ` + S` to save it. You can do that multiple times to add different scripts.

## Contributing

Create a new custom user script directly in the Tampermonkey options, paste an existing one in the editor and start hacking. You can check if it works correctly by visiting a page where your script is supposed to run and reload that page every time you save a change.

Once you're satisfied, simply copy your code and paste it in a new file in the `scripts/` directory of this repository and add an example screenshot of what the script does in the `screenshots/` folder (if applicable), then create a Pull Request on GitHub 🤓

### How to make the script auto-update?

That's pretty simple. Your script needs `// @updateURL` and `// @downloadURL` headers. The values will both be the url of the raw script, being `https://raw.githubusercontent.com/Spendesk/tampermonkey-scripts/master/scripts/name-of-your-script.js`

You need to be careful that you update the `// @version` each time you update your script, or it won't be auto-updated.

## License

The content of this repository is licensed under MIT.

Copyright (c) 2019 Spendesk
