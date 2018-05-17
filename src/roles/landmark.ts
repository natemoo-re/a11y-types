export enum LANDMARK {
  /** 
   * A region declared as a web application, as opposed to a web document.
   */
  APPLICATION = 'application',

  /** A region that contains mostly site-oriented content, rather than page-specific content.
   * ### Examples
   * `<header>`, `<div id="header">`
   */
  BANNER = 'banner',

  /** 
   * A supporting section of the document, designed to be complementary to the main content at a similar level in the DOM hierarchy, but remains meaningful when separated from the main content.
   * ### Examples
   * `<aside>`
   */
  COMPLEMENTARY = 'complementary',

  /** 
   * A large perceivable region that contains information about the parent document.
   * ### Examples
   * `<footer>`
   */
  CONTENTINFO = 'contentinfo',

  /** 
   * A landmark region that contains a collection of items and objects that, as a whole, combine to create a form. 
   * 
   * See related `search`.
   * ### Examples
   * `<form>`
   */
  FORM = 'form',

  /**
   * The main content of a document.
   * ### Examples
   * `<div id="content">`, `<main>` */
    MAIN = 'main',
  
  /**
   * A collection of navigational elements (usually links) for navigating the document or related documents.
   * ### Examples
   * `<nav>`
   */
  NAVIGATION = 'navigation',
  
  /**
   * A landmark region that contains a collection of items and objects that, as a whole, combine to create a search facility. 
   * 
   * See related `form`.
   */
  SEARCH = 'search'
}