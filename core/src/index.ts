(async () => {
  const { Player } = await import("@sowiso/player");
  customElements.define("sowiso-player", Player);

  const { Keyboard } = await import("@sowiso/keyboard");
  customElements.define("sowiso-keyboard", Keyboard);
})();
