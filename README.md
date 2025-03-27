# Cloud Native Calculator Microservice Development

## Project Overview
This practical exercise focuses on creating a lightweight microservice for arithmetic calculations using modern web development technologies. The goal is to build a flexible, robust calculator API that supports basic mathematical operations with comprehensive error handling and logging.

## Project Requirements
Our microservice will deliver the following core functionalities:
- Perform arithmetic operations via RESTful endpoints
- Implement robust input validation
- Provide clear error messaging
- Log application events and transactions

## Development Workflow

### Environment Setup
Before beginning, ensure you have the following tools installed:
- **Node.js**: Runtime environment for JavaScript
- **Visual Studio Code**: Recommended integrated development environment
- **Git**: Version control system

### Project Initialization
1. Create a new project directory
2. Initialize Node.js project
3. Install necessary dependencies (Express framework)

### API Design Considerations
We'll design four primary endpoints for mathematical operations:
- Addition
- Subtraction
- Multiplication
- Division

Each endpoint will:
- Accept two numerical parameters
- Validate input
- Return computational results
- Handle potential error scenarios

### Implementation Strategy

#### Core Functionality
The microservice will:
- Parse query parameters
- Perform type conversion
- Execute arithmetic operations
- Return JSON-formatted responses

#### Error Handling Mechanisms
- Validate numerical inputs
- Prevent division by zero
- Generate meaningful error messages
- Provide appropriate HTTP status codes

### Logging Integration
Implement comprehensive logging using Winston to:
- Record transaction details
- Track application events
- Facilitate debugging and monitoring
- Generate persistent log files

### Development Steps
1. Create project structure
2. Implement server logic
3. Configure routing
4. Add input validation
5. Integrate logging
6. Test endpoints

## Technical Implementation Highlights

### Endpoint Structure
```javascript
app.get('/operation', (req, res) => {
    // Input parsing
    // Validation
    // Computation
    // Logging
    // Response generation
});
```

### Logging Configuration
```javascript
const logger = winston.createLogger({
    level: 'info',
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logs/app.log' })
    ]
});
```

## Deployment and Submission

### Version Control
- Initialize Git repository
- Commit code changes
- Push to GitHub

### Submission Requirements
- Functional microservice
- Comprehensive README
- Well-documented code
- Operational logging mechanism

## Learning Outcomes
By completing this project, you will:
- Understand microservice architecture
- Learn RESTful API design
- Practice Node.js development
- Implement error handling
- Utilize logging frameworks

## Conclusion
This practical exercise provides a foundational approach to developing a cloud-native microservice, emphasizing modularity, error resilience, and observability.
