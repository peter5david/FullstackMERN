# Hyperion Dev Task 61

## System Architecture:

##### This is a readme file for my final project at Hyperion Dev

The task is to create a Full stack MERN application

I built up the webpage with the following technologies:
- **React:** used for the frontend to display for the users
    - *react-router-dom:* module has been used for the navigations between the pages
- **Express, Node.js:** used for the backend programming
  - *nodemon:* used at the backend to update the webpage all the times when changes has made
  - *jsonwebtoken:* used at the backend for the login (JWT authentication)
  - *mongoose, morgan, cors, dotenv:* used for the database
- **MongoDB:** used for the database to store the datas(more collections, for more details)
    - one collections table for the users
    - one collections table for the holidays requests
    - one collections for the complaints
    - one collections for the news
- **HTML, CSS:** used for the desing of the frontend, to get a well presented User Interface (UI)

### This app will deploy with the npm start 
```sh
npm start
```
- The website will be available under **git hub** and on under **my domain** too.

## System requirements:
### This application will be used for my company, my staffs / managers will use it
#### Functions of the website:
- Non registered users able to give complaint if they are unhappy with the service, staff, ect
- All of the staff member can registrate to the webiste
- During the registration they will choose a password, will upload all of the informations about themself (address, phone number, emergency details, payroll details, etc)
- If any changes in the details (address, phone number) they will be able to modify it on a modify tab
- the staffs can requests holiday, the manager can take a look and he can approve it or decline the requested holiday
- manager can read all of the complaint an mark if he reply for the customr (or send an email or text, or called them)
- at the admin portal I will be able to change the access for the staff (staff member, mangager, or admin)
- different listings (active staffs, emargency details, payroll details, inactive staff)
- admin will be able to put staffs inactive status
- This all website datas will be stored in a DB

#### Non-functional requirements:
- Clear User Interface, to make sure easy to find everything on a website
- Back ups, to make saving if the system is down or damaged
- Security: only if they are logged in able to use the site and more access type (staff, manager, admin)
- security to make sure the members can not see each others details (only admin can see all of the details of the members)


## user stories:

- as an unhappy customer like to give a feedback. I visit the website, click on the make a complaint tab which will be address me to a form where I can forward my complaint to the company

- as a manager I would like to check if we received any complaints. I log in to the website, navigate to the complains and I can easily check if any new complaint arrived

- as a member of staff, would like to book a holiday. I log in to the webpage, go to the staff portal and press the holiday request tab. I can choose the from to date, and send a request. I can keep on eye on a approved holiday tab to check if my request was approved or not

- as a member of staff I have changed house, I login to the webpage, go to the staff portal and press modify details, I add my new address and press the change address button 

- as a business owner I need to contact one of my previous employee. I log in to the website, go to the admin portal and click the inactive. I would get the list of all of my previous employee so I can find the contact details who I look for