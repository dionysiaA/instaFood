'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

var _User = require('../models/User');

var _User2 = _interopRequireDefault(_User);

var _express = require('express');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const InstagramAPI = require('instagram-api');
const instagramAPI = new InstagramAPI('4243299161.9c74f6e.477008a1fab94fe0ab6b3577a13bed39');
// https://www.instagram.com/oauth/authorize/?client_id=9c74f6e12b8d417eafa3b251ae54a196&redirect_uri=http://localhost:8080/login/instagram/return&response_type=token
//motion_star= 4243299161.9c74f6e.477008a1fab94fe0ab6b3577a13bed39
//dionyTech=5391727432.9c74f6e.b5fa16b737374992b13657eee765e3f1
//deniseagath=

const router = new _express.Router();

router.get('/media', function (req, res, next) {
  if (req.user) {
    console.log(req.user, 'is there any user in media?');
    instagramAPI.userSelfMedia().then(media => {
      console.log(media, 'this is one media in media');
      return media.data.map(media => {
        return media.images.standard_resolution.url;
      });
    }).catch(next);
  } else {
    res.send('404 user not found');
  }
});

router.get('/media/foodTags', function (req, res, next) {
  if (req.user) {
    const user = _User2.default.findOne('id', req.user.id).then(user => console.log(user.getClaims({ where: req.user.id }), 'here is the user'));
    console.log(req.user, 'is there any user in foodTags');

    Promise.all([instagramAPI.getMediasByTag('food'), instagramAPI.getMediasByTag('foodie'), instagramAPI.getMediasByTag('foodporn'), instagramAPI.getMediasByTag('ravioli')]).then(medias => {
      const mergedArrays = mergedArrays = medias.reduce((acc, media) => {
        return [...media.data];
      }, []);
      console.log(mergedArrays, 'this is one media in foodTags');
      return mergedArrays.map(media => {
        return {
          url: media.images.standard_resolution.url,
          tags: media.tags
        };
      });
    }).catch(next);
  } else {
    res.send('404 user not found');
  }
});
exports.default = router;
//# sourceMappingURL=socialMediaRoutes.js.map
