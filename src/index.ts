import * as core from '@actions/core';
import * as upm_config from './upm_config';

const main = async () => {
    try {
        await upm_config.Run();
    } catch (error) {
        core.setFailed(error);
        process.exit(1);
    }
}

main();
