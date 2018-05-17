export enum STRUCTURE {
    /** 
     * A section of a page that consists of a composition that forms an independent part of a document, page, or site.
     * ### Examples
     * `<article>`
     */
    ARTICLE = 'article',
    /**
     * A cell containing header information for a column.
     * 
     * ### Examples
     * `<th scope="col">`
     */
    COLUMNHEADER = 'columnheader',

    /**
     * A definition of a term or concept.
     */
    DEFINITION = 'definition',

    /**
     * A list of references to members of a group, such as a static table of contents.
     */
    DIRECTORY = 'directory',

    /**
     * A region containing related information that is declared as document content, as opposed to a web application.
     * 
     * ### Examples
     * `<body>`
     */
    DOCUMENT = 'document',

    /**
     * A set of user interface objects which are not intended to be included in a page summary or table of contents by assistive technologies.
     * 
     * ### Examples
     * `<fieldset>`, `<optgroup>`
     */
    GROUP = 'group',

    /**
     * A heading for a section of the page.
     * 
     * ### Examples
     * `<h1>`, `<h2>`, etc.
     * 
     * Note: aria-level must be set appropriately
     */
    HEADING = 'heading',

    /**
     * A container for a collection of elements that form an image.
     * 
     * ### Examples
     * `<img>`
     */
    IMG = 'img',

    /**
     * A group of non-interactive list items. See related listbox.
     * 
     * ### Examples
     * `<ul>`, `<ol>`
     */
    LIST = 'list',

    /**
     * A single item in a list or directory.
     * 
     * ### Examples
     * `<li>`
     */
    LISTITEM = 'listitem',

    /**
     * Content that represents a mathematical expression.
     */
    MATH = 'math',

    /**
     * A section whose content is parenthetic or ancillary to the main content of the resource.
     */
    NOTE = 'note',

    /**
     * An element whose implicit native role semantics will not be mapped to the accessibility API.
     * 
     * ### Examples
     * `alt=""`
     */
    PRESENTATION = 'presentation',

    /**
     * A large perceivable section of a web page or document, that the author feels is important enough to be included in a page summary or table of contents, for example, an area of the page containing live sporting event statistics.
     * 
     * ### Examples
     * `<div>`, `<frame>`, `<section>`
     */
    REGION = 'region',

    /**
     * A row of cells in a grid.
     * 
     * ### Examples
     * `<tr>`
     */
    ROW = 'row',

    /**
     * A group containing one or more row elements in a grid.
     * 
     * ### Examples
     * `<thead>`, `<tfoot>`, `<tbody>`
     */
    ROWGROUP = 'rowgroup',

    /**
     * A cell containing header information for a row in a grid.
     * 
     * ### Examples
     * `<th scope="row">`
     */
    ROWHEADER = 'rowheader',

    /**
     * A divider that separates and distinguishes sections of content or groups of menuitems.
     * 
     * ### Examples
     * `<hr>`
     */
    SEPARATOR = 'separator',

    /**
     * A collection of commonly used function buttons represented in compact visual form.
     * 
     * ### Examples
     * `<menu type="toolbar">`
     */
    TOOLBAR = 'toolbar'
}