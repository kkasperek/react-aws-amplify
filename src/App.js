import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listNotes } from './graphql/queries';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';

const initialFormState = { name: '', description: '' };

const App = () => {
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchNotes(); // eslint-disable-line no-use-before-define
  }, []);

  // fetchNotes - This function uses the API class to send a query to the GraphQL API and retrieve a list of notes.
  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes });
    setNotes(apiData.data.listNotes.items);
  }

  // createNote - This function also uses the API class to send a mutation to the GraphQL API, the main difference is that in this function we are passing in the variables needed for a GraphQL mutation so that we can create a new note with the form data.
  async function createNote() {
    if (!formData.name || !formData.description) return;
    await API.graphql({ query: createNoteMutation, variables: { input: formData } });
    setNotes([...notes, formData]);
    setFormData(initialFormState);
  }

  // deleteNote - Like createNote, this function is sending a GraphQL mutation along with some variables, but instead of creating a note we are deleting a note.
  async function deleteNote(id) {
    console.log(id);
    const newNotesArray = notes.filter((note) => note.id !== id);
    setNotes(newNotesArray);
    await API.graphql({ query: deleteNoteMutation, variables: { input: { id } } });
  }
  console.log(notes);

  return (
    <div className="App">
      <h1>My Notes App</h1>
      <input
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Note name"
        value={formData.name}
      />
      <input
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        placeholder="Note description"
        value={formData.description}
      />
      <button type="button" onClick={createNote}>Create Note</button>
      <div style={{ marginBottom: 30 }}>
        {
          notes.map((note) => (
            <div key={note.id}>
              <h2>{note.name}</h2>
              <p>{note.description}</p>
              <button type="button" onClick={() => deleteNote(note.id)}>Delete note</button>
            </div>
          ))
        }
      </div>
      <AmplifySignOut />
    </div>
  );
};

export default withAuthenticator(App);
