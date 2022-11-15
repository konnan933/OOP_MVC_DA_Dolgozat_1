class AutoView {
  constructor(data, szuloElem) {
    this.data = data;
    szuloElem.append(`
    <div class="kartya">
        <h2>${data.marka}</h2>
        <p>${data.loero}</p>
        <p>${data.dbSzam}</p>
        <div>
        <button id=${data.id}h>Hozzáad</button>
        <button id=${data.id}l>Levesz</button>
        </div>
    </div>`);

    this.hozzaAdGombElem = $(`#${this.data.id}h`);
    this.leveszGombElem = $(`#${this.data.id}l`);

    this.hozzaAdGombElem.on("click", () => {
      this.kattintasTrigger("dbModositasHozzaad");
    });
    this.leveszGombElem.on("click", () => {
      this.kattintasTrigger("dbModositasLevesz");
    });
  }
  kattintasTrigger(esemenyNev) {
    const esemeny = new CustomEvent(esemenyNev, { detail: this.data });
    window.dispatchEvent(esemeny);
  }
}
export default AutoView;
