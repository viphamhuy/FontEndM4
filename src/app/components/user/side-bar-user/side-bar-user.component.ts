import { Component, OnInit } from '@angular/core';
import {ComponentsService} from '../../components.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-side-bar-user',
  templateUrl: './side-bar-user.component.html',
  styleUrls: ['./side-bar-user.component.scss']
})
export class SideBarUserComponent implements OnInit {

  idHost: string;
  constructor(private componentsService: ComponentsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idChuNha = params.get('id');
      this.idHost = idChuNha;
    });
  }

}
