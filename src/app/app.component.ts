import { Component } from '@angular/core';
import { SkillService } from '../app/services/skill.service';
import { Skills } from '../app/models/Skills';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SkillItemComponent } from '../app/components/skill-item/skill-item.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  closeResult = '';
  public carts = [];
  constructor(
    public modalService: NgbModal,
    public skillService: SkillService
  ) {}

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }
  ngOnInit(): void {
    this.carts = this.skillService.cart;
  }

  getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
