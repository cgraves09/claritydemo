import { Component, OnInit } from '@angular/core';
import { SkillService } from '../../services/skill.service';
import { Skills } from '../../models/Skills';

@Component({
  selector: 'app-skill-items',
  templateUrl: './skill-items.component.html',
  styleUrls: ['./skill-items.component.css'],
})
export class SkillItemsComponent implements OnInit {
  skills: Array<object>;
  constructor(public skillService: SkillService) {}
  ngOnInit(): void {
    this.skills = this.skillService.getSkills();
    console.log(this.skills);
  }
  addSkill(skill) {
    console.log(skill);
    this.skills = this.skills.filter((s) => s !== skill);
    this.skillService.addSkill(skill);
  }
}
