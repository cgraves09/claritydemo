import { Component, OnInit } from '@angular/core';
import { SkillService } from '../../services/skill.service';
import { Skills } from '../../models/Skills';

@Component({
  selector: 'app-checkout-box',
  templateUrl: './checkout-box.component.html',
  styleUrls: ['./checkout-box.component.css'],
})
export class CheckoutBoxComponent implements OnInit {
  public carts = [];
  constructor(public skillService: SkillService) {}

  ngOnInit(): void {
    this.carts = this.skillService.cart;
  }
}
