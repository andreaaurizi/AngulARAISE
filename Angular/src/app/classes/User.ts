import {UserInterface} from '../interfaces/user';

export class User implements UserInterface {
  id: number;
  username: string;
  nome: string;
  cognome: string;
  email: string;
  password: string;
  password_confirmation: string;
  clan: string;
  img_profile: string;

  constructor() {
    this.id = 0;
    this.username = '';
    this.nome = '';
    this.cognome = '';
    this.email = '';
    this.password = '';
    this.password_confirmation = '';
    this.clan = '';
    this.img_profile = '';
  }
}
