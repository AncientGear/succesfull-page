import { Injectable } from '@angular/core';

export interface Team{
  name: string;
  description: string;
  img: string;
  age: string;
  technologies: string;
}

@Injectable()
export class TeamService {
  private team: Team[] = [
    {
      name: 'Saul Israel Tzakum Ochoa',
      description: 'Web developer with knowlegde in MEAN stack',
      img: 'assets/img/aquaman.png',
      age: '21',
      technologies: 'JavaScript, Python, C++, MySql, PostgreSQL, MongoDB, Node JS, Express, Hapi, Flask, Java, HTML, CSS, Angular'
    },
    {
      name: 'Juan Alberto López Ix',
      description: 'Web developer with knowlegde in MEAN stack',
      img: 'assets/img/batman.png',
      age: '21',
      technologies: 'JavaScript, Python, C++, MySql, PostgreSQL, MongoDB, Node JS, Express, Hapi, Flask, Java, HTML, CSS, PHP, Vue JS'
    },
    {
      name: 'Angel Alejandro Ruiz May',
      description: 'Web developer with knowlegde in MEAN stack',
      img: 'assets/img/daredevil.png',
      age: '21',
      technologies: 'JavaScript, Python, C++, MySql, PostgreSQL, MongoDB, Node JS, Express, Angular, Java, HTML, CSS'
    }
  ];

    constructor() {}

    getTeam(): Team[] {
      return this.team;
    }

}
