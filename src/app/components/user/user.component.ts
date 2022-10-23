import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user',
  styleUrls: ['./user.component.scss'],
  templateUrl: './user.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {
  readonly newUserForm: FormGroup = new FormGroup({
    email: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    firstname: new FormControl(),
    lastname: new FormControl(),
    city: new FormControl(),
    street: new FormControl(),
    number: new FormControl(),
    zipcode: new FormControl(),
    lat: new FormControl(),
    long: new FormControl(),
    phone: new FormControl()
  });

  constructor(private _userService: UserService) {
  }

  onNewUserFormSubmitted(newUserForm: FormGroup): void {
    this._userService.newUser({
      email: newUserForm.get('email')?.value,
      password: newUserForm.get('password')?.value,
      phone: newUserForm.get('phone')?.value,
      username: newUserForm.get('username')?.value,
      address: {
        city: newUserForm.get('city')?.value,
        number: newUserForm.get('number')?.value,
        street: newUserForm.get('street')?.value,
        zipcode: newUserForm.get('zipcode')?.value,
        geolocation:{
          lat: newUserForm.get('lat')?.value,
          long: newUserForm.get('long')?.value
        }
      },
      name:{
        firstname: newUserForm.get('firstname')?.value,
        lastname: newUserForm.get('lastname')?.value
      }
    }).subscribe();
  }
}
