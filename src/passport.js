/**
 * Node.js API Starter Kit (https://reactstarter.com/nodejs)
 *
 * Copyright © 2016-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* @flow */
/* eslint-disable global-require, no-param-reassign, no-underscore-dangle */

import passport from 'passport';
import User from './models/User';

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findOne({ id }).then(user => done(null, user || null), done);
});

const strategies = [
  {
    name: 'Facebook',
    provider: 'facebook',
    Strategy: require('passport-facebook').Strategy,
    options: {
      clientID: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
      profileFields: ['name', 'email', 'link', 'locale', 'timezone'],
    },
    readProfile(profile) {
      return {
        email: profile._json.email,
      };
    },
  },
  {
    name: 'Google',
    provider: 'google',
    Strategy: require('passport-google-oauth').OAuth2Strategy,
    options: {
      clientID: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    },
    readProfile(profile) {
      return {
        email: profile.emails[0].value,
      };
    },
  },
  {
    name: 'Twitter',
    provider: 'twitter',
    Strategy: require('passport-twitter').Strategy,
    options: {
      consumerKey: process.env.TWITTER_KEY,
      consumerSecret: process.env.TWITTER_SECRET,
    },
    readProfile(profile) {
      return {
        email: `${profile.username}@twitter.com`,
      };
    },
  },
  {
    name: 'Instagram',
    provider: 'instagram',
    Strategy: require('passport-instagram').Strategy,
    options: {
      clientID: process.env.INSTAGRAM_ID,
      clientSecret: process.env.INSTAGRAM_SECRET,
      profileFields: ['name', 'email', 'link', 'locale', 'timezone'],
    },
    readProfile(profile) {
      console.log(profile, 'this is the profile');
      return {
        email: `${profile.username}@test.com`,
        id: profile._json.id,
      };
    },
  },
];

strategies.forEach(({ name, provider, Strategy, options, readProfile }) => {
  passport.use(new Strategy({
    ...options,
    callbackURL: `/login/${provider}/return`,
    passReqToCallback: true,
  }, async (req, accessToken, refreshToken, profile, done) => {
    try {
      // if (req.query.code) {
      //   console.log(req.query.code, 'here i have an access toker for the user')
      //   accessToken = req.query.code;
      // }
      const { email, id } = readProfile(profile);
      console.log( id, 'hey you user , where are you!!');
      console.log(accessToken, 'hey do i have an access token?')
      const claims = [
        { type: `urn:${provider}:access_token`, value: accessToken },
        { type: `urn:${provider}:refresh_token`, value: refreshToken },
      ];

      let user = await User.findOneByLogin(provider, profile.id);
      console.log(user, 'hey you user , where are you!!');
      if (req.user) {
        console.log(req.user, 'whatr the fuckkkkkkkkkkkkkkk')
        if (user && req.user.id === user.id) {
          done(null, user);
        } else if (user) {
          req.app.locals.error = `There is already a ${name} account that belongs to you. Sign in with that account or delete it, then link it with your current account.`;
          done();
        } else {
          await User.setClaims(req.user.id, provider, profile.id, claims);
          req.app.locals.info = `${name} account has been linked.`;
          done(null, await User.findOne('id', req.user.id));
        }
      } else if (user) {
        done(null, user);
      } else if (await User.any({ email })) {
        req.app.locals.error = `There is already an account using this email address. Sign in to that account and link it with ${name} manually from Account Settings.`;
        done();
      } else {
        user = await User.create({ email });
        await User.setClaims(user.id, provider, profile.id, claims);
        done(null, user);
      }
    } catch (err) {
      done(err);
    }
  }));
});

export default passport;
