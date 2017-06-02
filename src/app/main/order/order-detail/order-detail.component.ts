import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../../core/services/data.service';

import { NotificationService } from '../../../core/services/notification.service';
import { UtilityService } from '../../../core/services/utility.service';
import { MessageContstants } from '../../../core/common/message.constants';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  public orderDetails: any[];

  constructor(private utilityService: UtilityService,
    private _dataService: DataService,
    private notificationService: NotificationService) { }


  ngOnInit() {
  }
  public loadOrderDetail(id: number) {
    this._dataService.get('/api/order/getalldetails?id=' + id.toString()).subscribe((response: any[]) => {
      this.orderDetails = response;
    }, error => this._dataService.handleError(error));
  }
}