URL Rewrite (Regex) for Chrome
======================

An extension that lets you redirect Chrome for specific URLs.

This is a hacky, totally alpha modification of sjmulder's original extension. It works with javascript regexes INSTEAD of prefix-based string matches. Redirects that worked in the original DO NOT work here.


Usage
-----

To install from sources:

 1. Go to chrome://extensions/.
 2. Click Load unpacked extension.
 3. Select the `extension` directory.

To configure:

 1. Go to chrome://extensions/ and click the Options link.
 2. In Source URL, enter a regex that matches the URLs that should be rewritten, e.g. `https://twitter\.com/(?!i/)(.+)`
 3. In Destination URL, enter the URL that should replace the Source URL, with any groups indicated by *X, where X is a 1-based index into the matched groups list e.g. `https://twitter.com/*1/with_replies/`
 4. Now, any link that begins with Source URL will have that replaced with Destination URL. In the example above, `https://twitter.com/jseakle` would be rewritten to `https://twitter.com/jseakle/with_replies`

Notes:
 
 * Make sure to include the protocol, like `http://`.
 * There is no prefix match, just wildcard support.
 * To save you from yourself, this appends #NOLOOP to the end of all urls. This fixes loops, but probably breaks literally any website that uses anchors for anything. This is the thing I will fix if I ever touch this again. Sorry! Pull requests welcome!


Licence
-------

I, the copyright holder of this work, hereby release it into the public domain. This applies worldwide.

In case this is not legally possible: I grant anyone the right to use this work for any purpose, without any conditions, unless such conditions are required by law.


Author
------

By Sijmen Mulder (ik@sjmulder.nl).
