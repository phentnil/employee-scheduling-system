# Employee Scheduling Senior Project

## Introduction

The project idea I have chosen to use is the Employee Scheduling System. The purpose of the system is to supply employers and employees a way to manage work schedules. The system will include components such as employees, shifts, and requests. A manager will initially upload or input employee data containing full-time status, assigned shift, shift preferences, and weekday preferences. All initial employee data, generated schedules, requests, employee users, and manager user will be stored in a database including changes made to these. Each employee record will be associated with a specified user account.

## Concept Description

In the employee scheduling system, managers will initially set up employees in the system via upload or form entry, including details such as availability, weekly required hours, and the primary shift each employee will work. This project is similar to other software programs such as [WhenIWork.com](https://wheniwork.com/), [Employee Scheduling by Workforce.com](https://workforce.com/software/scheduling-software), and [Employee Scheduling Software by Deputy.com](https://www.deputy.com/features/scheduling-software). These and other examples had similar features as this project, but few examples provided schedule generation capabilities.

### Data Storage

The employee scheduling system will store employee data, generated schedules, requests, and login data for employees and the manager in a database. User records for employees will be linked to the employee data used in the schedule generation. Requests will include the employee making the request, the date the request was created, the target date of the request, and actions taken by the manager or other employees when necessary.

### Schedule Generation

Managers will be able to generate new schedules based upon a specified date range. The schedule generation algorithm will consider the different pieces of employee data to fill the schedule. Requested days off for dates which will be included in the date range will be considered as well as each employee's full-time status, assigned shift, and their preferences.

### Schedule Publishing

Once the manager generates the schedule, the manager can review the schedule and make changes as needed. If there are no changes to be made or when they are satisfied with the changes they made, they can publish the schedule. Publishing the schedule will make it available to the employees and allow them to submit requests to the published schedule.

### Schedule Requests

Employees will be able to submit time-off requests for dates which are not included in published schedules. After the manager publishes schedules, employees will be allowed to request shift swaps and indicate shifts that they will not be able to work. This will alert the manager and provide options for responding to the request.

### Schedule Alerts

Alerts will be sent to any user where an action or request is relevant to them. If an employee creates a request for a day off on the published schedule, they will receive notification that the request was submitted and the manager will receive an alert that they have a new request to review. If an employee requests a shift swap with another employee, the other employee will also receive an alert of the request to either accept or reject the shift swap. If the manager makes a change to a published schedule, the employees whose schedules were affected will also receive an alert of the change.

### System API

This software could be used to generate schedules for teams with complex requirements and preferences. It will be able to generate schedules manually or automatically through the API using a manager's API key. The API will also be able to provide shift information to both managers and employees based on date, employee, shift, or a combination of these.

### Data Usage

The data in the system could be used to determine better scheduling for each work group's needs. This may include avoiding certain employee pairs because the manager always modifies these pairings. If patterns are recognized, the system could be improved to adjust to the patterns and generate better schedules in the future.

## Conclusion

The employee scheduling system will enable managers to spend less time trying to schedule employees around various constraints, especially in complex staffing situations. Once the employee data is submitted, the manager and their employees will be able to interact with each other on this system to find the scheduling solutions which are optimal for everyone.
