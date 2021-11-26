import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StarterScreenComponent } from './starter-screen/starter-screen.component';
import { RobotComponent } from './robot/robot.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RobotOutputComponent } from './robot-output/robot-output.component';
import { HttpClientModule } from '@angular/common/http';



const routes:Routes = [
  {
    path: '', component:StarterScreenComponent
  },
  {
    path: 'submitPlatue', component: RobotComponent
  },
  {
    path:'StartExploration', component: RobotOutputComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    StarterScreenComponent,
    RobotComponent,
    HeaderComponent,
    RobotOutputComponent,
   
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
