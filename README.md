# Polling System API

 File Structure: 
---
      ├── config                  # Contains Mongodb Configuration file
      ├── controllers             # Controllers for our api.
      ├── models                  # Models for our database (Option Mode and Question Model). 
      ├── routes                  # Routes for our API
      ├── .env                    # Environment Variables for dotenv
      ├── server.js               # Starting file for our server
      └── README.md


Routes: 
---
- /questions/create (To create a question)
- /questions/:question_id/options/create (To add options to a specific question)
- /questions/:question_id/delete (To delete a question)
- /options/:option_id/delete (To delete an option)
- /options/:option_id/add_vote (To increment the count of votes)
- /questions/:question_id (To view a question and it’s options)
