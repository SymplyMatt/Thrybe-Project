import React from 'react'

const Gallery = () => {
  return (
        <div class="tab-pane fade show active" id="v-pills-gallery" role="tabpanel" aria-labelledby="v-pills-gallery-tab">
            <div class="Gallery">
                <h6 class="f-weight-600">Photo Album</h6>
                <p class="font-sm2 mb-4">
                    Profiles with pictures have more chances
                </p>
                <div class="grid-container">
                    <div class="item1">
                        <img
                            class="img-fluid"
                            src="./assets/images/main-profile-pic.svg"
                        />
                    </div>
                    <div class="item2">
                        <img
                            class="img-fluid"
                            src="./assets/images/secondary-dp1.svg"
                        />
                    </div>
                    <div class="item3">
                        <img
                            class="img-fluid"
                            src="./assets/images/secondary-dp1.svg"
                        />
                    </div>
                    <div class="item4">
                        <img
                            class="img-fluid"
                            src="./assets/images/secondary-dp1.svg"
                        />
                    </div>
                    <div class="item5">
                        <img
                            class="img-fluid"
                            src="./assets/images/secondary-dp1.svg"
                        />
                    </div>
                    <div class="item6">
                        <img
                            class="img-fluid"
                            src="./assets/images/secondary-dp1.svg"
                        />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Gallery