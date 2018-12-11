class Document {
    constructor(id, date, amt) {
        this.id_document = id;
  
        this.dt_date = date;
        this.amount = amt;

        this.rows = new Array();
    }
}