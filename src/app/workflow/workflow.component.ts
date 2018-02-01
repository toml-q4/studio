import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.css']
})
export class WorkflowComponent implements OnInit {
  names = ['Barrick Announces Investment in Royal Road Minerals Limited', 'Barrick Comments on Revised Pascua-Lama Sanction', 'Barrick Comments on Creation of Canadian Ombudsperson for Responsible Enterprise'];
  users = ['toml', 'maximv', 'sceucinc', 'sunils'];
  name = '';
  user = '';
  timeAgo = '2 days ago';

  constructor() { }

  ngOnInit() {
    this.name = 'Press Release ' + this.guid();
    this.user = this.users[Math.floor(Math.random()*this.users.length)];
  }
  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }
}
