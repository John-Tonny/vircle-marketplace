// Copyright (c) 2017-2019, The Vircle Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/vircle/vircle-market/blob/develop/LICENSE

/**
 * SmsgMessageStatus
 *
 */

export enum SmsgMessageStatus {

    NEW = 'NEW',                                // new
    PARSING_FAILED = 'PARSING_FAILED',          // smsg parsing failed
    PROCESSING = 'PROCESSING',                  // currently being processed
    PROCESSED = 'PROCESSED',                    // processing done
    PROCESSING_FAILED = 'PROCESSING_FAILED',    // processing failed, can't recover
    WAITING = 'WAITING',                        // these are waiting for some other messages
    IGNORED = 'IGNORED',                        // ignored for some reason, perhaps for expiration...
    DB_LOCKED = 'DB_LOCKED'                     // db was locked, retry asap TODO: get rid of this
}
