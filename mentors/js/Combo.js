/**
 * Created by endof on 2/19/2016.
 */
function Combo(combo, callback) {

    var selectionBox = null;
    var itemList;
    var itemCount;
    var maxItems = 6;
    var itemHeight = 16;
    var previousSearch = '';

    function selectItem(selectedItem) {
        callback(selectedItem.text());
        selectionBox.remove();
        selectionBox = null;
    }

    function createSelection() {
        selectionBox = $('<div class="combo_list"></div>');
        // Style for the selectionBox
        selectionBox.css({
            position: 'absolute',
            left: combo.offset().left + 1,
            top: combo.offset().top + combo.outerHeight() + 1,
            width: combo.outerWidth() - 2,
            overflowY: 'auto',
            height: 96
        });
        $('body').append(selectionBox);
    } // End createSelection

    function addSelections(items) {
        var shownItems;
        itemCount = 0;
        selectionBox.empty();
        items.forEach(function(item) {
            var itemDiv = $('<div class="combo_item_unselected">');
            itemDiv.text(item);
            selectionBox.append(itemDiv);
            itemCount++;
            itemDiv.on('click', function() {
                selectItem(itemDiv);
            });
        });
        shownItems = itemCount;
        if (shownItems > maxItems) {
            shownItems = maxItems;
        }
        if (shownItems == 0) {
            selectionBox.hide();
        } else {
            selectionBox.show();
        }
        selectionBox.height(shownItems * itemHeight);
    }

    function search() {
        var key = combo.val().toLowerCase();
        var filtered;
        if (key == previousSearch) {
            return;
        }
        previousSearch = key;

        // only calls the first time someone types
        if (selectionBox == null) {
            createSelection();
        }
        filtered = itemList.filter(function(item) {
           return item.toLocaleLowerCase().indexOf(key) > -1;
        });
        addSelections(filtered);
    }

    this.setItems = function(values) {
        itemList = values;
    };
    combo.keyup(search);
} // End combo class