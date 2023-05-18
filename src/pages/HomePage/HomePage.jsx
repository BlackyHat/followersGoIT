import css from './HomePage.module.css';
import followingCardX3 from '../../images/following_card_x3.png';
import followingCardX2 from '../../images/following_card_x2.png';
import followingCard from '../../images/following_card.png';
import unFollowingCardX3 from '../../images/unfollow_card_x3.png';
import unFollowingCardX2 from '../../images/unfollow_card_x2.png';
import unFollowingCard from '../../images/unfollow_card.png';

const HomePage = () => {
  return (
    <section className={css.section}>
      <h1 className={css.sectionTitle}>
        Welcome to Follower interactive cards demo
      </h1>
      <ul className={css.cardList}>
        <li className={css.cardList_item}>
          <picture>
            <source
              srcSet={`${followingCard} 1x, ${followingCardX2} 2x, ${followingCardX3} 3x`}
              alt="Goose"
            />
            <img
              className={css.cardList_image}
              src={followingCard}
              alt="follow card"
            />
          </picture>
        </li>
        <li className={css.cardList_item}>
          <picture>
            <source
              srcSet={`${unFollowingCard} 1x, ${unFollowingCardX2} 2x, ${unFollowingCardX3} 3x`}
              alt="Goose"
            />
            <img
              className={css.cardList_image}
              src={followingCard}
              alt="unfollow card"
            />
          </picture>
        </li>
      </ul>
      <ul className={css.descList}>
        <li>
          <h2 className={css.featuresTitle}>Features</h2>
          <p className={css.featuresMeta}>
            User cards according to the template When you click on the Follow
            button, the text changes to Following. Also the color of the button
            changes. And the number of followers is added. When updating the
            page, the final result of the user's actions should be recorded The
            app have two routes: '/' - the Home component; '/tweets' - the
            tweets component, the page with tweets displayed. If a user enters
            the app via a non-existent route, the user must be redirected to the
            home page. Add filtering Dropdown with 3 options: show all - show
            all tweets, follow - show tweets that have a follow status,
            followings - show tweets with the following status
          </p>
        </li>
        <li>
          <h2 className={css.featuresTitle}>Tech Stack</h2>
          <div className={css.featuresMeta}>
            <p className={css.featuresInfo}>
              <span className={css.label}>[FrontEnd]</span> React, Redux
              Toolkit, React Router Dom, Axios, Module CSS
            </p>
            <p className={css.featuresInfo}>
              <span className={css.label}>[BackEnd]</span> Mockapi.io
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default HomePage;
