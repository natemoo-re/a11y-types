export enum WIDGET {
    /** 
     * A message with important, and usually time-sensitive, information. See related alertdialog and status.
     */
    ALERT = 'alert',

    /** 
     * A type of dialog that contains an alert message, where initial focus goes to an element within the dialog. See related alert and dialog.
     */
    ALERTDIALOG = 'alertdialog',

    /** 
     * An input that allows for user-triggered actions when clicked or pressed. See related link.
     * 
     * ### Examples
     * <button>, <input type="submit">, <input type="reset">, <input type="image">
     */
    BUTTON = 'button',

    /** 
     * A checkable input that has three possible values: true, false, or mixed
     * ### Examples
     * <input type="checkbox">
     */
    CHECKBOX = 'checkbox',


    /** 
     * A dialog is an application window that is designed to interrupt the current processing of an application in order to prompt the user to enter information or require a response. See related alertdialog.
     */
    DIALOG = 'dialog',

    /** 
     * A cell in a grid or treegrid.
     * 
     * ### Examples
     * <td>
     */
    GRIDCELL = 'gridcell',

    /** 
     * An interactive reference to an internal or external resource that, when activated, causes the user agent to navigate to that resource. See related button.
     * ### Examples
     * <a href...>, <area>
     */
    LINK = 'link',

    /** 
     * A type of live region where new information is added in meaningful order and old information may disappear. See related marquee.
     * 
     * Note: Elements with the role log have an implicit aria-live value of polite.
     */
    LOG = 'log',

    /** 
     * A type of live region where non-essential information changes frequently. See related log.
     * 
     * Note: Elements with the role marquee maintain the default aria-live value of off.
     */
    MARQUEE = 'marquee',

    /** 
     * An option in a group of choices contained by a menu or menubar.
     */
    MENUITEM = 'menuitem',

    /** 
     * A checkable menuitem that has three possible values: true, false, or mixed.
     */
    MENUITEMCHECKBOX = 'menuitemcheckbox',

    /** 
     * A checkable menuitem in a group of menuitemradio roles, only one of which can be checked at a time.
     */
    MENUITEMRADIO = 'menuitemradio',

    /** 
     * A selectable item in a select list.
     * 
     * ### Examples
     * <option>
     */
    OPTION = 'option',

    /** 
     * An element that displays the progress status for tasks that take a long time.
     * 
     * ### Examples
     * <progress> 
     * 
     * Note: Elements with the role progressbar have an implicit aria-readonly value of true.
     */
    PROGRESSBAR = 'progressbar',

    /** 
     * A checkable input in a group of radio roles, only one of which can be checked at a time.
     * 
     * ### Examples
     * <input type="radio">
     */
    RADIO = 'radio',

    /** 
     * A graphical object that controls the scrolling of content within a viewing area, regardless of whether the content is fully displayed within the viewing area.
     * 
     * Note: Elements with the role progressbar have an implicit aria-readonly value of true.
     */
    SCROLLBAR = 'scrollbar',

    /** 
     * A user input where the user selects a value from within a given range.
     * 
     * ### Examples
     * <input type="range">
     */
    SLIDER = 'slider',

    /** 
     * A form of range that expects the user to select from among discrete choices.
     * 
     * ### Examples
     * input element with a type attribute in the Number state
     */
    SPINBUTTON = 'spinbutton',

    /** 
     * A container whose content is advisory information for the user but is not important enough to justify an alert, often but not necessarily presented as a status bar. See related alert.
     * 
     * ### Examples
     * <output>
     * 
     * Note: Elements with the role status have an implicit aria-live value of polite.
     */
    STATUS = 'status',

    /** 
     * A grouping label providing a mechanism for selecting the tab content that is to be rendered to the user.
     */
    TAB = 'tab',

    /** 
     * A container for the resources associated with a tab, where each tab is contained in a tablist.
     */
    TABPANEL = 'tabpanel',

    /** 
     * Input that allows free-form text as its value.
     * 
     * ### Examples
     * <textarea>, <input type="text"> (and other text-like inputs, such as 'password', 'email', etc.).
     */
    TEXTBOX = 'textbox',

    /** 
     * A type of live region containing a numerical counter which indicates an amount of elapsed time from a start point, or the time remaining until an end point.
     */
    TIMER = 'timer',

    /** 
     * A contextual popup that displays a description for an element.
     */
    TOOLTIP = 'tooltip',

    /** 
     * An option item of a tree. This is an element within a tree that may be expanded or collapsed if it contains a sub-level group of treeitems.
     */
    TREEITEM = 'treeitem',

    /** 
     * A presentation of a select; usually similar to a textbox where users can type ahead to select an option, or type to enter arbitrary text as a new item in the list. See related listbox.
     * 
     * ### Examples
     * <select>, HTML5 input types which provide suggestions
     */
    COMBOBOX = 'combobox',

    /** 
     * A grid is an interactive control which contains cells of tabular data arranged in rows and columns, like a table.
     * ### Examples
     * <table>
     */
    GRID = 'grid',

    /** 
     * A widget that allows the user to select one or more items from a list of choices. See related combobox and list.
     *  
     * ### Examples
     * <select>, <datalist> (when aria-multiselectable set to false on listbox)
     */
    LISTBOX = 'listbox',

    /** 
     * A type of widget that offers a list of choices to the user. ### Examples
     * 
     * ### Examples
     * <menu type="list">
     */
    MENU = 'menu',

    /** 
     * A presentation of menu that usually remains visible and is usually presented horizontally.
     */
    MENUBAR = 'menubar',

    /** 
     * A group of radio buttons.
     */
    RADIOGROUP = 'radiogroup',

    /** 
     * A list of tab elements, which are references to tabpanel elements.
     */
    TABLIST = 'tablist',

    /** 
     * A type of list that may contain sub-level nested groups that can be collapsed and expanded.
     */
    TREE = 'tree',

    /** 
     * A grid whose rows can be expanded and collapsed in the same manner as for a tree.
     */
    TREEGRID = 'treegrid',
}