
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

Description :
-	CRM pipeline management application using Angular. The  application should be able to fetch contacts data from a CRM Deals API endpoint 
and enable users to manage these Deals in multiple pipeline stages.
-	A CRM pipeline is a visual representation of the sales process, divided into multiple  stages. Each stage represents a particular step in the process, such as Lead, Contacted, Qualified, Proposals, Closed Won, and Closed Lost. A CRM pipeline allows sales teams to track and manage their leads and opportunities more efficiently.
-	Application should fetch deals data from a public CRM Contacts API endpoint. For this assignment, use the following dummy API endpoint 
-	The application should provide a search functionality to search for contacts based on first name, last name, or email.


Components :
-stage component -> Every Stage component has a deal object and also every stage can have one deal or more.
-deal component -> Every deal component has id, first name, last name, email, phone, company, status, date, probability status(percentage), And deal state.
- Navigation Bar


Features :
-	Each stage has one or more deal . user can drag and drop deals between stages .
-	User can search for a specific deal using first name , last name or mail .


Techniques :
-	user search using first name , lastname or mail using custom pipe filter.
-	Drag , drop deals using cdkdrag.


To run the application, follow these steps:
1- Clone this repository: git clone https://github.com/mareezphilip/pipline-new.git .
2- Install the dependencies: cd angular-deals-pipeline && npm install
3- Start the application: npm start
4- Open the application in your browser: http://localhost:4200

