import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: any = {};
  constructor(private auth:AuthService) {}

  ngOnInit(): void {}
  Register(data: any) {
    let userData = {
      ...data.value,
      role: "true",
      name:data.value.userName,
        };
    console.log(userData);
    
    this.auth.Register(userData).subscribe(res=>console.log(res)
    )
  }
}
