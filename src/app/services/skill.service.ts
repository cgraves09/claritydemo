import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  public cart = [];
  constructor() {}
  getSkills() {
    return [
      {
        image:
          'data:image/png;base64,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',
        title: 'Angular !',
      },
      {
        image: 'https://www.w3.org/html/logo/downloads/HTML5_Badge_256.png',
        title: 'HTML',
      },
      {
        image: 'https://ucarecdn.com/f49e8fc4-876f-49ef-934f-89812fc4125e/',
        title: 'CSS',
      },
      {
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/768px-Unofficial_JavaScript_logo_2.svg.png',
        title: 'Javascript',
      },
      {
        image:
          'https://www.kindpng.com/picc/m/385-3850482_mongodb-logo-png-transparent-png.png',
        title: 'MongoDB',
      },
      {
        image:
          'data:image/png;base64,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',
        title: 'MYSQL',
      },
      {
        image: 'https://tublitzed.com/img/portfolio/node/browser/full/1.jpg',
        title: 'NodeJs',
      },
      {
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png',
        title: 'React',
      },
      {
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/768px-Bootstrap_logo.svg.png',
        title: 'Bootstrap',
      },
      {
        image:
          'https://www.iconfinder.com/data/icons/scripting-and-programming-languages/512/JQuery_logo-512.png',
        title: 'Jquery',
      },
      {
        image: 'https://authy.com/wp-content/uploads/npm-logo.png',
        title: 'NPM',
      },
      {
        image: 'https://miro.medium.com/max/6668/1*XP-mZOrIqX7OsFInN2ngRQ.png',
        title: 'ExpressJS',
      },
    ];
  }
  addSkill(skill) {
    this.cart.push(skill.title);
  }
}
