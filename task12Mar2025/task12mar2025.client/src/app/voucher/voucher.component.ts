import { Component } from '@angular/core';
import { UrlService } from '../service/url.service';

@Component({
  selector: 'app-voucher',
  standalone: false,
  templateUrl: './voucher.component.html',
  styleUrl: './voucher.component.css'
})
export class VoucherComponent {

  Voucher: any;
  constructor(private service: UrlService) { }

  ngOnInit() {
    this.fetchAllVoucher();
  }

  fetchAllVoucher() {
    this.service.getVoucher().subscribe((data) => {
      this.Voucher = data;
    })
  }
}
