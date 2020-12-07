# student-records

## apis are listed below

### 1. To signup use this [http://localhost:2020/teacher/signup](http://localhost:2020/teacher/signup) link in postman to test the results

### 2. To signin use this [http://localhost:2020/teacher/signin](http://localhost:2020/teacher/signin) link in postman to test the results

### 3. To add records use this [http://localhost:2020/record/create](http://localhost:2020/record/create) 

### 4. To edit the existing records use this [http://localhost:2020/record/id of the record ](http://localhost:2020/record/update/id) you can get the id by fetching  all records public api

### 5. To delete the records use this [http://localhost:2020/record/delete/id](http://localhost:2020/record/delete/id)  link in postman


### 6. the above apis needs teacher to login and it is checked by jwt token 

### 7. to use the above routes add the auth_token field in header ,jwt  generates a token  when teacher logs in so, use it wisely.

### 8. finally the public api to show all the results based on teacher updation use this [http://localhost:2020/record/api/public](http://localhost:2020/record/api/public) link and test the results.
