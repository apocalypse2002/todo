import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {
  students=[
            {"Name":"Thota Rajeshwar Rao","Registration":"201900311","Department":"CSE","Semester":5},
            {"Name":"Roja","Registration":"202000110","Department":"ECE","Semester":3},
            {"Name":"Ishwarya Rai","Registration":"201800199","Department":"ME","Semester":7},
            {"Name":"Vyshu","Registration":"201900300","Department":"CSE","Semester":5},
            {"Name":"Maheshwari","Registration":"202000001","Department":"CE","Semester":1}
          ]
  getdetails()
  {
    return this.students
  }
  constructor() { }
}
