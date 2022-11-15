class AutoModel {
  #autoTomb = [];

  constructor() {}

  adatBe(vegpont, myCallBack) {
    fetch(vegpont, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.#autoTomb = data.autok;
        myCallBack(this.#autoTomb);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  onDbSzamHozzaad(data, myCallBack) {
    const index = this.#autoTomb.findIndex((auto) => {
      return data.id === auto.id;
    });
    data.dbSzam += 1;
    this.#autoTomb[index] = data;
    myCallBack(this.#autoTomb);
  }
  onDbSzamLevesz(data, myCallBack) {
    const index = this.#autoTomb.findIndex((auto) => {
      return data.id === auto.id;
    });
    data.dbSzam -= 1;
    this.#autoTomb[index] = data;
    myCallBack(this.#autoTomb);
  }
}
export default AutoModel;
