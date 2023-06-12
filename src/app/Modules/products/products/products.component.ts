import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { APIService } from 'src/app/Shared/services/api/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  data: any = [];
  data$: Observable<any> = new Observable<any>();
  constructor(private api: APIService) {}

  ngOnInit(): void {
    this.GetAll();
  }
  onSave(data: any) {
    this.data$ = this.api.getAll();
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
        this.api.deleteProduct(id).subscribe((_) => this.GetAll());
      }
    });
  }
  GetAll() {
    this.data$ = this.api.getAll();
  }

 
}
