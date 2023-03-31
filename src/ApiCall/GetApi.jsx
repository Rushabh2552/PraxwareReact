import React, { useEffect, useState } from "react";

function GetApi() {
  // const [post, setPost] = useState([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
  //     res.json().then((result) => {
  //       setPost(result);
  //     });
  //   });
  // }, [post]);

  // const [comments, setComments] = useState([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/comments").then((res) => {
  //     res.json().then((result) => {
  //       setComments(result);
  //     });
  //   });
  // }, [comments]);

  // const [albums, setAlbums] = useState([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/albums").then((res) => {
  //     res.json().then((result) => {
  //       setAlbums(result);
  //     });
  //   });
  // }, [albums]);

  // const [photos, setPhotos] = useState([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/photos").then((res) => {
  //     res.json().then((result) => {
  //       setPhotos(result);
  //     });
  //   });
  // }, [photos]);

  // const [prax, setPrax] = useState([]);
  // useEffect(() => {
  //   fetch("https://praxware.000webhostapp.com/showdata.php").then((res) => {
  //     console.log(res);
  //     res.json().then((result) => {
  //       setPrax(result);
  //     });
  //   });
  // }, [prax]);

  const [regi, setRegi] = useState([]);
  useEffect(() => {
    fetch("https://rushabhmodi25.000webhostapp.com/show.php").then((res) => {
      // console.log(res);
      res.json().then((result) => {
        setRegi(result);
      });
    });
  }, [regi]);

  return (
    <div>
      {/* <h1>Posts Table</h1>
      <table border="1">
        <thead>
          <th>UserId</th>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
        </thead>
        <tbody>
          {post.map((val) => {
            return (
              <tr key={val.id}>
                <td>{val.userId}</td>
                <td>{val.id}</td>
                <td>{val.title}</td>
                <td>{val.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h1>Comments Table</h1>
      <table border="1">
        <thead>
          <th>PostId</th>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Body</th>
        </thead>
        <tbody>
          {comments.map((val) => {
            return (
              <tr key={val.id}>
                <td>{val.postId}</td>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h1>Email Table</h1>
      <table border="1">
        <thead>
          <th>UserId</th>
          <th>Id</th>
          <th>Title</th>
        </thead>
        <tbody>
          {albums.map((val) => {
            return (
              <tr key={val.id}>
                <td>{val.userId}</td>
                <td>{val.id}</td>
                <td>{val.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h1>Photos Table</h1>
      <table border="1">
        <thead>
          <th>AlbumId</th>
          <th>Id</th>
          <th>Title</th>
          <th>Url</th>
          <th>Thumbnail Url</th>
        </thead>
        <tbody>
          {photos.map((val) => {
            return (
              <tr key={val.id}>
                <td>{val.albumId}</td>
                <td>{val.id}</td>
                <td>{val.title}</td>
                <td>{val.url}</td>
                <td>
                  <img src={val.thumbnailUrl} alt="ThumbnailUrl" />
                </td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h1>Task Table</h1>
      <table border="1">
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Username</th>
          <th>password</th>
          <th>Mobile</th>
          <th>Image</th>
        </thead>
        <tbody>
          {prax.map((val) => {
            return (
              <tr key={val.id}>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.username}</td>
                <td>{val.password}</td>
                <td>{val.mobile}</td>
                <td>
                  <img src={val.img} alt="Gif" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table> */}

      <h1>Registration Details</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>password</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {regi.map((val) => {
            return (
              <tr key={val.id}>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.password}</td>
                <td>
                  <img src={val.image} alt="" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default GetApi;
