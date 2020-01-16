// Original JavaScript code by Chirp Internet: www.chirp.com.au
// Edited 2010-07-21 by MattG (https://forums.madcapsoftware.com/viewtopic.php?f=9&t=11199&p=63842#p63842)
// Edited 2020-01-16 by Daymian Allin (dallin@squirrelsystems.com)

function buildMenu(target_id, heading_tag)
{
    // abort if using MSIE (Mac) or DHTML functions not present
    if(navigator.userAgent.indexOf("Mac_PowerPC") != -1) return;
    if(!document.createElement) return;

    // the element identified by target_id will contain the menu
    var target = document.getElementById(target_id);

// replaced with document.querySelectorAll as heading_tag was not detecting below h3 (dallin 2020-01-16)
    // scan the DOM for tags matching heading_tag (eg. 'H2')
   	// var headings = document.getElementsByTagName(heading_tag);
	
	// scan the DOM for specific tags (less h1, which should always be a topic title) (dallin 2020-01-16) (stackoverflow.com/a/7065574)
	var headings = document.querySelectorAll("h2, h3, h4, h5, h6")

    if(headings.length > 1) {
        // found two or more headings - start building ordered list
        var menuList = document.createElement('UL');

        // for each heading on the page
        for(var i=0; i < headings.length; i++) {


            // use exising id or add new id to heading to use as anchor
            var anchorName = "section_" + i;
            if(headings[i].id == '') {
            headings[i].setAttribute('id', anchorName);
            } else {
            anchorName = headings[i].id;
            }

            // Extract text from heading.
   
         // MODIFICATION
            // In the original Chirp Internet code, this used firstChild instead of lastChild. However, Flare sometime starts headings with a 		bookmark, so using lastChild means that the ignores the bookmark at the start of the heading.
   
            var headingText = headings[i].lastChild.nodeValue

            // prefix heading with number, removed because well, I don't want it
            // headings[i].lastChild.nodeValue = (i+1) + ". " + headingText;

            // create link to heading
            var menuLink = document.createElement('A');
            menuLink.setAttribute('href', '#' + anchorName);
            menuLink.appendChild(document.createTextNode(headingText));

            // create list item to contain link, set its class and append it to the menu.
            var listItem = document.createElement('LI');
            listItem.setAttribute("class", "table1");
            listItem.appendChild(menuLink);

            // append list item to list
            menuList.appendChild(listItem);
        }

        // remove contents of target element
        while(target.hasChildNodes()) target.removeChild(target.firstChild);

        // insert list into target element
        target.appendChild(menuList);
        } else {
        // no headings found - remove target element from page
        target.parentNode.removeChild(target);
    }
}