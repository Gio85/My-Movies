const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {type: String, required: true, unique: true },
  email: {type: String, required: true, unique: true },
  password: {type: String, required: true}
});

// questa e' una variabile virtuale che ci permette di controllare se la password e' la stessa con la conferma
userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });
// lifecycle hook (mongoose middleware) -
// pre validate

userSchema.pre('validate', function checkPasswordConfirmation(next){
  // quando l'user cerca di cambiare la password
  // se la password non e' uguale alla conferma
  if(this.isModified('password') && this._passwordConfirmation !== this.password)
  // parte questo statement
    this.invalidate('passwordConfirmation', 'does not match');
  next();
}); // altrimenti va avanti con la "codifica" della password
//  pre save

userSchema.pre('save', function hashPassword(next) {
  // modificare la password solo se l'user l'ha modificata, altrimenti questo avviene ogni volta che l'use fa il login
  if(this.isModified('password')){
  // store inside la password la plane password modificata con Salt
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next(); //
});

//custom prototype method
userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};


module.exports = mongoose.model('User', userSchema);
