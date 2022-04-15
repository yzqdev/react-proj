import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAsync } from "../store/userSlice";

const UserPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    dispatch(getUserAsync());
  }, [dispatch]);
    console.log(user);
  return (
    <>
      <div>
        {user.map((item) => {
          return <article key={item.id}>{item.name}</article>;
        })}
      </div>
    </>
  );
};
export default UserPage;
