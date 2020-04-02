import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ComponentsService} from '../../components.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  message = '';
  isShow = false;
  isSuccess = true;
  isLoading = false;
  hostList: any;
  idChuNha: number;
  formGroup = new FormGroup({
    userName: new FormControl(),
    passWord: new FormControl(),
    hoTen: new FormControl(),
    diaChi: new FormControl(),
    idChuNha: new FormControl()
  });
  constructor(private componentsService: ComponentsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params => {
      const idSearch = params.get('id');
      this.componentsService.findByIdHost(idSearch).subscribe( result => {
        this.hostList = result;
        this.formGroup.controls.userName.setValue(this.hostList.userName);
        this.formGroup.controls.passWord.setValue(this.hostList.password);
        this.formGroup.controls.hoTen.setValue(this.hostList.hoTen);
        this.formGroup.controls.diaChi.setValue(this.hostList.diaChi);
        this.idChuNha = Number(idSearch);
      });
    });
  }
  edit() {
    this.isLoading = true;
    const userName = this.formGroup.get('userName').value;
    const passWord = this.formGroup.get('passWord').value;
    const hoTen = this.formGroup.get('hoTen').value;
    const diaChi = this.formGroup.get('diaChi').value;
    this.componentsService.editUser(userName, passWord, hoTen, diaChi, this.idChuNha).subscribe(result => {
      this.isShow = true;
      this.isSuccess = true;
      this.message = 'Sửa thành công!';
      this.formGroup.reset();
    }, error => {
      this.isShow = true;
      this.isSuccess = false;
      this.message = 'Sửa thất bại!';
      this.isLoading = false;
      this.formGroup.reset();
    });
  }
}
