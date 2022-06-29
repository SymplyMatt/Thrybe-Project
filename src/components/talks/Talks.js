import React, { useEffect, useState } from "react";
import SideNav from "../dashboard/sidenav/SideNav";
import TalksMainContainer from "./TalksMainContainer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Talks = ({ page, setPage, showNav, setShowNav }) => {
  const navigate = useNavigate();
  const [showBtn, setShowBtn] = useState(true);
  const [talksPage, setTalksPage] = useState("talks");
  let [token, setToken] = useState(" ");
  let [allTalks, setAllTalks] = useState("...");
  let [activeTalks, setActiveTalks] = useState("...");
  let [pendingTalks, setPendingTalks] = useState("...");
  let [inActiveTalks, setInActiveTalks] = useState("...");
  let [thrybeTalks, setThrybeTalks] = useState([]);
  let [allTalksSection, setAllTalksSection] = useState(false);
  let [activeTalksSection, setActiveTalksSection] = useState(false);
  let [pendingTalksSection, setPendingTalksSection] = useState(false);
  const [inActiveTalksSection, setInActiveTalksSection] = useState(false);
  let [thrybeTalksSection, setThrybeTalksSection] = useState(false);
  useEffect(() => {
    document.title = "Talks";
    setPage("talks");
  });
  useEffect(() => {
    setTalksPage("talks");
  }, [page]);
  useEffect(() => {
    setShowNav(false);
  }, [page]);

  useEffect(() => {
    setToken(localStorage.getItem("token") || sessionStorage.getItem("token"));
    if (!token) {
      setPage("login");
      navigate("/login");
    }
  }, [page]);

  useEffect(() => {
    if (token && token != " ") {
      fetchAllTalks().catch((error) => {
        console.error(error);
        setTimeout(() => {
          sessionStorage.removeItem("token");
          sessionStorage.removeItem("img");
          sessionStorage.removeItem("pages");
          navigate("/login");
        }, 1500);
      });
    }
  }, [page, token]);
  useEffect(() => {
    if (token && token != " ") {
      fetchActiveTalks().catch((error) => {
        console.error(error);
        setTimeout(() => {
          sessionStorage.removeItem("token");
          sessionStorage.removeItem("img");
          sessionStorage.removeItem("pages");
          navigate("/login");
        }, 1500);
      });
    }
  }, [page, token]);
  useEffect(() => {
    if (token && token != " ") {
      fetchPendingTalks().catch((error) => {
        console.error(error);
        setTimeout(() => {
          sessionStorage.removeItem("token");
          sessionStorage.removeItem("img");
          sessionStorage.removeItem("pages");
          navigate("/login");
        }, 1500);
      });
    }
  }, [page, token]);
  useEffect(() => {
    if (token && token != " ") {
      fetchInActiveTalks().catch((error) => {
        console.error(error);
        setTimeout(() => {
          sessionStorage.removeItem("token");
          sessionStorage.removeItem("img");
          sessionStorage.removeItem("pages");
          navigate("/login");
        }, 1500);
      });
    }
  }, [page, token]);
  useEffect(() => {
    if (token && token != " ") {
      fetchThrybeTalks().catch((error) => {
        console.error(error);
        setTimeout(() => {
          sessionStorage.removeItem("token");
          sessionStorage.removeItem("img");
          sessionStorage.removeItem("pages");
          navigate("/login");
        }, 1500);
      });
    }
  }, [page, token]);

  async function fetchAllTalks() {
    let result = await fetch(
      "https://thrybe.azurewebsites.net/api/BackofficeUser/AllTalks",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    result = await result.json();
    setAllTalks(result);
    setAllTalksSection(true);
  }
  async function fetchActiveTalks() {
    let result = await fetch(
      "https://thrybe.azurewebsites.net/api/BackofficeUser/AllActiveTalks",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    result = await result.json();
    setActiveTalks(result);
    setActiveTalksSection(true);
  }
  async function fetchPendingTalks() {
    let result = await fetch(
      "https://thrybe.azurewebsites.net/api/BackofficeUser/AllPendingTalks",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    result = await result.json();
    setPendingTalks(result);
    setPendingTalksSection(true);
  }
  async function fetchInActiveTalks() {
    let result = await fetch(
      "https://thrybe.azurewebsites.net/api/BackofficeUser/AllInActiveTalks",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    result = await result.json();
    setInActiveTalks(result);
    setInActiveTalksSection(true);
  }
  async function fetchThrybeTalks() {
    let result = await fetch(
      "https://thrybe.azurewebsites.net/api/BackofficeUser/ThrybeTalkList",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    result = await result.json();
    setThrybeTalks(result);
    setThrybeTalksSection(true);
  }

  return (
    <><div></div>
      <SideNav
        page={page}
        setPage={setPage}
        showNav={showNav}
        setShowNav={setShowNav}
      />
      <TalksMainContainer
        page={page}
        setPage={setPage}
        showNav={showNav}
        setShowNav={setShowNav}
        showBtn={showBtn}
        setShowBtn={setShowBtn}
        talksPage={talksPage}
        setTalksPage={setTalksPage}
        allTalks={allTalks}
        activeTalks={activeTalks}
        pendingTalks={pendingTalks}
        inActiveTalks={inActiveTalks}
        thrybeTalks={thrybeTalks}
      />
    </>
  );
};

export default Talks;
