import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from '../../models/Client';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0
  };

  disableBalanceOnAdd: boolean = true;

  @ViewChild('clientForm', { static: false }) form: any;

  constructor() {}

  ngOnInit() {}

  onSubmit({ value, valid }: { value: Client; valid: boolean }) {}
}
