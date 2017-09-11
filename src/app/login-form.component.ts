import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-dashboard',
  templateUrl: './login-form.component.html',
  styleUrls: [ './login-form.component.css' ]
})
export class LoginFormComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  loginUser(e: any) {
    e.preventDefault();
  	console.log(e);
  	var username = e.target.elements[0].value;
  	var password = e.target.elements[1].value;

  	if(username == 'admin' && password == 'admin') {
  		this.router.navigate(['dashboard']);
  	} else if (username == 'user' && password == 'user') {
      this.router.navigate(['product']);
    }
  }

}
