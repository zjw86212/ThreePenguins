cc.game.onStart = function(){
    cc.view.setDesignResolutionSize(300, 480, cc.ResolutionPolicy.SHOW_ALL);
	cc.view.resizeWithBrowserSize(true);
    //load resources
    cc.LoaderScene.preload(g_resources, function () {
        cc.director.runScene(new MenuScene());
    }, this);
};
cc.game.run();