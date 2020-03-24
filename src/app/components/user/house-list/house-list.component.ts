import {Component, OnInit} from '@angular/core';
import {ComponentsService} from '../../components.service';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.scss']
})
export class HouseListComponent implements OnInit {

  houseList: any[];
  message = '';
  isShow = false;
  isSuccess = true;
  categoryHouseList: any[];
  categoryRoomList: any[];

  constructor(private componentsService: ComponentsService) {
  }

  ngOnInit(): void {
    this.componentsService.listAllHouse().subscribe(result => {
      this.houseList = result;
    });
    this.componentsService.listCategoryHouse().subscribe(result => {
      this.categoryHouseList = result;
    });
    this.componentsService.listCategoryRoom().subscribe(result1 => {
      this.categoryRoomList = result1;
    });
  }

  public findId(id: number) {
    this.componentsService.findById(id).subscribe(result => {
      this.houseList = result;
    });
  }

  public delete(id: number) {
    this.componentsService.deleteHouse(id).subscribe(result => {
      this.isShow = true;
      this.isSuccess = true;
      this.message = 'Xóa thành công!';
    }, error => {
      this.isShow = true;
      this.isSuccess = false;
      this.message = 'Xóa thất bại!';
    });
    this.ngOnInit();
  }

  trackByFn(index, house) {
    return house.id;
  }
}
