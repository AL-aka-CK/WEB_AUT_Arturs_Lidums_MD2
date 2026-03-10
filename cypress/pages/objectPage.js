export class ObjectPage {
  static visit() {
    cy.visit("https://katalon-demo-cura.herokuapp.com/");
  }
  static get makeAppointmentBtn() {
    return cy.get("#btn-make-appointment");
  }
  static get usernameField() {
    return cy.get("#txt-username");
  }
  static get passwordField() {
    return cy.get("#txt-password");
  }
  static get loginBtn() {
    return cy.get("#btn-login");
  }
  static get facilitySelect() {
    return cy.get("#combo_facility");
  }
  static get readmissionCheckbox() {
    return cy.get("#chk_hospotal_readmission");
  }
  static get medicaidRadio() {
    return cy.get("#radio_program_medicaid");
  }
  static get dateField() {
    return cy.get("#txt_visit_date");
  }
  static get commentField() {
    return cy.get("#txt_comment");
  }
  static get bookBtn() {
    return cy.get("#btn-book-appointment");
  }
  static get confirmation() {
    return cy.get("#summary");
  }
  static get menuToggle() {
    return cy.get("#menu-toggle");
  }
  static get sidebar() {
    return cy.get("#sidebar-wrapper");
  }
}