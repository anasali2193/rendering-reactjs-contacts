import React from 'react';

class ListContacts extends React.Component{
    state={
        query : ''
    }

    clearQeuer = ()=> {
        this.updateState('')

    }
    updateState = (query) =>{
        this.setState(()=>({
            query : query.trim()
        }))
    }

    render(){
    const {contacts, onDeleteContact } = this.props
    const Showingcontacts = this.state.query === '' 
    ? contacts 
    : contacts.filter((q)=>(
        q.name.toLowerCase().includes(this.state.query.toLowerCase())
    ))
    return(
        <div className='list-contacts'>

        <div className = 'list-contacts-top'>
            <input
                className='search-contacts'
                type ='text'
                placeholder ='Search Contacts'
                value={this.state.query}
                onChange = {(event)=> this.updateState(event.target.value)}
            />


        </div>

        {Showingcontacts.length !== contacts.length && (
            <div className= 'showing-contacts'>
              <span>Now showing {Showingcontacts.length} of 
              {contacts.length}</span>
              <button onClick={this.clearQeuer}>Show all</button>
            </div>
        )}
        <ol className='contact-list'>

        
            {Showingcontacts.map((contact)=>(
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
        </div>
    );
}
}

export default ListContacts;