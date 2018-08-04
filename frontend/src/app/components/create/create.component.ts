import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../issue.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

 // date = new FormControl(new Date());
  // serializedDate = new FormControl((new Date()).toISOString());
  createForm: FormGroup;
  constructor(private issueService: IssueService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      amount: '',
      date: '',
      mode: ''
    });
   }
   addIssue(name, amount, date, mode) {
     this.issueService.addIssue(name, amount, date, mode).subscribe(() => {
       this.router.navigate(['/list']);
     });
   }
  ngOnInit() {
  }

}
