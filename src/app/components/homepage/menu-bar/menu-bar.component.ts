import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ComponentsService} from "../../components.service";

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  listHouse: any[];
  formGroup = new FormGroup({
    search: new FormControl(),
    input: new FormControl(),
    output: new FormControl()
  });
  constructor(private componentsService: ComponentsService) { }

  ngOnInit(): void {
  }

  public searchByDiaChi() {
    const diaChi = this.formGroup.get('search').value;
    this.componentsService.searchByDiaChi(diaChi).subscribe( result => {
      this.listHouse = result;
    });
  }

  public searchBySlPhongNgu() {
    const soLuong = this.formGroup.get('search').value;
    this.componentsService.searchBySoLuongPhongNgu(soLuong).subscribe( result => {
      this.listHouse = result;
    });
  }

  public searchBySlPhongTam() {
    const soLuong = this.formGroup.get('search').value;
    this.componentsService.searchBySoLuongPhongTam(soLuong).subscribe( result => {
      this.listHouse = result;
    });
  }
  public searchBetween() {
    const input = this.formGroup.get('input').value;
    const output = this.formGroup.get('output').value;
    this.componentsService.searchBetween(input, output).subscribe( result => {
      this.listHouse = result;
    });
  }
}
