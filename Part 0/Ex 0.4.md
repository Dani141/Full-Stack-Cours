```mermaid
sequenceDiagram 
participant browser 
participant server 

browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note 
activate server 
browser-->>server: {"note": "Full Stack"}  
server->>server: Insert the note into the database
server->>server: Get all notes from the database
server-->>browser: [{"notes": [..., "Full Stack"]}] 
deactivate server 
 
browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css 
activate server 
server-->>browser: Contents of main.css 
deactivate server 
