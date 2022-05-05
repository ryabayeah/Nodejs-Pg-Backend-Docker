# Nodejs-Pg-Backend-Docker API

Api docs V 1.0

Content-Type : application/json

## AUTH API

### /auth/me [ `GET` ] – check bearer token and return info about user 

Authorization : "bearer `your_token`"

response 
```js
	//400  
	message: "To access API you need token"
	
	//200  
	status: true,
	data: {
		id: String
		email: String
    		lastName?: Strung
    		firstName?: String
		
	}
```

<hr>

### /auth/login [`POST`] - return bearer token

request
```js
	{
	    email : String
	    password : String
	} 
```

response 
```js
	//400 
	message: "Incorrect login or password"
	
	//200  
	token: String
```

<hr>

### /auth/registration [`POST`]

request
```js
	{
	    email : String
	    password : String
      	    firstName? : String
            lastName? : String
	}
```

response 
```js
	//400 
        status : false,
        message: "This email already exists"

	//201 
	status: true,
	message: "User registered successfully"
```

<hr>


## USER API

### /user [`PUT`] – renew user data

Authorization : "bearer `your_token`"

request ANY FIELDS in body
```js
    id: Integer,
    email: String,
    firstName: String,
    lastName:  String,
    
```

response 
```js

  //500 
  status : false,
  message": err
  
  //200 
  status: true,
  message: "User successfully updated"
	
```

<hr>

### /user [`GET`] – get user data

Authorization : "bearer `your_token`"

response 
```js

  //500 
  status : false,
  message": err
  
  //200 
  status: true,
  data: result
	
```

response example
```js

  //500 
  status : false,
  message": err
  
  //200 
  status: true,
  data: {
    id: int,
    email: a@com,
    firstName: null,
    lastName: A
  }
	
```

<hr>

### /user [`DELETE`] – delete user

Authorization : "bearer `your_token`"

response 
```js

  //500 
  status : false,
  message": err
  
  //200 
  status: true,
  message: "User successfully deleted"
	
```

<hr>


### /user/all [`GET`] get all users


response 
```js
  	//500
	status: false,
	message: err

	//200
	[USERS]
```

## STORAGE API

### /storage/audios [ `GET` ] – get user audios

Authorization : "bearer `your_token`"

response 
```js
  	//400
	status: false,
	message: 'Get storage rows error'

	//200
	status: true,
	message: 'Get storage rows error',
	data: [ROWS]
```

<hr>

### /storage/videos [ `GET` ] – get user videos

Authorization : "bearer `your_token`"

response 
```js
  	//400
	status: false,
	message: 'Get storage rows error'

	//200
	status: true,
	message: 'Get storage rows error',
	data: [ROWS]
```

<hr>

### /storage/photos [ `GET` ] – get user photos

Authorization : "bearer `your_token`"

response 
```js
  	//400
	status: false,
	message: 'Get storage rows error'

	//200
	status: true,
	message: 'Get storage rows error',
	data: [ROWS]
```

<hr>


### /storage/files [ `GET` ] – get user files

Authorization : "bearer `your_token`"

response 
```js
  	//400
	status: false,
	message: 'Get storage rows error'

	//200
	status: true,
	message: 'Get storage rows error',
	data: [ROWS]
```

<hr>

### /storage/audio [ `POST` ] – create user audio

Authorization : "bearer `your_token`"

request ONLY FIELD in body
```js
    url: String
```

response 
```js
  	//400
	status: false,
	message: 'Already exists'

  	//400
	status: false,
	message: 'Creation new storage row error'
  
  
	//200
	status: true,
	message: 'Create new storage row successfully',
	data: result
```

<hr>

### /storage/video [ `POST` ] – create user video

Authorization : "bearer `your_token`"

request ONLY FIELD in body
```js
    url: String
```

response 
```js
  	//400
	status: false,
	message: 'Already exists'

  	//400
	status: false,
	message: 'Creation new storage row error'
  
  
	//200
	status: true,
	message: 'Create new storage row successfully',
	data: result
```

<hr>

### /storage/photo [ `POST` ] – create user photo

Authorization : "bearer `your_token`"

request ONLY FIELD in body
```js
    url: String
```

response 
```js
  	//400
	status: false,
	message: 'Already exists'

  	//400
	status: false,
	message: 'Creation new storage row error'
  
  
	//200
	status: true,
	message: 'Create new storage row successfully',
	data: result
```

<hr>

### /storage/file [ `POST` ] – create user file

Authorization : "bearer `your_token`"

request ONLY FIELD in body
```js
    url: String
```

response 
```js
  	//400
	status: false,
	message: 'Already exists'

  	//400
	status: false,
	message: 'Creation new storage row error'
  
  
	//200
	status: true,
	message: 'Create new storage row successfully',
	data: result
```

<hr>

### /storage/all [ `GET` ] – get all storage rows

response 
```js
  	//500
	status: false,
	message: 'Get all error'
  
	//200
	[ROWS]
```

<hr>

### /storage/row/:id [ `DELETE` ] – create user file

Authorization : "bearer `your_token`"


response 
```js
  	//400
	status: false,
	message: 'Deletion storage row error'
  
  
	//200
	status: true,
	message: 'Delete successfully'
```

<hr>

### /storage/row/:id [ `GET` ] – get user storage row

Authorization : "bearer `your_token`"


response 
```js
  	//400
	status: false,
	message: 'Get storage row error'
  
  
	//200
	status: true,
	message: 'Get storage row successfully',
  data: result
```

<hr>
