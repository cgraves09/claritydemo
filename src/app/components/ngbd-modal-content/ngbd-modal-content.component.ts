import { Component } from '@angular/core';
import { SkillService } from '../../services/skill.service';
import { Skills } from '../../models/Skills';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SkillItemComponent } from '../skill-item/skill-item.component';
@Component({
  selector: 'ngbd-modal-basic',
  templateUrl: './ngbd-modal-content.component.html',
  styleUrls: ['./ngbd-modal-content.component.css'],
})
export class NgbdModalBasic {
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

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
