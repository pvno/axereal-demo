import { LightningElement, wire, track } from "lwc";
import { refreshApex } from "@salesforce/apex";
import getContratProductions from "@salesforce/apex/ContratProductionsController.getContratProductions";

export default class Banner extends LightningElement {
  @track ContratProductions;
  @track error;

  @wire(getContratProductions)
  wiredContratProductsions({ error, data }) {
    if (data) {
      this.ContratProductions = data;
      this.error = undefined;
      console.log("### " + this.ContratProductions);
    } else if (error) {
      this.error = error;
      this.ContratProductions = undefined;
      console.log("### " + this.error);
    }
  }
}