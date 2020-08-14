import { Injectable } from '@angular/core';
import { SocialUser, SocialAuthService } from 'angularx-social-login'
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  auth: boolean = false;
  private SERVER_URL: string = environment.SERVER_URL;
  private user;
  authState$: BehaviorSubject<boolean>  = new BehaviorSubject<boolean>(this.auth);
  userData$: BehaviorSubject<SocialUser | ResponseModel> = new BehaviorSubject<SocialUser | ResponseModel>(null);

  constructor(private authServie: SocialAuthService,
    private httpClient: HttpClient) {


      authServie.authState.subscribe((user: SocialUser) => {
        if(user !== null) {
          this.auth = true;
          
        }
      });



  }
}

interface ResponseModel {
  token: string;
  auth: boolean;
  email: string;
  username: string;
  fname: string;
  lname: string;
  photoUrl: string;
  userId: number;
}
