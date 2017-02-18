# Portfolio: Database People Skills

Project 3 - H8

## Usage

npm install, npm run dev

## Routes

| Endpoints                               |  HTTP  | Description                                   |
|-----------------------------------------|:------:|-----------------------------------------------|
| localhost:3000                          |   GET  | Get all data of users, skills and user_skills |
| localhost:3000/:id                      |   GET  | Get data by user's id                         |
| localhost:3000/addscore/:id/:skillid    |  POST  | Add score to user's skill                     |
| localhost:3000/addskill/:id             |  POST  | Add skill. Req.body.skillname is required     |
| localhost:3000/removeskill/:id/:skillid | DELETE | Delete any of user's skill                    |
