import {Picture} from '../picture';

export interface House {
  tenNha?: string;
  diaChi?: string;
  soLuongPhongNgu?: string;
  soLuongPhongTam?: string;
  moTaChung?: string;
  giaTienTheoDem?: string;
  trangThai?: string;
  idNha?: number;
  picture?: Picture[];
  categoryHouse?: {
    id: number;
  };
  categoryRoom?: {
    id: number;
  };
}
