import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User, UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-add-edit',
  templateUrl: './user-add-edit.component.html',
  styleUrls: ['./user-add-edit.component.scss'],
})
export class UserAddEditComponent implements OnInit {
  userForm!: FormGroup;
  title!: string;
  selectedUserId!: number;
  user!: User;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: User,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private dialogRef: MatDialogRef<UserAddEditComponent>,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getRoutedData();
  }

  createForm(): void {
    this.userForm = this.formBuilder.group({
      Email: ['', Validators.required],
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Avatar: ['', Validators.required],
    });
  }

  getRoutedData(): void {
    if (this.data.id != null) {
      this.selectedUserId = this.data.id;
      this.title = 'Edit User';
      this.fetchUserId(this.selectedUserId);
    } else {
      this.title = 'Add User';
    }
  }

  fetchUserId(userId: number): void {
    this.userService.getUserById(userId).subscribe((res: any) => {
      console.log(res);
      this.userForm.patchValue({
        Email: res.data.email,
        FirstName: res.data.first_name,
        LastName: res.data.last_name,
        Avatar: res.data.avatar,
      });
    });
  }

  save(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
    } else {
      this.user = new UserModel();
      this.user.email = this.userForm.value.Email;
      this.user.first_name = this.userForm.value.FirstName;
      this.user.last_name = this.userForm.value.LastName;
      this.user.avatar = this.userForm.value.Avatar;

      if (!this.selectedUserId) {
        this.addUser(this.user);
      } else {
        this.user.id = this.selectedUserId;
        this.updateUser(this.user);
      }
    }
  }

  addUser(user: UserModel): void {
    this.userService.createUser(user).subscribe(
      (res: any) => {
        this._snackBar.open('User Added Successfully', 'ok', {
          duration: 3000,
        });
        this.dialogRef.close({res});
      },
      (err: Error) => {
        throw err;
      }
    );
  }

  updateUser(user: UserModel): void {
    this.userService.updateUser(this.selectedUserId, user).subscribe(
      (res: any) => {
        this._snackBar.open('User Updated Successfully', 'ok', {
          duration: 3000,
        });
        this.dialogRef.close({res});
      },
      (err: Error) => {
        throw err;
      }
    );
  }
}