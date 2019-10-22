// Copyright (c) 2017-2019, The Vircle Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/vircle/vircle-market/blob/develop/LICENSE

import { IsNotEmpty } from 'class-validator';
import { RequestBody } from '../../core/api/RequestBody';

// tslint:disable:variable-name
export class SettingUpdateRequest extends RequestBody {

    @IsNotEmpty()
    public key: string;

    @IsNotEmpty()
    public value: string;

}
// tslint:enable:variable-name
