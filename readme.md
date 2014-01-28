This is an experimental Chrome extension to highlight text and send it to the user's Google Drive.

***

Part of the purpose behind this is schools cannot use highlighter extensions which store student data on third-party servers. Working within a school's GAFE account is an exception because the school controls that data.

***

**File Structure**

This extension uses a `manifest.json` file for Chrome-related data and permissions.

The `background.js` has information for the browser icon and action when clicked. Data is sent to the `contentscript.js` file which is injected on the current active tab. The information is passed back to the background file.

The final version of the app with pass the highlighted information to a new Google Doc created in a `Highlight` folder in the user's drive.