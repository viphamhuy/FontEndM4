import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ComponentsService} from '../../components.service';
import {AngularFireDatabase} from '@angular/fire/database';
import * as firebase from 'firebase';
import {Picture} from '../picture';

@Component({
  selector: 'app-add-house',
  templateUrl: './add-house.component.html',
  styleUrls: ['./add-house.component.scss']
})
export class AddHouseComponent implements OnInit {

  categoryHouseList: any[];
  categoryRoomList: any[];
  formGroup = new FormGroup({
    tenNha: new FormControl(),
    diaChi: new FormControl(),
    soLuongPhongNgu: new FormControl(),
    soLuongPhongTam: new FormControl(),
    moTaChung: new FormControl(),
    giaTienTheoDem: new FormControl(),
    trangThai: new FormControl(),
    categoryHouseId: new FormControl(),
    categoryRoomId: new FormControl()
  });
  arrayPicture: Picture[] = [];
  message = '';
  isShow = false;
  isSuccess = true;
  isLoading = false;

  constructor(private componentsService: ComponentsService, private db: AngularFireDatabase) {
  }

  ngOnInit(): void {
    this.componentsService.listCategoryHouse().subscribe(result => {
      this.categoryHouseList = result;
    });
    this.componentsService.listCategoryRoom().subscribe(result1 => {
      this.categoryRoomList = result1;
    });
  }

  save() {
    this.isLoading = true;
    const tenNha = this.formGroup.get('tenNha').value;
    const diaChi = this.formGroup.get('diaChi').value;
    const soLuongPhongNgu = this.formGroup.get('soLuongPhongNgu').value;
    const soLuongPhongTam = this.formGroup.get('soLuongPhongTam').value;
    const moTaChung = this.formGroup.get('moTaChung').value;
    const giaTienTheoDem = this.formGroup.get('giaTienTheoDem').value;
    const trangThai = this.formGroup.get('trangThai').value;
    const categoryHouseId = this.formGroup.get('categoryHouseId').value;
    const categoryRoomId = this.formGroup.get('categoryRoomId').value;
    this.componentsService.addHouse(tenNha, diaChi, soLuongPhongNgu, soLuongPhongTam,
      moTaChung, giaTienTheoDem, trangThai, categoryHouseId, categoryRoomId, this.arrayPicture).subscribe(result => {
      this.isShow = true;
      this.isSuccess = true;
      this.message = 'Thêm thành công!';
      this.isLoading = false;
      this.formGroup.reset();
    }, error => {
      this.isShow = true;
      this.isSuccess = false;
      this.message = 'Thêm thất bại!';
      this.isLoading = false;
      this.formGroup.reset();
    });
  }

  uploadFile(event) {
    const file = event.target.files;
    const metadata = {
      contentType: 'image/jpeg',
    };
    for (let i = 0; i < file.length; i++) {
      const uploadTask = firebase.storage().ref('img/' + Date.now()).put(file[i], metadata);
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          // in progress
          const snap = snapshot as firebase.storage.UploadTaskSnapshot;
        },
        (error) => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
             const picture = { tenAnh: downloadURL };
             this.arrayPicture.push(picture);
          });
        }
      );
    }
    console.log(this.arrayPicture);
  }
}
