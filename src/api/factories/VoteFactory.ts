// Copyright (c) 2017-2018, The Particl Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/particl/particl-market/blob/develop/LICENSE

import * as _ from 'lodash';
import { inject, named } from 'inversify';
import { Logger as LoggerType } from '../../core/Logger';
import { Types, Core, Targets } from '../../constants';
import { VoteMessage } from '../messages/VoteMessage';
import { VoteMessageType } from '../enums/VoteMessageType';
import * as resources from 'resources';
import { VoteCreateRequest } from '../requests/VoteCreateRequest';
import { VoteUpdateRequest } from '../requests/VoteUpdateRequest';
import { ProposalOptionService } from '../services/ProposalOptionService';

export class VoteFactory {

    public log: LoggerType;

    constructor(
        @inject(Types.Service) @named(Targets.Service.ProposalOptionService) public proposalOptionService: ProposalOptionService,
        @inject(Types.Core) @named(Core.Logger) public Logger: typeof LoggerType
    ) {
        this.log = new Logger(__filename);
    }

    /**
     *
     * @param {VoteMessageType} voteMessageType
     * @param {string} itemHash
     * @param {IdValuePair[]} idValuePairObjects
     * @returns {Promise<VoteMessage>}
     */
    public async getMessage(voteMessageType: VoteMessageType, proposal: resources.Proposal, proposalOption: resources.ProposalOption,
                            senderProfile: resources.Profile): Promise<VoteMessage> {

        const proposalHash = proposal.hash;
        const optionId = proposalOption.optionId;
        const voter = senderProfile.address;
        const weight = 1;

        return {
            action: voteMessageType,
            proposalHash,
            optionId,
            voter,
            weight
        } as VoteMessage;
    }

    /**
     *
     * @param {VoteMessage} voteMessage
     * @param {"resources".Proposal} proposal
     * @param {number} weight
     * @param {boolean} create
     * @returns {Promise<VoteCreateRequest | VoteUpdateRequest>}
     */
    public async getModel(voteMessage: VoteMessage, proposal: resources.Proposal, weight: number,
                          create: boolean, smsgMessage?: resources.SmsgMessage): Promise<VoteCreateRequest | VoteUpdateRequest> {
        // TODO: Check this. I'm copying what happens in ProposalFactory since I can't find where votes get their times.
        const smsgData: any = {
            timeStart: Number.MAX_SAFE_INTEGER,
            expiryTime: Number.MAX_SAFE_INTEGER,
            postedAt: Number.MAX_SAFE_INTEGER,
            expiredAt: Number.MAX_SAFE_INTEGER,
            receivedAt: Number.MAX_SAFE_INTEGER
        };

        if (smsgMessage) {
            smsgData.timeStart = smsgMessage.sent;
            smsgData.postedAt = smsgMessage.sent;
            smsgData.receivedAt = smsgMessage.received;
        }
        smsgData.expiryTime = proposal.expiryTime;
        smsgData.expiredAt = proposal.expiredAt;

        const voteRequest = {
            voter: voteMessage.voter,
            weight,
            ...smsgData
        } as VoteCreateRequest;

        // TODO: remove the service from here
        const option = await this.proposalOptionService.findOneByProposalAndOptionId(proposal.id, voteMessage.optionId);
        voteRequest.proposal_option_id = option.id;

        this.log.error('VoteFactory.getModel(): voteRequest = ' + JSON.stringify(voteRequest, null, 2));

        return voteRequest;
    }

}
