export const validEmail = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$" //validates emails
);

export const validName = new RegExp("^([a-zA-Z0-9s]{2,20})$"); //validates a name with numbers if necessary

export const validText = new RegExp('^([a-zA-Z0-9s!@#$&()-`.+,/"]{2,200})$'); //mostly ensures that the text sent is there and that it is not over 200 characters
