var NavigationController;

NavigationController = (function() {

  NavigationController.prototype.appWindows = [];

  function NavigationController() {
    this.applicationWindow = require("/ui/windows/application_window");
    this.tabnWindow = require("/ui/windows/tab_window");
  }

  NavigationController.prototype.newTabWindow = function(name) {
    var win;
    win = require("ui/windows/tabs/" + name);
    return new win;
  };

  NavigationController.prototype.findTab = function(id) {
    return this.tabGroup.getTabs().forEach(function(t) {
      if (t.getWindow().id === id) {
        return t;
      }
    });
  };

  NavigationController.prototype.openWindow = function(id, params, parent) {
    var newWin, win;
    if (params == null) {
      params = {};
    }
    if (parent == null) {
      parent = null;
    }
    params = {};
    if (parent) {
      params._parent = parent;
    }
    switch (true) {
      case id.match(/\//).length > 2:
        newWin = require("/ui/windows/" + id);
        win = new Win;
        this.currentWindow.containingTab.open(win);
        break;
      case /^tabs/.test(id):
        this.currentWindow.close();
        this.currentTab = this.findTab(id);
        tabGroup.setActiveTab(this.currentTab);
        win = this.currentTab.getWindow();
    }
    return this.currentWindow = win;
  };

  return NavigationController;

})();

module.exports = NavigationController;