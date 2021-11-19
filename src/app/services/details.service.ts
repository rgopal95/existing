import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { IDetails } from './models/details.model';
import { Student } from './models/student.model';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  readonly baseUrl: string = 'http://localhost:3000/details';

  //  baseUrl='https://query1.finance.yahoo.com/v7/finance/spark?symbols=GC%3DF&range=1d&interval=5m&indicators=close&includeTimestamps=false&includePrePost=false&corsDomain=finance.yahoo.com&.tsrc=finance';
  // students: Student[] = [
  //   {
  //     id: 1,
  //     name: 'Raghu',
  //     college: 'abc',
  //     marks: 50,
  //   },
  //   {
  //     id: 2,
  //     name: 'Rohith',
  //     college: 'def',
  //     marks: 75,
  //   },
  //   {
  //     id: 3,
  //     name: 'Santhosh',
  //     college: 'ghi',
  //     marks: 100,
  //   },
  // ];

  constructor(private http: HttpClient) {}

  getDetails(): Observable<IDetails[]> {
    return this.http.get<IDetails[]>(this.baseUrl);
  }

  delete(detailsId: number): Observable<any> {
    const url: string = `${this.baseUrl}/${detailsId}`;
    return this.http.delete(url);
  }

  // getData(): Observable<any>{
  //   return this.http.get<any[]>(this.baseUrl);
  // }

  // getEmployee(): Observable<employee> {
  //   const employee: employee = { id: 1, name: 'raghu', department: 'software', salary: 0, };
  //   return of(employee);
  // }

  // getSalary(): Observable<salary> {
  //   const employee: salary = { employeeId: 1, month: 'january', salary: 20000 };
  //   return of(employee);
  // }

  // getEmployeeWithSalary(): Observable<employee> {
  //   return this.getEmployee().pipe(
  //     switchMap((employee: employee) =>
  //       this.getSalary().pipe(
  //         map((salary: salary) => {
  //           employee.salary = salary.salary;
  //           return employee;
  //         })
  //       )
  //     )
  //   );
  //}

  //   public getStudent(): any{
  //     const studentsObservable= new Observable(observer => {
  //       setTimeout(()=>{
  //         observer.next(this.students);
  //       },5000);
  //     });
  //     return studentsObservable;
  //   }
}

// export interface employee {
//   id: number;
//   name: string;
//   department: string;
//   salary: number;
// }

// export interface salary {
//   employeeId: number;
//   //department: string,
//   month: string;
//   salary: number;
// }
