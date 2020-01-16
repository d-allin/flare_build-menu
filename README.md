# flare_build-menu
Mini TOC that lists sub-headings in a single Madcap Flare topic

Original JavaScript code by Chirp Internet: www.chirp.com.au
Edited 2010-07-21 by MattG (https://forums.madcapsoftware.com/viewtopic.php?f=9&t=11199&p=63842#p63842)
Edited 2020-01-16 by me to scan the DOM for specific tags by declaring var headings using document.querySelectorAll("h2, h3, h4, h5, h6") rather than document.getElementsByTagName(heading_tag).

buildmenu.js must be in the same folder as snippet file (buildmenu.flsnp)

This edit produces a mini TOC by placing the snippet in a topic. The mini TOC lists and links to all h1, h2, h3, h4, h5, and h6 headers. I left h1 out as that is typically my title in a topic. If you use a different tag for your topic titles and want h1 included, simply add it to document.querySelectorAll.
