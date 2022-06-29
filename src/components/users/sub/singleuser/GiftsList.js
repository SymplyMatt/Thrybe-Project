import React from 'react'

const GiftsList = () => {
  return (
    <>
        <tr style={{backgroundColor: 'white'}}>
            <td><img src="./assets/images/tinyBallsImg.svg" className="img-fluid" alt="" /></td>
            <td>
                <h5 className="font-sm2 mb-0 f-weight-600">
                    Tiny balls
                </h5>															
            </td>
            <td>
                <p className="font-sm mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis massa diam, ultricies aliquam se...</p>
            </td>
            <td>
                <p className="mb-0 f-weight-600">₦3,506</p>
            </td>
            <td>
                <p className="text-grey mb-0 f-weight-600">1</p>
            </td>
            <td><div className="received-status">Received</div></td>
        </tr>
        <tr style={{backgroundColor: 'white'}}>
            <td><img src="./assets/images/sunLightImg.svg" className="img-fluid" alt="" /></td>
            <td>
                <h5 className="font-sm2 mb-0 f-weight-600">
                    Sunlight Flower
                </h5>															
            </td>
            <td>
                <p className="font-sm mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis massa diam, ultricies aliquam se...</p>
            </td>
            <td>
                <p className="mb-0 f-weight-600">₦3,506</p>
            </td>
            <td>
                <p className="text-grey mb-0 f-weight-600">1</p>
            </td>
            <td><div className="purchased-status">Purchased</div></td>
        </tr>
        <tr style={{ backgroundColor: 'white' }}>
            <td><img src="./assets/images/teddyBear.svg" className="img-fluid" alt="" /></td>
            <td>
                <h5 className="font-sm2 mb-0 f-weight-600">
                    Tiny balls
                </h5>															
            </td>
            <td>
                <p className="font-sm mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis massa diam, ultricies aliquam se...</p>
            </td>
            <td>
                <p className="mb-0 f-weight-600">₦3,506</p>
            </td>
            <td>
                <p className="text-grey mb-0 f-weight-600">1</p>
            </td>
            <td><div className="purchased-status">Purchased</div></td>
        </tr>
    </>
  )
}

export default GiftsList