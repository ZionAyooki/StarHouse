import React from "react";
import moment from "moment";
import AgentMessageRow from "../../agents/AgentMessageRow";

class AgentMessagesPage extends React.Component {
  constructor(props) {
    super(props);

    this.modalCloseBtn = React.createRef();

    this.state = {
      myMessages: this.props.allMessages.filter((message) => {
        return message.agentId === this.props.activeUser.id;
      }),
      forwardMessage: null,
      forwardMessageId: 0,
      isShowModal: false
    };
  }
//   houseEdit = (houseObj) => {
//     this.setState((prevState) => {
//       const filteredHouses = prevState.myHouses.map((house) => {
//         if (house.id === houseObj.id) { return houseObj; }
//         return house;
//       });
//       return {
//         myHouses: filteredHouses,
//         editHouse: null
//       };
//     });
//     this.props.houseEdit(houseObj.id, houseObj);
//     this.modalCloseBtn.current.click();
//   }
  messageForward = (messageId, agentId) => {
    messageId = parseInt(messageId);
    agentId = parseInt(agentId);
    this.setState((prevState) => {
      const newAllMessages = prevState.allMessages.map((message) => {
        if (message.id === messageId) { return { ...message, agentId: agentId }; }
        return message;
      });
      return {
        myMessages: newAllMessages.filter((message) => {
          return message.agentId === this.props.activeUser.id;
        })
      };
    });
    this.props.messageForward(messageId, agentId);
  }

  markRead = (messageObj) => {
    if (!messageObj.markRead) {
      const messageId = messageObj.id;
      this.setState((prevState) => {
        const newAllMessages = prevState.myMessages.map((message) => {
          if (message.id === messageId) { return { ...message, markRead: true }; }
          return message;
        });
        return {
          myMessages: newAllMessages
        };
      });
      this.props.toggleRead(messageId);
    }
  }

  messageRemove = (messageId) => {
    messageId = parseInt(messageId);
    this.setState((prevState) => ({
      myMessages: prevState.myMessages.filter((message) => {
        return messageId !== message.id
      })
    }));
    this.props.messageRemove(messageId);
  }

  getMessage = (messageId) => {
    messageId = parseInt(messageId);
    return this.state.allMessages.find(message => message.id === messageId);
  }

  openModal = (messageObj) => {
    this.setState(() => ({
      forwardMessage: messageObj,
      forwardMessageId: this.props.getNewId('random'),
      isShowModal: true
    }));
  }
  closeModal = () => {
    this.setState(() => ({
      forwardMessage: null,
      forwardMessageId: 0,
      isShowModal: false
    }));
  }

  render() {
    const myMessages = this.state.myMessages.sort((a,b) => {
      return moment(a.createdAt).isBefore(moment(b.createdAt)) ? 1 : -1;
    }).map((message) => {
      return (
        <AgentMessageRow
          key={message.id} message={message} messageForward={this.messageForward}
          markRead={this.markRead} messageRemove={this.messageRemove}
          openModal={this.openModal}
        />
      );
    });
    return (
      <main>
        <section className="section">
          <div className="container">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h1>My Messages</h1>
            </div>
            <div className="row message-new">
              <div className="col-3">Date</div>
              <div className="col-3">From</div>
              <div className="col-5">Subject</div>
              <div className="col-1">Delete</div>
            </div>
            {myMessages}
          </div>
        </section>

        {/*<div className={`modal fade ${this.state.isShowModal ? 'show' : ''}`} id="message-modal" tabIndex="-1" aria-labelledby="message-modal-label" aria-hidden={!this.state.isShowModal}>*/}
        {/*  <div className="modal-dialog">*/}
        {/*    <div className="modal-content">*/}
        {/*      <div className="modal-header">*/}
        {/*        <h5 className="modal-title" id="message-modal-label">{this.state.forwardMessage ? this.state.forwardMessage.subject : ''}</h5>*/}
        {/*        <button*/}
        {/*          ref={this.modalCloseBtn} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"*/}
        {/*          onClick={this.closeModal}*/}
        {/*        ></button>*/}
        {/*      </div>*/}
        {/*      <div className="modal-body">*/}
        {/*        <p>{this.state.forwardMessage ? this.state.forwardMessage.name : ''}</p>*/}
        {/*        <p>{this.state.forwardMessage.email}</p>*/}
        {/*        <p>{this.state.forwardMessage.phone}</p>*/}
        {/*        <p>{this.state.forwardMessage.message}</p>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </main>

    );
  }
}

export default AgentMessagesPage;

// class AgentPropertiesPage extends React.Component {

//   render() {
//     return (
//       <main>
//         <section className="section">
//           <div className="container">
//             <div className="d-flex align-items-center justify-content-between mb-3">
//               <h1>My properties</h1>
//               <button
//                 type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#house-modal"
//                 onClick={() => this.openModal(null)}
//               >
//                 Add new property
//               </button>
//             </div>
//             <div className="row">
//               <div className="col-12">
//                 <table className="table table-responsive table-striped text-center">
//                   <thead>
//                     <tr>
//                       <th>Address</th>
//                       <th>Type</th>
//                       <th>Deal</th>
//                       <th>Rooms</th>
//                       <th>Floor</th>
//                       <th>Price</th>
//                       <th>Closed</th>
//                       <th>Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody className="align-middle">
//                     {myHouses}
//                   </tbody>
//                 </table>
//               </div>
//               {/*<div className="col-12">*/}
//               {/*  <nav aria-label="Page navigation example">*/}
//               {/*    <ul className="pagination justify-content-center">*/}
//               {/*      <li className="page-item disabled">*/}
//               {/*        <a className="page-link" href="/" tabIndex="-1" aria-disabled="true">Previous</a>*/}
//               {/*      </li>*/}
//               {/*      <li className="page-item"><a className="page-link" href="/">1</a></li>*/}
//               {/*      <li className="page-item"><a className="page-link" href="/">2</a></li>*/}
//               {/*      <li className="page-item"><a className="page-link" href="/">3</a></li>*/}
//               {/*      <li className="page-item">*/}
//               {/*        <a className="page-link" href="/">Next</a>*/}
//               {/*      </li>*/}
//               {/*    </ul>*/}
//               {/*  </nav>*/}
//               {/*</div>*/}
//             </div>
//           </div>
//         </section>
//
//         <div className={`modal fade ${this.state.isShowModal ? 'show' : ''}`} id="house-modal" tabIndex="-1" aria-labelledby="house-modal-label" aria-hidden={!this.state.isShowModal}>
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title" id="house-modal-label">{this.state.editHouse ? 'Edit house' : 'New house'}</h5>
//                 <button
//                   ref={this.modalCloseBtn} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
//                   onClick={this.closeModal}
//                 ></button>
//               </div>
//               <div className="modal-body">
//                 <NewHouseForm
//                   houseAdd={this.houseAdd} houseEdit={this.houseEdit} categories={this.props.categories}
//                   getCityById={this.props.getCityById} house={this.state.editHouse}
//                   key={this.state.editHouseId}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     );
//   }
// }
//
// export default AgentPropertiesPage;