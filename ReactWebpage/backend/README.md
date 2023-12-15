
# Node.js Backend with Redis

This is a simple Node.js backend application that uses Redis for data storage. It includes an endpoint for saving passwords with their respective strength values.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine.
- Redis server installed and running on your machine.

## Installation and Setup

Follow these steps to get your development environment set up:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/PughalBot/Ippopay-Assignment
   cd Ippopay-Assignment
   ```

2. **Install Node.js Dependencies**

   Inside the cloned directory, run:

   ```bash
   npm install
   ```

3. **Start the Redis Server**

   Ensure your Redis server is up and running. If you have Redis installed locally, start it with the following command:

   ```bash
   redis-server
   ```

   The default Redis configuration should be sufficient for local development.

## Running the Application

To start the application, run the following command in your terminal:

```bash
node server.js
```

The server should start, and you will see a message indicating it is running on a specific port (default is 5000).

## Usage

The application has the following endpoint:

- **POST /savePassword**: This endpoint expects a JSON payload with `password` and `strength` fields. Example request:

  ```json
  {
      "password": "yourPassword",
      "strength": "strong"
  }
  ```