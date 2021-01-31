import React from "react";
import moment from "moment";

class AgentMessageRow extends React.Component {

  deleteMessage = (e) => {
    e.stopPropagation();
    const sure = window.confirm('Are you sure you want to delete this message?');
    if (sure) {
      const messageId = parseInt(e.currentTarget.getAttribute('data-id'));
      this.props.messageRemove(messageId);
    }
  }

  render() {
    const { message } = this.props;
    return (
      <div className="row">
        <div
          className={`col-12 p-2${message.markRead ? '' : ' message-new'}`} role="button" aria-expanded="false"
          data-bs-toggle="collapse" data-bs-target={`#message-${message.id}`} aria-controls={`message-${message.id}`}
          onClick={() => this.props.markRead(message)}
        >
          <div className="row align-items-start">
            <div className="col-3">{moment(message.createdAt).format('DD/MM/YYYY HH:mm')}</div>
            <div className="col-3">{message.name}</div>
            <div className="col-5">{message.subject}</div>
            <div className="col-1">
              <button
                type="button" className="btn btn-link text-danger me-3" data-id={message.id} onClick={this.deleteMessage}
                aria-label="delete message"
              >
                <i className="fas fa-trash-alt" aria-hidden={true}></i>
              </button>
            </div>
          </div>
        </div>
        <div id={`message-${message.id}`} className="col-12 collapse">
          <div className="card card-body">
            <p><strong>Email: </strong> {message.email}</p>
            <p><strong>Phone: </strong> {message.phone}</p>
            <p><strong>Message:</strong> {message.msg}</p>
          </div>
        </div>
      </div>

      // <tr className={`align-middle${!message.markRead ? ' message-new' : ''}`}>
      //   <td>{moment(message.createdAt).format('DD/MM/YYYY HH:mm')}</td>
      //   <td>{message.name}</td>
      //   <td>{message.subject}</td>
      //   <td>
      //     <button
      //       type="button" className="btn btn-link text-success me-3" data-bs-toggle="modal" data-bs-target="#message-modal"
      //       onClick={() => this.props.openModal(message)}
      //     >
      //       <i className="fas fa-edit" aria-hidden={true}></i> Read
      //     </button>
      //   </td>
      //   {/*<td>*/}
      //   {/*  <span role="button"*/}
      //   {/*        className={`deal-status-cell ${house.closedAt ? 'text-success' : 'text-danger'}`}*/}
      //   {/*        onClick={() => this.props.toggleDeal(house.id)}*/}
      //   {/*  >*/}
      //   {/*    {*/}
      //   {/*      house.closedAt ?*/}
      //   {/*        <i className="fas fa-thumbs-up" aria-hidden={true}></i> :*/}
      //   {/*        <i className="fas fa-thumbs-down" aria-hidden={true}></i>*/}
      //   {/*    }*/}
      //   {/*  </span>*/}
      //   {/*</td>*/}
      //   <td>
      //     {/*<button*/}
      //     {/*  type="button" className="btn btn-link text-primary me-3" data-bs-toggle="modal" data-bs-target="#message-forward-modal"*/}
      //     {/*  onClick={() => this.props.openModal(message)}*/}
      //     {/*>*/}
      //     {/*  <i className="fas fa-edit" aria-hidden={true}></i> Forward*/}
      //     {/*</button>*/}
      //     <button
      //       type="button" className="btn btn-link text-danger me-3" onClick={() => this.props.messageRemove(message.id)}
      //     >
      //       <i className="fas fa-trash-alt" aria-hidden={true}></i> Delete
      //     </button>
      //   </td>
      // </tr>
    );
  }
}

export default AgentMessageRow;