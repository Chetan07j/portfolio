import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [routerTransition()]
})
export class SkillsComponent implements OnInit {

  public skills = {
    title: 'Skills',
    heading: 'Programming Languages & Tools',
    languages: [ 'html5', 'css3', 'bootstrap', 'javascript', 'angular', 'nodejs_small', 'npm', 'grunt', 'linux', 'jira', 'postgresql', 'jenkins', 'git' ],
    heading2: 'Extras',
    extras: [
      { name: 'Agile Development & Scrum', href: '', hrefText: '' },
      {
        name: 'NPM Package To Connect JIRA From Node.Js(REST API)',
        href: 'https://www.npmjs.com/package/build-jira',
        hrefText: 'build-jira'
      },
      {
        name: 'NPM Package For Instamojo Payment Gateway REST API',
        href: 'https://www.npmjs.com/package/pay-instamojo',
        hrefText: 'pay-instamojo'
      },
      {
        name: 'NPM Package For Formatting jsonschema Validation Error',
        href: 'https://www.npmjs.com/package/jsonschema-formatter',
        hrefText: 'jsonschema-formatter'
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
