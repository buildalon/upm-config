const core = require('@actions/core');
const upm_config = require('./upm_config');

const main = async () => {
    try {
        await upm_config.Run();
    } catch (error) {
        core.setFailed(error);
        process.exit(1);
    }
}

main();
