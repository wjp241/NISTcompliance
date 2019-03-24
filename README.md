# Background

[NIST](https://www.nist.gov/) recently updates their [Digital Identity Guidelines](https://pages.nist.gov/800-63-3/) in June 2017.
The new guidelines specify general rules for handling the security of user supplied passwords.
Previously passwords were suggested to have certain composition rules (special characters, numbers, etc), hints and expiration times.
Those have gone out the window and the new suggestions are as follows:

Passwords MUST

1. Have an 8 character minimum
2. AT LEAST 64 character maximum
2. Allow all ASCII characters and spaces (unicode optional)
4. Not be a common password

# Project

We want a simple webpage to check if a password is NIST compliant for anyone to use. The only way for users to trust that we are not harvesting their passwords is to have the validator run completely in the browser. We will define NIST compliant as having an 8 character minimum, 64 character maximum, contains only ASCII characters, and not in the common password collection supplied by the local server at http://localhost:4000/passwords.

The user supplied passwords should never leave the window in any form (even encrypted). The collection of common passwords will be loaded into memory by http://localhost:4000/passwords when you boot the local server. Use this repo as boilerplate. Add whatever code/files are needed under ./app but DO NOT edit server. Clone this repo as boilerplate for your solution.

## Requirements

The goal of this challenge is to implement NIST compliance tester:

* Validate a input password is between 8-64 characters, is only ASCII characters, and not in the common passwords collection.
* Users should be able to check passwords multiple times and the page should remain responsive.
* DO NOT export the user supplied password in any form.
* DO NOT edit the server, but you can add developer tools if it's helpful. Adding hot-reloading for dev work for example.
* DO NOT make HTTP requests for data othan than from the supplied server
* Whenever any of the above is NOT met, the span tag provided as the first child of body must display the exact following message: "Password should be original combination of ASCii characters greater than 8 and less than 64 in length"
* DO NOT change the span tag.
* Try to implement this as much as possible on your own without looking at the answer folder.

Feel free to use any tooling/libraries you'd like, but focus on meeting the functional requirments. This project will not be evaluated on the aesthetics or UI outside of meeting the requirments.

## Running the local server

### System Requirments

* node v8.10.0+
* npm v5.0.0+

### Run

```
npm install
node server.js // bootup your server ( node server2.js // will bootup answer server )
npm test //test to check the requirements

```


Server will be available at http://localhost:4000/ and the ./app directory will be mounted to '/'.
