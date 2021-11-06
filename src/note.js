import React from 'react'


const Note = () => {
    return (
        <div id="accordion">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h5 className="mb-0">
              <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
             Choose payment method
              </button>
            </h5>
          </div>
      
          <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
            <div className="card-body">
              <section>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">mobile money</button>
            <button type="link link-disabled" className="btn btn-warning" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">credit card</button>
            
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Input credentials</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="form-group">
                        <label for="user name" >User name</label>
                        <input type="text" className="form-control" id="recipient-name"/>
                      </div>
                      <div className="form-group">
                        <label for="message-text" className="col-form-label">password:</label>
                        <textarea className="form-control" id="message-text"></textarea>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-primary">submit</button>
                  </div>
                </div>
              </div>
            </div>
            </section>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo">
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
               Personal information
              </button>
            </h5>
          </div>
          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
            <form className="form-inline my-2 my-lg-0 m-2">
              <input className="form-control mr-sm-2" type="text" placeholder="first name" aria-label="first name"/>
              <input className="form-control mr-sm-2" type="text" placeholder="last name" aria-label="last name"/>
              <input className="form-control mr-sm-2" type="number" placeholder="telephone number" aria-label="telephone number"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingThree">
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Confirm
              </button>
            </h5>
          </div>
          <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
            <form className="form-inline my-2 my-lg-0 m-2">
              <label htmlFor="no">no</label>&nbsp; &nbsp;
              <input className="form-control mr-sm-2" type="checkbox" name="yes"/>
              <label htmlFor="yes"> yes</label>
              <input className="form-control mr-sm-2 " type="checkbox" name="yes"/>
             <textarea className="form-control mr-sm-2"></textarea>
            </form>
            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Confirm
            </button>
          </div>
        </div>
      </div>
      
    )
}

export default Note
