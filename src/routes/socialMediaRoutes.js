const InstagramAPI = require('instagram-api');
const instagramAPI = new InstagramAPI('4243299161.9c74f6e.477008a1fab94fe0ab6b3577a13bed39');
// https://www.instagram.com/oauth/authorize/?client_id=9c74f6e12b8d417eafa3b251ae54a196&redirect_uri=http://localhost:8080/login/instagram/return&response_type=token
//motion_star= 4243299161.9c74f6e.477008a1fab94fe0ab6b3577a13bed39
//dionyTech=5391727432.9c74f6e.b5fa16b737374992b13657eee765e3f1
//deniseagath=

import URL from 'url';
import passport from 'passport';
import validator from 'validator';
import User from '../models/User';
import { Router } from 'express';

const router = new Router();

router.get('/media', function(req, res, next) {
  if(req.user) {
    console.log(req.user, 'is there any user in media?')
    instagramAPI.userSelfMedia()
      .then(media => {
        console.log(media, 'this is one media in media')
        return media.data.map((media) => {
          return media.images.standard_resolution.url
        })
      })
      .catch(next)
  }
  else {
    res.send('404 user not found')
  }
})

router.get('/media/foodTags', function(req, res, next) {
  if(req.user) {
    const user = User.findOne('id', req.user.id)
      .then(user => console.log(user.getClaims({ where: req.user.id}), 'here is the user'));
    console.log(req.user, 'is there any user in foodTags')

    Promise.all([instagramAPI.getMediasByTag('food'),
      instagramAPI.getMediasByTag('foodie'),
      instagramAPI.getMediasByTag('foodporn'),
      instagramAPI.getMediasByTag('ravioli')])
      .then(medias => {
        const mergedArrays = mergedArrays = medias.reduce((acc,media) => {
          return [...media.data]
        }, [])
        console.log(mergedArrays, 'this is one media in foodTags')
        return mergedArrays.map((media) => {
          return {
            url: media.images.standard_resolution.url,
            tags: media.tags
          }
        })
      })
      .catch(next)
  }
  else {
    res.send('404 user not found')
  }
})
export default router;
