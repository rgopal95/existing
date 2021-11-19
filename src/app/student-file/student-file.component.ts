import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'stream';
import { DetailsService } from '../services/details.service';

@Component({
  selector: 'app-student-file',
  templateUrl: './student-file.component.html',
  styleUrls: ['./student-file.component.scss'],
})
export class StudentFileComponent implements OnInit {
  @Input() sDetails: any = 'Default sDetails';
  @Output() delete: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    // console.log(this.detailsService.value);
  }

  onDelete(detailsId: number): void {
    //console.log(detailsId);
    this.delete.emit(detailsId);
  }
}
