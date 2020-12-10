 const hello = (name: string, message: string) => {
  return `${message} ${name}`
}

console.log(hello('mike', 'hello'));

if(module.hot){
  module.hot.accept();
}

console.log('hello there mate');
console.log('hello matey');