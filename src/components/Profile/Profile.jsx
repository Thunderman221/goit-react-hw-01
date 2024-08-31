import s from "./Profile.module.css";

const Profile = ({
  name = "Petra Marica",
  tag = "@pmarica",
  location = "Salvador, Brasil",
  image = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
  stats = { followers: 1000, views: 2000, likes: 3000 },
}) => {
  const { followers, views, likes } = stats;
  return (
    <div className={s.container}>
      <div className={s.profileContainer}>
        <img src={image} alt="User avatar" className={s.image} />
        <p className={s.name}>{name}</p>
        <p className={s.paragraph1}>{tag}</p>
        <p className={s.paragraph2}>{location}</p>
      </div>

      <ul className={s.list}>
        <li className={s.listItem}>
          <span>Followers</span>
          <span className={s.spanValue}>{followers}</span>
        </li>
        <li className={s.listItem}>
          <span>Views</span>
          <span className={s.spanValue}>{views}</span>
        </li>
        <li className={s.listItem}>
          <span>Likes</span>
          <span className={s.spanValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
