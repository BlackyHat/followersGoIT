import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <section className={css.section}>
      <h1 className={css.sectionTitle}>
        Welcome to Follower interactive cards demo
      </h1>
      <ul className={css.cardList}>
        <li className={css.cardList_item}>
          {/* <picture>
                  <source
                    className={styles}
                    srcSet={`${gooseDesk1x} 1x, ${gooseDesk2x} 2x, ${gooseDesk3x} 3x`}
                    alt="Goose"
                  />
                  <img className={styles.logo} src={goose} alt="Goose" />
                </picture>
 */}
          <img
            className={css.cardList_image}
            src="../../images/following_card.png"
            alt="follow card"
          />
        </li>
        <li className={css.cardList_item}>
          <img
            className={css.cardList_image}
            src="../../images/unfollow_card.png"
            alt="unfollow card"
          />
        </li>
      </ul>
    </section>
  );
};

export default HomePage;
