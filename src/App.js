import React from "react";
import "./App.css";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  const author = faker.name.findName;
  const text = faker.lorem.text;
  const image = faker.image.avatar;
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h1>Are you sure?</h1>
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author={author()} content={text()} imageUrl={image()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Tom" content={text()} imageUrl={image()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Jack" content={text()} imageUrl={image()} />
      </ApprovalCard>
    </div>
  );
};

export default App;
