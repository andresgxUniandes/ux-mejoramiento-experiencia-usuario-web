import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private title: Title,
  ) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    });
    this.form.get('confirmPassword')?.valueChanges.subscribe(() => {
      this.checkPasswordMatch();
    });
    this.form.get('password')?.valueChanges.subscribe(() => {
      this.checkPasswordMatch();
    });
  }

  private checkPasswordMatch(): void {
    const password = this.form.get('password')?.value;
    const confirm = this.form.get('confirmPassword')?.value;
    const control = this.form.get('confirmPassword');
    if (confirm && password !== confirm) {
      control?.setErrors({ ...control.errors, mismatch: true });
    } else if (control?.hasError('mismatch')) {
      const { mismatch: _, ...rest } = control.errors ?? {};
      control.setErrors(Object.keys(rest).length ? rest : null);
    }
  }

  ngOnInit(): void {
    this.title.setTitle('Registro Web');
  }

  clearField(controlName: string): void {
    this.form.get(controlName)?.setValue('');
  }

  onSubmit(): void {
    this.checkPasswordMatch();
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // TODO: llamar al servicio de registro
    console.log('Registro', this.form.value);
  }
}
