import React from 'react';
import { Link } from 'react-router';


const InstagramPhotos = (props) => {
  const card_text= 'this is a test'
  return (
    <main className="content">
      <div className="feed-grid">
        <div className="card-half wide">
          <div className="card-img"><span className="label"> <i className="fa fa-star"/></span><img src="http://a5.files.airows.com/image/upload/c_fit,cs_srgb,w_620/MTM0MjY4NjM0MzY4NTY5MzE0.png" alt="img"/></div>
          <div className="card-text">
            <h4>All outdoor & adventure lovers should follow this guy on instagram</h4>
            <p>Just take a look at a few of his shots and try not to want this in your feed regularly.</p>
          </div>
          <ul className="card-tools">
            <li className="tools-item"><i className="fa fa-heart like"/><span className="tools-count">543</span></li>
            <li className="tools-item"><i className="fa fa-share share"/></li>
          </ul>
        </div>
        <div className="card"> <img src="https://40.media.tumblr.com/027d3fdde45d8cb950a74dd070cf8e90/tumblr_nxfo8rG3o81qzleu4_og_540.jpg" alt="img"/>
          <div className="info-center">12 Photos Of A Gorgeously Designed NYC Home</div>
        </div>
        <div className="card"><img src="https://36.media.tumblr.com/1a6bf1c955f5278517f71d50b60ac89d/tumblr_nw46p7NOHH1qkegsbo2_540.jpg" alt="img"/>
          <div className="info-center">Beautiful Yet Simple Warehouse-Inspired Home</div>
        </div>
        <div className="card"><img src="https://41.media.tumblr.com/38033666a5ce5c84a658fd90409f8467/tumblr_nxcmsxVSHs1qkegsbo1_540.jpg" alt="img"/>
          <div className="info-center">Top trends this winter 2016</div>
        </div>
        <div className="card-half wide">
          <div className="card-img"><img src="https://40.media.tumblr.com/tumblr_lzgmkfRJ7U1qb899go1_500.jpg" alt="img"/></div>
          <div className="card-text">
            <h4>History travel to Spain. Photos stunning country</h4>
            <p>Just take a look at a few of his shots and try not to want this in your feed regularly.</p>
          </div>
          <ul className="card-tools">
            <li className="tools-item"><i className="fa fa-heart like"/><span className="tools-count">133</span></li>
            <li className="tools-item"><i className="fa fa-share share"/></li>
          </ul>
        </div>
        <div className="card-half">
          <div className="card-img"><img src="https://www.chelseafc.com/content/cfc/en/homepage/news/boilerplate-config/latest-news/2015/11/pre-match-briefing--stoke-city-v-chelsea--part-two/_jcr_content.autoteaser.jpeg" alt="img"/></div>
          <div className="card-text">
            <h4>Pre-Match Briefing: Stoke City v Chelsea</h4>
            <p>We have a tea-time appointment in the Potteries later today.</p>
          </div>
          <ul className="card-tools">
            <li className="tools-item"><i className="fa fa-heart like"/><span className="tools-count">4533</span></li>
            <li className="tools-item"><i className="fa fa-share share"/></li>
          </ul>
        </div>
        <div className="card"> <img src="https://41.media.tumblr.com/7be0a9c6035a5eaaafaddab95a3d77ae/tumblr_mmp17zInpt1qhfgjbo1_540.jpg" alt="img"/>
          <div className="info-center">Best 100 memorable sports photos</div>
        </div>
        <div className="card"><img src="https://cdn-images-1.medium.com/max/600/1*wFiuAFruqIUTNU99xpb_zw.gif" alt="img"/>
          <div className="info-center">Long shadow is dead. Welcome Diffuse shadows.</div>
        </div>
        <div className="card"> <img src="https://40.media.tumblr.com/027d3fdde45d8cb950a74dd070cf8e90/tumblr_nxfo8rG3o81qzleu4_og_540.jpg" alt="img"/>
          <div className="info-center">12 Photos Of A Gorgeously Designed NYC Home</div>
        </div>
        <div className="card"><img src="https://40.media.tumblr.com/214255d33d16e6075d674c9cd84d9a6c/tumblr_no7630It9v1qd6rjmo1_540.jpg" alt="img"/>
          <div className="info-center">Christina Schneiderlin: Interview with the artist</div>
        </div>
        <div className="card-half">
          <div className="card-img"><span className="label"> <i className="fa fa-star"/></span><img src="https://40.media.tumblr.com/682b6eb0bcafb090c26cda164a235f3b/tumblr_n04czvggDF1sv6eyto1_500.jpg" alt="img"/></div>
          <div className="card-text">
            <h4>You just should run</h4>
            <p>Learn how to run can improve your health.</p>
          </div>
          <ul className="card-tools">
            <li className="tools-item"><i className="fa fa-heart like"/><span className="tools-count">8543</span></li>
            <li className="tools-item"><i className="fa fa-share share"/></li>
          </ul>
        </div>
      </div>
    </main>
  )

}

export default InstagramPhotos;
