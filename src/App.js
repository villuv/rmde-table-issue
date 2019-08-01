import React from 'react';
import RichMarkdownEditor from 'rich-markdown-editor';

function App() {
  return (
    <div style={{backgroundColor: '#eee', padding: '50pt', height: '100vh'}}>
      <div style={{border: '1px solid black'}}>
      <RichMarkdownEditor
        style={{height: '100%'}}
        readOnly={false}
        id='example'
        defaultValue={''}
        onShowToast={message => window.alert(message)}
        placeholder='placeholder'
      />
      </div>
    </div>
  );
}

export default App;
