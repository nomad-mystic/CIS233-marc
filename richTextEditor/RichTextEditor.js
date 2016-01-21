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
        var className = image.className;

        if (className != 'active_tool_button_image') {
            image.className = 'active_tool_button_image';
        }
    };

    this.setInactive = function() {
        var className = image.className;

        if (className != 'tool_button_image') {
            image.className = 'tool_button_image';
        }
    };
}

function EditToolButton(tool, editor)
{
    // Extends ToolButton
    var parent = new ToolButton(tool);

    var execute = function()
    {
        editor.focus();
        document.execCommand(tool.command, false, false);
        this.update();
    };

    parent.getButton().addEventListener('click', execute.bind(this));

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
function HtmlToolButton(tool, editor)
{
    // Extends ToolButton
    var parent = new ToolButton(tool);
    var mode = 'HTML';

    console.log(parent);
    var execute = function()
    {
        if (mode == 'HTML') {
            mode = 'text';
            var html = editor.innerHTML;
            editor.contentEditable = false;
            var pre = document.createElement('pre');
            pre.className = 'html_text';
            if (pre.innerText === undefined) {
                pre.textContent = html;
            } else {
                pre.innerText = html;
            }
            editor.innerHTML = '';
            editor.appendChild(pre);
            pre.contentEditable = true;
        } else {
            mode = 'HTML';
            var pre = editor.firstChild;
            var text;
            if (pre.innerText === undefined) {
                text = pre.textContent;
            } else {
                text = pre.innerText;
            }
            editor.innerHTML = text;
            editor.contentEditable = true;
        }
        this.update();
    };

    parent.getButton().addEventListener('click', execute.bind(this));

    this.getButton = function() {
        return parent.getButton();
    };

    this.update = function()
    {
        if (mode == 'text') {
            parent.setActive();
        } else {
            parent.setInactive();
        }
    }

    this.getMode = function()
    {
        return mode;
    };
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
    var backup;

    // creating editor box and fitting it to the rte_box-es
    var editor = document.createElement('div');
    editor.className = 'edit_box';
    editor.style.top = parent.style.top;
    editor.style.left = parent.style.left;
    editor.style.width = parent.clientWidth + 'px';
    editor.style.height = parent.clientHeight + 'px';

    // Creating the edit buttons and connecting CSS
    var editButton = document.createElement('div');
    editButton.innerHTML = '[edit]';
    editButton.className = 'edit_button';

    // Creating the tool bar area
    var toolBar = document.createElement('div');
    toolBar.className = 'edit_tools';

    // Custom buttons
    var cancelButton = new RightToolButton({title: 'Cancel', command: "", image: 'cancel.png'}).getButton();
    var submitButton = new RightToolButton({title: 'Submit', command: "", image: 'submit.png'}).getButton();

    var htmlTool = new HtmlToolButton({title: 'HTML', command: "", image: 'html.png'}, editor);
    var htmlButton = htmlTool.getButton();

    toolBar.appendChild(htmlButton);
    // Creating button to show inside text editor toolBar come form Classes
    var buttons = tools.map(function(tool)
    {
        var tool = new EditToolButton(tool, editor);
        var button = tool.getButton();
        toolBar.appendChild(button);
        return tool;
    });
    // Adding Custom Buttons
    buttons.push(htmlTool);
    toolBar.appendChild(submitButton);
    toolBar.appendChild(cancelButton);

    // Function for when edit button is clicked
    var edit = function()
    {
        backup = editor.innerHTML;
        if (backup === '') {
            editor.innerHTML = '<div></div>';
        }
        editor.contentEditable = true;
        parent.replaceChild(toolBar, editButton);
        //editor.style.height = parseInt(editor.style.height) - toolBar.clientHeight + 'px';
        editor.focus();
    };
    var cancel = function()
    {
        editor.innerHTML = backup;
        editor.contentEditable = false;
        editor.style.height = parent.clientHeight + 'px';
        parent.replaceChild(editButton, toolBar);
    };
    var submit = function() {
        var mode = htmlTool.getMode();
        if (mode == 'text') {
            htmlButton.click();
        }
        editor.contentEditable = false;
        editor.style.height = parent.clientHeight + 'px';
        parent.replaceChild(editButton, toolBar);
        callback(editor.innerHTML);
    };
    var update = function()
    {
        buttons.forEach(function(button)
        {
            button.update();
        });
    };

    // Edit and Submit click events
    submitButton.addEventListener('click', submit);
    cancelButton.addEventListener('click', cancel);
    editButton.addEventListener('click', edit);
    editor.addEventListener('click', update);
    editor.addEventListener('keyup', update);
    editor.addEventListener('keydown', update);
    editor.addEventListener('keypress', update);
    parent.appendChild(editor);
    parent.appendChild(editButton);
}

