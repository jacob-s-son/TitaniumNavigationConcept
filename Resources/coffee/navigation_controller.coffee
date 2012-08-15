class NavigationController
    appWindows: []
    
    constructor: ->
        @applicationWindow = require("/ui/windows/application_window");
        @tabnWindow = require("/ui/windows/tab_window");
    
    # createWindow: (params, parentWindow={}) ->
        # win = Ti.UI.createWindow(params)
        # appWindows.push win
#     
    # closeWindow: (id) ->
        # for win in appWindows
            # tab.close(win) if win.id == id
    
    newTabWindow: (name) ->
        win = require("ui/windows/tabs/#{name}")
        new win
    
    findTab: (id) ->
      @tabGroup.getTabs().forEach( (t) ->
        return t if t.getWindow().id == id
      )
    
    openWindow: (id, params={}, parent=null) ->
        params = {}
        params._parent = parent if parent
        
        switch true
            when id.match(/\//).length > 2 
                newWin = require("/ui/windows/#{id}")
                win = new Win
                @currentWindow.containingTab.open(win)
            when (/^tabs/).test(id)
                @currentWindow.close()
                @currentTab = @findTab(id)
                tabGroup.setActiveTab(@currentTab)
                win = @currentTab.getWindow()
                
       
        @currentWindow = win