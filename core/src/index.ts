import { Player } from "@sowiso/player";
import { Keyboard } from "@sowiso/keyboard";

(() => {
  customElements.define("sowiso-player", Player);
  customElements.define("sowiso-keyboard", Keyboard);
})();
