import { Component, Inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {Navigation} from './shell/navigation/navigation'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, Navigation],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title='wmc-project';
  test = 'hello world';
}
