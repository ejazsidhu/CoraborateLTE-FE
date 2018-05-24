import { Component, OnInit } from '@angular/core';
import{ organizeclassescomponentservice} from './organize-classes.component.service';
@Component({
  selector: 'app-organize-classes',
  templateUrl: './organize-classes.component.html',
  styleUrls: ['./organize-classes.component.css']
})
export class OrganizeClassesComponent implements OnInit {

  constructor( private os:organizeclassescomponentservice ) { }

  ngOnInit() {
    
  }

  // GetOwnedClasses(UserId: number): void{

    
  //   this.os.GetOwnedClasses(UserId).subscribe(data => {

  //       // this.ClassesOwnedobj.push(data.ClassesOwned),
  //           // console.log(this.ClassesOwnedobj);
  //   },
  //       Error => {  });}

}
