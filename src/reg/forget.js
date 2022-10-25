import React,{useState} from 'react';

const Forget = () => {
  const [formdata,setformdata]=useState({
   email:""
   
  })

const HandelSumbit=(e)=>{
  
  e.preventDefault();

  console.log(formdata);
}

    return (
        <>
           
<div class="container">
    <div class="row">
        <div class="row">
            <div class="col-md-4 col-md-offset-4">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div class="text-center">
                          <h3><i class="fa fa-lock fa-4x"></i></h3>
                          <h2 class="text-center">Forgot Password?</h2>
                          <p>You can reset your password here.</p>
                            <div class="panel-body">
                              
                              <form class="form" onSubmit={(e)=>HandelSumbit(e)}>
                                
                                  <div class="form-group">
                                    <div class="input-group">
                                      <span class="input-group-addon"><i class="glyphicon glyphicon-envelope color-blue"></i></span>
                                      
                                      <input id="emailInput" placeholder="email address" type="email"   name="email"
                  value={formdata.email}
                  onChange={(e)=>setformdata({...formdata,email:e.target.value})} />
                                    </div>
                                  </div>
                                 <br></br>
                                 <br/>
                                  <div >
                                    <input class="btn btn-lg btn-primary btn-block" value="Send My Password" type="submit" />
                                  </div>
                             
                              </form>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    );
}

export default Forget;
