import { Component, OnInit, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  activeTab: 'diario' | 'semanal' | 'mensual' = 'diario';
  showNuevaAlarmaModal = false;
  nuevaAlarmaForm: FormGroup;

  actividades = [
    { hora: '10:00 AM', texto: 'Tomar Agua' },
    { hora: '11:00 AM', texto: 'Recoger a mi hijo' },
    { hora: '11:10 AM', texto: 'Hacer almuerzo' },
    { hora: '22:00 PM', texto: 'Dormir' },
    { hora: '10:00 AM', texto: 'Clase ingles' },
  ];

  constructor(
    private title: Title,
    private fb: FormBuilder,
  ) {
    this.nuevaAlarmaForm = this.fb.group({
      titulo: [''],
      descripcion: [''],
      hora: [''],
    });
  }

  ngOnInit(): void {
    this.title.setTitle('Dashboard');
  }

  setTab(tab: 'diario' | 'semanal' | 'mensual'): void {
    this.activeTab = tab;
  }

  openNuevaAlarmaModal(): void {
    this.showNuevaAlarmaModal = true;
    this.title.setTitle('Nueva alarma');
  }

  closeNuevaAlarmaModal(): void {
    this.showNuevaAlarmaModal = false;
    this.title.setTitle('Dashboard');
  }

  clearAlarmaField(controlName: string): void {
    this.nuevaAlarmaForm.get(controlName)?.setValue('');
  }

  submitNuevaAlarma(): void {
    console.log('Nueva alarma', this.nuevaAlarmaForm.value);
    this.closeNuevaAlarmaModal();
    this.nuevaAlarmaForm.reset();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.showNuevaAlarmaModal) {
      this.closeNuevaAlarmaModal();
    }
  }
}
