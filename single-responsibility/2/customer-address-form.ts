import { OrderConfirmation } from 'order-confirmation';
import { Rx } from 'rx';
import { DI } from 'DI';

export class SelectAttribute {
    private orderConfirmation: any;
    private orderService: any;

    constructor() {
        this.orderService = DI.inject('orderService');
        this.orderConfirmation = new OrderConfirmation();
    }
    onSubmit(customer) {
        this.orderService.setCustomerAddres()
            .subscribe(() => this.orderConfirmation.show())
    }
}