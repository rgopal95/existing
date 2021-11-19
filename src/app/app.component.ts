import { Component } from '@angular/core';
import { DetailsService } from './services/details.service';
import { IDetails } from './services/models/details.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Test2';

  listOfStudents: IDetails[] = [];

  //public dataRequired=[];
  constructor(private detailsService: DetailsService) {}

  ngOnInit(): void {
    this.getDetails();
     
    //this.detailsService.getEmployeeWithSalary().subscribe(console.log);
    //this.detailsService.getStudent().subscribe(console.log);
    //this.detailsService.getData().subscribe(data => this.dataRequired = data);
  }




  getDetails(): void {
    this.detailsService.getDetails().subscribe(
      (data) => (this.listOfStudents= data),
      (error) => console.log(error),
      () => console.log('Complete')          
    );
  }

  onDelete(detailsId: number) {
    this.detailsService.delete(detailsId).subscribe(
      (data) => this.getDetails(),
      (error) =>console.log(error)
    );

  }
}
