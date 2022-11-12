# Nextjs Notes app

This is a web based Notes app which I am using to learn Nextjs. The notes are displayed in a way which makes them look like post-its.

### The tools used:
- Nextjs 13
- React
- PocketBase 
- Typescript
---

### To run yourself:
1. Start the database
    `./pocketbase serve --http="your.0.0.ip:8090` replacing `your..0.0.ip:8090` with where you want to serve it to
2. Tell it to Next in `/app/notes/page.tsx`by replacing route in the variable db
    ```ts
   export const db = {
	    route: 'http://your.0.0.ip:8090',
	    collectionName: 'notes1'
    }; 
   ```
3. Run the Next app using `npm run dev`

#### Possible problems:
- The pocketbase executable is a linux executable. To run on Windows or Mac download the right executable [here](https://pocketbase.io/docs/)
- 