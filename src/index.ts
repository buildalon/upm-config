import core = require('@actions/core');
import upm_config = require('./upm_config');

const main = async () => {
    try {
        await upm_config.Run();
    } catch (error) {
        core.setFailed(error);
        process.exit(1);
    }
}

main();
