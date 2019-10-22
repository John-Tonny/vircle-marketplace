// Copyright (c) 2017-2019, The Vircle Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/vircle/vircle-market/blob/develop/LICENSE

/**
 * core.database.BluePrint
 * ------------------------------------------------
 */

import * as bookshelf from 'bookshelf';


export class BluePrint {
    constructor(
        public Model: typeof bookshelf.Model,
        public callback: (faker: Faker.FakerStatic, args: any[]) => any) { }
}
