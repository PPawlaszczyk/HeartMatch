import { Component, inject, OnInit } from '@angular/core';
import { RegisterComponent } from "../register/register.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RegisterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
// implements OnInit 
export class HomeComponent {
  registerMode = false;
  // users: any;
  // http = inject(HttpClient);

  registerToggle(){
    this.registerMode =  !this.registerMode
  }
// ngOnInit(): void {
//   this.getUsers();
// }
//   getUsers(){
//     this.http.get('https://localhost:5001/api/users').subscribe({
//       next: response => this.users = response,
//       error: error => console.log(error),
//       complete: () => console.log('Request has completed'),
//     })
//   }
  cancelRegisterMode(event:boolean){
    this.registerMode = event;
  }
}
