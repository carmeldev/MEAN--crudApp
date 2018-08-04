import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../issue.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';
import { Issue } from '../../issue.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: String;
  issue: any = {};
  updateForm: FormGroup;
  constructor(private issueService: IssueService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar,
    private fb: FormBuilder) {
      this.createForm();
    }

    createForm() {
      this.updateForm = this.fb.group({
        name: ['', Validators.required],
        amount: '',
        date: '',
        mode: ''
      });
    }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.issueService.getIssueById(this.id).subscribe(res => {
        this.issue = res;
        this.updateForm.get('name').setValue(this.issue.name);
        this.updateForm.get('amount').setValue(this.issue.amount);
        this.updateForm.get('date').setValue(this.issue.date);
        this.updateForm.get('mode').setValue(this.issue.mode);
      });
    });
  }
  updateIssue(name, amount, date, mode) {
    this.issueService.updateIssue(this.id, name, amount, date, mode).subscribe(() => {
      this.snackBar.open('Issue updated successfully', 'OK', {
        duration: 3000
      });
    });
   // this.router.navigate([`/list`]);
  }
}
