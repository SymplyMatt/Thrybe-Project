import React from "react";

const SupportList = ({
  showBtn,
  setShowBtn,
  supportPage,
  setSupportPage,
  item,
}) => {
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
        <td colSpan='2' onClick={() => setSupportPage("single")}>
          <div className='d-flex flex-column align-items-start'>
            <h5 className='font-sm f-weight-700 mt-2'>Enquiry</h5>
          </div>
        </td>
        <td>
          <div className='d-flex flex-column align-items-start'>
            <h6 className='f-weight-600 font-sm'>
              I want to know if i can <br />
              cashout without playing
            </h6>
          </div>
        </td>
        <td>
          <div className='d-flex flex-column align-items-start'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              assumenda <br />
              corrupti eligendi facilis officia repellendus consectetur,
              consequatur numquam in molestiae
            </p>
          </div>
        </td>
        <td>
          <div>
            <span className='f-weight-600'>05.01.2020 01:39PM</span>
          </div>
        </td>
        <td>
          <div className='d-flex align-items-center justify-content-center'>
            <i className='fa fa-trash'></i>
          </div>
        </td>
        <td>
          <div className='d-flex'>
            <div className='successful-status'>
              <span className='font-xs'>Active</span>
            </div>
          </div>
        </td>
      </tr>
      <tr style={{ backgroundColor: "rgba(255, 255, 255, 0.65)" }}>
        <td>
          <input type='checkbox' id='check' />
        </td>
        <td colSpan='2'>
          <div className='d-flex flex-column align-items-start'>
            <h5 className='font-sm f-weight-700 mt-2'>Enquiry</h5>
          </div>
        </td>
        <td>
          <div className='d-flex flex-column align-items-start'>
            <h6 className='f-weight-600 font-sm'>
              I want to know if i can <br />
              cashout without playing
            </h6>
          </div>
        </td>
        <td>
          <div className='d-flex flex-column align-items-start'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              assumenda <br />
              corrupti eligendi facilis officia repellendus consectetur,
              consequatur numquam in molestiae
            </p>
          </div>
        </td>
        <td>
          <div>
            <span className='f-weight-600'>05.01.2020 01:39PM</span>
          </div>
        </td>
        <td>
          <div className='d-flex align-items-center justify-content-center'>
            <i className='fa fa-trash'></i>
          </div>
        </td>
        <td>
          <div className='d-flex'>
            <div className='successful-status'>
              <span className='font-xs'>Active</span>
            </div>
          </div>
        </td>
      </tr>
      <tr style={{ backgroundColor: "rgba(255, 255, 255, 0.65)" }}>
        <td>
          <input type='checkbox' id='check' />
        </td>
        <td colSpan='2'>
          <div className='d-flex flex-column align-items-start'>
            <h5 className='font-sm f-weight-700 mt-2'>Enquiry</h5>
          </div>
        </td>
        <td>
          <div className='d-flex flex-column align-items-start'>
            <h6 className='f-weight-600 font-sm'>
              I want to know if i can <br />
              cashout without playing
            </h6>
          </div>
        </td>
        <td>
          <div className='d-flex flex-column align-items-start'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              assumenda <br />
              corrupti eligendi facilis officia repellendus consectetur,
              consequatur numquam in molestiae
            </p>
          </div>
        </td>
        <td>
          <div>
            <span className='f-weight-600'>05.01.2020 01:39PM</span>
          </div>
        </td>
        <td>
          <div className='d-flex align-items-center justify-content-center'>
            <i className='fa fa-trash'></i>
          </div>
        </td>
        <td>
          <div className='d-flex'>
            <div className='successful-status'>
              <span className='font-xs'>Active</span>
            </div>
          </div>
        </td>
      </tr>
      <tr style={{ backgroundColor: "rgba(255, 255, 255, 0.65)" }}>
        <td>
          <input type='checkbox' id='check' />
        </td>
        <td colSpan='2'>
          <div className='d-flex flex-column align-items-start'>
            <h5 className='font-sm f-weight-700 mt-2'>Enquiry</h5>
          </div>
        </td>
        <td>
          <div className='d-flex flex-column align-items-start'>
            <h6 className='f-weight-600 font-sm'>
              I want to know if i can <br />
              cashout without playing
            </h6>
          </div>
        </td>
        <td>
          <div className='d-flex flex-column align-items-start'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              assumenda <br />
              corrupti eligendi facilis officia repellendus consectetur,
              consequatur numquam in molestiae
            </p>
          </div>
        </td>
        <td>
          <div>
            <span className='f-weight-600'>05.01.2020 01:39PM</span>
          </div>
        </td>
        <td>
          <div className='d-flex align-items-center justify-content-center'>
            <i className='fa fa-trash'></i>
          </div>
        </td>
        <td>
          <div className='d-flex'>
            <div className='successful-status'>
              <span className='font-xs'>Active</span>
            </div>
          </div>
        </td>
      </tr>
      <tr style={{ backgroundColor: "rgba(255, 255, 255, 0.65)" }}>
        <td>
          <input type='checkbox' id='check' />
        </td>
        <td colSpan='2'>
          <div className='d-flex flex-column align-items-start'>
            <h5 className='font-sm f-weight-700 mt-2'>Enquiry</h5>
          </div>
        </td>
        <td>
          <div className='d-flex flex-column align-items-start'>
            <h6 className='f-weight-600 font-sm'>
              I want to know if i can <br />
              cashout without playing
            </h6>
          </div>
        </td>
        <td>
          <div className='d-flex flex-column align-items-start'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              assumenda <br />
              corrupti eligendi facilis officia repellendus consectetur,
              consequatur numquam in molestiae
            </p>
          </div>
        </td>
        <td>
          <div>
            <span className='f-weight-600'>05.01.2020 01:39PM</span>
          </div>
        </td>
        <td>
          <div className='d-flex align-items-center justify-content-center'>
            <i className='fa fa-trash'></i>
          </div>
        </td>
        <td>
          <div className='d-flex'>
            <div className='successful-status'>
              <span className='font-xs'>Active</span>
            </div>
          </div>
        </td>
      </tr>

      <tr style={{ backgroundColor: "rgba(255, 255, 255, 0.65)" }}>
        <td>
          <input type='checkbox' id='check' />
        </td>
        <td colSpan='2'>
          <div className='d-flex flex-column align-items-start'>
            <h5 className='font-sm f-weight-700 mt-2'>Enquiry</h5>
          </div>
        </td>
        <td>
          <div className='d-flex flex-column align-items-start'>
            <h6 className='f-weight-600 font-sm'>
              I want to know if i can <br />
              cashout without playing
            </h6>
          </div>
        </td>
        <td>
          <div className='d-flex flex-column align-items-start'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              assumenda <br />
              corrupti eligendi facilis officia repellendus consectetur,
              consequatur numquam in molestiae
            </p>
          </div>
        </td>
        <td>
          <div>
            <span className='f-weight-600'>05.01.2020 01:39PM</span>
          </div>
        </td>
        <td>
          <div className='d-flex align-items-center justify-content-center'>
            <i className='fa fa-trash'></i>
          </div>
        </td>
        <td>
          <div className='d-flex'>
            <div className='successful-status'>
              <span className='font-xs'>Active</span>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default SupportList;
