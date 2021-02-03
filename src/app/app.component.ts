import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'barzellette-in-componenti';

  titoloBarzelletta1 = "The grasshopper";
  contenutoBarzelletta1 = [
    "A grasshopper hopped into a bar",
    "Bartender: Hey, we have a drink named after you.",
    "Grasshopper: You have a drink named Bob?"];

  titoloBarzelletta2 = "Walking into a bar";
  contenutoBarzelletta2 = [
    "Two guys are walking down the street one saturday night.",
    "One walks into a bar.",
    "The other one ducks."];

    onClickedOutput(event: any) {
    console.log(event);
  }
}
