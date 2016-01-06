/**
 * Created by Nomad_Mystic on 1/5/2016.
 */


// Creating a prototype for the ToolButton class
ToolButton.prototype.createImage = function(tool)
{
    var image = document.createElement('img');
    image.src = 'images/' + tool.image;
    image.className = 'tool_button_image';
    return image;
};

ToolButton.prototype.createButton = function(tool, image)
{
    var button = document.createElement('div');
    button.className = 'tool_button';
    button.appendChild(image);
    if (tool.title !== undefined) {
        button.title = tool.title;
    }
    return button;
};

/// Class to house the creation of the buttons tools
function ToolButton(tool)
{
    var image = this.createImage(tool);
    var button = this.createButton(tool, image);

    this.getButton = function() {
        return button;
    };

    this.setActive = function() {

    };
}

function EditToolButton(tool)
{
    var parent = new ToolButton(tool);

    var execute = function()
    {
        document.execCommand(tool.command, false, false);
    };

    parent.getButton().addEventListener('click', execute);

    this.getButton = function() {
        return parent.getButton();
    };

    this.update = function()
    {
        if (tool.command !== undefined) {
            if (document.queryCommandState(tool.command)) {
                parent.setActive();
            } else {
                parent.setInactive();
            }
        }
    }
}

function RightToolButton(tool)
{
    var parent = new ToolButton(tool);

    parent.getButton().className = 'right_tool_button';

    this.getButton = function() {
        return parent.getButton();
    }
}

// Main Class to Create Elements for the Rich Text Editing Area
function RichTextEditor(parent, callback)
{
    // Creating the edit buttons and connecting CSS
    var editButton = document.createElement('div');
    editButton.innerHTML = '[edit]';
    editButton.className = 'edit_button';

    // Creating the tool bar area
    var toolBar = document.createElement('div');
    toolBar.className = 'edit_tools';

    // Creating button to show inside text editor toolBar come form Classes
    var submitButton = new RightToolButton({title: 'Submit', command: '', image: 'submit.png'}).getButton();
    var boldButton = new EditToolButton({title: 'Bold', command: 'bold', image: 'bold.png'}).getButton();

    toolBar.appendChild(boldButton);
    toolBar.appendChild(submitButton);

    // creating editor box and fitting it to the rte_box-es
    var editor = document.createElement('div');
    editor.className = 'edit_box';
    editor.style.top = parent.style.top;
    editor.style.left = parent.style.left;
    editor.style.width = parent.clientWidth + 'px';
    editor.style.height = parent.clientHeight + 'px';

    // Function for when edit button is clicked
    var edit = function()
    {
        editor.contentEditable = true;
        parent.replaceChild(toolBar, editButton);
        //editor.style.height = parseInt(editor.style.height) - toolBar.clientHeight + 'px';
        editor.focus();
    };
    var submit = function() {
        editor.contentEditable = false;
        //editor.style.height = parent.clientHeight + 'px';
        parent.replaceChild(editButton, toolBar);
        callback(editor.innerHTML);
    };

    // Edit and Submit click events
    submitButton.addEventListener('click', submit);
    editButton.addEventListener('click', edit);

    parent.appendChild(editor);
    parent.appendChild(editButton);
}

