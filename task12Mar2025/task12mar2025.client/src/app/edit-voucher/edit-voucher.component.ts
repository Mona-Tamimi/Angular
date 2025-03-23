import { Component } from '@angular/core';
import { UrlService } from '../service/url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-voucher',
  standalone: false,
  templateUrl: './edit-voucher.component.html',
  styleUrl: './edit-voucher.component.css'
})
export class EditVoucherComponent {


  voucherContainer: any
  ngOnInit() {
    let voucher = this._active.snapshot.paramMap.get("id");
    this._url.getVoucherById(voucher).subscribe((data:any) => {

      this.voucherContainer = data
    })


  }
  voucherId: any
  constructor(private _url: UrlService, private _active: ActivatedRoute) {

  }
  updateVoucher(data: any) {
    this.voucherId = this._active.snapshot.paramMap.get("id");
    this._url.updateVoucher(this.voucherId, data).subscribe(() => {
      alert("update Successfully")
    })



  }
}

