const startUrl = process.env.NWJS_START_URL || '../dist/index.html';

nw.Window.open("httsp://localhost:3000", {}, function(win) {});