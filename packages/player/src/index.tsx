import { createRoot, Root } from "react-dom/client";
import { Title } from "@sowiso/shared";

export class Player extends HTMLElement {
  reactRoot: Root | null = null;
  container: HTMLElement | null = null;

  constructor() {
    super();
    console.log("Player ");
  }

  connectedCallback() {
    if (!this.reactRoot) {
      this.container = document.createElement("div");
      this.appendChild(this.container);
      this.reactRoot = createRoot(this.container);
    }
    this.renderReactComponent();
  }

  renderReactComponent() {
    if (this.reactRoot) {
      this.reactRoot.render(<Title>Sowiso Player</Title>);
    }
  }
}
