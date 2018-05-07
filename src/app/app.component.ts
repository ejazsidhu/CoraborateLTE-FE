import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public  logo_lg= require('../assets/images/CoraborateSmallIcon.png');
  public  logo_mini= require('../assets/images/CoraborateSmallIcon.png');
  public user_image=require("../assets/images/user2-160x160.jpg");
}
