// Copyright (c) 2017-2019, The Vircle Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/vircle/vircle-market/blob/develop/LICENSE

/**
 * config.Custom
 * ------------------------------------
 *
 * Define all log adapters for this application and chose one.
 */

import { Logger } from '../core/Logger';
import { App, Configurable } from '../core/App';


export class CustomConfig implements Configurable {

    private log = new Logger(__filename);

    public configure(app: App): void {
        this.log.debug('configuring', app.Express.get('port'));
    }
}

