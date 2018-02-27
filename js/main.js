jQuery(document).ready(function($){

  //add UIkit page alert classes to Drupal system messages
  $('.messages').addClass('uikit-page-alerts');
  $('.messages--warning').addClass('uikit-page-alerts--warning');
  $('.messages--error').addClass('uikit-page-alerts--error');
  $('.messages--status').addClass('uikit-page-alerts--info');
  $('<div class="section-divider full-width"><div class="arrow-down"></div></div>').insertAfter('.document-links-section');
  $('.form-submit').addClass('uikit-btn');
  
  //news
  $('.news-categories .view-header li').insertBefore('.news-categories ul>li:first');
  $('.views-row.tags').removeClass('col-md-6');
  $('.views-row-1.tags').addClass('full-width');
  $('.views-row-1.tags').wrapInner('<div class="container"></div>');


});

