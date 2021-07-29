import React from "react";
import "../style.scss";

type MyProps = {
  name: string;
  userName: string;
  email: string;
  id: number;
};

function getRandomPic() {
  const random =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
  const link = `https://avatars.dicebear.com/api/avataaars/${random}.svg`;
  return link;
}

class Card extends React.Component<MyProps> {
  render(): JSX.Element {
    return (
      <div className="one-card-wrapper">
        <img alt="image" src={getRandomPic()} />
        <div className='user-info-under-pic'>
          <p>name:</p>
          <h2>{this.props.name}</h2>
          <p>nickname:</p>
          <h2>{this.props.userName}</h2>
          <p>email:</p>
          <h2>{this.props.email}</h2>
        </div>
      </div>
    );
  }
}

export default Card;
