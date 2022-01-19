import React from 'react'

export default function AreaPiecards() {
  return (
    <div>
      <div class="row">
                        <div class="col-xl-8">
                            <div class="card m-b-30">
                                <div class="card-body">
                                    <h4 class="mt-0 header-title mb-4">Selected Coin(BTC/USD)</h4>
                                    <div id="morris-area-example" class="morris-charts morris-chart-height"></div>
                                </div>
                            </div>
                        </div>
                      
                        <div class="col-xl-4">
                            <div class="card m-b-30">
                                <div class="card-body">
                                    <h4 class="mt-0 header-title mb-4">Today Activivty</h4>
                                    <div id="morris-donut-example" class="morris-charts morris-chart-height"></div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
    </div>
  )
}
