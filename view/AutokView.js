import AutoView from "../view/AutoView.js";

class AutokView {
  constructor(data, szuloElem) {
    data.forEach((auto) => {
      new AutoView(auto, szuloElem);
    });
  }
}
export default AutokView;
