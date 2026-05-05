interface Post {
  "userId": number,
  "id": number,
  "title": string,
  "body": string 
}


interface Comment {
  "postId": number,
  "id": number,
  "name": string,
  "email": string,
  "body": string 
}


interface User {
  "id": number,
  "name": string,
  "username" : string,
  "adress" : AddressErrors,
  "title": string,
  "body": string 
}