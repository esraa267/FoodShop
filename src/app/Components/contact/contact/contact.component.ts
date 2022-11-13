import { Component, OnInit, Output } from '@angular/core';
import clients from 'src/app/Models/clients';
import { APIService } from 'src/app/Services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  data: any = [];
  constructor(private api: APIService) { }

  ngOnInit(): void {

    this.GetAll()

  }
  onSave(data: any) {
    this.data = data;
  }
  DeleteClient(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Removed!', 'Client removed successfully.', 'success');
        this.api.deleteClient(id).subscribe(_ => this.GetAll());
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Client still in our database.)', 'error');
      }
    });
  }
  GetAll() {
    this.api.getAll().subscribe(res => this.data = res
    )
  }

}
