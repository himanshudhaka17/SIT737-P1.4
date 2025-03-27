Calculator Microservice Using Node.js & Express
Overview
This project involves developing a RESTful API microservice capable of executing fundamental mathematical operations, including addition, subtraction, multiplication, and division. It is built using Node.js and Express.js and employs Winston for logging purposes.
Project Setup
1.	Create the Project Directory – Begin by setting up a new folder for the project.
2.	Initialize Node.js – Run npm init -y to generate a package.json file.
3.	Install Express – Install the Express.js framework using npm install express.
 
Importing Dependencies
The project requires certain modules, including Express for handling HTTP requests and Winston for logging.
 
Configuring Winston Logger
•	Logs all incoming requests and errors.
•	Implements middleware to log requests before processing them.
 
Input Validation
•	Ensures that the inputs provided to the API are valid numbers.
•	Prevents errors by checking for missing or incorrect data.
 
API Implementation
•	Validates user inputs before performing operations.
•	Logs both successful transactions and errors.

 
Handling Errors (Division by Zero)
•	If division by zero occurs, an error is logged appropriately to prevent system crashes.
 
Logging System
•	Stores combined logs for all requests.
•	logs/error.log is dedicated to tracking errors.
 
Monitoring Logs in Real-Time
To observe logs as they are recorded, use the command:
Get-Content logs/combined.log -Wait
Setting Up Git and Pushing to GitHub
1.	Initialize Git with git init.
2.	Add files to the repository: git add ..
3.	Commit the changes: git commit -m "Initial commit".
4.	Link to a GitHub repository using: https://github.com/himanshudhaka17/SIT737-P1.4/tree/main
5.	Push the code to GitHub: git branch -M main  
git push -u origin main  

Starting the Server
Launch the application using:
node server.js
GitHub Repository: https://github.com/himanshudhaka17/SIT737-P1.4/tree/main
vailable API Endpoints
The following endpoints can be accessed for mathematical operations:
•	Addition: http://localhost:3000/add?num1=100&num2=20
 
•	Subtraction: http://localhost:3000/subtract?num1=100&num2=20
 
•	Multiplication: http://localhost:3000/multiply?num1=-10&num2=-20
 
•	Division: http://localhost:3000/divide?num1=-10&num2=-20
 


Conclusion:
This project creates a RESTful API using Node.js and Express.js to perform basic math operations. It includes input validation, error handling, and logging with Winston. The system is version-controlled with Git and hosted on GitHub, providing a solid foundation for building scalable microservices.



![image](https://github.com/user-attachments/assets/b5e32ccb-2984-403a-b9d5-a49ee5451f82)
