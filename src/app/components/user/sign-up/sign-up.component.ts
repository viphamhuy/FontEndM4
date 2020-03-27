import { Component, OnInit } from '@angular/core';
import {ComponentsService} from '../../components.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  formGroup = new FormGroup({
    userName: new FormControl(),
    password: new FormControl(),
    hoTen: new FormControl(),
    diaChi: new FormControl()
  });
  message = '';
  isShow = false;
  isSuccess = true;
  isLoading = false;
  constructor(private componentsService: ComponentsService) { }

  ngOnInit(): void {
  }
  save() {
    this.isLoading = true;
    const userName = this.formGroup.get('userName').value;
    const password = this.formGroup.get('password').value;
    const hoTen = this.formGroup.get('hoTen').value;
    const diaChi = this.formGroup.get('diaChi').value;
    this.componentsService.addUser(userName, password, hoTen, diaChi).subscribe( result => {
      this.isShow = true;
      this.isSuccess = true;
      this.message = 'Đăng kí thành công!';
      this.formGroup.reset();
    }, error => {
      this.isShow = true;
      this.isSuccess = false;
      this.message = 'Đăng kí thất bại!';
      this.isLoading = false;
      this.formGroup.reset();
    });
  }

}
