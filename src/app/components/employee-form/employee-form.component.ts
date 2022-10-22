import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-form',
  styleUrls: ['./employee-form.component.scss'],
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {
  readonly newEmployee: FormGroup = new FormGroup({
    name: new FormControl(),
    salary: new FormControl(),
    age: new FormControl()
  });

  constructor(private _employeeService: EmployeeService) {
  }

  onNewEmployeeSubmitted(newEmployee: FormGroup): void {
    this._employeeService.addEmployee({
      name: newEmployee.get('name')?.value,
      age: newEmployee.get('age')?.value,
      salary: newEmployee.get('salary')?.value
    }).subscribe();
  }
}
