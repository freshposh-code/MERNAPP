import React from "react";

const post = () => {
  return (
    <div>
      <div className="entry">
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
            alt=""
          />
        </div>
        <div className="texts">
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            blanditiis vero officia illo sequi quidem?
          </h2>
          <p className="info">
            <span className="author">fresh posh</span>
            <time>2023-01-06 20:54</time>
          </p>
          <p className="summary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem iste
            officia numquam sunt sequi nulla molestiae reiciendis et in dicta
            blanditiis qui repellendus impedit similique, alias dolor
            repudiandae aut voluptate?
          </p>
        </div>
      </div>
    </div>
  );
};

export default post;
