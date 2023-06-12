import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: any = {};
  constructor(private auth: AuthService,private route:Router) {}
   MSG=null;
  ngOnInit(): void {}
  Login(data: any) {
    const ff = {
      name: data.value.name,
      email: 'esraa@gmail.com',
      userName: data.value.name,
      password: data.value.password,
      role: 'string',
    };
    this.auth.Login(ff).subscribe((res:any) => {
      if(res.statusCode==1){
        this.route.navigate(['./main'])
      }
      else{
       this.MSG=res.message
      }
    });
  }
}
