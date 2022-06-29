import React, { useState } from "react";
import TalksImg from "./TalksImg";

const TalksList = ({ showBtn, setShowBtn, talksPage, setTalksPage, item }) => {
  let author = item.author || "unknown";
  let date = item.dateCreated || "unknown";
  let [speakers, setSpeakers] = useState(item.speakers);
  let [members, setMembers] = useState(item.members);
  let status = item.status || "unknown";
  let talkId = item.talkId || "unknown";
  let talkName = item.talkName || "unknown";
  let [remainingSpeakers, setRemainingSpeakers] = useState(
    speakers.length < 4 ? 0 : speakers.length - 4
  );

  return (
    <>
      <tr style={{ backgroundColor: "rgba(255, 255, 255, 0.65)" }}>
        <td>
          <input
            type='checkbox'
            id='check'
            onChange={(e) => {
              if (e.currentTarget.checked) {
                setShowBtn(false);
              } else {
                setShowBtn(true);
              }
            }}
          />
        </td>
        <td colSpan='2' onClick={() => setTalksPage("single")}>
          <div
            className='d-flex flex-column align-items-start'
            onClick={() => setTalksPage("single")}
          >
            <h6 className='font-sm f-weight-700 mt-2'>{talkName}</h6>
            <div>
              <img
                className='img-fluid h-50 w-25'
                src='./assets/images/author-pic.svg'
                alt='talkauthorPic'
              />
              <span className='font-sm w-75 ml-1 mb-4'>Author - {author}</span>
            </div>
          </div>
        </td>
        <td>
          <div className='d-flex flex-column align-items-start'>
            {<TalksImg data={speakers} />}
            <span className='font-xs f-weight-700'>
              {remainingSpeakers > 0 && remainingSpeakers}
              {remainingSpeakers > 0 && "+"}
            </span>
          </div>
        </td>
        <td>
          <div className='d-flex align-items-center'>
            <TalksImg data={members} />
            <span className='font-xs f-weight-700'>
              {remainingSpeakers > 0 && remainingSpeakers}
              {remainingSpeakers > 0 && "+"}
            </span>
          </div>
        </td>
        <td>
          <div>
            <span className='f-weight-600'>{date}</span>
          </div>
        </td>
        <td>
          <div
            className={`${
              status.toLowerCase() == "active"
                ? "successful-status"
                : status.toLowerCase() == "pending"
                ? "pending-status"
                : status.toLowerCase() == "inactive"
                ? "failed-status"
                : ""
            }`}
          >
            <span className='font-xs'>{status}</span>
          </div>
        </td>
        <td>
          <div className='dropdown position-relative ml-4'>
            <button
              className='btn'
              type='button'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='true'
            >
              <svg
                width='12'
                height='12'
                viewBox='0 0 12 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clipPath='url(#clip0_1251_27914)'>
                  <path
                    d='M7.06065 0.439338C7.64643 1.02512 7.64643 1.97487 7.06065 2.56066C6.47487 3.14644 5.52512 3.14644 4.93934 2.56066C4.35355 1.97487 4.35355 1.02512 4.93934 0.439338C5.5251 -0.146446 6.47484 -0.146446 7.06065 0.439338Z'
                    fill='black'
                  ></path>
                  <path
                    d='M7.06065 4.93934C7.64643 5.52512 7.64643 6.47487 7.06065 7.06065C6.47487 7.64643 5.52512 7.64643 4.93934 7.06065C4.35355 6.47487 4.35355 5.52512 4.93934 4.93934C5.5251 4.35355 6.47484 4.35355 7.06065 4.93934Z'
                    fill='black'
                  ></path>
                  <path
                    d='M7.06065 9.43934C7.64643 10.0251 7.64643 10.9749 7.06065 11.5607C6.47487 12.1464 5.52512 12.1464 4.93934 11.5607C4.35355 10.9749 4.35355 10.0251 4.93934 9.43934C5.5251 8.85355 6.47484 8.85355 7.06065 9.43934Z'
                    fill='black'
                  ></path>
                </g>
                <defs>
                  <clipPath id='clip0_1251_27914'>
                    <rect width='12' height='12' fill='white'></rect>
                  </clipPath>
                </defs>
              </svg>
            </button>
            <div
              className='dropdown-menu mt-3 my---dropdown'
              aria-labelledby='dropdownMenuButton'
              x-placement='top-start'
              style={{
                position: "absolute",
                willChange: "transform",
                top: "0px",
                left: "0px",
                transform: "translate3d(-95px, -134px, 0px)",
              }}
            >
              <div className='drop-down-menu-inner'>
                <a className='dropdown-item' href='#'>
                  Action
                </a>
                <a className='dropdown-item' href='#'>
                  Another action
                </a>
                <a className='dropdown-item' href='#'>
                  Something else here
                </a>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default TalksList;
