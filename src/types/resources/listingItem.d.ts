// Copyright (c) 2017-2019, The Vircle Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/vircle/vircle-market/blob/develop/LICENSE

declare module 'resources' {

    interface ListingItem {
        id: number;
        hash: string;
        seller: string;
        expiryTime: number;

        receivedAt: number;
        postedAt: number;
        expiredAt: number;

        ItemInformation: ItemInformation;
        PaymentInformation: PaymentInformation;
        MessagingInformation: MessagingInformation[];
        ListingItemObjects: ListingItemObject[];
        Market: Market;
        Bids: Bid[];
        ActionMessages: ActionMessage[];
        ListingItemTemplate: ListingItemTemplate;
        FlaggedItem: FlaggedItem;

        createdAt: Date;
        updatedAt: Date;
    }

}
