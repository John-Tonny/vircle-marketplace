import * as Bookshelf from 'bookshelf';
import { validate, request } from '../../core/api/Validate';
import { Logger as LoggerType } from '../../core/Logger';
import { RpcRequest } from '../requests/RpcRequest';
import {NotFoundException} from '../exceptions/NotFoundException';

export class RpcCommand<T extends Bookshelf.Model<any>> {
    public log: LoggerType;
    public name: string;

    public async execute(data: RpcRequest): Promise<Bookshelf.Collection<T>> {
        throw new NotFoundException('This command shouldn\'t ever be run');
    }

    public help(): string {
        return 'TODO: RpcCommand help string';
    }
}
