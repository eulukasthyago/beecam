require('dotenv').config()
const fs = require('fs');

const startUrl = process.env.IS_DEV == 'true' ? process.env.URL_DEV : process.env.URL;

const handle_reload_app = () => {
  
}

const main_window_options = {
  width: 250,
  height: 250,
  transparent: false,
  resizable: false,
  position: "center",
  always_on_top: true,
  frame: false,
  visible_on_all_workspaces: true,
  show_in_taskbar: false
}

const main_window = nw.Window.open(startUrl, main_window_options, function(win) {
  tray = new nw.Tray({ icon: './app/src/assets/images/icon16x16.png' });
  const menu = new nw.Menu();
  menu.append(new nw.MenuItem({ label: 'Restart App',  icon: './app/src/assets/images/refresh.png', click: function(){
    tray.remove();
    tray = null;
    chrome.runtime.reload()
  } }));
  menu.append(new nw.MenuItem({ label: 'DevTools', click: function(){
    win.showDevTools();;
  }}));
  menu.append(new nw.MenuItem({ label: 'Close', click: function(){
    win.close();
  }}));
  tray.menu = menu;
});

const my_window = nw.Window.get(main_window);