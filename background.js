chrome.webRequest.onBeforeRequest.addListener(
  function() { return {cancel: true}; },
  {
    urls: [
      "*://*/*classList.min.js*",
      "*://*/*backbone-min.js*",
      "*://*/*contextual.js*",
      "*://*/*StateModel.js*",
      "*://*/*AuralView.js*",
      "*://*/*KeyboardView.js*",
      "*://*/*RegionView.js*",
      "*://*/*VisualView.js*",
      "*://*/*position-min.js*",
      "*://*/*menu-min.js*",
      "*://*/*autocomplete-min.js*",
      "*://*/*coffee.js*",
      "*://*/*jquery.form.min.js*",
      "*://*/*jquery.cookie.min.js*",
      "*://*/*form.js*",
      "*://*/*quickedit.js*",
      "*://*/*util.js*",
      "*://*/*BaseModel.js*",
      "*://*/*AppModel.js*",
      "*://*/*EntityModel.js*",
      "*://*/*FieldModel.js*",
      "*://*/*EditorModel.js*",
      "*://*/*AppView.js*",
      "*://*/*FieldDecorationView.js*",
      "*://*/*EntityDecorationView.js*",
      "*://*/*EntityToolbarView.js*",
      "*://*/*ContextualLinkView.js*",
      "*://*/*FieldToolbarView.js*",
      "*://*/*EditorView.js*",
      "*://*/*quickedit/js/theme.js*",
      "*://*/*active-link.js*",
      "*://*/*history.js*",
      "*://*/*announce.js*",
      "*://*/*matchMedia.addListener.min.js*",
      "*://*/*toolbar.menu.js*",
      "*://*/*toolbar.js*",
      "*://*/*MenuModel.js*",
      "*://*/*ToolbarModel.js*",
      "*://*/*BodyVisualView.js*",
      "*://*/*MenuVisualView.js*",
      "*://*/*ToolbarAuralView.js*",
      "*://*/*jquery.joyride-2.1.js*",
      "*://*/*tour.js*",
      "*://*/*tabbingmanager.js*",
      "*://*/*contextual.toolbar.js*",
      "*://*/*StateModel.js*",
      "*://*/*AuralView.js*",
      "*://*/*VisualView.js*",
      "*://*/*jquery.hoverIntent.js*",
      "*://*/*admin_toolbar.js*",
      "*://*/*escapeAdmin.js*",
      "*://*/*big_pipe.js*"
    ], // Change this to a more specific pattern
    types: ["script"]
  },
  ["blocking"]
);
