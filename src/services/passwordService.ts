export default function generatePass(){
  let password: string = '';
  let characters: string = 'Aa@123456789abcdefghijFGHIJKLMONOP!';
  let passwordLenght = 8

  for (let i = 0; i < passwordLenght; i++) {
    password += characters.charAt(
     Math.floor( Math.random() * characters.length)
    )
  }

  return password;
}