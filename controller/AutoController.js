import AutoModel from "../model/autoModel.js";
import AutokView from "../view/AutokView.js";

class AutoController {
  constructor() {
    const autoModel = new AutoModel();
    autoModel.adatBe("../adat.json", this.autoAdatok);
    $(window).on("dbModositasHozzaad", (event) => {
      autoModel.onDbSzamHozzaad(event.detail, this.autoAdatok);
    });
    $(window).on("dbModositasLevesz", (event) => {
      autoModel.onDbSzamLevesz(event.detail, this.autoAdatok);
    });
  }
  autoAdatok(tomb) {
    let szuloelem = $("main");
    szuloelem.html("");
    new AutokView(tomb, szuloelem);
  }
}
export default AutoController;
