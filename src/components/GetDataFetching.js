// JavaScript Code
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GetDataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        console.log(res);
        setPost(res.data);
        setError(null); 
    })
    .catch(err => {
        console.log(err);
        setError(err); 
    });
    console.log("Heloo")
  }, [id]);

  return (
    <div>
      <input type='text' value={id} onChange={e => setId(e.target.value)} />
      {error && (
      <>  
            <p><b>CODE ERROR:</b> {error.code}</p>
            <p><b>NAME ERROR:</b> {error.name}</p>
            <p><b>MESSAGE ERROR:</b> {error.message}</p>
            <p><b>URL ERROR:</b> {error?.config?.url}</p> 
      </>
      )}
      <h3>Title:</h3>
      <h4>{post.title}</h4>
      <h3>Body:</h3>
      <p>{post.body}</p>
    </div>
  );
}
export default GetDataFetching;









// TypeScript Code
// import React, { useEffect, useState } from 'react';
// import axios, { AxiosError, AxiosResponse } from 'axios';

// interface Post {
//   title: string;
//   body: string;
// }

// function GetDataFetching() {
//   const [post, setPost] = useState<Post>({ title: '', body: '' });
//   const [id, setId] = useState<number>(1);
//   const [error, setError] = useState<AxiosError | null>(null);

//   useEffect(() => {
//     axios
//       .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//       .then((res: AxiosResponse<Post>) => {
//         console.log(res);
//         setPost(res.data);
//         setError(null);
//       })
//       .catch((err: AxiosError) => {
//         console.log(err);
//         setError(err);
//       });
//     console.log("Heloo");
//   }, [id]);

//   return (
//     <div>
//       <input type='text' value={id} onChange={e => setId(Number(e.target.value))} />
//       {error && (
//         <>
//           <p><b>CODE ERROR:</b> {error.code}</p>
//           <p><b>NAME ERROR:</b> {error.name}</p>
//           <p><b>MESSAGE ERROR:</b> {error.message}</p>
//           <p><b>URL ERROR:</b> {error?.config?.url}</p>
//         </>
//       )}
//       <h3>Title:</h3>
//       <h4>{post.title}</h4>
//       <h3>Body:</h3>
//       <p>{post.body}</p>
//     </div>
//   );
// }

// export default GetDataFetching;




