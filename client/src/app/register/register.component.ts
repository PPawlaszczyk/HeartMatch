import { Component, EventEmitter, inject, input, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
private accountService = inject(AccountService);
  // @Input() usersFromHomeComponent: any;  solution for angular version prior 17.3
  // usersFromHomeComponent  = input.required<any>();

  // @Output() cancelRegister = new EventEmitter(); solution for angular version prior 17.3
  cancelRegister = output<boolean>()
  model: any = {}

  register() {
    this.accountService.register(this.model).subscribe({
      next: response => {
        console.log(response);
        this.cancel();
      },
      error: error => console.log(error)
    })
  }
  cancel() {
    this.cancelRegister.emit(false);
  }

}
