# Portfolio: Database People Skills

Project 3 - H8

## Usage

npm install, npm run dev

|            Routes           | HTTP | Description                                                                               |
|:---------------------------:|:----:|-------------------------------------------------------------------------------------------|
|        localhost:3000       |  GET | Get all data: users, skills and user_skills                                               |
|      localhost:3000/:id     |  GET | Get data by user's id                                                                     |
| localhost:3000/addscore/:id | POST | User can addscore to any of their skill. Req.body.skillid and req.body.score are required |
| localhost:3000/addskill/:id | POST | User can addskill. Req.body.skillname is required                                         |
