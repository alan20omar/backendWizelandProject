import app from './src/config/app.js';
import config from './src/config/env.js';

app.listen(config.port, () => {
    console.log(`App listen ${config.host}:${config.port}`);
});
