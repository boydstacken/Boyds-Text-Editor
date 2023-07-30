# Boyds-Text-Editor
Progressive Web Applications - Week 19 Challenge

# Description

The motivation to for this application was to create a text editor that runs in the browser, basically a single-page application that meets the PWA threshold. Compiling of data persistence techniques with redunancy even if it is not supported by the browswer and ran offline. We can create notes or code snippets with or without an internet connection so we can retrieve them for later use.  

## Table of Contents

-[Installation](#installation)
-[Usage](#usage)
-[Credits](#credits)
-[License](#license)
-[Questions](#questions)

## Installation

The existing application and implementation methods will allow us to get and store data to an IndexedDB database. Using a package called `idb` which is a wrapper around the IndexedDB API that showcases methods used for storing and retreiving data. 

Do a npm install in the terminal to get all the npm packages. Get all of the webpack plugins, manifest, your service worker and other important packages to ensure the aplpication runs successfully.


## Usage

Here's a link to the deployed application on herkou: https://drive.google.com/file/d/1_-dHBcFrTgt44eECPXNEXmGxyMkS52xy/view

Once you do an npm install in the terminal to get all the npm packages. Get all of the webpack plugins, manifest, your service worker and other important packages to ensure the aplpication runs successfully.

Perform a `npm run start` from the root directory (in this case the Develop folder), then it should start up and serve the client. You'll see your JS files have been bundled using webpack after runn in th the text editor. Then running your webpack plugins, you'll see a generated HTML file, manifest file and a service worker. Everything should function properly in the browser without errors appearing in the console of Dev tools.

**Note it's important whenever you make changes in your code to run the command `npm run build` then `npm run start` and refresh your browser so everything is up to date. Use an incognito browswer to reduce friction and increase efficiency with testing this application.

In the application tab of Dev tools you'll notice the the IndexedDB should auto create a database storage and any content in the text editor should saved within the IndexedDB even if you click of the DOM window. Even with reopening the editor, you'll notice the content is retrieved from IndexedDB. 

In the upper right corner of your browser, there is a download icont/functionality, click that and the application will be downloaded as an icon on your desktop! 

When you load your web app, a registered service worker using workbox should appear and if you register a service worker the static assets are pre chached from loading along with other pages and static assets.

Deploying your application to heroku when finished should provide proper build scripts for a webpack application.


## Credits

Boyd Stacken
Github Profile: https://github.com/boydstacken

## License

n/a

## Questions

If you have any questions about this Text Editor, please contact boydstacken@icloud.com with any futher inquiries.

## Deployed Link
Link to deployed application on herkou: 
