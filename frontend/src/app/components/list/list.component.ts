import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../issue.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Issue } from '../../issue.model';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private issueService: IssueService, private router: Router) { }
  issues: Issue[];
  displayedColumns = ['name', 'amount', 'date', 'mode', 'actions'];
  ngOnInit() {
    this.fetchIssues();
  }

  fetchIssues() {
    this.issueService
      .getIssues()
      .subscribe((data: Issue[]) => {
        this.issues = data;
        console.log('Data requested ...');
        console.log(this.issues);
      });
  }

  editIssue(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteIssue(id) {
    this.issueService.deleteIssue(id).subscribe(() => {
      this.fetchIssues();
    });
  }
}
