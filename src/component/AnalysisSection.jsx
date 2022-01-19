import React from 'react'

export default function AnalysisSection() {
  return (
    <div>
      
      <div class="row">
                        <div class="col-xl-4">
                            <div class="card m-b-30">
                                <div class="card-body">
                                    <h4 class="mt-0 header-title mb-4">Assets</h4>
                                    <div class="friends-suggestions">
                                        <a href="#" class="friends-suggestions-list">
                                            <div class="border-bottom position-relative">
                                                <div class="float-left mb-0 mr-3">
                                                    <img src="assets/images/user-2.jpg" alt="" class="rounded-circle thumb-md" />
                                                </div>
                                                <div  class="suggestion-icon float-right mt-2 pt-1">
                                                     <i class="text-success">$ 4,668</i> 
                                                    
                                                </div>
                                                <div class="desc">
                                                    <h5 class="font-14 mb-1 pt-2">Bitcoin Purchased</h5>
                                                    <p class="text-muted">3/5/2021</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" class="friends-suggestions-list">
                                            <div class="border-bottom position-relative">
                                                <div class="float-left mb-0 mr-3">
                                                    <img src="assets/images/user-3.jpg" alt="" class="rounded-circle thumb-md" />
                                                </div>
                                                <div class="suggestion-icon float-right mt-2 pt-1">
                                                <i class="text-success">$ 5,668</i> 
                                                </div>
                                                <div class="desc">
                                                    <h5 class="font-14 mb-1 pt-2">Transfer from Card</h5>
                                                    <p class="text-muted">7/18/2021</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" class="friends-suggestions-list">
                                            <div class="border-bottom position-relative">
                                                <div class="float-left mb-0 mr-3">
                                                    <img src="assets/images/user-4.jpg" alt="" class="rounded-circle thumb-md" />
                                                </div>
                                                <div class="suggestion-icon float-right mt-2 pt-1">
                                                <i class="text-success">$ 2,668</i> 
                                                </div>
                                                <div class="desc">
                                                    <h5 class="font-14 mb-1 pt-2">Etherium sold</h5>
                                                    <p class="text-muted">17/8/2021</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" class="friends-suggestions-list">
                                            <div class="border-bottom position-relative">
                                                <div class="float-left mb-0 mr-3">
                                                    <img src="assets/images/user-5.jpg" alt="" class="rounded-circle thumb-md" />
                                                </div>
                                                <div class="suggestion-icon float-right mt-2 pt-1">
                                                <i class="text-success">$ 3,668</i> 
                                                </div>
                                                <div class="desc">
                                                    <h5 class="font-14 mb-1 pt-2">lightcoin purchased</h5>
                                                    <p class="text-muted">18/7/2021</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" class="friends-suggestions-list">
                                            <div class="position-relative">
                                                <div class="float-left mb-0 mr-3">
                                                    <img src="assets/images/user-6.jpg" alt="" class="rounded-circle thumb-md" />
                                                </div>
                                                <div class="suggestion-icon float-right mt-2 pt-1">
                                                <i class="text-success">$ 2,568</i> 
                                                </div>
                                                <div class="desc">
                                                    <h5 class="font-14 mb-1 pt-2">Binance Bought</h5>
                                                    <p class="text-muted mb-1">12/12/2021</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4">
                            <div class="card m-b-30">
                                <div class="card-body">
                                    <h4 class="mt-0 header-title mb-4">Sales Analytics</h4>
                                    <div id="morris-line-example" class="morris-chart" style={{height: "360px"}}></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4">
                            <div class="card m-b-30">
                                <div class="card-body">
                                    <h4 class="mt-0 header-title mb-4">Recent Activity</h4>
                                    <ol class="activity-feed mb-0">
                                        <li class="feed-item">
                                            <div class="feed-item-list">
                                                <p class="text-muted mb-1">Now</p>
                                                <p class="font-15 mt-0 mb-0">Jassa magna Jassa, risus posted a new article: <b class="text-primary">Forget UX Rowland</b></p>
                                            </div>
                                        </li>
                                        <li class="feed-item">
                                            <p class="text-muted mb-1">Yesterday</p>
                                            <p class="font-15 mt-0 mb-0">Jassa posted a new article: <b class="text-primary">Designer Alex</b></p>
                                        </li>
                                        <li class="feed-item">
                                            <p class="text-muted mb-1">2:30PM</p>
                                            <p class="font-15 mt-0 mb-0">Jassa, Jassa, Jassa Commented <b class="text-primary"> Developer Moreno</b></p>
                                        </li>
                                       
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
    </div>
  )
}
