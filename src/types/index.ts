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

interface Geo {
      "lat": number,
      "lng": number
}


interface Adress {
    "street": string,
    "suite": string,
    "city": string,
    "zipcode": string,
    "geo" : Geo
}



interface User {
  "id": number,
  "name": string,
  "username" : string,
  "adress" : Adress,
  "title": string,
  "body": string 
}