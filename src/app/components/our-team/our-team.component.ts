import { Component, OnInit } from '@angular/core';
import { TeamSerice, Team } from '../../services/team.service';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {
  team: Team[] = [];

  constructor(private teamService: TeamSerice) {

   }

  ngOnInit(): void {
    this.team = this.teamService.getTeam();
  }


}
