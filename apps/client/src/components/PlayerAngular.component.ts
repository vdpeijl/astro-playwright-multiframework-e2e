import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  selector: "app-player-angular",
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <sowiso-keyboard></sowiso-keyboard>
    <sowiso-player></sowiso-player>
  `,
})
export class PlayerAngular {}
