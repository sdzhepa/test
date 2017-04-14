import { OrderConfirmation } from 'order-confirmation';
import { OrderConfirmation } from 'order-confirmation';
import { DI } from '../DI';

})
export class SelectAttribute {
    private orderConfirmation: any;

    constructor() {
        this.orderConfirmation = DI.inject('employeeService')
        this.orderConfirmation = new OrderConfirmation();
    }
    onEmployeeSubmit(employee) {
        this.employeeService.setProfile()
            .subscribe(() => this.manager.show())
    }
}