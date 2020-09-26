import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SkillService } from '../../services/skill.service';
import { Skills } from '../../models/Skills';
@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css'],
})
export class SkillItemComponent implements OnInit {
  @Input() skill: Skills;
  @Output() addSkill: EventEmitter<Skills> = new EventEmitter();
  constructor(public skillService: SkillService) {}

  ngOnInit(): void {}

  // Set Dynamic Classes
  setClasses() {
    let classes = {
      skill: true,
    };

    return classes;
  }

  onClick(skill) {
    this.addSkill.emit(skill);
  }
}
