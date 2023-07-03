import app from './src/config/app.js';
import socket from './src/config/socket.js'
import config from './src/config/env.js';

app.listen(config.port, () => {
    socket.listen(config.portIO);
    console.log(`Socket listen ${config.host}:${config.portIO}`);
    console.log(`App listen ${config.host}:${config.port}`);
});
