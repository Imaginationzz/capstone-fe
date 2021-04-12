import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

export default function Protected(props) {
  const [allow, setAllow] = React.useState(false);
  const { userInfo } = useSelector((state) => state.userState);
  const history = useHistory();
  useEffect(() => {
    if (userInfo && userInfo.userName) {
      setAllow(true);
    } else {
      setAllow(false);
      history.push("/signin2");
    }
  }, [userInfo, history]);
  return <>{allow && props.children}</>;
}
