```bash
npm init -y
npm install express
npm install mysql2
npm install dotenv cors jsonwebtoken bcryptjs
npm install -D nodemon
npm install prisma --save-dev
npm install prisma@5 @prisma/client@5
npx prisma init => that helps to create prisma folder
"@prisma/client": "^5.22.0",
    "axios": "^1.13.6",
    "bcryptjs": "^3.0.3",
    "cors": "^2.8.6",
    "dotenv": "^17.3.1",
    "express": "^5.2.1",
    "express-list-endpoints": "^7.1.1",
    "jsonwebtoken": "^9.0.3",
    "mysql2": "^3.18.1",
    "prisma": "^5.22.0"
```
<!-- 
1. firstly, edit type:commomjs from packagejson to module

2.Inorder to connect to mysql we need to edit on prisma by default it connect Postgresql but to connect it we have to pass some url beneath under some variables(inbuilt)
 -->
 
