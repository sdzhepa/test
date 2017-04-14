import { DecoratorPool } from './decorator-pool';
import { BaseDecorator } from  './BaseDecorator';

export class ErrorDecorator extends BaseDecorator {
    public type:string;

    constructor() {
        this.type = 'string';
    }

    decorateLog(log) {
        return log.decorate = {
            underline: true,
            color: 'red',
            trace: true,
            expand: true
        };
    }
}

new DecoratorPool().registerDecorator(new ErrorDecorator());
