import { Component, OnInit, HostListener } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirm = control.get('confirmPassword')?.value;
  if (confirm === '' || password === confirm) return null;
  return { passwordMismatch: true };
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  showInvalidModal = false;

  constructor(
    private fb: FormBuilder,
    private title: Title,
    private router: Router,
  ) {
    this.form = this.fb.group(
      {
        nombre: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(3)]],
        confirmPassword: ['', [Validators.required]],
      },
      { validators: passwordMatchValidator }
    );
  }

  ngOnInit(): void {
    this.title.setTitle('Registro Web');
  }

  clearField(controlName: string): void {
    this.form.get(controlName)?.setValue('');
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Registro', this.form.value);
      this.router.navigate(['/onboarding']);
      return;
    }
    this.form.markAllAsTouched();
    const passwordMismatch = this.form.hasError('passwordMismatch');
    const emailInvalidFormat = this.form.get('email')?.hasError('email');
    if (passwordMismatch || emailInvalidFormat) {
      this.showInvalidModal = true;
      this.title.setTitle('Registro Web Error');
    }
  }

  closeInvalidModal(): void {
    this.showInvalidModal = false;
    this.title.setTitle('Registro Web');
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.showInvalidModal) {
      this.closeInvalidModal();
    }
  }
}
