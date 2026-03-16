var posts=["posts/18155/","posts/18155/","posts/16107/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };