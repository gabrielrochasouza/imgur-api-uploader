# Simple API made with node js and express to upload files to imgur

Base url deployed:

https://imgur-api-uploader.onrender.com/

### This api uploads a image file to the cloud, and returns a link, so you can use it in any application on the web you want! It was deployed on render

### <strong>Main Route:</strong> 

## POST -> <strong>endpoint:</strong>  /upload/

- request example:
```
curl --request POST \
  --url https://imgur-api-uploader.onrender.com/upload/ \
  --header 'Content-Type: multipart/form-data' \
  --form sampleFile=@/home/gabriel/Imagens/man.jpg
```


- response example:

```
{
  "image_url": "https://i.imgur.com/bw9VM3i.png"
}
```

## Getting started:

- First clone this project;
- Install all dependencies using this command:
``` 
 yarn
```
- Create a ``.env`` file in the root of this project, following the ``.env.example``, if you dont have an account in imgurl, make sure to create one to get the keys to use this project;
- Run this command:
``` 
yarn run dev
```
- Then access the http://localhost:4000/ , and check if returns "App rodando";
- Then you can make your requests to this endpoint: 
  
  upload/ 
  
