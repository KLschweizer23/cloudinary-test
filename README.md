# File and Cloudinary
This repository can upload and download files in [Cloudinary](https://cloudinary.com/). Files and other necessary informations are saved into the database using [PostgreSQL](https://www.postgresql.org/) in [Azure](https://azure.microsoft.com/en-us).

## APIs
### Person APIs
1. POST: /persons/add-person
   - [name, email]
2. GET: /persons/get-all
3. PUT: /persons/update-person
   - [id, name, email]
4. DELETE: /persons/delete-person
   - [id]

### File APIs
1. POST: /files/add-file
   - [file, person_id]
2. DELETE: /files/delete-file
   - [id]
3. PUT: /files/get-all-file
   - [person_id]
4. PUT: /files/get-single-file
   - [id]

**NOTE**: ```id``` means the id of the file, meanwhile ```person_id``` is the id of the person who owns the file.

**IMPORTANT POINTERS**
- File table has a different structure because to get the file from the [Cloudinary](https://cloudinary.com/), we have to get the file's ```resource_type``` therefore ```resource_type``` should be stored in the database to easily get the file.
- [Cloudinary](https://cloudinary.com/) has a different approach for ```URL``` unlike [Azure](https://azure.microsoft.com/en-us), it's given for each file once you upload it and has a different ```URL``` structure, therefore ```URL``` will be saved to the database for more efficient access.
