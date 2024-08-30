import Profile from "./Profile/Profile.jsx";
import userData from "../assets/userData.json";
import FriendList from "./Friendlist/Friendlist.jsx";
import friends from "../assets/friends.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory.jsx";
import transactions from "../assets/transactions.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
