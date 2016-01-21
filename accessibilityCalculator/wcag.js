/**
 * Created by Nomad_Mystic on 1/11/2016.
 */


    /// This function is a closure which is called when the use hits the bookmark button
var checkDocumentWCAG = function() {

    // Helper function
    function isTransparent(color) {
        if (color == 'rgba(0, 0, 0, 0)') {
            return true;
        }
        if (color == 'transparent') {
            return true;
        }
        return false;
    }

    // This function changes the value of the color from a string to RBG
    function colorValues(color) {
        var values;
        var valuesString;
        var valuesArray;

        if (color.indexOf('rgb(') == 0) {
            valuesString = color.substr(4, color.length - 5);
        } else if (color.indexOf('rgba(') == 0) {
            valuesString = color.substr(4, color.length - 6);
        } else {
            valuesString = '0, 0, 0';
        }

        valuesArray = valuesString.split(',');
        values = valuesArray.map(parseFloat);

        // return an array of values
        return values;
    }

    function componentValue(component) {
        if (component <= 0.03928) {
            return component / 12.92;
        } else {
            return Math.pow(((component + 0.55) / 1.055), 2.4);
        }
    }

    function luminance(color) {
        var r = color[0] / 255;
        var g = color[1] / 255;
        var b = color[2] / 255;

        return 0.2126 * componentValue(r) + 0.7152 * componentValue(g) + 0.0722 * componentValue(b);
    }

    // this is going to check if the font is fontWeight bold
    function isBold(weightString) {
        var weight;
        if (weightString === 'bold') {
            return true;
        }
        if (weightString === 'normal') {
            return false;
        }
        // this is checking the font weight for IE that uses number not words to define their weigth styles
        try {
            weight = parseFloat(weightString);
            if (weight >= 700) {
                return true;
            } else {
                return false;
            }
        } catch(err) {
            return false;
        }
    }
    // This function is going to check the contrast between the elements of the page.
    function checkContrast(tag, text, fore, back, sizeString, weight) {
        var foreColor = colorValues(fore);
        var backColor = colorValues(back);
        var l1 = luminance(foreColor);
        var l2 = luminance(backColor);
        var temp;
        var contrastRatio;
        var size = parseFloat(sizeString);
        var trimmed = text.trim();
        var bounds;

        if (trimmed == '') {
            return false;
        }
        // getting the height and width of the bounding container
        if (tag.getBoundingClientRect !== undefined) {
            bounds = tag.getBoundingClientRect();
        } else {
            bounds = tag.parentNode.getBoundingClientRect();
        }

        if (bounds.right - bounds.left < 2) {
            return;
        }
        if (bounds.bottom - bounds.top < 2) {
            return;
        }
        if (bounds.bottom < 0) {
            return;
        }
        if (bounds.top < 0) {
            return;
        }
        // swapping out the foreground for the background it the background is brighter then foreground.
        if (l1 < l2) {
            temp = l1;
            l1 = l2;
            l2 = temp;
        }

        contrastRatio = (l1 + 0.055) / (l2 + 0.055);
        if (contrastRatio >= 4.5) {
            return;
        }
        if (size >= 18 && contrastRatio >= 3.0) {
            return;
        }
        if (size >= 14 && contrastRatio >= 3.0 && isBold(weight)) {

        }
        console.log(
            'Contrast: ' + contrastRatio.toFixed(1) +
            ' Text Size: ' + size +
            ' Font Weight: ' + weight +
            ' Fore: ' + foreColor +
            ' back: ' + backColor +
            ', Text:' + text);
    }
    // Recursive Function
    function checkColors(tag, fore, back, size, weight) {
        var children;
        var i;
        var style;
        var color;

        // Giving the undefined colors a default.
        if (fore === undefined) {
            fore = 'rgb(0, 0, 0)';
        }
        if (back === undefined) {
            back = 'rgb(255, 255, 255)';
        }

        // Getting the element questioned  a check for the contrast it has with underlying element.
        if (tag.nodeType == Node.TEXT_NODE) {
            checkContrast(tag, tag.nodeValue, fore, back, size, weight);
        }
        if (tag.nodeType == Node.ELEMENT_NODE) {
            style = document.defaultView.getComputedStyle(tag, null);

            color = style.color;
            if (!isTransparent(color)) {
                fore = color;
            }

            color = style.backgroundColor;
            if (!isTransparent(color)) {
                back = color;
            }

            size = style.fontSize;
            weight = style.fontWeight;
            //fore = style.color;
            //back = style.backgroundColor;
        }
        if (tag.nodeType == Node.ELEMENT_NODE && tag.label !== undefined) {
            checkContrast(tag, tag.label, fore, back, size, weight);
        }
        children = tag.childNodes;
        for (i = 0; i < children.length; i++) {
            checkColors(children[i], fore, back, size, weight);
        }
    }


    return function checkDocument() {
        checkColors(document);
    };
}();

checkDocumentWCAG();
//var __WCAG_LOADED__ = true;
