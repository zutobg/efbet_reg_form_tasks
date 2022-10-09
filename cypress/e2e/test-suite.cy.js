describe("Test suite", () => {
  let user;
  before(() => {
      cy.fixture('example').then((regdata) => {
         user=regdata
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
     .type(user.name)
     cy.get('input[name="birthday"]')
     .type(user.birthday)
     cy.get('select[name="gender"]').select(user.gender, { force: true }).should('have.value', 'Male')
     cy.get('select[name="Phone Prefix"]').select(user.prefix, { force: true }).should('have.value', '+359')
     cy.get('input[name="Phone Number"]')
     .type(user.phone)
     cy.get('input[name="EGN"]')
     .type(user.egn)
     cy.get('button[type="submit"]')
     .click()
     //this test will fail because the web app console.js is not returning the data in the expected format in the given task assignment
     cy.on('window:alert', (str) => {
     expect(str).to.equal(`Name: John\nBirthday: 09 May 1974\nGender: male\nPhone: +359895113999\nEGN: 7405095407`)
     })
  });
  it("task5 test", () => {
    //faker-js name generation
    //faker-js random birthday between 18 and 75 y old
    //custom commands to generate egn based on gender and age(and the returned birthday by faker-js ofc) - what if the gender is type:other? - then the implementation will pass both male and female as a valid
    //return random number between 882 and 895 + append with random 6dig
    //random gender selector between 3 values
    //assert with window:alert the submitted form data
    //regex for the front end validation of the whole phone number
  });
});
