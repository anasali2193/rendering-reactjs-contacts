import React from 'react';

function ListContacts (props){
    const {contacts, onDeleteContact } = props
    return(
        <ol className='contact-list'>

        
            {contacts.map((contact)=>(
            <li key={contact.id} className='contact-list-item' >
                
                <div 
                className='contact-avatar'
                style={{
                    backgroundImage :`url(${contact.avatarURL})`
                }}
                 >
                </div>
                <div className ='contact-details'>
                    <p>{contact.name}</p>
                    <p>{contact.handle}</p>
                </div>
                <button
                onClick ={() => onDeleteContact(contact)}
                 className='contact-remove'>
                    button
                </button>
             </li>
            ))
            }
        </ol>
    );

}

export default ListContacts;