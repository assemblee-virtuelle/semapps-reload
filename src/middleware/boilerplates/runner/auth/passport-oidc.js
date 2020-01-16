const Issuer = require('openid-client').Issuer;
const Strategy = require('openid-client').Strategy;
const passport = require('passport');
const base64url = require('base64url');
const fs = require('fs');
const MiddlwareOidc = require('./middlware-oidc.js');
const CONFIG = require('../config');

let addOidcToApp = async function(app) {
  let issuer = await Issuer.discover(CONFIG.OIDC_ISSUER);
  const client = new issuer.Client({
    client_id: CONFIG.OIDC_CLIENT_ID,
    client_secret: CONFIG.OIDC_CLIENT_SECRET,
    redirect_uri: CONFIG.HOME_URL + 'auth/cb'
  });
  const params = {
    // ... any authorization params overide client properties
    // client_id defaults to client.client_id
    // redirect_uri defaults to client.redirect_uris[0]
    // response type defaults to client.response_types[0], then 'code'
    // scope defaults to 'openid'
  };

  passport.use(
    'oidc',
    new Strategy(
      {
        client,
        params
      },
      (tokenset, userinfo, done) => {
        console.log('FIRST CALLBACH');
        userinfo.accesstoken = tokenset.access_token;
        done(null, userinfo);
      }
    )
  );

  //Push referer on the session to remind it after OIDC redirections
  app.get('/auth', async function(req, res, next) {
    req.session.referer = req.headers.referer;
    next();
  });

  //OIDC Strategy using -> call OIDC Server
  app.get(
    '/auth',
    passport.authenticate('oidc', {
      session: false
    })
  );

  //Url of redirect_uri. Server redirect browser to the referer pushed in session. token provide to browser by url.
  app.get(
    '/auth/cb',
    passport.authenticate('oidc', {
      failureRedirect: '/',
      session: false
    }),
    (req, res) => {
      let referer = req.session.referer;
      let redirect_url = referer + '?token=' + res.req.user.accesstoken;
      res.redirect(redirect_url);
    }
  );

  //API to obtain authentification and identification informations. Use middlware_express_oidc as all protected API which fill oidcPayload (authentification) and user (identification)
  app.get(
    '/auth/me',
    new MiddlwareOidc({ public_key: CONFIG.OIDC_PUBLIC_KEY }).getMiddlwareExpressOidc(),
    async function(req, res, next) {
      res.json({
        oidcPayload: req.oidcPayload,
        user: req.user
      });
    }
  );
};
module.exports = addOidcToApp;
