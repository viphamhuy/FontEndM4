import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Picture} from './user/picture';
import {House} from './user/interface/house';

@Injectable()
export class ComponentsService {

  urlApi = 'http://localhost:5000/api/houses/';

  constructor(private httpClient: HttpClient) {
  }

  public listHouse(): Observable<any> {
    return this.httpClient.get(this.urlApi);
  }

  public listCategoryHouse(): Observable<any> {
    return this.httpClient.get('http://localhost:5000/api/categoryHouses/');
  }

  public listAllHouse(): Observable<any> {
    return this.httpClient.get('http://localhost:5000/api/housesss/');
  }

  public listCategoryRoom(): Observable<any> {
    return this.httpClient.get('http://localhost:5000/api/categoryRooms/');
  }

  public findById(id): Observable<any> {
    return this.httpClient.get(this.urlApi + id);
  }


  public addHouse(
    tenNha: string, diaChi: string, soLuongPhongNgu: string,
    soLuongPhongTam: string, moTaChung: string, giaTienTheoDem: number,
    trangThai: string, hostId: number, categoryHouseId: number, categoryRoomId: number, listPicture: Picture[]): Observable<any> {
    const house = {
      tenNha,
      diaChi,
      soLuongPhongNgu,
      soLuongPhongTam,
      moTaChung,
      giaTienTheoDem,
      trangThai,
      picture: listPicture,
      host: {
        idChuNha: hostId
      },
      categoryHouse: {
        id: categoryHouseId
      },
      categoryRoom: {
        id: categoryRoomId
      }
    };
    return this.httpClient.post<any>(this.urlApi, house);
  }

  public editHouse(
    tenNha: string, diaChi: string, soLuongPhongNgu: string,
    soLuongPhongTam: string, moTaChung: string, giaTienTheoDem: number,
    trangThai: string, idNha: number, categoryHouseId: number, categoryRoomId: number, listPicture: Picture[]): Observable<any> {
    const house = {
      tenNha,
      diaChi,
      soLuongPhongNgu,
      soLuongPhongTam,
      moTaChung,
      giaTienTheoDem,
      trangThai,
      idNha,
      picture: listPicture,
      categoryHouse: {
        id: categoryHouseId
      },
      categoryRoom: {
        id: categoryRoomId
      }
    };
    return this.httpClient.put<any>(this.urlApi + idNha, house);
  }

  public deleteHouse(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.urlApi + id);
  }

  public searchByDiaChi(diaChi: string): Observable<any> {
    return this.httpClient.get<any>('http://localhost:5000//api/findAllByDiaChiContainsAndTrangThai?house=' + diaChi);
  }

  public searchBySoLuongPhongNgu(soLuong: string): Observable<any> {
    return this.httpClient.get<any>('http://localhost:5000//api/findAllBySoLuongPhongNguLessThanEqualAndTrangThai?house=' + soLuong);
  }

  public searchBySoLuongPhongTam(soLuong: string): Observable<any> {
    return this.httpClient.get<any>('http://localhost:5000//api/findAllBySoLuongPhongTamLessThanEqualAndTrangThai?house=' + soLuong);
  }

  public searchBetween(input: string, output: string): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.httpClient.get<any>('http://localhost:5000//api/findAllByGiaTienTheoDemBetweenAndTrangThai?dauDuoi=' + input + '&dauTren=' + output);
  }
  public listUser(): Observable<any> {
    return this.httpClient.get('http://localhost:5000/api/hosts/');
  }
  public addUser(userName: string, password: string, hoTen: string, diaChi: string): Observable<any> {
    const user = {
      userName,
      password,
      hoTen,
      diaChi
    };
    return this.httpClient.post('http://localhost:5000/api/hosts/', user);
  }
  public findByIdChuNha(id: string): Observable<any> {
    return this.httpClient.get('http://localhost:5000/api/findAllByHost?host=' + id);
  }
  public findByIdHost(id: string): Observable<any> {
    return this.httpClient.get('http://localhost:5000/api/hosts/' + id);
  }
  public editUser(userName: string, password: string, hoTen: string, diaChi: string, idChuNha: number): Observable<any> {
    const user = {
      userName,
      password,
      hoTen,
      diaChi,
      idChuNha
    };
    return this.httpClient.put<any>('http://localhost:5000/api/hosts/' + idChuNha, user);
  }
}

