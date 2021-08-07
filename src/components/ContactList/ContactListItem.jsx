import "./ContactList.css";


const ContactListItem = ({ id, name, number, onDeleteContact }) => (
  <li className="list-item">
    <span className="list-name">{name} </span>
    <span className="list-number">{number} </span>
    <button
      type="button"
      className="button"
      onClick={() => onDeleteContact(id)}
    >
      Delete
    </button>
  </li>
);


export default ContactListItem;
