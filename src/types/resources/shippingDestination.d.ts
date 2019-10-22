// Copyright (c) 2017-2019, The Vircle Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/vircle/vircle-market/blob/develop/LICENSE

import { ShippingAvailability } from '../../api/enums/ShippingAvailability';

declare module 'resources' {

    interface ShippingDestination {
        id: number;
        country: string;
        shippingAvailability: ShippingAvailability;
        createdAt: Date;
        updatedAt: Date;
    }

}
