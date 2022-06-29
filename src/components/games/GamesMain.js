import React from "react";
import GamesBreadCrumb from "./GamesBreadCrumb";
import GamesListContainer from "./GamesListContainer";
import GamesSubNav from "./GamesSubNav";

const GamesMain = ({
  page,
  setPage,
  showBtn,
  setShowBtn,
  talksPage,
  setGamesPage,
}) => {
  return (
    <div className='main-content'>
      <div className='container-fluid'>
        <GamesBreadCrumb
          showBtn={showBtn}
          page={page}
          setPage={setPage}
          setShowBtn={setShowBtn}
          talksPage={talksPage}
          setGamesPage={setGamesPage}
        />
        <GamesSubNav showBtn={showBtn} setShowBtn={setShowBtn} />
        <GamesListContainer
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          talksPage={talksPage}
          setGamesPage={setGamesPage}
        />
        <div className='row mb-4'>
          <div className='col-12 d-flex justify-content-between'>
            <div>Showing 10 of 100 records</div>
            <div>
              <img
                src='./assets/images/arrowleft-icon.svg'
                alt='arrowleft-icon'
                className='p-1'
              />
              <img
                src='./assets/images/numoneframe-icon.svg'
                alt='numoneframe-icon'
                className='p-1'
              />
              <img
                src='./assets/images/arrowright-icon.svg'
                alt='arrowright-icon'
                className='p-1'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesMain;
