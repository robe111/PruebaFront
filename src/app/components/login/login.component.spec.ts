const { validateEmail, validatePass } = require('./login.component');

describe('LoginComponent', () => {
  it('should render the component', () => {
    expect(validateEmail('robertopclase@gmail.com')).toBe(true);
    expect(validateEmail('1234abc')).toBe(false);
    expect(validatePass('Contraseña')).toBe(true);
    expect(validatePass('Con')).toBe(true);
  });
});
