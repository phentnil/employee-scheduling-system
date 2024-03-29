# Employee Scheduling System

Welcome to my Senior Capstone Project: the Employee Scheduling System!

The Employee Scheduling System enables employers and employees a way to manage work schedules. The system will generate schedules for a team of employees based on shift assignments and weekly hours. The manager will initially upload or input each employee's information. The system will generate a username for each employee so they can access the schedule and request changes to the schedule.

## Table of Contents

- [Employee Scheduling System](#employee-scheduling-system)
  - [Table of Contents](#table-of-contents)
  - [Concept Description](#concept-description)
    - [Data Storage](#data-storage)
    - [Schedule Generation](#schedule-generation)
    - [Schedule Publishing](#schedule-publishing)
    - [Schedule Requests](#schedule-requests)
    - [Schedule Alerts](#schedule-alerts)
    - [System API](#system-api)
    - [Data Usage](#data-usage)
  - [Solution Architecture Diagram](#solution-architecture-diagram)
    - [Initial Registration Diagram](#initial-registration-diagram)
    - [Schedule Generation Diagram](#schedule-generation-diagram)
  - [Wireframe Sketches](#wireframe-sketches)
    - [Home Page](#home-page)
    - [Login Page](#login-page)
    - [Employee Page](#employee-page)
    - [Manager Page](#manager-page)
  - [User Stories](#user-stories)
  - [Use Cases](#use-cases)
  - [Use Case Diagram](#use-case-diagram)
  - [Table of Requirements](#table-of-requirements)
  - [ERD](#erd)
  - [UML Class Diagram](#uml-class-diagram)
  - [Prototype](#prototype)
  - [Data Access Layer](#data-access-layer)
    - [API Index Route](#api-index-route)
    - [API Employees Route](#api-employees-route)
    - [API Requests Route](#api-requests-route)

## Concept Description

The manager will initially set up employees in the system via upload or form entry. The upload will allow managers to upload a CSV file including the employees on their team, but a form will be available to enter employees one at a time. The employee information will include assigned shift and weekly required hours. The system will enter the manager automatically as the first employee with no hourly requirements. This enables the manager to place themselves on the schedule in case of open shifts or other scenarios as needed.

The manager will request a generated schedule for their team for a specified date range. They will be able to adjust the schedule before publishing to the team.

Employees will be able to view published schedules and request changes such as swapping shifts with another employee.

Employees will receive notifications of actions involving them, such as another team member requesting a shift swap or the manager moving their shift.

The manager will receive notifications of requests from employees for changes to a published schedule.

This project is like other software programs such as:

- [WhenIWork.com](https://wheniwork.com/)
- [Employee Scheduling by Workforce.com](https://workforce.com/software/scheduling-software)
- [Employee Scheduling Software by Deputy.com](https://www.deputy.com/features/scheduling-software)

These and other examples had similar features as this project, but few examples supplied schedule generation capabilities.

[^ Back to top](#employee-scheduling-system)

### Data Storage

The employee scheduling system will store employee data, generated schedules, and requests in a database. Requests will include:

- Date the request was created
- Employee making the request
- Target date of the request
- Actions taken by the manager or other employees when necessary

[^ Back to top](#employee-scheduling-system)

### Schedule Generation

The manager will be able to generate new schedules based upon a specified date range. The schedule generating algorithm will gather the following data:

- Employees
  - Shift
  - Weekly Hours
- Requests
  - Days off for dates within the date range

It will try to find a solution that meets each of the basic requirements, such as:

- Ensuring each employee meets their weekly hours
- Ensuring each employee is able to be placed on their assigned shift
- Ensuring accommodation of requested days off

[^ Back to top](#employee-scheduling-system)

### Schedule Publishing

Once the system generates the schedule, the manager can review the schedule and make changes as needed. If there are no changes or when they are satisfied with the changes they made, they can publish the schedule. Publishing the schedule will make it available to the employees and allow them to submit requests to the published schedule.

[^ Back to top](#employee-scheduling-system)

### Schedule Requests

Employees will be able to place time-off requests for unpublished dates. After the manager publishes schedules, employees will be allowed to request schedule changes such as swapping shifts with another employee. Requests will alert the manager and supply options for responding to the request.

[^ Back to top](#employee-scheduling-system)

### Schedule Alerts

The system will send alerts to any user where an action or request is relevant to them. If an employee creates a request for a day off on the published schedule, they will receive notification that the system received the request submission, and the manager will receive an alert that they have a new request to review. If an employee requests a shift swap with another employee, the other employee will also receive an alert of the request with options to either accept or reject the shift swap. The manager will be able to reject or accept the shift swap after the other employee has accepted and the manager is able to reject before the other employee responds. If the manager makes a change to a published schedule, the affected employees will also receive an alert of the change.

[^ Back to top](#employee-scheduling-system)

### System API

Teams with complex requirements and preferences could use this software to generate schedules. It will be able to generate schedules manually or automatically through the API using a manager's API key. The API will also be able to provide shift information to both managers and employees based on date, employee, shift, or a combination of these.

[^ Back to top](#employee-scheduling-system)

### Data Usage

The system could use the data to figure out better scheduling for each work group's needs. This may include avoiding certain employee pairs because the manager always changes these pairings. If the system can identify patterns, the system could be improved to adjust to the patterns and generate better schedules in the future.

[^ Back to top](#employee-scheduling-system)

## Solution Architecture Diagram

[![Solution Architecture Diagram](images/SolutionArchitectureDiagram.jpg "Solution Architecture Diagram")](images/SolutionArchitectureDiagram.jpg)

Within the Employee Scheduling System, each group of employees will be called a **Team**. Each team will contain all the employees of the team, including the manager. The manager role is a special type of employee. The diagram illustrates the team structure in the following image:

[![Team Structure](images/TeamStructure.jpg "Team Structure")](images/TeamStructure.jpg)

[^ Back to top](#employee-scheduling-system)

### Initial Registration Diagram

The flowchart diagram illustrates the process of registering the team in the following image:

[![Team Registration](images/TeamRegistration.jpg "Team Registration")](images/TeamRegistration.jpg)

[^ Back to top](#employee-scheduling-system)

### Schedule Generation Diagram

The flowchart diagram illustrates the process for generating a new schedule in the following image:

[![Schedule Generation](images/ScheduleGeneration.jpg "Schedule Generation")](images/ScheduleGeneration.jpg)

[^ Back to top](#employee-scheduling-system)

## Wireframe Sketches

The website will contain at least four primary pages:

- [Home Page](#home-page)
- [Login Page](#login-page)
- [Employee Page](#employee-page)
- [Manager Page](#manager-page)

[^ Back to top](#employee-scheduling-system)

### Home Page

[![Home Page](images/Wireframe-HomePage.jpg "Home Page")](images/Wireframe-HomePage.jpg)

The home page will present an introduction of the service and instructions for team managers to set up their team.

[^ Back to top](#employee-scheduling-system)

### Login Page

[![Login Page](images/Wireframe-LoginPage.jpg "Login page")](images/Wireframe-LoginPage.jpg)

The login page will provide a basic login form and additional links for registering a new team and password recovery.

[^ Back to top](#employee-scheduling-system)

### Employee Page

[![Employee Page](images/Wireframe-EmployeePage.jpg "Employee Page")](images/Wireframe-EmployeePage.jpg)

When an employee logs in, the employee page will display the monthly calendar. The shifts of the current week for the employee logged in will display in a list to the right of the calendar. The employee can select shifts on both the calendar and in the list, where options will be shown to submit requests for the selected shift.

[^ Back to top](#employee-scheduling-system)

### Manager Page

[![Manager Page](images/Wireframe-ManagerPage.jpg "Manager Page")](images/Wireframe-ManagerPage.jpg)

When the manager logs in, the manager page will display the monthly calendar similar to the employee view. However, the shift list to the right will show all employee shifts over the next few days. The manager view will also include an indicator for active requests from employees and a button to enable modifying employees, shift information, or other necessary modifications.

[^ Back to top](#employee-scheduling-system)

## User Stories

1. As the manager, I need to be able to manage my employees so that I can add new employees, remove former employees, and modify their specific details.
2. As an employee, I need to be able to submit schedule change requests so that I can request shift swaps and days off.
3. As the manager, I need to see schedule change requests so that I may respond to each one as quickly as possible.
4. As an employee, I need to see shift swap requests from other employees so that I may indicate my acceptance or rejection of the proposed shift swap.
5. As an employee, I need to see changes to my schedule in real time so that I'm reporting to the correct location as indicated by the manager.

[^ Back to top](#employee-scheduling-system)

## Use Cases

1. The manager can modify employees to their team through the `Team Management` dialog. On the manager view, the `Manage` button will open this dialog, which will show buttons to `Add Employees`, `Edit` each employee entry, and `Delete` employee entries. The `Add Employee` dialog will show a form for the manager to enter employee details. The `Edit` dialog will show a form for the selected employee and will save changes after clicking the `Save` button.
2. Employees can request shift swaps through the `Schedule Change` dialog. On the employee view, the employee can select the shift on the calendar or shift list. This will open the dialog in which the employee will be able to indicate `day off` or `shift swap`. The `shift swap` option will show a list of shifts available to swap in the same week.
3. Employees can request days off through the `Time Off Request` dialog. On the employee view, the employee can select a date outside of the current schedule range, which will open the dialog. Submitting a time off request will not alert the manager but will be used in future schedule generation.
4. The manager can respond to `Schedule Change Requests` in the `Requests` dialog. On the manager view, the manager can see the notification icon indicating new requests. When they click on the `Requests` button, the `Requests` dialog will open with a list of active requests. Each request will include options to `Accept` or `Reject` each one.
5. Employees can respond to shift swaps in which other employees have submitted requests for one of their assigned shifts. The affected shifts will appear with an exclamation point icon. When they click on these shifts, they will see the `Request` dialog showing the details of the shift swap and will be able to `Accept` or `Reject` the request.

[^ Back to top](#employee-scheduling-system)

## Use Case Diagram

[![Use Case Diagram](images/UseCaseDiagram.jpg "Use Case Diagram")](images/UseCaseDiagram.jpg)

[^ Back to top](#employee-scheduling-system)

## Table of Requirements

|  Id   | Requirement                                                                                                                      |
| :---: | :------------------------------------------------------------------------------------------------------------------------------- |
|   1   | The software shall allow the manager to request a new generated schedule.                                                        |
|   2   | The software shall allow the manager and team members to view published schedules when logged in.                                |
|   3   | The software shall allow the manager to view, modify, and publish generated schedules.                                           |
|   4   | The software shall allow employees to request days off for unpublished dates.                                                    |
|   5   | The software shall allow employees to request shift swaps for published dates.                                                   |
|   6   | The software shall allow the manager to review day off and shift swap requests with options to `Approve` or `Deny` each request. |
|   7   | The software shall allow a specified employee to `Approve` or `Deny` shift swaps requested by another employee.                  |
|   8   | The software shall allow managers to add, modify, and remove employees.                                                          |

[^ Back to top](#employee-scheduling-system)

## ERD

[![Chen-style Entity Relationship Diagram](images/ERD-Chen.jpg "Chen-style Entity Relationship Diagram")](images/ERD-Chen.jpg)

[^ Back to top](#employee-scheduling-system)

## UML Class Diagram

[![UML Class Diagram](images/UML-Class-Diagram.jpg "UML Class Diagram")](images/UML-Class-Diagram.jpg)

[^ Back to top](#employee-scheduling-system)

## Prototype

The prototype for this project can be found [here](/prototype/README.md) (`/prototype/README.md`) and the prototype demo can be found [here](https://phentnil.github.io/prototype/)

[^ Back to top](#employee-scheduling-system)

## Data Access Layer

The API for this project was built in [Node.js](https://nodejs.org/en) using [Express](https://expressjs.com/) for routing and [MongoDB](https://www.mongodb.com/) for data storage. I built routes for the "index", "employees", and "requests" paths and the results can be seen in the following sections. The source code can be found [here](/data-access/README.md)

[^ Back to top](#employee-scheduling-system)

### API Index Route

Navigating to the main url with no other path information (`"<baseUrl>/"`) provides both employees and requests collections in JSON format. I was able to fold the employees data to show that both collections are returned.

[![Index Route](images/API-index.jpg "Index Route")](images/API-index.jpg)

[^ Back to top](#employee-scheduling-system)

### API Employees Route

Navigating to the employees path (`"<baseUrl>/employees"`) provides the employees collection in JSON format as shown below.

[![Employees Route](images/API-employees.jpg "Employees Route")](images/API-employees.jpg)

[^ Back to top](#employee-scheduling-system)

### API Requests Route

Navigating to the requests path (`"<baseUrl>/requests"`) provides the requests collection in JSON format as shown below.

[![Requests Route](images/API-requests.jpg "Requests Route")](images/API-requests.jpg)

[^ Back to top](#employee-scheduling-system)
