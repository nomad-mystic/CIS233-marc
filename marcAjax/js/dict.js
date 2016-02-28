/**
 * Created by endof on 2/11/2016.
 */
var lookupDistDefinition = function() {

    var partsOfSpeech = {
        n: 'noun',
        v: 'verb',
        a: 'adjective',
        r: 'adverb',
        s: 'adjective satellite'
    };
    var displayDictionaryText = function(response, selection) {
        console.log(response);
        var definitions = JSON.parse(response);
        var html ='';
        var i;
        var j;
        var samples;
        var div = document.createElement('div');
        var contents = document.createElement('div');
        var body = document.getElementsByTagName('body')[0];
        var selectionRect = selection.getRangeAt(0).getClientRects()[0];
        var scrollTop = (document.documentElement && document.documentElement.scrollTop)
                || body.scrollTop;
        var scrollLeft = (document.documentElement && document.documentElement.scrollLeft)
                || body.scrollLeft;

        // Adding event listeners to the body for closing the tooltip box
        var bodyListener = function() {
            body.removeChild(div);
            body.removeEventListener('click', bodyListener);
        };

        body.addEventListener('click', bodyListener);
        div.addEventListener('click', function(evt) {
            evt.stopPropagation();
        });

        div.className = ' dict_bubble';
        contents.className = 'dict_content';
        for (i = 0; i < definitions.length; i++) {
            if (i == 0 || (definitions[i].lemma != definitions[i - 1].lemma) || (definitions[i].pos != definitions[i - 1].pos)) {
                if (i != 0) {
                    html += '</ol>';
                }
                html += '<br>' + definitions[i].lemma + '</b> (' + partsOfSpeech[definitions[i].pos] + '):<ol class="dict_list">';
            }
            html += '<li class="dict_list_li">' + definitions[i].definition + '</li>';
            if (definitions[i].sampleset) {
                samples = definitions[i].sampleset.split('|');
                html += '<ul class="dict_samp_list">';
                for (j = 0; j < samples.length; j++) {
                    html += '<li class="dict_samp_li"><i>' + samples[j] + '</i></li>';
                }
                html += '</ul>';
            }
        }
        html += '</ol>';
        contents.innerHTML = html;
        div.appendChild(contents);
        div.style.top = selection.bottom + 20 + scrollTop + 'px';
        div.style.left = ((selection.left + selectionRect.right) / 2) + 67 + scrollLeft + 'px';
        body.appendChild(div);
    };

    var fetchWords = function(words, selection) {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {

            if (request.readyState === request.DONE && request.status === 200) {
                displayDictionaryText(request.responseText, selection);
            }
        };
        request.open('GET', 'http://localhost:8080/CIS233Marc/marcAjax/word_lookup.php?word=' + words, true);
        request.send();
    };


    return function() {
        var selection = window.getSelection();
        var words;

        if (selection.rangeCount == 0) {
            console.log('Nothing Selected');
        } else {
            words = selection.toString().trim();
            if (words == '') {
                console.log('Nothing Selected');
            } else {
                //console.log("Selection '" + words + "'");
                fetchWords(words, selection);
            }
        }
    };
}();

lookupDistDefinition();