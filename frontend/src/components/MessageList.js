import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_MESSAGES = gql`
  {
    messages {
      _id
      title
      content
      author
    }
  }
`;
const MessageList = () => {
  const { loading, error, data } = useQuery(GET_MESSAGES);
  if (loading) return <p>Loading Messages...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        {" "}
        {/* To center the content*/}
        {data.messages.map(({ _id, title, content, author }) => (
          <div key={_id} className="card m-2">
            <div className="card-body">
              <h4>{title}</h4>
              <p>{content}</p>
              <p>{author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageList;
