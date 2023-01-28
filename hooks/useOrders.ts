import { UserContext } from "./../context/UserContext";
import { useState, useMemo, useContext } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { store } from "../firebase";

export const useOrders = () => {
  const [orders, setOrders] = useState<[{}] | null | undefined | any>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  // user context
  const { user }: any = useContext(UserContext);

  useMemo(() => {
    const controller = new AbortController();
    setLoading(true);
    const fetchTransactions = async () => {
      // create collectionRef
      const collectionRef = collection(
        store,
        "/users",
        `/${user.email}`,
        "/orders"
      );
      const q = query(collectionRef, orderBy("amount", "asc"));

      const ordersArray: any = [];

      onSnapshot(
        q,
        (docs) => {
          docs.forEach((doc) => {
            const data = doc.data();
            ordersArray.push(data);
            setOrders(ordersArray);
          });
        },
        (error: any) => {
          setError(error.message);
        }
      );
    };

    fetchTransactions();
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => controller.abort();
  }, [user.email]);

  return {
    error,
    loading,
    orders,
  };
};
