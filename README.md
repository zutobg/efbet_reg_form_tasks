### This repo will contain the test plan, test cases and the cypress code for their GUI automation
## TEST PLAN
  We have a web form component which needs to guide the user into entering his account details. This form will be used on different labels and jurisdictions on a web app for registering new users into the system. We want to validate that this form is sufficient to support further development and be used to implement the whole registering workflow of the system.
  
  Our task is to verify the GUI of the registering form. This form will not be connected with an back end and/or API at this point. The placeholders, value fields, page meta data and Submit button are the elements under tests.
  
  ![image](https://user-images.githubusercontent.com/6935686/194725786-070b7b86-aaeb-4f25-8c75-1aa97903c103.png)

  We will validate the web form on both Desktop(UHD) and Mobile/Tablet(responsive) viewports:
  - 320/360
  - 420
  - 768
  - 1024
  - 1280
  - 1440
  - 1920
  - 2560
  - 3000
  
  We will verify the web form on the following browsers:
  - Chrome
  - Firefox
  - Safari
  - Opera
  - Edge
  
  We will also make sure that on hover with the mouse(or focus) over the element/field we will show a proper description tooltip with guidance for the user. Also navigation with a keyboard(TAB) and arrows(dropdown values) will be possible for all supported browsers.
  
  **Test cases** will be written for the 1st iteration of the testing activities. When they all pass the tester will perform exploratory testing based on the information provided by his colleagues and in case in doubts a Defect work item will be created for further discusiion and resolution.
  
  Exploratory testing will consist of both black and white box testing, along with UI/UX compatibility based on user needs defined by the jurisidiction where those web forms will be used. This test plan is based for our BG market and it will need to be further modified if we want this web form to be used on other markets/labels.
  
  After the manual verification of this web form is done, an automated solution with Cypress will cover the main functionalities and the regression testing of this component.
  
  A report with automation results will be send to selected emails after every nightly run.
  
  If requirements are followed by developers and there are no gaps in the implementation the ETA for this plan to be executed is 7 working days.
  
## MANUAL TEST CASES
1. Load form, fill data, do not submit, refresh
2. Load form, do not fill data, click on submit, verify front end validations for every field
3. Load form, fill data, submit, verify
4. Load form, try to write not supported values in the Birthday field, try to submit not valid data
5. Load form, try to execute SQL query or html alert by submitting the form with thos einvalid data
6. Load form, try to submit form with all available prefix values and different gender values
7. Load form, try to fill in Name field long strings (>255 chars) or special characters names (unicode)
8. Load form, try to fill letters in a number field or not a valid number based on the prefix selected
9. Load form, try to submit with not valid EGN
10. Load form, submit valid data, click on browser back button

## Automate the above simple scenarious
