describe("Test suite", () => {
  beforeEach(() => {
    cy.viewport(1024, 768);
    cy.visit("../../mockup.html");
  });
  it("First test", () => {
    cy.contains("Registration Info").should("exist");
  });
});
