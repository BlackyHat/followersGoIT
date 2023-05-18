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
    </section>
  );
};

export default HomePage;
