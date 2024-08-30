import Profile from "./componnents/Profile/Profile";
import userData from "../userData.json";
import FriendList from "./componnents/Friendlist/Friendlist";
import friends from "../friends.json";
import TransactionHistory from "./componnents/TransactionHistory/TransactionHistory";
import transactions from "../transactions.json";

import "./App.css";

function App() {
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
}

export default App;
