import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  activeTab: 'diario' | 'semanal' | 'mensual' = 'diario';

  actividades = [
    { hora: '10:00 AM', texto: 'Tomar Agua' },
    { hora: '11:00 AM', texto: 'Recoger a mi hijo' },
    { hora: '11:10 AM', texto: 'Hacer almuerzo' },
    { hora: '22:00 PM', texto: 'Dormir' },
    { hora: '10:00 AM', texto: 'Clase ingles' },
  ];

  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Dashboard');
  }

  setTab(tab: 'diario' | 'semanal' | 'mensual'): void {
    this.activeTab = tab;
  }
}
