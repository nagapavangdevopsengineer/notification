import { DefaultCrudRepository } from '@loopback/repository';
import { HaltDataSource } from '../datasources';
import { Haltnotification, HaltnotificationRelations } from '../models';
export declare class HaltnotificationRepository extends DefaultCrudRepository<Haltnotification, typeof Haltnotification.prototype.id, HaltnotificationRelations> {
    constructor(dataSource: HaltDataSource);
}