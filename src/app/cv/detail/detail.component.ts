import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Personne} from "../Model/personne";
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() personne: Personne;
  constructor(
    private router: Router,
    private embaucheService: EmbaucheService
  ) { }

  ngOnInit(
  ) {
  }
  embaucher() {
    this.embaucheService.addEmbauche(this.personne);
  }

 

}
