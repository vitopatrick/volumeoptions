import React from "react";
import { RxDashboard } from "react-icons/rx";
import { GrTransaction, GrAtm } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { FaWallet } from "react-icons/fa";
import { AiOutlineBank } from "react-icons/ai";
import { SiMarketo } from "react-icons/si";
import { BsStack } from "react-icons/bs";
import { RiExchangeDollarFill } from "react-icons/ri";

export const FIRST_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/dashboard",
    icon: <RxDashboard />,
  },
  {
    key: "profile",
    label: "Profile",
    path: "/account-profile",
    icon: <CgProfile />,
  },
];

export const SECOND_LINKS = [
  {
    key: "wallet",
    label: "Wallet",
    path: "/wallet",
    icon: <FaWallet />,
  },
  {
    key: "transactions",
    label: "Transactions",
    path: "/transactions",
    icon: <GrTransaction />,
  },
  {
    key: "market",
    label: "Market",
    path: "/market",
    icon: <SiMarketo />,
  },
  {
    key: "staking",
    label: "Staking",
    path: "/staking",
    icon: <BsStack />,
  },
  {
    key: "trading",
    label: "Volume Trading",
    path: "/volume-trading",
    icon: <RiExchangeDollarFill />,
  },
];

