describe("Test suite", () => {
  let data;
  before(() => {
      cy.fixture('example').then((regdata) => {
         data=regdata
      })
  })
  beforeEach(() => {
    cy.viewport(1024, 768);
    cy.visit("../../mockup.html");
  });
  it("First test", () => {
    cy.contains("Registration Info").should("exist");
  });
  it("task4 test", () => {
     cy.get('input[name="name"]')
     .type(data.name)
     cy.get('input[name="birthday"]')
     .type(data.birthday)
     //cy.get('input[name="Phone Number"]')
     //.click()
     cy.get('select[name="gender"]').select(data.gender, { force: true }).should('have.value', 'Male')
     cy.get('select[name="Phone Prefix"]').select(data.prefix, { force: true }).should('have.value', '+359')
     cy.get('input[name="Phone Number"]')
     .type(data.phone)
     cy.get('input[name="EGN"]')
     .type(data.egn)
     cy.get('button[type="submit"]')
     .click()
     cy.on('window:alert', (str) => {
     expect(str).to.equal(`Name: John\nBirthday: 09 May 1974\nGender: male\nPhone: +359895113999\nEGN: 7405095407`)
})
  });
});
