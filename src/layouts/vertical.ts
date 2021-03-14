import { CardConfigGroup } from "../types";
import { BaseColumnLayout } from "./base-column-layout";

class VerticalLayout extends BaseColumnLayout {
  async _placeColumnCards(cols: Array<Node>, cards: CardConfigGroup[]) {
    let i = 1;
    for (const c of cards) {
      if (c.config.layout?.column) i = c.config.layout.column;
      const col = cols[(i - 1) % cols.length];
      col.appendChild(this.getCardElement(c));
      if (this.isBreak(c.card)) {
        i = i + 1;
      }
    }
  }
}

customElements.define("vertical-layout", VerticalLayout);
