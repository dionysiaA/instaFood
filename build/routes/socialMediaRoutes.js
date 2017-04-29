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

const router = new _express.Router();

router.get('/media', function (req, res, next) {
  if (req.user) {

    _User2.default.findOneAccessToken(req.user.id).then(user => {
      return new InstagramAPI(user.value);
    }).then(instagramAPI => {
      return instagramAPI.userSelfMedia().then(medias => {
        console.log(medias, 'this is one media in media');
        const result = medias.data.map(media => {
          return media.images.standard_resolution.url;
        });
        res.send(result);
      });
    }).catch(next);
  } else {
    res.send('404 user not found');
  }
});

router.get('/media/foodTags', function (req, res, next) {
  if (req.user) {
    return _User2.default.findOneAccessToken(req.user.id).then(user => {
      return new InstagramAPI(user.value);
    }).then(instagramAPI => {
      // return Promise.all([instagramAPI.getMediasByTag('food'),
      //  instagramAPI.getMediasByTag('foodie'),
      //  instagramAPI.getMediasByTag('foodporn'),
      //  instagramAPI.getMediasByTag('ravioli')])
      return instagramAPI.getMediasByTag('food').then(medias => {
        // console.log(medias, 'here are the medias in foodtags')
        // const mergedArrays = medias.reduce((acc, media) => {
        //   console.log(media.data, 'media oleeeeeee')
        //   return [...media.data]
        // }, [])
        // const filteredMedias = medias.map( media => {
        //   if (media.data.length)
        //     return [...media.data]
        // })

        console.log(medias, '!!!!!!!!!!!!!!!!!!this is one media in foodTags');
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!this is one media in foodTags');
        const result = medias.data.map(media => {
          console.log(media, 'here is the url of the picture we want');
          if (media && media.images) {
            console.log('UUUUUURRRRRRLLL AAAAAA', media.images.standard_resolution.url);
            return {
              url: media.images.standard_resolution.url,
              tags: media.tags
            };
          }
        });
        return result;
      });
    }).then(medias => {
      res.send(medias);
    }).catch(next);
  } else {
    res.send('404 user not found');
  }
});
exports.default = router;
//# sourceMappingURL=socialMediaRoutes.js.map
