(function() {

    var viewChanged = function()
    {
        var log = require("ko/logging").getLogger("editorconfig");
        //log.setLevel(10);
        
        var currentView = ko.views.manager.currentView;
        if ( ! currentView || ! currentView.koDoc ||
            ! currentView.koDoc.file || currentView.editorConfigProcessed)
            return;
        
        currentView.editorConfigProcessed = true;
        
        var ec = Cc["@activestate.com/editorconfig/koEditorConfig;1"]
                    .getService(Ci.koIEditorConfig);
        var prefs = currentView.koDoc.prefs;
        var filepath = currentView.koDoc.file.path;
        
        try
        {
            var items = ec.get_properties(filepath);
            log.debug("Setting editorconfig: " + items);
            items = JSON.parse(items);
        }
        catch (e)
        {
            log.exception(e, "Exception while parsing editorconfig");
            return;
        }
        
        for (let k in items)
        {
            if (prefs.hasPrefHere(k))
                continue; // don't set prefs that are already explicitly set
            
            prefs.prefObserverService.notifyObservers(prefs, k, items[k]);
        }
    }

    // Use setTimeout because the view manager is lagging behind
    window.addEventListener('current_view_changed',
                            function() { setTimeout(viewChanged, 10); });

})();