/**
 * Created by Nomad_Mystic on 1/11/2016.
 */


var checkDocumentWCAG = function() {

    // Helper function
    function inTransparent(color) {
        if (color == 'rgba(0, 0, 0, 0)')
            return true;
        if (color == 'transparent')
            return true;

        return false;
    }
    // Recursive Function
    function checkColors(tag, fore, back) {
        var children;
        var i;
        var style;
        var color;

        if (tag.nodeType == Node.TEXT_NODE) {
            console.log('Fore: ' + fore + ' back: ' + back + ', Text:' + tag.nodeValue);
        }
        if (tag.nodeType == Node.ELEMENT_NODE && tag.label !== undefined) {
            console.log(tag.label);
        }
        if (tag.nodeType == Node.ELEMENT_NODE) {
            style = document.defaultView.getComputedStyle(tag);

            color = style.color;
            if (!inTransparent(color)) {
                fore = color;
            }
            color = style.backgroundColor;
            if (!inTransparent(color)) {
                back = color;
            }

            fore = style.color;
            back = style.backgroundColor;
        }

        children = tag.childNodes;
        for (i = 0; i < children.length; i++) {
            checkColors(children[i], fore, back);
        }
    }


    return function checkDocument() {
        checkColors(document);
        //console.log('Hello World');

    };

}();

checkDocumentWCAG();
//var __WCAG_LOADED__ = true;
