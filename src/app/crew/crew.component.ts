import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-crew',
    templateUrl: './crew.component.html',
    styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

    crew: object[] = [
        {name: "Eileen Collins", firstMission: false},
        {name: "Mae Jemison", firstMission: false},
        {name: "Ellen Ochoa", firstMission: true}
    ];

    memberBeingEdited: object = null;

    constructor() { }

    ngOnInit() {
    }

    add(newName: string, newIsFirst: boolean): void {
        this.crew.push({name: newName, firstMission: newIsFirst});
    }

    remove(crewMember: object): void {
        let index = this.crew.indexOf(crewMember);
        this.crew.splice(index, 1);
    }

    edit(member: object): void {
        this.memberBeingEdited = member;
    }

    save(newName: string, member: object):void {
        member['name'] = newName;
        this.memberBeingEdited = null;
    }

}
