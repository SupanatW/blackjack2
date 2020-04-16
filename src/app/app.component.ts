import { Component, OnInit } from '@angular/core';
import { Table } from './table/table';
import { FormBuilder, FormsModule, NgForm } from '@angular/forms';
import { LoggingListener } from './service/loggingListener';
import { LoggingService } from './service/loggingService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, LoggingListener {
  title = 'blackjack';
  table = new Table();
  playersName: string[] = [];
  logInput: string = '';
  constructor(
    private formBuilder: FormBuilder
  ) {
    LoggingService.subscribe(this);
  }
  log(str: string) {
    this.logInput += str + '\n';
  }
  ngOnInit() {
}

onSubmit() {
     for (let i = 0; i < this.playersName.length; i++){
      this.table.addPlayer(this.playersName[i]);
    }
    this.playersName = [];
  }


}
