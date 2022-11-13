import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import clients from 'src/app/Models/clients';
import { APIService } from 'src/app/Services/api.service';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
	closeResult = '';
	@Input() type = '';
	@Output() onSave = new EventEmitter<any>();
	@Input() client: clients = { name: '', place: '' }
	constructor(private modalService: NgbModal, private api: APIService) { }

	ngOnInit(): void {
		
		
	}
	open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}
	Save(data: any) {
		console.log(this.client);
		if(this.type=='add'){
			this.api.addClient(data.value).subscribe(_ => {
				this.api.getAll().subscribe(res =>
					this.onSave.emit(res)
				)
			});
		}
		else{
			this.api.updateClient(this.client).subscribe(_ => {
				this.api.getAll().subscribe(res =>
					this.onSave.emit(res)
				)
			});
		}
	
		this.modalService.dismissAll()
	}
}
