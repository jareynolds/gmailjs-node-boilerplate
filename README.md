
# GmailJS Node riskscorer

This repo contains sample code to get a WebExtensions-based
browser-extension using
the [gmail.js](https://github.com/KartikTalwar/gmail.js/) library.

## Usage

### First get the code and build it:

````
# get code
git clone https://github.com/cosoute/gmail-domaintools-riskscorer/

# get deps and build
cd gmail-domaintools-riskscorer
npm install

# ensure you're running latest version!
npm update

# build the project
npm run build
````

### Now ensure the code loads and works:

* Load the folder containing the extension (or `manifest.json`) in
your chrome browser.  You do this by going to "Preferences" -> Extensions -> "Load Unpacked"
The extension should show up in your extensions pane as "Gmail API Extension 1.0".  Notice in the details of the extension that domaintools.com has been whitelisted since the extension will need to make API calls to domaintools to get the score.

### Install the CORS extension as well
Install Moesif Orign & CORS Changer so that your browser doesn't get upset about making calls to domaintools.  
Upon sucessful installation of the moesif extension, Moesif will display a small icon on the top right corner of your browser.  Make sure you select the toggle until it is "ON".  This means htat you have turned on Cross-Object-Domain-Requests - which is needed in order for this extension to work - due to the API calls to domaintools again.


### Open gmail in a new tab
* Load `mail.google.com` in your browser and open the developer console.


Cheers!
