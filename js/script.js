function heredaDe(prototipoHijo, prototipoPadre){
  var fn = function (){}
  fn.prototype = prototipoPadre.prototype
  prototipoHijo.prototype = new fn
  prototipoHijo.prototype.constructor = prototipoHijo
}
function persona(nombre, apellido, altura){
  this.name     = nombre
  this.lastname = apellido
  this.tollest  = altura
}
persona.prototype.saludar = function(){
  console.log(`Hola, me llamo ${this.name}`);
}
persona.prototype.soyAlto = function(){
  return this.tollest > 1.8
}
function desarrollador(nombre, apellido){
  this.name     = nombre
  this.lastname = apellido
}
heredaDe(desarrollador, persona)

desarrollador.prototype.saludar = function(){
  console.log(`Hola, mi nombre es; ${this.name} ${this.lastname} y soy desarrollador/a `);
}


var hugo = new persona('Hugo', 'Diaz', 1.72)
var andres = new persona('Andres', 'Diaz', 1.78)
var mauricio = new persona('Mauricio', 'Diaz', 1.82)
