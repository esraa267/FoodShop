import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import product from 'src/app/Models/product';
import { APIService } from 'src/app/Services/api/api.service';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
	closeResult = '';
	@Input() type = '';
	@Output() onSave = new EventEmitter<any>();
	@Input() products: product = { name: '', price: '',description:'' }
	constructor(private modalService: NgbModal, private api: APIService) { }

	ngOnInit(): void {
		const clientAsString = JSON.stringify(this.products);
		this.products = JSON.parse(clientAsString);
		
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
		
		if(this.type=='add'){
			console.log(data.value);
			
			this.api.addProduct(data.value).subscribe(_ => {
				this.api.getAll().subscribe(res =>
				this.onSave.emit(res)
				)
			});
		}
		else{
		
			
			this.api.updateProduct(this.products).subscribe(_ => {
				this.api.getAll().subscribe(res =>
					this.onSave.emit(res)
				)
			});
		}
	
		this.modalService.dismissAll()
	}
}
