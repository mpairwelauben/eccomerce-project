import React from 'react'

const One = () => {
    return (
        
        <div className="card y mt-4">
            <h4>For any inquiries and questions regarding the websiste ,please comment in the bot provided below</h4>
            <section className="card-body">

<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Open</button>
<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title text-center" id="exampleModalLabel">New message</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <form>
          <div className="form-group">
            <label for="message-text" className="col-form-label">Message:</label>
            <textarea className="form-control" id="message-text" placeholder="place your message here"></textarea>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div>
</section>

<section>
        </section>
        </div>
    )
}

export default One
