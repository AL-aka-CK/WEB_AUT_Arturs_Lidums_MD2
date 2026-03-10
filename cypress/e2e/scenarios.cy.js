import { ObjectPage } from "../pages/objectPage";

describe("CURA Scenarios", () => {
  context("With demo login", () => {
    beforeEach(() => {
      ObjectPage.visit();
      ObjectPage.makeAppointmentBtn.click();
      cy.login("John Doe", "ThisIsNotAPassword");
    });

    it("Scenario 1 - Make an Appointment", () => {
      ObjectPage.facilitySelect.select("Seoul CURA Healthcare Center");
      ObjectPage.readmissionCheckbox.check();
      ObjectPage.medicaidRadio.click();

      ObjectPage.dateField.click();
      cy.get(".day").contains("30").click();

      ObjectPage.commentField.type("CURA Healthcare Service");
      ObjectPage.bookBtn.click();

      ObjectPage.confirmation.should("contain", "Seoul CURA Healthcare Center");
      ObjectPage.confirmation.should("contain", "Yes");
      ObjectPage.confirmation.should("contain", "Medicaid");
      ObjectPage.confirmation.should("contain", "30");
      ObjectPage.confirmation.should("contain", "CURA Healthcare Service");
    });

    it("Scenario 2 - Appointment history is empty", () => {
      ObjectPage.menuToggle.click();
      ObjectPage.sidebar.should("have.class", "active");

      cy.contains("History").click();
      cy.contains("No appointment").should("be.visible");
    });
  });
});