import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { cart } from 'src/app/Models/cart';
import product from 'src/app/Models/product';
import { APIService } from 'src/app/Services/api/api.service';
import { CartService } from 'src/app/Services/cart/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  data: any = [];
  data$: Observable<any> = new Observable<any>;
  constructor(private api: APIService, private cartService: CartService) { }

  ngOnInit(): void {


    this.GetAll();

  }
  onSave(data: any) {
    this.data = data;
  }
  DeleteProduct(id: number) {
    console.log(id);

    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Removed!', 'Client removed successfully.', 'success');
        this.api.deleteProduct(id).subscribe(_ => this.GetAll());
      }
      // else if (result.dismiss === Swal.DismissReason.cancel) {
      //   Swal.fire('Cancelled', 'Client still in our database.)', 'error');
      // }
    });
  }
  GetAll() {
    this.data$ = this.api.getAll();
  }

  AddToCart(item: cart) {
    console.log(item);
    this.cartService.Addtocart(item);
  }

}
