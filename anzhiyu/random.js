var posts=["2025/05/27/hello-world/","2025/06/04/Angular/","2025/06/04/Spring/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };