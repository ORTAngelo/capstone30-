+----------------+    1. User Browses/Requests Data    +---------------+ 
|   Frontend     |  ---------------------------------> |   Backend     | 
|   (React.js)   |                                   | (Node.js API) | 
|                |  2. User Views Products/Orders    |               | 
+----------------+  <--------------------------------- |               | 
       |               3. Updates Profile             |               |  
       |                                               +---------------+ 
       |  4. Frontend Makes API Requests                      |
       |  <--------------------------------------------+-------+ 
       |                                                  |
+---------------+    5. Database Interaction            |
|   Database    |  <-----------------------------------+
| (SQL/NoSQL)   |
|               |
+---------------+
