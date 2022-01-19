import React from 'react'

export default function ActiveSection() {
  return (
    <div>
       <div class="row">
                        <div class="col-xl-12">
                            <div class="card m-b-30">
                                <div class="card-body">
                                    <h4 class="mt-0 header-title mb-4">Trending Category</h4>
                                    <div class="table-responsive">
                                        <table class="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th scope="col">currency Name</th>
                                                    <th scope="col">currency </th>
                                                    <th scope="col">Current Price</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Changes</th>
                                                  
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Bitcoin</td>

                                                    <td>
                                                        <div>
                                                            <img src="assets/images/user-2.jpg" alt="" class="thumb-md rounded-circle mr-2" /> 
                                                        </div>
                                                    </td>
                                                     
                                                    <td>$9,420,000</td>
                                                    <td><span class="badge badge-primary">Delivered</span></td>
                                                    <td>
                                            <span class="text-primary">80%<i class="fas fa-arrow-up"></i></span>
                                        </td>
                                                   
                                                    
                                                    
                                                </tr>
                                                <tr>
                                                    <td>Etherium</td>
                                                    <td>
                                                        <div>
                                                            <img src="assets/images/user-3.jpg" alt="" class="thumb-md rounded-circle mr-2" /> 
                                                        </div>
                                                    </td>
                                                    <td>$3,120,000</td>
                                                    <td><span class="badge badge-danger">Decrease</span></td>
                                                   
                                                    
                                                 
                                                 
                                                    <td>
                                            <span class="text-danger">65%<i class="fas fa-arrow-down"></i></span>
                                        </td>
                                                   
                                                </tr>
                                                <tr>
                                                    <td>Tron</td>

                                                    <td>
                                                        <div>
                                                            <img src="assets/images/user-4.jpg" alt="" class="thumb-md rounded-circle mr-2" /> 
                                                        </div>
                                                    </td>
                                                    <td>$6,360,000</td>
                                                    <td><span class="badge badge-danger">Decrease</span></td>
                                                    <td>
                                            <span class="text-danger">55%<i class="fas fa-arrow-down"></i></span>
                                        </td>
                                                    
                
                                                   
                                                </tr>
                                                <tr>
                                                    <td>Dogecoin</td>

                                                    <td>
                                                        <div>
                                                            <img src="assets/images/user-5.jpg" alt="" class="thumb-md rounded-circle mr-2" /> 
                                                        </div>
                                                    </td>
                                                    <td>$5,200,000</td>
                                                    <td><span class="badge badge-primary">Increase</span></td>
                                                    <td>
                                            <span class="text-primary">65%<i class="fas fa-arrow-up"></i></span>
                                        </td>
                                                  
                                                    
                                                   
                                                </tr>
                                                <tr>
                                                    <td>Binance</td>

                                                    <td>
                                                        <div>
                                                            <img src="assets/images/user-6.jpg" alt="" class="thumb-md rounded-circle mr-2" /> 
                                                        </div>
                                                    </td>
                                                    <td>$7,250,000</td>
                                                    <td><span class="badge badge-primary">Increase</span></td>
                                                   
                                                    <td>
                                            <span class="text-primary">70%<i class="fas fa-arrow-up"></i></span>
                                        </td>
                                                    
{/*                                                   
                                                    <td>
                                                        <div>
                                                            <a href="#" class="btn btn-primary btn-sm">Edit</a>
                                                        </div>
                                                    </td> */}
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    </div>
  )
}
