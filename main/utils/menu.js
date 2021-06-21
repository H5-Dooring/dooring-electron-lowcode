/**
 * Top menu bar
 */
const { Menu, MenuItemConstructorOptions, app } = require('electron');

const template = [
  {
    label: 'View',
    submenu: [
      { role: 'reload' },
      { role: 'forcereload' },
      { role: 'toggleDevTools' },
      { role: 'togglefullscreen' },
      { role: 'front' },
    ],
  },
  {
    label: 'Window',
    role: 'window',
    submenu: [{ role: 'minimize' }, { role: 'close' }],
  },
  {
    label: 'Help',
    submenu: [
      {
        label: 'doc',
        click: (item, focusedWindow) => { focusedWindow.send('openPage', 'doc');},
      },
    ],
  },
];

if (process.platform === 'darwin') {
  template.unshift({
    label: app.getName(),
    submenu: [
      {
        role: 'about',
        label: 'about',
      },
      {
        type: 'separator',
      },
      {
        label: 'preferences',
      },
      {
        type: 'separator',
      },
      {
        role: 'quit',
        label: 'quit',
      },
    ],
  });
}

module.exports = function(mainWindow) {
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
};

