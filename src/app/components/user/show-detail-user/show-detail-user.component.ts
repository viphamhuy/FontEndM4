import { Component, OnInit } from '@angular/core';
import {ComponentsService} from '../../components.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-show-detail-user',
  templateUrl: './show-detail-user.component.html',
  styleUrls: ['./show-detail-user.component.scss']
})
export class ShowDetailUserComponent implements OnInit {

  id: string;
  listUser: any;
  constructor(private componentsService: ComponentsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params => {
      const idChuNha = params.get('id');
      this.id = idChuNha;
      this.componentsService.findByIdHost(idChuNha).subscribe( result => {
        this.listUser = result;
        // console.log(this.listUser);
      });
    });
  }

}
