import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-como-funciona',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './como-funciona.component.html',
  styleUrl: './como-funciona.component.css',
})
export class ComoFuncionaComponent implements OnInit {
  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Como funciona pulseAI');
  }
}
