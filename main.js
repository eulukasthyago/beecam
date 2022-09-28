const startUrl = process.env.NWJS_START_URL || '../dist/index.html';

nw.Window.open(startUrl, {}, function(win) {});