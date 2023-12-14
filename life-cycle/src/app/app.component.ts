import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from "./title/title.component";
import { PaginaInicialComponent } from "./pagina-inicial/pagina-inicial.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, TitleComponent, PaginaInicialComponent]
})
export class AppComponent {
  title = 'life-cycle';
}
