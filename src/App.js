import React from 'react';
import AreaPiecards from './component/AreaPiecards';
import AnalysisSection from './component/AnalysisSection';
import Navbar from './component/Navbar';
import NavCards from './component/NavCards';
import Sidebar from './component/Sidebar';
import Footer from './component/Footer';
import ActiveSection from './component/ActiveSection';
class App extends React.Component {
  
render() {
  return (
   <div className="APP">
     
    
    <div id="wrapper">
      
<Navbar/>
<Sidebar/>


        <div class="content-page">
           
            <div class="content">
                <div class="container-fluid">
                    <div class="page-title-box">
                        <div class="row align-items-center">
                            <div class="col-sm-6">
                                <h4 class="page-title">Overview</h4>
                            </div>
                           
                        </div>
                      
                    </div>         

   <NavCards/>

<AreaPiecards/>                
<AnalysisSection/>
<ActiveSection/>
                </div>
               
            </div>
            <Footer/>
           
            {/* <footer class="footer">
                ©2021 Jassa <span class="d-none d-sm-inline-block"> - Love <i class="mdi mdi-heart text-danger"></i> by Therichpost.com</span>.
            </footer> */}
        </div>
        
    </div>
   
       
   </div>
  );
  
}
}
export default App;