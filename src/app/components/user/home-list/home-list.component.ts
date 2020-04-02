import { Component, OnInit } from '@angular/core';
import {ComponentsService} from '../../components.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss']
})
export class HomeListComponent implements OnInit {

  id: string;
  listUser: any[];
  // tslint:disable-next-line:max-line-length
  urlTiDa = 'https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/64359869_2394503243947594_7770096928003457024_n.jpg?_nc_cat=102&_nc_sid=7aed08&_nc_ohc=uP1KHQU7Y6gAX-hCUDS&_nc_ht=scontent-sin6-2.xx&oh=d3e0cce99e40e4641f9f0b7c8e69c0a4&oe=5EA1801D';
  // tslint:disable-next-line:max-line-length
  urlHaiLit = 'https://scontent-sin6-1.xx.fbcdn.net/v/t1.15752-9/91350837_211883533382731_506886620025192448_n.jpg?_nc_cat=104&_nc_sid=b96e70&_nc_ohc=obZFoZXgT9UAX8Z1mDx&_nc_ht=scontent-sin6-1.xx&oh=c65a4f956a3f7853e9d8739241b333bd&oe=5EA4D9CC';
  // tslint:disable-next-line:max-line-length
  urlHuyVy = 'https://scontent-sin6-1.xx.fbcdn.net/v/t1.15752-9/91566099_1060501520986446_4619718771207045120_n.jpg?_nc_cat=101&_nc_sid=b96e70&_nc_ohc=qItkg58sAvMAX8KLLSv&_nc_ht=scontent-sin6-1.xx&oh=25ac1a06f0122bbabb32c4a8eb6f0d35&oe=5EA1B31B';
  constructor(private componentsService: ComponentsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params => {
      const idChuNha = params.get('id');
      this.id = idChuNha;
    });
  }

}
