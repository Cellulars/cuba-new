<template>
  <div>
    <Breadcrumbs main="Dashboard" title="e-commerce" />
    <div class="container-fluid">
      <div class="row size-column">
        <div class="col-xl-7 box-col-12 xl-100">
          <div class="row dash-chart">
            <div class="col-xl-6 box-col-6 col-md-6">
              <px-card slot="headerAction" class="card-no-border">
                <div slot="headerCustom">
                  <div class="media">
                    <div class="media-body">
                      <p class="font-roboto"><span class="f-w-500">Today Total sale</span><span class="f-w-700 font-primary ml-2">89.21%</span></p>
                      <h4 class="f-w-500 mb-0 f-20">$ 3000.56</h4>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="media">
                    <div class="media-body">
                      <div class="profit-card">
                        <div id="spaline-chart">
                          <apexchart height="150" type="area" :options="apexTotalsale.options" :series="apexTotalsale.series"></apexchart>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </px-card>
            </div>
            <div class="col-xl-6 box-col-6 col-md-6">
              <div class="card o-hidden">
                <div class="card-header card-no-border">
                  <div class="card-header-right">
                    <ul class="list-unstyled card-option">
                      <li>
                        <i class="fa fa-spin fa-cog"></i>
                      </li>
                      <li>
                        <i class="view-html fa fa-code"></i>
                      </li>
                      <li>
                        <i class="icofont icofont-maximize full-card"></i>
                      </li>
                      <li>
                        <i class="icofont icofont-minus minimize-card"></i>
                      </li>
                      <li>
                        <i class="icofont icofont-refresh reload-card"></i>
                      </li>
                      <li>
                        <i class="icofont icofont-error close-card"></i>
                      </li>
                    </ul>
                  </div>
                  <div class="media">
                    <div class="media-body">
                      <p class="font-roboto">
                        <span class="f-w-500">Today Total visits</span>
                        <span class="f-w-700 font-primary ml-2">35.00%</span>
                      </p>
                      <h4 class="f-w-500 mb-0 f-20 counter">9,050</h4>
                    </div>
                  </div>
                </div>
                <div class="card-body pt-0">
                  <div class="monthly-visit">
                    <div id="column-chart">
                      <apexchart height="105" type="bar" :options="apexTotalvisit.options" :series="apexTotalvisit.series"></apexchart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 box-col-6 col-lg-12 col-md-6">
              <div class="card o-hidden">
                <div class="card-body">
                  <div class="ecommerce-widgets media">
                    <div class="media-body">
                      <p class="f-w-500 font-roboto">
                        Our Sale Value
                        <span class="badge pill-badge-primary ml-3">New</span>
                      </p>
                      <h4 class="f-w-500 mb-0 f-20">
                        $
                        <span class="counter">7454.25</span>
                      </h4>
                    </div>
                    <div class="ecommerce-box light-bg-primary">
                      <i class="fa fa-heart" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 box-col-6 col-lg-12 col-md-6">
              <div class="card o-hidden">
                <div class="card-body">
                  <div class="media">
                    <div class="media-body">
                      <p class="f-w-500 font-roboto">
                        Today Stock value
                        <span class="badge pill-badge-primary ml-3">Hot</span>
                      </p>
                      <div class="progress-box">
                        <h4 class="f-w-500 mb-0 f-20">
                          $
                          <span class="counter">9000.04</span>
                        </h4>
                        <div class="progress sm-progress-bar progress-animate app-right d-flex justify-content-end">
                          <div class="progress-gradient-primary" role="progressbar" style="width: 35%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <span class="font-primary">88%</span>
                            <span class="animate-circle"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-5 box-col-12 xl-50">
          <div class="card o-hidden dash-chart">
            <div class="card-header card-no-border">
              <div class="card-header-right">
                <ul class="list-unstyled card-option">
                  <li>
                    <i class="fa fa-spin fa-cog"></i>
                  </li>
                  <li>
                    <i class="view-html fa fa-code"></i>
                  </li>
                  <li>
                    <i class="icofont icofont-maximize full-card"></i>
                  </li>
                  <li>
                    <i class="icofont icofont-minus minimize-card"></i>
                  </li>
                  <li>
                    <i class="icofont icofont-refresh reload-card"></i>
                  </li>
                  <li>
                    <i class="icofont icofont-error close-card"></i>
                  </li>
                </ul>
              </div>
              <div class="media">
                <div class="media-body">
                  <p class="font-roboto">
                    <span class="f-w-500">Total Profit</span>
                    <span class="font-primary f-w-700 ml-2">99.00%</span>
                  </p>
                  <h4 class="f-w-500 mb-0 f-20"> $ 3000.56 </h4>
                </div>
              </div>
            </div>
            <div class="card-body pt-0">
              <div class="negative-container">
                <div id="negative-chart">
                  <apexchart height="320" type="bar" :options="apexTotalprofit.options" :series="apexTotalprofit.series"></apexchart>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 xl-50 box-col-12">
          <div class="card">
            <div class="card-header card-no-border">
              <h5>New Product</h5>
              <div class="card-header-right">
                <ul class="list-unstyled card-option">
                  <li>
                    <i class="fa fa-spin fa-cog"></i>
                  </li>
                  <li>
                    <i class="view-html fa fa-code"></i>
                  </li>
                  <li>
                    <i class="icofont icofont-maximize full-card"></i>
                  </li>
                  <li>
                    <i class="icofont icofont-minus minimize-card"></i>
                  </li>
                  <li>
                    <i class="icofont icofont-refresh reload-card"></i>
                  </li>
                  <li>
                    <i class="icofont icofont-error close-card"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div class="card-body pt-0">
              <div class="our-product">
                <div class="table-responsive">
                  <table class="table table-bordernone">
                    <tbody class="f-w-500">
                      <tr>
                        <td>
                          <div class="media">
                            <img class="img-fluid m-r-15 rounded-circle" src="../../assets/images/dashboard-2/product/1.jpg" alt />
                            <div class="media-body">
                              <span>Pot</span>
                              <p class="font-roboto">100 item</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p>coupon code</p>
                          <span>PIX001</span>
                        </td>
                        <td>
                          <p>-51%</p>
                          <span>$99.00</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="media">
                            <img class="img-fluid m-r-15 rounded-circle" src="../../assets/images/dashboard-2/product/2.jpg" alt />
                            <div class="media-body">
                              <span>Buds</span>
                              <p class="font-roboto">105 item</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p>coupon code</p>
                          <span>PIX002</span>
                        </td>
                        <td>
                          <p>-78%</p>
                          <span>$66.00</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="media">
                            <img class="img-fluid m-r-15 rounded-circle" src="../../assets/images/dashboard-2/product/3.jpg" alt />
                            <div class="media-body">
                              <span>Headphone</span>
                              <p class="font-roboto">604 item</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p>coupon code</p>
                          <span>PIX003</span>
                        </td>
                        <td>
                          <p>-04%</p>
                          <span>$116.00</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="media">
                            <img class="img-fluid m-r-15 rounded-circle" src="../../assets/images/dashboard-2/product/4.jpg" alt />
                            <div class="media-body">
                              <span>Glass</span>
                              <p class="font-roboto">541 item</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p>coupon code</p>
                          <span>PIX004</span>
                        </td>
                        <td>
                          <p>-60%</p>
                          <span>$99.00</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="media">
                            <img class="img-fluid m-r-15 rounded-circle" src="../../assets/images/dashboard-2/product/5.jpg" alt />
                            <div class="media-body">
                              <span>Watch</span>
                              <p class="font-roboto">999 item</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p>coupon code</p>
                          <span>PIX005</span>
                        </td>
                        <td>
                          <p>-50%</p>
                          <span>$58.00</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 xl-50 box-col-12">
          <div class="card">
            <div class="card-header card-no-border">
              <h5>Best selling</h5>
              <div class="card-header-right">
                <ul class="list-unstyled card-option">
                  <li>
                    <i class="fa fa-spin fa-cog"></i>
                  </li>
                  <li>
                    <i class="view-html fa fa-code"></i>
                  </li>
                  <li>
                    <i class="icofont icofont-maximize full-card"></i>
                  </li>
                  <li>
                    <i class="icofont icofont-minus minimize-card"></i>
                  </li>
                  <li>
                    <i class="icofont icofont-refresh reload-card"></i>
                  </li>
                  <li>
                    <i class="icofont icofont-error close-card"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div class="card-body pt-0">
              <div class="our-product">
                <div class="table-responsive">
                  <table class="table table-bordernone">
                    <tbody class="f-w-500">
                      <tr>
                        <td>
                          <div class="media">
                            <img class="img-fluid m-r-15 rounded-circle" src="../../assets/images/dashboard-2/product/1.jpg" alt />
                            <div class="media-body">
                              <span>Pot</span>
                              <p class="font-roboto">100 item</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p>coupon code</p>
                          <span>PIX001</span>
                        </td>
                        <td>
                          <p>-51%</p>
                          <span>$99.00</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="media">
                            <img class="img-fluid m-r-15 rounded-circle" src="../../assets/images/dashboard-2/product/2.jpg" alt />
                            <div class="media-body">
                              <span>Buds</span>
                              <p class="font-roboto">105 item</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p>coupon code</p>
                          <span>PIX002</span>
                        </td>
                        <td>
                          <p>-78%</p>
                          <span>$66.00</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="media">
                            <img class="img-fluid m-r-15 rounded-circle" src="../../assets/images/dashboard-2/product/3.jpg" alt />
                            <div class="media-body">
                              <span>Headphone</span>
                              <p class="font-roboto">604 item</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p>coupon code</p>
                          <span>PIX003</span>
                        </td>
                        <td>
                          <p>-04%</p>
                          <span>$116.00</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="media">
                            <img class="img-fluid m-r-15 rounded-circle" src="../../assets/images/dashboard-2/product/4.jpg" alt />
                            <div class="media-body">
                              <span>Glass</span>
                              <p class="font-roboto">541 item</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p>coupon code</p>
                          <span>PIX004</span>
                        </td>
                        <td>
                          <p>-60%</p>
                          <span>$99.00</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="media">
                            <img class="img-fluid m-r-15 rounded-circle" src="../../assets/images/dashboard-2/product/5.jpg" alt />
                            <div class="media-body">
                              <span>Watch</span>
                              <p class="font-roboto">999 item</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p>coupon code</p>
                          <span>PIX005</span>
                        </td>
                        <td>
                          <p>-50%</p>
                          <span>$58.00</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 xl-50 box-col-12">
          <div class="card">
            <div class="card-header card-no-border">
              <h5>News & Updates</h5>
              <div class="card-header-right">
                <ul class="list-unstyled card-option">
                  <li>
                    <i class="fa fa-spin fa-cog"></i>
                  </li>
                  <li>
                    <i class="view-html fa fa-code"></i>
                  </li>
                  <li>
                    <i class="icofont icofont-maximize full-card"></i>
                  </li>
                  <li>
                    <i class="icofont icofont-minus minimize-card"></i>
                  </li>
                  <li>
                    <i class="icofont icofont-refresh reload-card"></i>
                  </li>
                  <li>
                    <i class="icofont icofont-error close-card"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div class="card-body new-update pt-0">
              <div class="activity-timeline">
                <div class="media">
                  <div class="activity-line"></div>
                  <div class="activity-dot-secondary"></div>
                  <div class="media-body">
                    <span>Update Product</span>
                    <p class="font-roboto">Quisque a consequat ante Sit amet magna at volutapt.</p>
                  </div>
                </div>
                <div class="media">
                  <div class="activity-dot-primary"></div>
                  <div class="media-body">
                    <span>James liked Nike Shoes</span>
                    <p class="font-roboto">Aenean sit amet magna vel magna fringilla ferme.</p>
                  </div>
                </div>
                <div class="media">
                  <div class="activity-dot-secondary"></div>
                  <div class="media-body">
                    <span>
                      john just buy your product
                      <i class="fa fa-circle circle-dot-secondary pull-right"></i>
                    </span>
                    <p class="font-roboto">Vestibulum nec mi suscipit, dapibus purus.....</p>
                  </div>
                </div>
                <div class="media">
                  <div class="activity-dot-primary"></div>
                  <div class="media-body">
                    <span>
                      Jihan Doe just save your product
                      <i class="fa fa-circle circle-dot-primary pull-right"></i>
                    </span>
                    <p class="font-roboto">Curabitur egestas consequat lorem.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 risk-col xl-100 box-col-12">
          <div class="card total-users">
            <div class="card-header card-no-border">
              <h5>Risk Factor</h5>
              <div class="card-header-right">
                <ul class="list-unstyled card-option">
                  <li>
                    <i class="fa fa-spin fa-cog"></i>
                  </li>
                  <li>
                    <i class="view-html fa fa-code"></i>
                  </li>
                  <li>
                    <i class="icofont icofont-maximize full-card"></i>
                  </li>
                  <li>
                    <i class="icofont icofont-minus minimize-card"></i>
                  </li>
                  <li>
                    <i class="icofont icofont-refresh reload-card"></i>
                  </li>
                  <li>
                    <i class="icofont icofont-error close-card"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div class="card-body pt-0">
              <div class="apex-chart-container goal-status text-center row">
                <div class="rate-card col-xl-12">
                  <div class="goal-chart">
                    <div id="riskfactorchart">
                      <apexchart height="350" type="radialBar" :options="apexRiskchart.options" :series="apexRiskchart.series"></apexchart>
                    </div>
                  </div>
                  <div class="goal-end-point">
                    <ul>
                      <li class="mt-0 pt-0">
                        <h6 class="font-primary">As From</h6>
                        <h6 class="f-w-400">24 March 2021</h6>
                      </li>
                      <li>
                        <h6 class="mb-2 f-w-400">Total Goal</h6>
                        <h5 class="mb-0">$94,000.20</h5>
                      </li>
                    </ul>
                  </div>
                </div>
                <ul class="col-xl-12">
                  <li>
                    <div class="goal-detail">
                      <h6> <span class="font-primary">Goal Archive :</span>$91,000.000 </h6>
                      <div class="progress sm-progress-bar progress-animate">
                        <div class="progress-gradient-primary" role="progressbar" style="width: 60%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                    <div class="goal-detail mb-0">
                      <h6> <span class="font-primary">Duration:</span>9 Month </h6>
                      <div class="progress sm-progress-bar progress-animate">
                        <div class="progress-gradient-primary" role="progressbar" style="width: 50%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="btn-download btn btn-gradient f-w-500">Download details</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-9 xl-100 box-col-12">
          <div class="row">
            <div class="col-xl-12">
              <div class="card offer-box">
                <div class="card-body p-0">
                  <div class="offer-slider">
                    <div class="carousel slide" id="carouselExampleCaptions" data-ride="carousel">
                      <div class="carousel-inner">
                        <swiper class="swiper" :options="swiperOption">
                          <swiper-slide>
                            <div class="carousel-item active">
                              <div class="selling-slide row">
                                <div class="col-xl-4 col-md-6">
                                  <div class="d-flex">
                                    <div class="left-content">
                                      <p>Much More Selling product</p>
                                      <h4 class="f-w-600">Best Selling Product</h4>
                                      <span class="badge badge-white badge-pill">78% offer</span>
                                      <span class="badge badge-dotted badge-pill ml-2">Coupon Code : 12345</span>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-xl-4 col-md-12">
                                  <div class="center-img">
                                    <img class="img-fluid" src="../../assets/images/dashboard-2/offer-shoes-3.png" alt="..." />
                                  </div>
                                </div>
                                <div class="col-xl-4 col-md-6">
                                  <div class="d-flex">
                                    <div class="right-content">
                                      <p>Money back Guarrantee</p>
                                      <h4 class="f-w-600">Women Straight Kurta</h4>
                                      <span class="badge badge-white badge-pill">$100.00</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </swiper-slide>
                          <swiper-slide>
                            <div class="carousel-item active">
                              <div class="selling-slide row">
                                <div class="col-xl-4 col-md-6">
                                  <div class="d-flex">
                                    <div class="left-content">
                                      <p>Money back Guarrantee</p>
                                      <h4 class="f-w-600">Women Straight Kurta</h4>
                                      <span class="badge badge-white badge-pill">$100.00</span>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-xl-4 col-md-12">
                                  <div class="center-img">
                                    <img class="img-fluid" src="../../assets/images/dashboard-2/offer-shoes-3.png" alt="..." />
                                  </div>
                                </div>
                                <div class="col-xl-4 col-md-6">
                                  <div class="d-flex">
                                    <div class="right-content">
                                      <p>Money back Guarrantee</p>
                                      <h4 class="f-w-600">Nike Air Shoes</h4>
                                      <span class="badge badge-white badge-pill">$120.55</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </swiper-slide>
                          <swiper-slide>
                            <div class="carousel-item active">
                              <div class="selling-slide row">
                                <div class="col-xl-4 col-md-6">
                                  <div class="d-flex">
                                    <div class="left-content">
                                      <p>Maximum Selling product</p>
                                      <h4 class="f-w-600">Best Selling Product</h4>
                                      <span class="badge badge-white badge-pill">50% offer</span>
                                      <span class="badge badge-dotted badge-pill ml-2">Coupon Code : 21546</span>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-xl-4 col-md-12">
                                  <div class="center-img">
                                    <img class="img-fluid" src="../../assets/images/dashboard-2/offer-shoes-3.png" alt="..." />
                                  </div>
                                </div>
                                <div class="col-xl-4 col-md-6">
                                  <div class="d-flex">
                                    <div class="right-content">
                                      <p>Money back Guarrantee</p>
                                      <h4 class="f-w-600">Nike Air Shoes</h4>
                                      <span class="badge badge-white badge-pill">$120.55</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </swiper-slide>
                        </swiper>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-12">
              <div class="card">
                <div class="card-body">
                  <div class="best-seller-table responsive-tbl">
                    <div class="item">
                      <div class="table-responsive product-list">
                        <table class="table table-bordernone">
                          <thead>
                            <tr>
                              <th class="f-22">Best Seller</th>
                              <th>Date</th>
                              <th>Product</th>
                              <th>Country</th>
                              <th>Total</th>
                              <th class="text-right">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div class="d-inline-block align-middle">
                                  <img class="img-40 m-r-15 rounded-circle align-top" src="../../assets/images/avtar/7.jpg" alt />
                                  <div class="status-circle bg-primary"></div>
                                  <div class="d-inline-block">
                                    <span>John keter</span>
                                    <p class="font-roboto">2019</p>
                                  </div>
                                </div>
                              </td>
                              <td>06 August</td>
                              <td>CAP</td>
                              <td>
                                <i class="flag-icon flag-icon-gb"></i>
                              </td>
                              <td>
                                <span class="label">$5,08,652</span>
                              </td>
                              <td class="text-right">
                                <span class="badge badge-light-success"><feather type="check" class="mr-2"></feather> Done</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="d-inline-block align-middle">
                                  <img class="img-40 m-r-15 rounded-circle align-top" src="../../assets/images/avtar/4.jpg" alt />
                                  <div class="status-circle bg-primary"></div>
                                  <div class="d-inline-block">
                                    <span>Herry Venter</span>
                                    <p class="font-roboto">2020</p>
                                  </div>
                                </div>
                              </td>
                              <td>21 March</td>
                              <td>Branded Shoes</td>
                              <td>
                                <i class="flag-icon flag-icon-us"></i>
                              </td>
                              <td>
                                <span class="label">$59,105</span>
                              </td>
                              <td class="text-right">
                                <span class="badge badge-light-warning"><feather type="rotate-cw" class="mr-2"></feather> Pending</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="d-inline-block align-middle">
                                  <img class="img-40 m-r-15 rounded-circle align-top" src="../../assets/images/avtar/16.jpg" alt />
                                  <div class="status-circle bg-primary"></div>
                                  <div class="d-inline-block">
                                    <span>loain deo</span>
                                    <p class="font-roboto">2020</p>
                                  </div>
                                </div>
                              </td>
                              <td>09 March</td>
                              <td>Headphone</td>
                              <td>
                                <i class="flag-icon flag-icon-za"></i>
                              </td>
                              <td>
                                <span class="label">$10,155</span>
                              </td>
                              <td class="text-right">
                                <span class="badge badge-light-success"><feather type="check" class="mr-2"></feather> Done</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="d-inline-block align-middle">
                                  <img class="img-40 m-r-15 rounded-circle align-top" src="../../assets/images/avtar/11.jpg" alt />
                                  <div class="status-circle bg-primary"></div>
                                  <div class="d-inline-block">
                                    <span>Horen Hors</span>
                                    <p class="font-roboto">2020</p>
                                  </div>
                                </div>
                              </td>
                              <td>14 February</td>
                              <td>Cell Phone</td>
                              <td>
                                <i class="flag-icon flag-icon-at"></i>
                              </td>
                              <td>
                                <span class="label">$90,568</span>
                              </td>
                              <td class="text-right">
                                <span class="badge badge-light-info"><feather type="clock" class="mr-2"></feather> In process</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="d-inline-block align-middle">
                                  <img class="img-40 m-r-15 rounded-circle align-top" src="../../assets/images/avtar/3.jpg" alt />
                                  <div class="status-circle bg-primary"></div>
                                  <div class="d-inline-block">
                                    <span>fenter Jessy</span>
                                    <p class="font-roboto">2021</p>
                                  </div>
                                </div>
                              </td>
                              <td>12 January</td>
                              <td>Earings</td>
                              <td>
                                <i class="flag-icon flag-icon-br"></i>
                              </td>
                              <td>
                                <span class="label">$10,652</span>
                              </td>
                              <td class="text-right">
                                <span class="badge badge-light-warning"><feather type="rotate-cw" class="mr-2"></feather> Pending</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var primary = localStorage.getItem("primary_color") || "#7366ff";
var secondary = localStorage.getItem("secondary_color") || "#f73164";

import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      },
      apexTotalsale: {
        options: {
          chart: {
            height: 150,
            type: "area",
            toolbar: {
              show: false,
            },
          },
          colors: [primary, secondary],
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
            width: 0,
          },
          xaxis: {
            type: "datetime",
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z"],
          },
          yaxis: {
            low: 0,
            offsetX: 0,
            offsetY: 0,
            show: false,
            labels: {
              low: 0,
              offsetX: 0,
              show: false,
            },
            axisBorder: {
              low: 0,
              offsetX: 0,
              show: false,
            },
          },
          fill: {
            type: "gradient",
            opacity: [1, 0.4, 0.25],
            gradient: {
              shade: "light",
              type: "horizontal",
              shadeIntensity: 1,
              gradientToColors: ["#a26cf8", "#a927f9", primary],
              opacityFrom: [1, 0.4, 0.25],
              opacityTo: [1, 0.4, 0.25],
              stops: [30, 100],
              colorStops: [],
            },
            colors: [primary, primary, primary],
          },
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm",
            },
          },
          legend: {
            show: false,
          },
          grid: {
            show: false,
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: -40,
            },
          },
        },
        series: [
          {
            name: "series1",
            data: [280, 170, 440, 170, 270, 130],
          },
          {
            name: "series2",
            data: [150, 500, 300, 250, 420, 350],
          },
          {
            name: "series3",
            data: [450, 150, 320, 500, 280, 100],
          },
        ],
      },
      apexTotalvisit: {
        options: {
          chart: {
            height: 105,
            type: "bar",
            stacked: true,
            toolbar: {
              show: false,
            },
          },
          plotOptions: {
            bar: {
              dataLabels: {
                position: "top", // top, center, bottom
              },
              columnWidth: "20%",
              startingShape: "rounded",
              endingShape: "rounded",
            },
          },
          colors: [primary],
          dataLabels: {
            enabled: false,

            formatter: function (val) {
              return val + "%";
            },
            offsetY: -10,
            style: {
              fontSize: "12px",
              colors: [primary],
            },
          },
          xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            position: "bottom",

            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            crosshairs: {
              fill: {
                type: "gradient",
                gradient: {
                  colorFrom: primary,
                  colorTo: secondary,
                  stops: [0, 100],
                  opacityFrom: 0.4,
                  opacityTo: 0.5,
                },
              },
            },
            tooltip: {
              enabled: true,
            },
            labels: {
              show: false,
            },
          },
          yaxis: {
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            labels: {
              show: false,
              formatter: function (val) {
                return val + "%";
              },
            },
          },
          grid: {
            show: false,
            padding: {
              top: -35,
              right: -45,
              bottom: -20,
              left: -10,
            },
          },
        },
        series: [
          {
            name: "Inflation",
            data: [2.3, 5.1, 3.0, 9.1, 2.0, 4.6, 2.2, 9.3, 5.4, 4.8, 3.5, 5.2],
          },
        ],
      },
      apexTotalprofit: {
        options: {
          chart: {
            type: "bar",
            height: 320,
            stacked: true,
            toolbar: {
              show: false,
            },
          },
          plotOptions: {
            bar: {
              vertical: true,
              columnWidth: "40%",
              barHeight: "80%",
              startingShape: "rounded",
              endingShape: "rounded",
            },
          },
          stroke: {
            width: 0,
          },
          legend: {
            show: false,
          },
          colors: [primary],
          dataLabels: {
            enabled: false,

            formatter: function (val) {
              return val + "%";
            },
            offsetY: -10,
            style: {
              fontSize: "12px",
              colors: [primary],
            },
          },
          xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
            labels: {
              show: true,
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
          yaxis: {
            min: -5,
            max: 5,
            show: false,
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
          fill: {
            // type: 'solid',
            opacity: [0.8, 0.8, 0.2, 0.2],
            colors: [
              function ({ value }) {
                if (value < 0.75) {
                  return "#a26cf8";
                } else {
                  return primary;
                }
              },
            ],
          },
          grid: {
            xaxis: {
              lines: {
                show: false,
              },
            },
            yaxis: {
              lines: {
                show: false,
              },
            },
          },
        },
        series: [
          {
            name: "Daily",
            data: [
              0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45, 1.5, 1.55, 1.5, 1.45, 1.4, 1.35, 1.3, 1.25, 1.2, 1.15, 1.1, 1.05, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6, 0.55,
              0.5, 0.45, 0.4, 0.35,
            ],
          },
          {
            name: "Weekly",
            data: [
              -0.4, -0.5, -0.6, -0.7, -0.8, -0.9, -1.1, -1.15, -1.2, -1.25, -1.3, -1.35, -1.4, -1.45, -1.5, -1.55, -1.5, -1.45, -1.4, -1.35, -1.3, -1.25, -1.2, -1.15, -1.1, -1.05, -0.9, -0.85, -0.8,
              -0.75, -0.7, -0.65, -0.6, -0.55, -0.5, -0.45, -0.4, -0.35,
            ],
          },
          {
            name: "Monthly",
            data: [
              -1.35, -1.45, -1.55, -1.65, -1.75, -1.85, -1.95, -2.15, -2.25, -2.35, -2.45, -2.55, -2.65, -2.75, -2.85, -2.95, -3.0, -3.1, -3.2, -3.25, -3.1, -3.0, -2.95, -2.85, -2.75, -2.65, -2.55,
              -2.45, -2.35, -2.25, -2.15, -1.95, -1.85, -1.75, -1.65, -1.55, -1.45, -1.35,
            ],
          },
          {
            name: "Yearly",
            data: [
              1.35, 1.45, 1.55, 1.65, 1.75, 1.85, 1.95, 2.15, 2.25, 2.35, 2.45, 2.55, 2.65, 2.75, 2.85, 2.95, 3.0, 3.1, 3.2, 3.25, 3.1, 3.0, 2.95, 2.85, 2.75, 2.65, 2.55, 2.45, 2.35, 2.25, 2.15, 1.95,
              1.85, 1.75, 1.65, 1.55, 1.45, 1.35,
            ],
          },
        ],
      },
      apexRiskchart: {
        options: {
          chart: {
            height: 350,
            type: "radialBar",
            offsetY: -10,
          },
          plotOptions: {
            radialBar: {
              startAngle: -135,
              endAngle: 135,
              inverseOrder: true,
              hollow: {
                margin: 5,
                size: "60%",
                image: require("../../assets/images/dashboard-2/radial-image.png"),
                imageWidth: 140,
                imageHeight: 140,
                imageClipped: false,
              },
              track: {
                opacity: 0.4,
                colors: primary,
              },
              dataLabels: {
                enabled: false,
                enabledOnSeries: undefined,
                formatter: function (val) {
                  return val + "%";
                },
                textAnchor: "middle",
                distributed: false,
                offsetX: 0,
                offsetY: 0,
                style: {
                  fontSize: "14px",
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fill: ["#2b2b2b"],
                },
              },
            },
          },
          labels: ["Selling rate"],
          colors: [primary],
          stroke: {
            dashArray: 15,
            strokecolor: ["#ffffff"],
          },
          fill: {
            type: "gradient",
            gradient: {
              shade: "light",
              shadeIntensity: 0.15,
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100],
              gradientToColors: ["#a927f9"],
              type: "horizontal",
            },
          },
        },
        series: [70],
      },
    };
  },
};
</script>
