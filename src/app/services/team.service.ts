import { Injectable } from '@angular/core';

export interface Team{
  nombre: string;
  description: string;
  img: string;
  edad: string;
  technologies: string;
}

@Injectable()
export class TeamSerice {
  private team: Team[] = [
    {
      nombre: 'Saul Israel Tzakum Ochoa',
      description: 'Web developer with knowlegde in MEAN stack',
      img: 'assets/img/aquaman.png',
      edad: '21',
      technologies: 'JavaScript, Python, C++, MySql, PostgreSQL, MongoDB, Node JS, Express, Hapi, Flask, Java, HTML, CSS, Angular'
    },
    {
      nombre: 'Juan Alberto López Ix',
      description: 'Web developer with knowlegde in MEAN stack',
      img: 'assets/img/batman.png',
      edad: '21',
      technologies: 'JavaScript, Python, C++, MySql, PostgreSQL, MongoDB, Node JS, Express, Hapi, Flask, Java, HTML, CSS, PHP, Vue JSyqwerty'
    },
    {
      nombre: 'Angel Alejandro Ruiz May',
      description: 'Web developer with knowlegde in MEAN stack',
      img: 'assets/img/daredevil.png',
      edad: '21',
      technologies: 'JavaScript, Python, C++, MySql, PostgreSQL, MongoDB, Node JS, Express, Angular, Java, HTML, CSS'
    }
  ];

    constructor() {}

    getTeam(): Team[] {
      return this.team;
    }

}
