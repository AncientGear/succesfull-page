import { Component, OnInit } from '@angular/core';
import { TeamService, Team } from '../../services/team.service';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {
  team: Team[] = [];

  constructor(private teamService: TeamService) {

   }

  ngOnInit(): void {
    this.team = this.teamService.getTeam();
  }


}
