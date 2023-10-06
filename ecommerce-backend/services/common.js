const passport = require('passport');

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt')
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role:user.role };
};

exports.cookieExtractor = function(req){
  let token = null;
  if (req && req.cookies){
    token = req.cookies['jwt'];
  }
  // TODO: this is temporary token for testing without cookie
  // token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MGM2MmQ5MTc4MzM5MmFkMjUwODk2MCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjk1MzEwNTUzfQ.2mEJnQn0DHmU1ty-jE20VXLYbkJsG-Tm_7G_hcrvoxU"
  return token;
};