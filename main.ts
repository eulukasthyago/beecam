const is_dev = true;
const prodUrl = "./views/index.html";
const devUrl = "http://localhost:3000";
const homeUrl = is_dev ? devUrl : devUrl;
const handle_reload_app = () => {
  
}

// --disable-web-security

interface WindowProps {
  win: nw.Window;
}

const main_window_options:nw.IWindowOptions = {
  width: 250,
  height: 250,
  transparent: true,
  resizable: false,
  position: "center",
  always_on_top: true,
  frame: false,
  visible_on_all_workspaces: true,
  show_in_taskbar: false,
}

const main_window = nw.Window.open(homeUrl, main_window_options, function(win) {
  win.setShadow(false);
  let tray:any;
  const menu = new nw.Menu();
  menu.append(new nw.MenuItem({ label: 'Restart App',  icon: './assets/images/refresh.png', click: function(){
    tray.remove();
    tray = null;
    chrome.runtime.reload();
  } }));
  menu.append(new nw.MenuItem({ label: 'DevTools', click: function(){
    win.showDevTools();
  }}));
  menu.append(new nw.MenuItem({ label: 'Close', click: function(){
    win.close();
  }}));
  tray = new nw.Tray({ 
    title: '',
    tooltip: 'Beecam',
    icon: './assets/images/icon16x16.png',
    alticon: './assets/images/icon16x16-white.png',
    iconsAreTemplates: true,
    menu: menu
  });
});

nw.Window.open("https://www.google.com", {
  position: 'mouse'
}, function(win){});