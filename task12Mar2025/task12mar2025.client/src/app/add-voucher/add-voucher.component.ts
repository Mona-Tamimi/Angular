import { Component } from '@angular/core';
import { UrlService } from '../service/url.service';

@Component({
  selector: 'app-add-voucher',
  standalone: false,
  templateUrl: './add-voucher.component.html',
  styleUrl: './add-voucher.component.css'
})
export class AddVoucherComponent {
  constructor(private _ser: UrlService) { }

  ngOnInit() { }

  addVoucher(data: any) {
    this._ser.addVoucher(data).subscribe(() => {
      alert("added")

    })
  }
}
