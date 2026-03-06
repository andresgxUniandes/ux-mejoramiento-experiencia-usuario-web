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
  showEditAlarmaModal = false;
  nuevaAlarmaForm: FormGroup;
  editAlarmaForm: FormGroup;
  editingAlarmaIndex: number | null = null;

  actividades: { hora: string; texto: string; descripcion: string }[] = [
    { hora: '10:00 AM', texto: 'Tomar Agua', descripcion: '' },
    { hora: '11:00 AM', texto: 'Recoger a mi hijo', descripcion: '' },
    { hora: '11:10 AM', texto: 'Hacer almuerzo', descripcion: '' },
    { hora: '22:00 PM', texto: 'Dormir', descripcion: '' },
    { hora: '10:00 AM', texto: 'Clase ingles', descripcion: "Thiago Slang's" },
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
    this.editAlarmaForm = this.fb.group({
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

  openEditAlarmaModal(index: number): void {
    const act = this.actividades[index];
    this.editingAlarmaIndex = index;
    this.editAlarmaForm.patchValue({
      titulo: act.texto,
      descripcion: act.descripcion,
      hora: act.hora,
    });
    this.showEditAlarmaModal = true;
    this.title.setTitle('Edicion');
  }

  closeEditAlarmaModal(): void {
    this.showEditAlarmaModal = false;
    this.editingAlarmaIndex = null;
    this.title.setTitle('Dashboard');
  }

  clearEditAlarmaField(controlName: string): void {
    this.editAlarmaForm.get(controlName)?.setValue('');
  }

  submitEditAlarma(): void {
    if (this.editingAlarmaIndex === null) return;
    const { titulo, descripcion, hora } = this.editAlarmaForm.value;
    this.actividades[this.editingAlarmaIndex] = {
      texto: titulo ?? '',
      descripcion: descripcion ?? '',
      hora: hora ?? '',
    };
    this.closeEditAlarmaModal();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.showNuevaAlarmaModal) {
      this.closeNuevaAlarmaModal();
    } else if (this.showEditAlarmaModal) {
      this.closeEditAlarmaModal();
    }
  }
}
