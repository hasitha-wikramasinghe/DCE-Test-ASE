import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User, UserModel } from '../models/user.model';
import { UserService } from '../services/user.service';
import { UserAddEditComponent } from './user-add-edit/user-add-edit.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'email',
    'first_name',
    'last_name',
    'avatar',
    'action',
  ];
  dataSource = new MatTableDataSource<User>([]);

  user!: User[] | undefined;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private userService: UserService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.user = users;
      this.setData(users);
    });
  }

  setData(users: any): void {
    this.dataSource.data = users.data;
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  addEditUser(user?: User): void {
    const dialogRef: MatDialogRef<UserAddEditComponent> = this.dialog.open(
      UserAddEditComponent,
      {
        data: {
          id: user?.id,
        },
        width: '100%',
        height: 'auto',
      }
    );

    dialogRef.afterClosed().subscribe((result: User) => {});
  }

  deleteUser(user: UserModel) {
    this.userService.deleteUser(user.id).subscribe(
      (res: any): void => {
        this._snackBar.open('User Deleted Successfully', 'ok', {
          duration: 3000,
        });
        this.loadUsers();
      },
      (err: Error) => {
        throw err;
      }
    );
  }
}
